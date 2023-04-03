# Progressive Web Apps 

![pwa](https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png)

Your daily web quote was a browser based one page web project, designed to view quotes related to the web. 
Whether you are a ux designer or a back-end developer, it doesn't matter. The quotes can apply to all jobs in the web field! 

For the progressive web app course, I'm going to refate my Your Daily Web quotes app to a server side application using Node.js. This project is part of the minor Web Design and Development at the University of Applied Sciences Amsterdam.

## 👁️ Live Site Link! 👁️
https://hilal-tapan.github.io/progressive-web-apps-2223/ 

## 🛠️ Used Technologies 🛠️
* EJS templating engine
* CSS3
* JavaScript
* Google sheet API
* SCSS
* PWA
* NPM
* NodeJs
* Express

## 💻 Installation 💻

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
Then, an HTTP GET request is sent to the URL 'https://opensheet.elk.sh/12nr4W-RHpvhnw76MCZZtujYHqP1qIU28ExM4oXQfzys/blad1' using the Axios library. Axios is a popular library for making HTTP requests in Node.js applications.
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
Here i used data.filter to filter the quote.id with req.params.id and render these.

## Synopsis
- Course: Progressive Web Apps
- Course Coordinator: Justus Sturkenboom ([@ju5tu5](https://github.com/ju5tu5))
- Minor Coordinator(s): Joost Faber ([@joostf](https://github.com/joostf)) Koop Reynders ([@KoopReynders](https://github.com/KoopReynders))
- Lecturers: Declan Rek ([@decrek](https://github.com/decrek)) & Janno([@shortstoryrguy](https://github.com/shortstoryrguy))
- Student Assistants: TBA
- Credit: 3 ECTS credits
- Academic year: 2022-2023
- Programme: Communication and Multimedia Design (full time bachelor)
- Language: Dutch instructions and English resources

## Description
In this course we convert the client side web application, made during the Web App From Scratch course, into a server side rendered application. We also add functionalities based on the Service Worker and turn the application into a Progressive Web App. Finally we’ll implement a series of optimisations to improve the performance of the application.  

## Communication
- [Github](https://github.com/cmda-minor-web/progressive-web-apps-2122)
- [Microsoft Teams](https://teams.microsoft.com/l/channel/19%3aacf0946687dc4ba9a9400fb7c6d7a81c%40thread.tacv2/05%2520-%2520Progressive%2520Web%2520Apps)
- [Brightspace](https://dlo.mijnhva.nl/d2l/home/324147)

If you have questions:
- [Look at the additional resources]()
- [Use a search engine like startpage](https://www.startpage.com/)
- [Ask questions on MS Teams](https://teams.microsoft.com/l/channel/19%3a64132926ecfc442bbce80e14bc6c3f7b%40thread.tacv2/06%2520Progressive%2520Web%2520Apps?groupId=c8b97eb6-ad53-4531-ad66-5c3c6297951c&tenantId=0907bb1e-21fc-476f-8843-02d09ceb59a7) (please help each other!)
- [Contact a student-assisstant](#synopsis)
- [Contact a lecturer](#synopsis)

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

## Programme

### Daily Schedule
To keep things simple we use a daily schedule that will be used during normal course days (monday/tuesday). We make exceptions for fridays, on these days a different schedule will be given.

| Time | Who | Activity |
|:--|:--|:--|
| *~09:20* | *(Declan, Janno)* | *Standup* |
| 09:30 | Tribe *+(Declan, Janno)* | Talk with crucial information (make sure you attend!) |
| 11:00 | Tribe | Work on the (day)assignment |
|  | Team 1 *+(Declan)* | Standup |
|  | Team 2 *+(Janno)* | Standup |
| 11:20 | Team 3 *+(Declan)* | Standup |
|  | Team 4 *+(Janno)* | Standup |
| 11.40 | Team 5 *+(Declan)* | Standup |
|  | Team 6 *+(Janno)* | Standup |
| 12.00 | Team 7 *+(Declan)* | Standup |
|  | Team 8 *+(Janno)* | Standup |
| 12.20 | Team 9 *+(Declan)* | Standup |
|  | Team 10 *+(Janno)* | Standup |
| 13:00 | Tribe *+(TBA)* | Continue work on the (day)assignment |
| 16:00ish | Tribe *+(TBA)* | Wrapup |

### Week 1 - Server Side Rendering 📡
Goal: Render web pages server side

[Exercises for week 1](./course/week-1.md)

#### Monday 20 maart    
We start out with a short explanation of this course. Right behind is a presentation on Server Side Rendering by Declan Rek from *de Voorhoede* [Server Side Rendering - slides by Declan Rek](course/cmd-2022-server-side-rendering.pdf)

After this presentation you may start working on [this weeks exercises](./course/week-1.md). We’ll hold standup meetings in teams according to the roster you see at [daily schedule](#daily-schedule). At the end of the day you’ll do a wrap-up of your work and take the evening off.

#### Tuesday 21 maart
We’ll split up in two groups, those who want to go through the details again team up with Justus, those who want to go deeper team up with Declan. Both groups will hold live-coding sessions and will be able to ask questions.

After this live-coding session you continue working on [this weeks exercises](./course/week-1.md). We’ll hold standup meetings in teams according to the roster you see at [daily schedule](#daily-schedule). You’ll finish with a wrap-up of your work and take the evening off.

#### Friday 24 maart
We’ll be introduced to ****! They’ll show us around their workfloor and tell us about (working in) their company. You can use the spare time to finish [this weeks exercises](./course/week-1.md) and ask questions. Wrap-up your work and take off for the weekend. We might go for drinks..

| Time | Who | Activity |
|:--|:--|:--|
| 13.00 | Tribe *+(Declan, Janno)* | Questions.. |
| 13.30 | Tribe *+(Declan, Janno)* | Meeting with company? |
| 16.00 | Tribe *+(Declan?, Janno?)* | (drinks?!) |

### Week 2 - Progressive Web App 🚀
Goal: Convert application to a Progressive Web App

[Exercises for week 2](./course/week-2.md)  

#### Monday 27 maart
We set off the week with a presentation on Progressive Web Apps by Declan Rek from *de Voorhoede* [Progressive Web Apps - slides Declan Rek](./course/cmd-2022-progressive-web-apps.pdf)

After this presentation you’ll start working on [this weeks exercises](./course/week-2.md). Again, we’ll hold standup meetings in teams according to the roster you see at [daily schedule](#daily-schedule). We’ll wrap-up the day as usual and take the evening off.

#### Tuesday 28 maart
We’ll split up again, those who want to go through the details again team up with Justus, those who want to go even deeper team up with Declan. Both groups will hold live-coding sessions and will be able to ask questions.

After this live-coding session you continue working on [this weeks exercises](./course/week-2.md). We’ll hold standup meetings in teams according to the roster you see at [daily schedule](#daily-schedule). You’ll finish with a wrap-up of your work and take the evening off.

#### Friday 31 maart 
We will have a [peer review session](./course/peer-review.md). You will read, comment and fire issues on each others code. Doing this helps others dotting the i’s on their project.

| Time | Who | Activity |
|:--|:--|:--|
| 13.00 | Tribe *+(Declan, Janno)* | Peer review |
| 15.30 | Tribe *+(Declan, Janno)* | Wrap-up for the weekend |
| 16.00 | Tribe?! | (drinks?! or not?!) |

### Week 3 - Critical Rendering Path 📉 
Goal: Optimize the Critical Rendering Path

[Exercises for week 3](./course/week-3.md)  

#### Monday 3 april
We’ll set of the 3rd and final week with a presentation on the Critical Rendering Path by Declan Rek from *de Voorhoede* [Progressive Web Apps - slides Declan Rek](./course/cmd-2020-critical-rendering-path.pdf)

After this presentation you’ll work on [this weeks exercises](./course/week-3.md). Again, we’ll hold standup meetings in teams according to the roster you see at [daily schedule](#daily-schedule). We’ll wrap-up the day (are you starting to get the hang of it?) as usual and take the evening off.

#### Tuesday 4 april
We’ll split a third time... Again, those who want to go through the details team up with Justus. Those who want to go beyond.. fearlessly.. into the dark depths of optimization, team up with Declan. Both groups will hold live-coding sessions and will be able to ask questions.

After this live-coding session you continue working on [this weeks exercises](./course/week-3.md). We’ll hold standup meetings in teams according to the roster you see at [daily schedule](#daily-schedule). You’ll finish with a wrap-up of your work and take the evening off.

#### Friday 7 april
We will have our final [peer review session](./course/peer-review.md). You will read, comment and fire issues on each others code. Doing this helps others dotting the i’s on their project.

| Time | Who | Activity |
|:--|:--|:--|
| 13.00 | Tribe *+(Declan, Janno)* | Peer review |
| 15.30 | Tribe *+(Declan, Janno)* | Finalize your assignment |
| 16.00 | Tribe *+(Declan, Janno)* | (drinks?!) |


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
