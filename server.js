// Import required dependencies
const express = require('express');
const axios = require('axios');
const minifyHTML = require('express-minify-html');
var compression = require('compression')

// Create an instance of Express
const app = express();

// Set the port number for the server to listen on
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Serve static files from the "public" directory using the "/public" URL root
app.use('/public', express.static(__dirname + '/public/'));

// Minify HTML responses using the Express-Minify-HTML middleware
app.use(minifyHTML({
    override:      true,
    exception_url: false,
    htmlMinifier: {
        removeComments:            true,
        collapseWhitespace:        true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes:     true,
        removeEmptyAttributes:     true,
        minifyJS:                  true
    }
}));

app.use(compression());

// Set the view engine to EJS
app.set("view engine", "ejs");

// Define the home page route
app.get('/', (req, res) => {
    let data;
    // Make a GET request to an external API to fetch data
    axios.get('https://opensheet.elk.sh/12nr4W-RHpvhnw76MCZZtujYHqP1qIU28ExM4oXQfzys/blad1')
        .then((response) => {
            console.log('result', response.data)
            data = response.data
            // Render the "index" template and pass in the fetched data
            res.render('index', {
                title: 'Home',
                data: data
            });

        }).catch((error) => {
            console.log('error', error)
        })
})

// Define the quotes page route
app.get('/quotes/:id', (req, res) => {
    let data;
    // Make a GET request to an external API to fetch data
    axios.get('https://opensheet.elk.sh/12nr4W-RHpvhnw76MCZZtujYHqP1qIU28ExM4oXQfzys/blad1')
      .then((response) => {
        console.log('result', response.data);
        data = response.data;
        // Filter the fetched data to only include quotes with the specified ID parameter
        const filteredQuotes = data.filter(quote => quote.id === req.params.id);
        // Render the "quotes" template and pass in the filtered quotes
        res.render('quotes', {
          title: 'Random Quote',
          data: filteredQuotes
        });
      })
      .catch((error) => {
        console.log('error', error);
      });
});

// Define the about page route
app.get('/about', (req, res) => {
    // Render the "about" template with a page title
    res.render('about', {
        title: 'About',
        pageTitle: 'About Design Quotes'
    });
});

// Define the offline page route
app.get('/offline', (req, res) => {
    // Render the "offline" template with a page title
    res.render('offline', {
        title: 'offline',
        pageTitle: 'You are offline'
    });
});

// Start the server
app.listen(port, () => {
    console.log(`localhost running on https://localhost:${port}`)
});

// Export the app instance to make it available to other modules
module.exports = app;
