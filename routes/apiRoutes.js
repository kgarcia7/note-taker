const path = require('path');
const fs = require('fs');

//GET request to read db.json and return all notes as json
module.exports = (app) => {

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

//POST request to update and save new note 
app.post('/api/notes', (req,res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);
    let userNote = {
        title: req.body.title,
        text: req.body.text,
    };
    db.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
})
};