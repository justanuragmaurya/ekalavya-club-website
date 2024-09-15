import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  const { user } = await req.json();

  if (!user || !user.email) {
    return NextResponse.json({ error: "Invalid user data" }, { status: 400 });
  }

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: user.email,
    subject: "Congratulations! You've been accepted to Eklavya",
    text: `Dear ${user.name}, You've been accepted to join Eklavya!`,
    html: `
      <html>
        <head>
          <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #1a1208;
            color: #e0cc92;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #150f00;
            padding: 20px;
            border-radius: 10px;
          }
          h1 {
            color: #8d6531;
            text-align: center;
          }
          .content {
            line-height: 1.6;
            color: #e0cc92;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #e0cc92;
            color: #1a1208;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
          }
        </style>
        </head>
        <body>
          <div class="container">
            <h1>Welcome to Eklavya!</h1>
            <div class="content">
              <p>Dear ${user.name},</p>
              <p>We are thrilled to inform you that you have been accepted to join Eklavya! Your passion and dedication have impressed us, and we believe you will be a valuable addition to our community.</p>
              <p>At Eklavya, we are dedicated to fostering learning, innovation, and collaboration. We look forward to seeing you at our upcoming events and workshops.</p>
              <p>Welcome aboard!</p>
              <p>Best regards,<br>The Eklavya Team</p>
              <a href="https://eklavya-lpu.vercel.app" class="button">Visit Our Website</a>
            </div>
          </div>
        </body>
      </html>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
