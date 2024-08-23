const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

//transporter
const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);
const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    //validtion
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    //email matter
    transporter.sendMail({
      to: "jitendralawaniya18@gmail.com",
      from: "jitendralawaniya18@gmail.com",
      subject: "Regarding My Portfolio App",
      html: `<h5>Detail Information</h5>
      <ul>
      <li><p>Name : ${name}</p></li>
      <li><p>Name : ${email}</p></li>
      <li><p>Name : ${msg}</p></li>
      </ul>
      `,
    });
    return res.status(200).send({
      success: true,
      message: "Your message send Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email Api Error",
      error,
    });
  }
};
module.exports = { sendEmailController };
