//Esse modulo express retorna uma função que cria uma instancia do framework express
const express = require("express");
// A função express é responsavel por criar uma instancia do framework express
const app = express();

app.get("/", function(req, res){
  // Enviando um arquivo html como resposta
  //res.sendFile(__dirname + "/html/index.html");
  res.send("Seja bem-vindo ao meu app!");
});

app.get("/sobre", function(req, res){
  // Enviando um arquivo html como resposta
  // res.sendFile(__dirname + "/html/sobre.html");
  res.send("Minha pagina sobre");
});

app.get("/blog", function(req, res) {
  res.send("Bem-vindo ao meu blog!");
});

app.get("/ola/:cargo/:nome/:cor", function (req, res) {
    res.send("<h1>Ola "+req.params.nome+"</h1>"+"<h2> Seu cargo e: "+req.params.cargo+"</h2>"+"<h3> Sua cor favorita e: "+req.params.cor+"</h3>");
});

//localhost:8081
app.listen(8081, function () {
  console.log("Servidor rodando na url http://localhost:8081");
});
