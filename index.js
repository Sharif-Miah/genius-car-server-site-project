const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express());

app.get('/', (req, res) => {
    res.send('Ginius Car Site site Running...')
})

app.listen(port, (req, res) => {
    console.log('Ginius Car is Runnig on port', port);
})