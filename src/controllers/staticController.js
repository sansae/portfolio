const sgMail = require('@sendgrid/mail');

module.exports = {
  index(req, res, next) {
    // pass optional variable title to use as ejs tag for the index view
    res.render("static/index", { title: "Portfolio" });
  },

  sendEmail(req, res, next) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

    const msg = {
      from: req.body.email,
      to: process.env.USER_EMAIL,
      subject: req.body.subject,
      html: output
    };

    sgMail.send(msg, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("SendGrid Sent Your Message Successfully!");
      }
    });

    req.flash("notice", "Thanks! I'll reply soon!");
    res.render("static/index");
  },//end sendMail
}
