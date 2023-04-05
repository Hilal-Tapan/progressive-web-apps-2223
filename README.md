# Progressive Web Apps 
![pwa](https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png)

Your daily web quote was a browser based one page web project, designed to view quotes related to the web. 
Whether you are a ux designer or a back-end developer, it doesn't matter. The quotes can apply to all jobs in the web field! 

For the progressive web app course, I'm going to refate my Your Daily Web quotes app to a server side application using Node.js. This project is part of the minor Web Design and Development at the University of Applied Sciences Amsterdam.

***

## 👁️ Live Site Link! 👁️
https://hilal-tapan.github.io/progressive-web-apps-2223/ 

***

## 📄 License 📄
This project has a MIT License - see the license file for more details.

***

## 🛠️ Used Technologies 🛠️
* EJS templating engine
* CSS3
* JavaScript
* Google sheet API
* PWA
* NPM
* NodeJs
* Express

***

## 💻 Installation Guide 💻

#### install nvm
1. To install the server you need node and express. You can do that with nvm. Nvm is package installer where you can install different packages. With this code you can install the latest versions of npm and node:
```
nvm install 19.8.1
```

#### Clone repo
2. Clone this repository by running:
```
git clone https://github.com/Hilal-Tapan/progressive-web-apps-2223.git
```

#### NPM install
3. Install the dependencies by running 
```
npm install 
```
to install the dependencies. 

#### Start server
4. Then run 
```
npm start
```
 to start the development server.

***

## User story
As a user, I want to be able to access my favorite website even when I don't have an internet connection, I wanna get feedback when i'm offline.

***

## 💾 Node.js server 💾
1. Install Node.js: First, you need to install Node.js on your computer. You can download and install it from the official website.

2. Create a new project: Create a new directory for your project and navigate to it using the command line interface.

3. Initialize the project: In the project directory, use the command npm init to initialize the project. This will create a package.json file, which contains information about your project.

4. Install Express: Express is a popular Node.js framework that makes it easy to create web applications. Install it using the command npm install express.

5. Create a server file: Create a new file in your project directory called server.js. This file will contain the code for your server.

6. Import Express: In server.js, import Express using the following code:
```javascript
const express = require('express');
const app = express();
```

7. Create a route: A route is a function that is executed when a user accesses a specific URL. Create a route using the following code:
```javascript
app.get('/', function(req, res) {
  res.send('Hello World!');
});
```
This code creates a route that responds with the text "Hello World!" when a user accesses the root URL.

8. Start the server: Finally, start the server using the following code:
```javascript
app.listen(3000, function() {
  console.log('Server started on port 3000');
});
```
This code starts the server on port 3000 and logs a message to the console.

## 📁 Template engine 📁

EJS (Embedded JavaScript) is a templating engine for Node.js that allows you to embed JavaScript code inside HTML templates to generate dynamic content on the server-side. 

#### Here are the basic steps to using EJS:
1. Install EJS: First, you need to install EJS in your Node.js project using the npm package manager. You can do this by running the following command in your terminal:
```
npm install ejs
```

2. Create an EJS template: After installing EJS, you need to create an EJS template file. An EJS template file has a ".ejs" file extension and contains HTML markup with embedded JavaScript code. You can use EJS syntax to inject dynamic data into your HTML markup.

3. Render the EJS template: To render an EJS template, you need to use the ejs.render() method. This method takes two arguments: the path to the EJS template file and an object containing the data you want to inject into the template. Here's an example of how to render an EJS template:
```javascript
const ejs = require('ejs');
const data = { name: 'John', age: 30 };
ejs.renderFile('template.ejs', data, function(err, html) {
    if (err) throw err;
    console.log(html);
});
```
In this example, we're rendering a template file called "template.ejs" and injecting an object with two properties (name and age) into the template.

4.  Use EJS syntax: In your EJS template file, you can use EJS syntax to inject dynamic data and execute JavaScript code. Here are some examples of EJS syntax:

* ``` <%= variable %> - inject a variable into the HTML markup ```
* ``` <% if (condition) { %> ... <% } %> - execute JavaScript code based on a condition```
* ``` <% for (var i = 0; i < items.length; i++) { %> ... <% } %> - iterate over an array and execute JavaScript code```

## API 
The fetching of the api had to be changed a little bit. For this I used AXIOS in stead of REQUEST. This is because request was not working well with this so that is why I used Axios. 

``` javascript
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
```
This is a code snippet that defines a route for an HTTP GET request in a Node.js web application using the Express framework. The route is defined using the app.get() method of an Express application object (app).
The route's path is set to '/', which means that it will handle requests to the application's root URL.
The route handler function takes two parameters: req (request) and res (response).
Within the function, a variable data is declared and assigned to undefined.
Then, an HTTP GET request is sent to the URL 'https://opensheet.elk.sh/12nr4W-RHpvhnw76MCZZtujYHqP1qIU28ExM4oXQfzys/blad1' using the Axios library. 

