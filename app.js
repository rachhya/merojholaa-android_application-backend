const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { userRoutes, productRoutes } = require("./routes");
const errorMiddleware = require("./middlewares/errorMiddleware");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.use("/api/v1/ums", userRoutes);
app.use("/api/v1/pms", productRoutes);

app.use(errorMiddleware);

module.exports = app;
