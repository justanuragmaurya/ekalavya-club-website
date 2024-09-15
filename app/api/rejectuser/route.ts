import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const client = new PrismaClient();

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

  try {
    // Send rejection email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: user.email,
      subject: "Application Status for Eklavya",
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #1a1208; color: #e0cc92; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #150f00; padding: 20px; border-radius: 10px;">
              <h1 style="color: #8d6531; text-align: center;">Eklavya Application Status</h1>
              <p>Dear ${user.name},</p>
              <p>Thank you for your interest in joining Eklavya. After careful consideration, we regret to inform you that we are unable to accept your application at this time.</p>
              <p>We appreciate your enthusiasm and encourage you to apply again in the future.</p>
              <p>Best regards,<br>The Eklavya Team</p>
            </div>
          </body>
        </html>
      `
    });

    // Delete user from database
    await client.user.delete({
      where: { email: user.email }
    });

    return NextResponse.json({ success: true, message: "User rejected and deleted successfully" });
  } catch (error) {
    console.error("Error rejecting user:", error);
    return NextResponse.json({ error: "Failed to reject user" }, { status: 500 });
  }
}