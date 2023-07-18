const express = require("express");
const fs = require("fs");
const app = express();
const htmlRoute = require("./routes/htmlroutes");
const apiRoute = require("./routes/apiroutes");
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use("public", express.static(__dirname + "public"));
app.use(express.static("public"));
app.use('/api', apiRoute);
app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});

