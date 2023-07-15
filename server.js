const express = require("express");
const fs = require("fs");
const app = express();
const htmlRoute = require("./routes/htmlroutes");
const apiRoute = require("./routes/apiroutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public/assets", express.static(__dirname + "/public/assets"));

app.use('/api', apiRoute);
app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});

module.exports = app;