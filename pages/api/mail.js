import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { fullName, Email, Message, PhoneNumber } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: Email,
      to: "josh@seoforhire.co",
      subject: `Contact form submission from ${fullName}`,
      html: `<p>You have a new contact form submission</p><br>
       <p><strong>Name: </strong> ${fullName} </p><br>
       <p><strong>Phone: </strong> ${PhoneNumber} </p><br>
       <p><strong>Message: </strong> ${Message} </p><br>

       `,
    });

    console.log("Message Sent", emailRes.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
}
