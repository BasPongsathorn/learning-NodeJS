const express = require("express");
const chalk = require("chalk"); // เปลี่ยนสีตัวอักษร
const debug = require('debug')('app'); // เอาไว้ดู response ต่างๆที่เกิดบน Website
const morgan = require('morgan') // เช็ค log การใช้งาน
const app = express();
const port = 3000;

app.use(morgan("combined"))

app.get("/", (req,res) => {

    res.send("Hello Bas");

})

app.listen(port, () => {
    debug("Listen on port "+chalk.red(": ",port))
})