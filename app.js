//Esse modulo express retorna uma função que cria uma instancia do framework express
const express = require("express");
// A função express é responsavel por criar uma instancia do framework express
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');
//Config
  //Template Engine
  app.engine('handlebars', handlebars({defaultLayout: 'main'}))
  app.set("view engine", "handlebars")

//Body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/", function(req, res) {
  res.render('home');
})
app.get("/cadastro", function(req, res) {
  res.render('formulario');
})

app.post("/adicionar", function(req, res) {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(function() {
    res.redirect("/")
  }).catch(function(erro){
    res.send('Houve um erro: ' + erro);
  })
})
//localhost:8081
app.listen(8081, function () {
  console.log("Servidor rodando na url http://localhost:8081");
});
