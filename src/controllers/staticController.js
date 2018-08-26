module.exports = {
  index(req, res, next) {
    // pass optional variable title to use as ejs tag for the index view
    res.render("static/index", { title: "Portfolio" });
  },
}
