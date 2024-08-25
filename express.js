const express = require('express');
const app = express();

app.get('/gor/test', function(req, res) {
    console.log('get works very good');
    res.send('shat lava get');
});

app.post('/gor/test', function(req, res) {
    console.log('post works very good');
    res.send('shat lava post');
});

app.listen(2344);
