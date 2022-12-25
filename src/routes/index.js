const kqxsRoutes = require("./kqxsRoutes");
function initWebRoutes(app) {
  app.use("/v1/kqxs", kqxsRoutes);
}
module.exports = initWebRoutes;
