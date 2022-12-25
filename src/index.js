const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");
const { connect } = require("./config/db");
const initWebRoutes = require("./routes");

config();

const app = express();
const PORT = process.env.PORT || 8081;
app.use(cors());
connect();
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
