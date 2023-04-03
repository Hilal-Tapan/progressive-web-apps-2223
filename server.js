const express = require('express')
const axios = require('axios');
// var minify = require('express-minify');


const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public/'));

//minify
// app.use(minify());
// app.use(compression());
// app.use(minify());
// app.use(express.static(__dirname + '/static'));

//setting view engine to ejs
app.set("view engine", "ejs");

// app.use(minify({
//     cache: false,
//     uglifyJsModule: null,
//     errorHandler: null,
//     jsMatch: /javascript/,
//     cssMatch: /css/,
//     jsonMatch: /json/,
//     sassMatch: /scss/
//   }));

// Home page
app.get('/', (req, res) => {
    let data;
    axios.get('https://opensheet.elk.sh/12nr4W-RHpvhnw76MCZZtujYHqP1qIU28ExM4oXQfzys/blad1')
        .then((response) => {
            console.log('result', response.data)
            data = response.data
            res.render('index', {
                title: 'Home',
                data: data
            });

        }).catch((error) => {
            console.log('error', error)
        })
})

// Quotes page
app.get('/quotes/:id', (req, res) => {
    let data;
    axios.get('https://opensheet.elk.sh/12nr4W-RHpvhnw76MCZZtujYHqP1qIU28ExM4oXQfzys/blad1')
      .then((response) => {
        console.log('result', response.data);
        data = response.data;
        const filteredQuotes = data.filter(quote => quote.id === req.params.id); // filter the quotes based on the id parameter
        res.render('quotes', {
          title: 'Random Quote',
          data: filteredQuotes // render only the filtered quotes
        });
      })
      .catch((error) => {
        console.log('error', error);
      });
  });
  

// About page
app.get('/about', (req, res) => {

    res.render('about', {
        title: 'About',
        pageTitle: 'About Design Quotes'
    });
})

// Offline
app.get('/offline', (req, res) => {

    res.render('offline', {
        title: 'offline',
        pageTitle: 'You are offline'
    });
})

// start webserver
app.listen(port, () => {
    console.log(`localhost running on https://localhost:${port}`)
});

// Make sure to export the router so it becomes available on imports
module.exports = app;



// AANTEKENINGEN
// app.get('/quote/:quotes', (req, res) => {
//     res.send(`${req.params.quotes}`)
// })