const path = require('path');

module.exports = (app) => {

//GET request for returning notes.html file
    app.get('/notes', (req, res) =>{
        res.sendFile(path.join(__dirname, './routes/notes.html'));
    });

    //GET request to return index.html file
    app.get('*', (req, res)=> {
        res.sendFile(path.join(__dirname, './routes/index.html'))
    })      
};