const express = require('express');
const app = express();
const port = 3000;

app.get('/test', (req, res) => {
    res.send('GET test');
});

app.post('/test', (req, res) => {
    res.send('POST test');
});

app.get('/', (req, res) => {
    res.send('Index');
});

app.listen(port, () => {
    console.log('Server is listening : http://localhost:' + port);
});