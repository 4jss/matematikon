const express = require("express");
const config = require("config");
const ejs = require("ejs");
const app = express();

app.use("/", require("./router/main"));

app.listen(config.get("port"), config.get("hostname"), () => {
    console.log(`server posloucha na ${config.get("hostname")}:${config.get("port")}`);
});