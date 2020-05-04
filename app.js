// CREATE A SERVER WITH EXPRESS
const express = require('express');

const app = express();

app.use(express.static('public'))

//html
app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

//home
app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

//about
app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

//works
app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});

//photo gallery
app.get('/photo-gallery', (request, response) => {
  response.sendFile(__dirname + '/views/photo-gallery.html');
});

//css
app.get('/main.css', (request, response) => {
  response.sendFile(__dirname + '/styles/main.css');
});

//404 no page
app.get('*', (request, response) => {
  response.send('404 !-_-! 404');
});

//localhost port
app.listen(3000);
