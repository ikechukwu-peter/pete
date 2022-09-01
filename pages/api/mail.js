import sgMail from "@sendgrid/mail";

const sendEmail = async (options) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };
  await sgMail.send(msg);
};

const handler = async (req, res) => {
  const { name, email, subject, message } = req.body;

  const text = `${message}`;
  const html = `       
  <body 
  >
      <div>
          <h2>
              ${name}
          </h2>
          <a class="email" href="mailto:${email}" target="_blank"
          style="text-decoration: none"
          >
              ${email}
          </a>
          <p class="message">
             ${message}
          </p>
      </div>
  
  </body>
  
  `;

  try {
    await sendEmail({
      subject,
      text,
      html,
    });

    res.status(200).json({ success: "Email sent successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Error sending email, try again..." });
  }
};

export default handler;
