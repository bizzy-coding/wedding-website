import { useState } from 'react'
import './Faqs.css'

const faqs = [
  {
    q: 'What should I wear?',
    a: 'Formal wedding attire.',
  },
  {
    q: 'Can I bring a plus one?',
    a: 'Your invite will state if you have a plus one.',
  },
  {
    q: 'Are children invited?',
    a: "As much as we love your little ones, we've decided to keep this a grown-ups-only celebration. We're planning a proper party, so consider this your official excuse to let your hair down, stay out late, and enjoy a child-free night with us!",
  },
  {
    q: 'What about confetti?',
    a: 'If you are bringing confetti please ensure it is petals, leaves or dried flowers.',
  },
  {
    q: 'Is the bar cash or card?',
    a: 'The bar runs a card only bar so cash will not be accepted on the day.',
  },
  {
    q: 'Who do I contact on the day?',
    a: 'Bizz, Faye, Ben or Fran.',
  },
]

export default function Faqs() {
  const [open, setOpen] = useState(null)

  return (
    <div className="section-wrap section-wrap--alt" id="faqs">
      <section className="section">
        <p className="section-title">FAQs</p>
        <h2 className="section-heading">Questions & Answers</h2>
        <div className="faqs__list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faqs__item ${open === i ? 'faqs__item--open' : ''}`}
            >
              <button
                className="faqs__question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d={open === i ? 'M5 12l5-5 5 5' : 'M5 8l5 5 5-5'} />
                </svg>
              </button>
              {open === i && (
                <div className="faqs__answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
