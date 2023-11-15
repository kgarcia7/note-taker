const path = require('path');
const fs = require('fs');

// unique id npm package 
var uniqid = require('uniqid')

module.exports = (app) => {

    // GET request to read db.json and return all notes as json
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });

    // POST request to update and save new note 
    app.post('/api/notes', (req,res) => {
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);

        let userNote = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid(),
        };

        db.push(userNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));

        // Send the response after updating the database
        res.json(db);
    });

    // Delete request 
    app.delete('/api/notes/:id', (req, res) => {
        let db = JSON.parse(fs.readFileSync('db/db.json'));
        let deleteNote = db.filter(item => item.id !== req.params.id);
        fs.writeFileSync('db/db.json', JSON.stringify(deleteNote));

        // Send the response after updating the database
        res.json(deleteNote);
    })

};