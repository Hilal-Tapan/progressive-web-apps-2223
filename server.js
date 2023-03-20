const express = require('express')

const app = express();
const port = 3000;

// routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/quote/:quotes', (req, res) => {
    res.send(`${req.params.quotes}`)
})

// start webserver
app.listen(port, () => {
    console.log(`localhost running on https://localhost:${port}`)
});