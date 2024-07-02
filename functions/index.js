

const {onRequest} = require("firebase-functions/v2/https");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require('express-rate-limit');
const middleware = require("./middleware");
const apiRoutes = require("./routes");



const app = express();

// Adding Middlewares 
app.use(
  bodyParser.urlencoded({
      extended: true,
      limit: "100mb"
  })
);
app.use(bodyParser.json());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // Limit each IP to 100 requests per `window` 
  message: "Too many requests from this IP, please try again after 10 minutes."
});

middleware.setHeaders(app);
app.use(helmet());
app.use(limiter)

app.use(cors());

app.use("/v1", apiRoutes)

// * Deploy the API Functions
exports.api = onRequest(app);