Axios is a popular library for making HTTP requests in Node.js applications.
If the request is successful, the response data is logged to the console and assigned to the data variable. Then, the res.render() method is called to render the 'index' view with a title of 'Home' and the data variable passed as an object. This view will be displayed in the user's browser as the response to the HTTP request.
If the request fails, an error message is logged to the console.
Overall, this code retrieves data from an external source and passes it to a view to be rendered as a webpage in response to an HTTP GET request.

```javascript 
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
```
Here i used data.filter to filter the quote.id with req.params.id and render these to my detailpage.

***

## My server.js code

```javascript
const express = require('express')
const axios = require('axios');
const minifyHTML = require('express-minify-html');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public/'));

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

//setting view engine to ejs
app.set("view engine", "ejs");

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
```

***

## 🛠️ Building Tool 🛠️
Build tools automate repetitive tasks and optimize workflow once the application is deployed. Build tooling is used mostly :

* to shrink and minimize javascript files.
* For CSS preprocessor like Sass, less, Stylus.
* to load images from a source
* To prerender HTML files

I chose SASS and minify as a building tool for my css. I dont have any javascript other than my server.js so i didn't need any minifier for that. 

### Minify
Minification is a technique used to reduce the size of a file by removing unnecessary characters and whitespace without changing its functionality. The minify extension is a tool that automates this process for web developers.

When building a website, developers often use libraries and frameworks that contain large amounts of code. This code can include comments, whitespace, and other characters that are not necessary for the code to function. Minification removes these extraneous elements to make the file smaller, which can improve page load times and overall website performance.

The minify extension can be used with a variety of web development languages, including HTML, CSS, and JavaScript. It works by analyzing the code and removing any unnecessary characters, such as white space, comments, and line breaks. This can result in a significant reduction in file size, which can help improve website speed and overall performance.

In addition to reducing file size, minification can also make code harder to read and understand. For this reason, it is important to keep a backup of the original code and use a minification tool that produces readable output or has a "beautify" option to revert the minified code back to its original format if needed.

Overall, the minify extension is a useful tool for web developers looking to improve website performance and reduce page load times.

### SASS
SASS (short for Syntactically Awesome Style Sheets) is a preprocessor scripting language that is used to simplify and streamline the process of writing CSS code. SASS is essentially a superset of CSS, which means that any valid CSS code is also valid SASS code. However, SASS includes additional features that allow developers to write more complex stylesheets with less code. For example, SASS supports variables, which can be used to store and reuse values such as colors, font sizes, and margins. It also supports **nested syntax**, which allows developers to write more readable and organized code.

One of the key benefits of using SASS is that it can significantly reduce the amount of repetitive code that is needed to create complex stylesheets. This can make it easier to maintain and update styles over time, as well as improve the overall performance of a website.

SASS can be compiled into standard CSS using a variety of tools, including command line utilities, web-based compilers, and integrations with popular build tools such as Grunt and Gulp. This allows developers to write SASS code using their preferred development environment and then easily convert it into optimized CSS for use on the web.

***

## Client side and server side rendering
Client-side rendering and server-side rendering are two different approaches to rendering web content.

Client-side rendering means that the rendering of web content is done on the client-side, typically using JavaScript. When a user requests a web page, the server sends back the HTML, CSS, and JavaScript files to the client, and the client's browser then runs the JavaScript code to render the web content. This approach provides a faster initial load time, as the server only needs to send the initial HTML and JavaScript files to the client, and subsequent interactions with the web page can be faster as only the necessary data is requested from the server. However, client-side rendering can lead to slower load times for larger applications as all the data and content need to be loaded initially, and it also requires more processing power on the client-side.

Server-side rendering, on the other hand, means that the web content is rendered on the server-side before being sent to the client's browser. When a user requests a web page, the server processes the request and generates an HTML document, which is then sent to the client. This approach provides a better initial load time, as the server sends the fully rendered HTML document to the client, which can display it without waiting for JavaScript to load. However, server-side rendering can be slower for subsequent interactions as the server needs to generate a new HTML document for each interaction.

In summary, client-side rendering is faster for smaller web applications, but can lead to slower load times for larger applications. Server-side rendering provides a better initial load time, but can be slower for subsequent interactions.

***

## Progressive Web App (PWA)
PWA stands for Progressive Web Application. It is a type of web application that is designed to look and feel like a native mobile app but is accessed through a web browser. PWAs use modern web technologies such as **service workers**, **web app manifests**, and **push notifications** to deliver an app-like experience to users, without requiring them to download anything from an app store.

