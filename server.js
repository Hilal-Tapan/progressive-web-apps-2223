const express = require('express')

const app = express();
const port = 3000;

// routes
app.get('/', (req, res) => {
    res.send('Hello World!')

})

// start webserver
app.listen(port, () => {
    console.log('localhost running')
});