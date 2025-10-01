"use client"
import { useState } from "react"

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return
    setStatus(null)
    setLoading(true)

    const form = e.currentTarget
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      topic: form.topic.value,
      message: form.message.value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await res.json().catch(() => ({ message: "Unexpected response" }))
      if (!res.ok) {
        setStatus(result?.message || "Failed to send message.")
        return
      }
      setStatus(result.message || "Message sent successfully!")
      form.reset()
    } catch (err) {
      console.error(err)
      setStatus("Failed to send message.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="pt-2 pb-5">
      <div className="container">
        <div className="row g-2 justify-content-center mb-3">
          <div className="col-12 text-center">
            <div className="subtitle id-color">Free Consultation</div>
            <h2 className="mb-2">Get In Touch With Us Today</h2>
            <p className="text-muted mb-0">Have a question, suggestion, or just want to say hi? We’re here and happy to hear from you!</p>
          </div>
        </div>
        <div className="row g-4 gx-5 align-items-start pt-3">
          {/* Left info card */}
          <div className="col-lg-5">
            <div className="contact-info-card pt-5 pb-5">
              <div className="info-item">
                <div className="info-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div>
                  <div className="fw-700">Office Location</div>
                  <div>Christchurch, Central City</div>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <div className="fw-700">Send a Message</div>
                  <div><a href="mailto:info@seocompanychristchurch.co.nz">info@seocompanychristchurch.co.nz</a></div>
                </div>
              </div>
              <div className="info-item mb-0">
                <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
                <div>
                  <div className="fw-700">Make a Phone Call</div>
                  <div><a href="tel:+64212124483">+64 21 212 4483</a></div>
                </div>
              </div>
            </div>
          </div>
          {/* Right form card */}
          <div className="col-lg-7">
            <div className="contact-form-card">
              <form id="contact_form" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control contact-input" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" name="email" className="form-control contact-input" placeholder="Your Email" required />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="phone" className="form-control contact-input" placeholder="Phone Number" />
                  </div>
                  <div className="col-md-6">
                    <select name="topic" className="form-select contact-input">
                      <option>Keyword Research</option>
                      <option>On-Page SEO</option>
                      <option>Off-Page SEO</option>
                      <option>Technical SEO</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea name="message" className="form-control contact-input" rows={5} placeholder="Message" required></textarea>
                  </div>
                  <div className="col-12 text-end">
                    <button type="submit" className="btn-main rounded-pill px-4" disabled={loading}>
                      <span>{loading ? "Sending..." : "Send Message"}</span>
                    </button>
                  </div>
                  {status && (
                    <div className="col-12">
                      <div className="alert alert-info" role="status">{status}</div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