Some of the key benefits of PWAs include:
* fast loading times
* offline functionality 
* the ability to send push notifications. 

PWAs are also more discoverable than native apps since they can be found and accessed through a simple URL, and they can be easily shared and accessed on any device or platform.

Overall, PWAs offer a more seamless and user-friendly experience compared to traditional web applications, and they are becoming increasingly popular among developers and businesses alike.

### How to make a PWA?
1. Start with a responsive web design: Before you can create a PWA, you need to have a website that is optimized for mobile devices and can adapt to different screen sizes.

2. Add a web app manifest: A web app manifest is a JSON file that provides information about your PWA, such as its name, icons, and start URL. This file tells the browser how to display your PWA when it is launched.

3. Implement a service worker: A service worker is a JavaScript file that runs in the background of your PWA and can intercept network requests, cache assets, and handle push notifications. The service worker is essential for creating an offline-first experience, which is a key feature of PWAs.

4. Optimize performance: To ensure that your PWA loads quickly and performs well, you should optimize your code, use a content delivery network (CDN), and compress your assets.

5. Test and debug: Once your PWA is built, you should test it on different devices and browsers to ensure that it works as expected. You can use tools like Lighthouse, which is built into Google Chrome, to test the performance and accessibility of your PWA.

6. Deploy your PWA: Once you have tested and debugged your PWA, you can deploy it to your web server or hosting provider. You should also register your PWA with app stores like Google Play and the Apple App Store, which will make it more discoverable to users.

### Manifest.json
The manifest.json file is a crucial part of a Progressive Web App (PWA) that provides information about the app and helps the browser understand how it should be installed and launched on the user's device. Here are some of the key things you need to include in the manifest.json file:

* `name`: The name of the app as it should appear to the user.
* `short_name`: A shorter version of the app name that may be used in places where space is limited.
* `start_url`: The URL of the app's start page.
* `icons`: An array of images that will be used as app icons on the home screen, app launcher, and task switcher. Each image should be in PNG format and have different sizes.
* `theme_color`: The color of the app's toolbar and other UI elements. This should be a hexadecimal color code.
* `background_color`: The background color of the app's splash screen. This should also be a hexadecimal color code.
* `display`: The display mode of the app, which can be fullscreen, standalone, minimal-ui, or browser.
* `description`: A short description of the app.
* `orientation`: The orientation of the app, which can be portrait, landscape, or any.
* `scope`: The URL scope of the app, which determines the URLs that the app can access.

```json
{
    "name": "Your daily web quote",
    "short_name": "YDWB",
    "scope": "/",
    "start_url": "/index.ejs",
    "display": "standalone",
    "background-color": "rgb(255, 255, 255)",
    "theme_color": "rgb(255, 255, 255)",
    "orientation": "portrait-primary",
    "icons": [
        {
            "src": "/images/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/images/icons/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
        },
        {
            "src": "/images/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
        },
        {
            "src": "/images/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
```

These are some of the most important fields that you should include in your manifest.json file, although there are others you can add depending on your app's needs. Once you've created your manifest.json file, you can include it in the head of your HTML document using the link tag, like this:

```html
<link rel="manifest" href="/manifest.json">
```

***

## What is a service worker?
A service worker is a type of JavaScript file that runs in the background of a web application and can 
* intercept network requests
* cache assets
* provide offline functionality. 
It is a key component of Progressive Web Apps (PWAs) and enables PWAs to offer a native app-like experience to users.

Service workers operate independently of the main browser thread and can continue to run even when the web application is closed. This allows them to perform tasks in the background, such as:
* pre-caching resources
* updating content
* responding to push notifications.

### Key features of service workers
Some of the key features of service workers include:
* Caching: Service workers can cache static assets and API responses, allowing the web application to load faster and work offline.
* Background sync: Service workers can synchronize data in the background, even when the web application is not open, ensuring that the user's data is always up-to-date.
* Push notifications: Service workers can receive and display push notifications, allowing the web application to send timely updates to users.
* Intercepting network requests: Service workers can intercept network requests made by the web application, allowing them to serve cached responses or modify requests before they are sent to the server.

### How to implement a service worker?
1. Register the service worker: The first step is to register the service worker in your web application. To do this, you need to add the following code to your footer file:
```javascript
        //service worker
        if ("serviceWorker" in navigator) {
            // Register a service worker hosted at the root of the
            // site using the default scope.
            navigator.serviceWorker.register("/sw.js").then(
                (registration) => {
                    console.log("Service worker registration succeeded:", registration);
                },
                (error) => {
                    console.error(`Service worker registration failed: ${error}`);
                }
            );
        } else {
            console.error("Service workers are not supported.");
        }
```
This code checks if the serviceWorker API is available in the user's browser, and if it is, registers the service worker file sw.js. The register() method returns a promise that resolves when the service worker is registered successfully.

