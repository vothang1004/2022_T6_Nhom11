const kqxsRoutes = require("./kqxsRoutes");
const dateRoutes = require("./dateRoutes");
const provinceRoute = require("./provinceRoutes");
const awardRoute = require("./awardRoutes");
function initWebRoutes(app) {
  app.use("/v1/kqxs", kqxsRoutes);
  app.use("/v1/date", dateRoutes);
  app.use("/v1/province", provinceRoute);
  app.use("/v1/award", awardRoute);
}
module.exports = initWebRoutes;