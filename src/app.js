const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();

// init middleware
app.use(morgan("dev"));
// app.use(morgan("combined")); // production
// app.use(morgan("common"));
// app.use(morgan("short"));
// app.use(morgan("tiny"));

app.use(helmet());
app.use(compression());

// init db
// require("./dbs/init.mongodb.lv0");
require("./dbs/init.mongodb");
const { countConnect } = require("./helpers/check.connect");
countConnect();
// init routes
app.get("/", (req, res, next) => {
    const strCompress = "Hello Thang Tran";
    return res.status(200).json({
        message: "Welcome !",
        metadata: strCompress.repeat(10000),
    });
});

// handling error

module.exports = app;
