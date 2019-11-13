// lib/app.ts
import express from 'express';
// Create a new express application instance
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
