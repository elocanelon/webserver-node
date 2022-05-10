require('dotenv').config();

const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');
const port = process.env.PORT

//  // Handlebars
//app.get('/', function (req, res) {
//  res.render('home', {
//    titulo: "Prueba",
//    objeto : "De node"
//
//  })
//  })
//
//app.get('/generic', function (req, res) {
//  res.render('generic')
//})
//
//app.get('/elements', function (req, res) {
//  res.render('element')
//  })


hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use( express.static('public'))


app.get('/generic', function (req, res) {
  res.sendFile( __dirname + '/public/generic.html')
  })

app.get('/elements', function (req, res) {
  res.sendFile( __dirname + '/public/elements.html')
  })

app.get('*', function (req, res) {
  res.sendFile( __dirname + '/public/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})