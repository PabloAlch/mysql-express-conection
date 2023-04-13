require("dotenv").config();

const createError = require("http-errors");
const logger = require("morgan");

require("./config/db.config");


const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const routes = require("./config/routes.config");
app.use("/", routes);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});