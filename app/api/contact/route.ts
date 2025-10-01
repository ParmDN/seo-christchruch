import { NextResponse } from "next/server"

function esc(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: Request) {
  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const RESEND_FROM = process.env.RESEND_FROM || "Acme <onboarding@resend.dev>"
    const RESEND_TO = process.env.RESEND_TO || "info@seocompanychristchurch.co.nz"

    const { name, email, phone, topic, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Name, Email, and Message are required." }, { status: 400 })
    }

    const safeName = esc(name)
    const safeEmail = esc(email)
    const safePhone = phone ? esc(phone) : "N/A"
    const safeTopic = topic ? esc(topic) : "N/A"
    const safeMessage = esc(message)

    const phoneDial = phone ? `tel:${phone.replace(/[^+\d]/g, "")}` : ""
    const replySubject = `Re: Contact from ${name}`
    const replyBody = `Hi ${name},\n\nThanks for reaching out. I’ll get back to you shortly.`
    const replyMailto = `mailto:${email}?subject=${encodeURIComponent(replySubject)}&body=${encodeURIComponent(replyBody)}`

    // HTML email template
    const html = `
      <div style="display:none;opacity:0;color:transparent;height:0;overflow:hidden;">
        New contact form submission from ${safeName}
      </div>
      <h2>New Contact Form Message</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Phone:</strong> ${safePhone}</p>
      <p><strong>Topic:</strong> ${safeTopic}</p>
      <p><strong>Message:</strong><br>${safeMessage.replace(/\n/g, "<br>")}</p>
      <p><a href="${phoneDial}">Call</a> | <a href="${replyMailto}">Reply</a></p>
    `

    const text = `
New Contact Form Message
-----------------------
Name: ${safeName}
Email: ${safeEmail}
Phone: ${safePhone}
Topic: ${safeTopic}

Message:
${safeMessage}

Call: ${phone ? phoneDial : "N/A"}
Reply: ${replyMailto}
    `

    if (!RESEND_API_KEY) {
      // In dev, surface a clearer error. In prod, this will be a 500.
      return NextResponse.json(
        { message: "Email service not configured. Please set RESEND_API_KEY (and optionally RESEND_FROM, RESEND_TO)." },
        { status: 500 }
      )
    }

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [RESEND_TO],
        cc: ["web@digitalneighbour.co.nz"],
        subject: `New Contact Form Message from ${safeName}`,
        reply_to: email,
        html,
        text,
      }),
    })

    if (!resendRes.ok) {
      const errText = await resendRes.text().catch(() => "")
      console.error("Resend error:", errText)
      return NextResponse.json({ message: "Failed to send message." }, { status: 502 })
    }

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Contact route error:", (error as Error).message)
    return NextResponse.json({ message: "Failed to send message." }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 })
}