2. Create the service worker file: Now you need to create the sw.js file and add it to your web publics map:
```js
// install service worker
self.addEventListener("install", (event) => {

    // The promise that skipWaiting() returns can be safely ignored.
    // bron: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting 
    self.skipWaiting();
    
    // console.log("Service worker has been installed")
    event.waitUntil(
    caches.open(staticCacheName).then(cache => {
        console.log("catching shell assets");
        cache.addAll(assets);
    })
  )
});
  
// activate service worker
self.addEventListener("activate", (event) => {
    // console.log("Service worker has been activated")
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((cacheRes) => {
        if (cacheRes) {
          return cacheRes;
        }
        return fetch(event.request).catch(() => {
          return caches.match("/offline");
        });
      })
    );
  });
```

This service worker file does the following:
* Installs and activates the service worker
* Caches static assets (i.e. HTML, CSS, and JS files) when the service worker is installed
* Intercepts network requests made by the web application and serves the cached response, if available

3. Test the service worker: Once you've added the service worker file to your web application, you can test it by opening your application in the browser and checking the console for any errors. You can also use the browser's Developer Tools to check the "Application" tab and verify that the service worker is registered and active.


## Caching Assets
```js
const staticCacheName = "site-static"
const assets = [ 
    "/offline",
    "/public/styles/style.min.css",
    "./images/Middel-1.webp",
    "/images/facebook-logo.webp",
    "/images/twitter-logo.webp",
    "/images/insta-logo.webp" 
]
```

* `const staticCacheName = "site-static"` creates a constant variable named staticCacheName and assigns it the string value "site-static". This variable is typically used as the name of the cache where static assets are stored by the service worker. 

* `const assets = [ ... ]` creates an array variable named assets and assigns it an array of strings that represent the URLs of various assets that are to be cached by the service worker. 

This array is used later in the service worker code to cache these assets so that they can be served to users even when they are offline. When a user visits the website for the first time, the service worker will fetch these assets and store them in the cache named site-static. Then, when the user visits the website again (even if they are offline), the service worker can serve these cached assets from the cache, providing a faster and more reliable experience for the user.

## Activity Diagram


## Critical rendering path


## Hosting 



## must haves
* client- server rendering, 
* an activity diagram including the Service Worker and a list of enhancements to optimize the critical render path implemented your app.
* Critical render path You’ve enhanced the critical render path for a better runtime or percieved performance in multiple ways and have described how you managed to do this.
* Service Worker You’ve implemented a usefull Service Worker and show it’s working in an activity diagram.



## Sources
* https://www.npmjs.com/package/axios
* https://ejs.co/#docs 
* https://www.awwwards.com/PWA-ebook/en#what-are-pwa
* https://web.dev/learn/pwa/service-workers/ 
* https://expressjs.com/en/starter/hello-world.html 
* https://www.npmjs.com/package/express-minify-html 
* 

## Goals
After finishing this program you can:
- _deal with server side rendering;_
- _implement a Service Worker;_
- _enhance the critical render path for a better runtime or percieved performance._

## Grading
Your efforts will be graded using a single point rubric (see below). You will have to pass the criterion (centre column) to pass the course. During the test you will be consulted and will be given feedback on things we think deficient and things we think are an improvement on the criterion.

| Deficiency | Criterion | Improvement |
|:--|:--|:--|
|  | *Project* Your app is published and can be accessed using the browser. Your project is thoroughly documented in the `README.md` file in your repository. Included are an explanation of client- server rendering, an activity diagram including the Service Worker and a list of enhancements to optimize the critical render path implemented your app. |  |
|  |*Serverside rendering* You’ve implemented serverside rendering and have articulated how it works and why you should want it. |  |
|  |*Service Worker* You’ve implemented a usefull Service Worker and show it’s working in an activity diagram. |  |
|  |*Critical render path* You’ve enhanced the critical render path for a better runtime or percieved performance in multiple ways and have described how you managed to do this. |  |



<!-- Here are some hints for your project! -->

<!-- Start out with a title and a description -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- ☝️ replace this description with a description of your own work -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- ...you should implement an explanation of client- server rendering choices 🍽 -->

<!-- ...and an activity diagram including the Service Worker 📈 -->

<!-- This would be a good place for a list of enhancements to optimize the critical render path implemented your app  -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- We all stand on the shoulders of giants, please link all the sources you used in to create this project. -->

<!-- How about a license here? When in doubt use GNU GPL v3. 📜  -->
