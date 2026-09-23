import { useState } from 'react'
import type { FormEvent } from 'react'
import { images } from '../assets/images'
import './Contact.css'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const contactDetails: {
    icon: string
    title: string
    lines: { text: string; href?: string }[]
  }[] = [
    {
      icon: '📍',
      title: 'Visit Us',
      lines: [
        { text: 'Ambady MK' },
        { text: 'Tailormade Fashion Studio' },
        { text: 'Chittor Road, Pullepady Junction' },
        { text: 'Ernakulam, Kerala 682035' },
      ],
    },
    {
      icon: '📞',
      title: 'Call Us',
      lines: [
        { text: 'Phone: 0484 3144536', href: 'tel:+914843144536' },
        { text: 'Mobile: +91 94450 18153', href: 'tel:+919445018153' },
      ],
    },
    {
      icon: '✉',
      title: 'Email Us',
      lines: [{ text: 'ambady@tailor-made.com', href: 'mailto:ambady@tailor-made.com' }],
    },
    {
      icon: '🕒',
      title: 'Opening Hours',
      lines: [{ text: 'Mon – Sat: 10 am – 9 pm' }, { text: 'Sunday: 10 am – 1 pm' }],
    },
  ]

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="page-header-image">
          <img src={images.tailorShop} alt="Tailor shop" />
          <div className="page-header-overlay"></div>
        </div>
        <div className="container page-header-content">
          <span className="section-label">Get in Touch</span>
          <h1>Contact Us</h1>
          <p>Questions, fittings, or custom orders — we'd love to hear from you</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="section-label">Reach Us</span>
            <h2>We're Here to Help</h2>
            <div className="contact-cards">
              {contactDetails.map((item) => (
                <div key={item.title} className="contact-card">
                  <span className="contact-icon">{item.icon}</span>
                  <div>
                    <h3>{item.title}</h3>
                    {item.lines.map((line) => (
                      <p key={line.text}>
                        {line.href ? <a href={line.href}>{line.text}</a> : line.text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} required />
            </label>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {submitted && (
              <p className="form-success">
                Thank you! We'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
