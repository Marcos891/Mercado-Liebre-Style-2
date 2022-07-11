const express = require('express');
const path = require('path');
const { send } = require('process');
const port = 3040;

const app = express()

app.use(express.static('public'));

app.listen(port, () => console.log('server running in localhost://' + port));
app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'home.html')));