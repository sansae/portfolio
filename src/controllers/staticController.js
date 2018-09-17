const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const Oauth2 = google.auth.OAuth2;
const oauth2Client = new Oauth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  // redirect url
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN
});

const accessToken = oauth2Client.refreshAccessToken().then((res) => {
  res.credentials.access_token;
});

module.exports = {
  index(req, res, next) {
    // pass optional variable title to use as ejs tag for the index view
    res.render("static/index", { title: "Portfolio" });
  },

  sendEmail(req, res, next) {
    const output = `
      <p>You have a new message!</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Company: ${req.body.company}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
      </ul>
      <h3>Subject</h3>
      <p>${req.body.subject}</p>
      <h3>Message</h3>
      <p>${req.body.msg}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: 'smtp.gmail.com',
      // port 465 is for smtps, or simple mail transfer protocol that is secure
      port: 465,
      // true for 465, false for other ports
      secure: true,
      auth: {
        type: "OAuth2",
        user: process.env.USER_EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: req.body.email,
      to: process.env.USER_EMAIL,
      subject: req.body.subject,
      html: output
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      } else {
        console.log(info);
      }

      res.render("static/index");

      transporter.close();
    });
  },// end sendEmail
}
