const express = require("express");
const fs = require("fs");
const app = express();
const htmlRoute = require("./routes/htmlroutes");
const apiRoute = require("./routes/apiroutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use("public", express.static(__dirname + "public"));
app.use(express.static("public"));
app.use('/api', apiRoute);
app.use('/', htmlRoute);

app.listen(3000, () => {
    console.log(`App listening on PORT ${3000}`);
});

