export const runtime = "edge";

export const POST = async (req: Request) => {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Please fill in all fields" },
        { status: 400 }
      );
    }

    const res = await fetch(
      `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${btoa(`api:${process.env.MAILGUN_PASSWORD}`)}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          from: process.env.MAILGUN_EMAIL!,
          to: "muhamadalfinpratamaa@gmail.com",
          subject,
          text: message,
        }),
      }
    );

    if (!res.ok) throw new Error("Failed to send email");

    return Response.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error sending email" }, { status: 500 });
  }
};
