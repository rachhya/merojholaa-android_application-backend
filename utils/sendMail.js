const nodemailer = require("nodemailer");
const sendMail = async (option) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST || "smtp.gmail.com",
    port: process.env.SMPT_PORT || 465,
    service: process.env.SMPT_SERVICE || "gmail",
    auth: {
      user:
        process.env.SMPT_EMAIL_ADDRESS ||
        "thisisbusinessemail4testing@gmail.com",
      pass: process.env.SMPT_PASSWORD || "4Testing@localhost",
    },
  });

  const mailOption = {
    from: process.env.SMPT_EMAIL_ADDRESS,
    to: option.email,
    subject: option.subject,
    html: option.message,
  };

  await transporter.sendMail(mailOption);
};
module.exports = sendMail;
