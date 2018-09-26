module.exports = {
  validateUserInfo(req, res, next) {
    if (req.method === "POST") {
      console.log(req.body.name);
      req.checkBody("name", "cannot be empty").notEmpty();
      req.checkBody("email", "must be valid").isEmail();
      req.checkBody("message", "cannot be empty").notEmpty();
    }

    const errors = req.validationErrors();

    if (errors) {
      req.flash("error", errors);
      return res.redirect(req.headers.referer);
    } else {
      return next();
    }
  },
}
