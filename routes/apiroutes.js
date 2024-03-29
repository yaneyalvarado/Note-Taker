const fs = require("fs");
const util = require("util");
const app = require("express").Router();
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
var notesData;

// Get request
app.get("/notes", (req, res) => {
    readFileAsync("db/db.json", "utf8").then(function (data) {
        notesData = JSON.parse(data);
        res.json(notesData);
    });
});

// Post request
app.post("/notes", function(req, res) {
    let newNote = req.body;
    let uniqueId = (notesData.length).toString();
    console.log(uniqueId);
    newNote.id = uniqueId;
    notesData.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(notesData), function(err) {
        if (err) throw (err);
    });
    res.json(data);
});

// delete request
app.delete("/notes/:id", (req, res) => {
    let noteId = req.params.id;
    let newId = 0;
    console.log(`Note deleting with ID ${noteId}`);
    notesData = notesData.filter(currentNote => {
        return currentNote.id != noteId;
    });
    // for (currentNote of data) {
    //     currentNote.id = newId.toString();
    //     newId++;
    // }
    fs.writeFileSync("./db/db.json", JSON.stringify(notesData));
    res.json(notesData);
});

module.exports = app;