/**
 * RSVP endpoint for the wedding site.
 *
 * SETUP
 * 1. Open the Google Sheet that collects RSVPs.
 * 2. Extensions -> Apps Script. Replace everything in Code.gs with this file.
 * 3. Deploy -> New deployment -> type "Web app".
 *      Execute as:       Me
 *      Who has access:   Anyone
 *    "Anyone" is required, as guests are not signed in to Google.
 * 4. Copy the /exec URL and check it matches GOOGLE_SCRIPT_URL in
 *    src/components/Rsvp.jsx and src/components/EveningRsvp.jsx.
 *
 * IMPORTANT: after ANY edit here you must Deploy -> Manage deployments ->
 * edit -> Version: New version. Saving alone does not update the live URL.
 *
 * Headers are written automatically on first run, so you do not need to
 * prepare the sheet. Existing sheets are upgraded in place: any missing
 * column is appended on the right and existing data is left untouched.
 */

var SHEETS = {
  day: 'Day Guests',
  evening: 'Evening Guests',
};

// Order here is the column order in the sheet.
var COLUMNS = {
  day: [
    ['timestamp', 'Timestamp'],
    ['guestType', 'Guest Type'],
    ['attending', 'Attending'],
    ['firstName', 'First Name'],
    ['lastName', 'Last Name'],
    ['email', 'Email'],
    ['phone', 'Phone'],
    ['dietary', 'Dietary Requirements'],
  ],
  evening: [
    ['timestamp', 'Timestamp'],
    ['guestType', 'Guest Type'],
    ['attending', 'Attending'],
    ['firstName', 'First Name'],
    ['lastName', 'Last Name'],
    ['email', 'Email'],
    ['phone', 'Phone'],
    ['dietary', 'Dietary Requirements'],
  ],
};

function doPost(e) {
  // One writer at a time, so two guests submitting together can't collide.
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    var data = parseBody(e);
    var guestType = data.guestType === 'evening' ? 'evening' : 'day';

    // A row with no name is almost certainly a bad request, not a guest.
    if (!data.firstName && !data.lastName) {
      return json({ status: 'error', message: 'Missing guest name' });
    }

    var sheet = getSheet(SHEETS[guestType], COLUMNS[guestType]);
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    data.timestamp = new Date();
    // Written into its own column as well as picking the sheet, so the two tabs
    // can be merged or filtered without losing which invitation it was.
    data.guestType = guestType === 'evening' ? 'Evening' : 'Day';
    // Older submissions predate the attending field; treat them as attending.
    if (!data.attending) data.attending = 'Yes';

    var byLabel = {};
    for (var i = 0; i < COLUMNS[guestType].length; i++) {
      byLabel[COLUMNS[guestType][i][1]] = COLUMNS[guestType][i][0];
    }

    // Build the row against the sheet's real headers, so manually reordered
    // or added columns still line up.
    var row = headers.map(function (header) {
      var key = byLabel[header];
      if (!key) return '';
      var value = data[key];
      return value === undefined || value === null ? '' : value;
    });

    sheet.appendRow(row);

    return json({ status: 'success', guestType: guestType });
  } catch (err) {
    // Surfaces in Apps Script -> Executions when a submission goes missing.
    console.error('RSVP failed: ' + err + ' | body: ' + rawBody(e));
    return json({ status: 'error', message: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/** Lets you confirm the deployment is live by opening the /exec URL. */
function doGet() {
  return json({ status: 'ok', message: 'RSVP endpoint is live' });
}

function parseBody(e) {
  var body = rawBody(e);
  if (body) {
    try {
      return JSON.parse(body);
    } catch (err) {
      // Fall through to form-encoded below.
    }
  }
  // Covers a future switch away from JSON (e.g. FormData posts).
  if (e && e.parameter && Object.keys(e.parameter).length) return e.parameter;
  throw new Error('Empty or unparseable request body');
}

function rawBody(e) {
  return e && e.postData && e.postData.contents ? e.postData.contents : '';
}

function getSheet(name, columns) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);

  if (!sheet) {
    sheet = ss.insertSheet(name);
  }

  var labels = columns.map(function (c) { return c[1]; });

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(labels);
    sheet.getRange(1, 1, 1, labels.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
    return sheet;
  }

  // Append any column this sheet doesn't have yet, preserving existing data.
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  labels.forEach(function (label) {
    if (headers.indexOf(label) === -1) {
      sheet.getRange(1, sheet.getLastColumn() + 1)
        .setValue(label)
        .setFontWeight('bold');
      headers.push(label);
    }
  });

  return sheet;
}

function json(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
