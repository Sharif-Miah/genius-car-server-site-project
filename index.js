const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express());



const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.dfmvdpa.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

    try {
        servicesCollection = client.db('geniuscar').collection('services')

        app.get('/services', async (req, res) => {
            const query = {};
            const cursor = servicesCollection.find(query);
            const services = await cursor.toArray();
            res.send(services)

        })
    }
    finally {

    }

}

run().catch(error => console.log(error))


app.get('/', (req, res) => {
    res.send('Ginius Car Site site Running...')
})

app.listen(port, (req, res) => {
    console.log('Ginius Car is Runnig on port', port);
})