import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export const POST = async (req: Request) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAILGUN_EMAIL!,
      pass: process.env.MAILGUN_PASSWORD!,
    },
  });
  try {
    const request = await req.json();
    const { name, email, subject, message } = request;
    if (!name || !email || !subject || !message) {
      console.log(name, email, subject, message);
      return Response.json(
        { error: "Please fill in all fields" },
        { status: 400 }
      );
    }

    const mail = await transporter.sendMail({
      from: email,
      to: "muhamadalfinpratamaa@gmail.com",
      subject: subject,
      text: message,
    });

    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Error sending email" }, { status: 500 });
  }
};
