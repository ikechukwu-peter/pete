// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail, { MailDataRequired } from "@sendgrid/mail";
type ReqData = {
  subject?: string;
  text?: string;
  html?: string;
};

const sendEmail = async (options: ReqData) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
  const msg: MailDataRequired = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM || "",
    subject: options.subject,
    text: options.text,
    html: options.html,
  };
  await sgMail.send(msg);
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, subject, message } = req.body;
  const dataVal = req.body;
  console.log(dataVal);
  const text = `${message}`;
  const html = `       
  <body>
      <div>
          <h2>
              ${name}
          </h2>
          <a class="email" href="mailto:${email}" target="_blank"
          style="text-decoration: none">
              ${email}
          </a>
          <p class="message">
             ${message}
          </p>
      </div>
  </body>
  `;
  try {
    await sendEmail({ subject, text, html });
    res.status(200).json({
      success: `Email sent successfully`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Error sending mail",
    });
  }
};
export default handler;
