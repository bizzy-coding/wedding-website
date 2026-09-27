/**
 * Enter moves to the next text field instead of submitting the form.
 *
 * Only the name and email fields are required, so once those were filled any
 * Enter press sent the RSVP. On a phone the keyboard shows "Go" for a field in
 * a submittable form, and guests were tapping it expecting "next" — sending a
 * half-finished RSVP with no phone number or dietary requirements. Sending is
 * now only ever the Send button.
 */
const TEXT_TYPES = ['text', 'email', 'tel']

function isTextField(el) {
  return el.tagName === 'INPUT' && TEXT_TYPES.includes(el.type)
}

export default function advanceOnEnter(e) {
  if (e.key !== 'Enter' || !isTextField(e.target)) return

  e.preventDefault()

  // Read the fields at event time: the "please specify" box only exists while
  // the Other dietary option is ticked.
  const fields = [...e.currentTarget.querySelectorAll('input')].filter(isTextField)
  const next = fields[fields.indexOf(e.target) + 1]

  if (next) next.focus()
  else e.target.blur()
}
