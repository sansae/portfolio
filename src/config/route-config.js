// this module initializes all our routes
module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    app.use(staticRoutes);
  }
}
