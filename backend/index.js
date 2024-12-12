const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/genres', (req, res, next) => {
    const genres = ['Pop', 'Rock', 'Jazz', 'Blues'];
    res.status(200).json({
        'results': genres,
        'totalResults': genres.length
    });
});

app.use((req, res, next) => {
    res.status(404);
    res.json({
        'error': "Something Went Wrong. No such path exists"
    });
});

module.exports = app;