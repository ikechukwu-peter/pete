// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const sendEmail = async (options: any) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  return resend.emails.send({
    from: (process.env.EMAIL_FROM as string) || "",
    to: process.env.EMAIL_TO as string,
    subject: options.subject,
    text: options.text,
    html: options.html,
  });
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
    const response = await sendEmail({ subject, text, html });

    console.log({ response });
    return res.status(200).json({
      success: `Email sent successfully`,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      error: "Error sending mail",
    });
  }
};
export default handler;
