"use strict";

const mongoose = require("mongoose");

const connectString = (connectString = "mongodb://localhost:27017/shopDEV");
mongoose
    .connect(connectString)
    .then((_) => console.log("Connected MongoDB Success"))
    .catch((err) => console.log("Error Connect!"));

// dev

if (1 === 0) {
    mongoose.set("debug", true);
    mongoose.set("debug", { color: true });
}

module.exports = mongoose;

// Singleton Design Pattern
