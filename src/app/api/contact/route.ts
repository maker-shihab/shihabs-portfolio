import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Get email service from environment
    const emailService = process.env.EMAIL_SERVICE || "resend";
    const recipientEmail = process.env.CONTACT_EMAIL || "shihabud696@gmail.com";

    if (emailService === "resend") {
      // Using Resend API
      const resendApiKey = process.env.RESEND_API_KEY;

      if (!resendApiKey) {
        return NextResponse.json(
          { error: "Email service not configured" },
          { status: 500 }
        );
      }

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>", // Update with your verified domain
          to: recipientEmail,
          replyTo: email,
          subject: `Portfolio Contact: ${subject}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: 'Courier New', monospace; background: #0a0a0a; color: #00ff00; padding: 20px; }
                  .container { max-width: 600px; margin: 0 auto; background: #1a1a1a; border: 1px solid #00ff00; padding: 30px; }
                  .header { border-bottom: 1px solid #00ff00; padding-bottom: 20px; margin-bottom: 20px; }
                  .code-block { background: #0a0a0a; padding: 15px; border-left: 3px solid #00ff00; margin: 15px 0; }
                  .label { color: #00ff00; font-weight: bold; }
                  .value { color: #ffffff; margin-left: 10px; }
                  .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #00ff00; font-size: 12px; color: #888; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1 style="color: #00ff00; margin: 0;">📧 New Contact Form Submission</h1>
                    <p style="color: #888; margin: 5px 0 0 0;">Portfolio Contact Form</p>
                  </div>
                  
                  <div class="code-block">
                    <div style="margin-bottom: 10px;">
                      <span class="label">$ name:</span>
                      <span class="value">${name}</span>
                    </div>
                    <div style="margin-bottom: 10px;">
                      <span class="label">$ email:</span>
                      <span class="value">${email}</span>
                    </div>
                    <div style="margin-bottom: 10px;">
                      <span class="label">$ subject:</span>
                      <span class="value">${subject}</span>
                    </div>
                    <div>
                      <span class="label">$ message:</span>
                      <div class="value" style="margin-top: 10px; white-space: pre-wrap;">${message}</div>
                    </div>
                  </div>
                  
                  <div class="footer">
                    <p>Sent from: ${email}</p>
                    <p>Time: ${new Date().toLocaleString()}</p>
                  </div>
                </div>
              </body>
            </html>
          `,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to send email");
      }

      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } else {
      // Fallback: You can add other email services here
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
