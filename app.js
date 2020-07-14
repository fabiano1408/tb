const express = require("express") // é uma variável que faz o requerimento pra trazer os modulos do  express --- foi alterada pra constante para não ter erros futuros caso seja alterado a variável
const app = express()

app.get("/", function(req, res){   // função de req = requerimento do sistema    ---> res = manda a mensagem pro cliente
  res.sendfile(__dirname+ "/html/index.html") // res = resposta send= enviando   ----> para o cliente
})//__dirname retorna no diretório raiz (pasta de arquivos -- test)... e atravez do mais (+) ele junta com  a pasta do arquivo requisitado
app.get("/sobre", function(req, res){
  res.sendfile(__dirname+"/html/sobre.html")
})
app.get("/blog", function(req, res){
  res.send("bem vindo ao meu Blog")
})
app.get("/ola/:nome", function(req, res){ // o parametro --- /:nome--- só vai carregar se colocar a rota ---/ola/ "algum nome" ----- pode colocar mais de um paranmetro
  res.send(" muito bem vindo")
})
//app.get("/oi/:nome/:cargo/:cor", function(req, res){ 
 // res.send(req.params) // atraves do "req" recebe os dados da requisição e salva no servidor node
//})
app.get("/oi/:nome/:cargo/:cor", function(req, res){ 
 res.send("<h1>ola "+req.params.nome+"</h1>"+"<h2>seu cargo é "+ req.params.cargo+"</h2>"+"<h3> sua cor é "+ req.params.cor+"</h3>") // mostra a mensagem ao cliente e mostra o parametro ---- /:nome ---------- e ainda dá pra usar tag do html
})
app.listen(8081, function(){
  console.log("Servidor Rodando na url http://localhost:8081")
}) // todo programação tem que ser colocada acima dessa pois essa que vai mostrar tudo acima na porta














//var http = require('http');

//http.createServer (function(req, res){
  // res.writeHead(200);
 // res.end("Ola mundo");
//}).listen(3131);

//console.log("SERVIDOR RODANDO!");
// const express = require('express');

// const app = express();

// app.get('/', (req, res)=>{
  
//   return res.json({ ok: true});
// });

// app.listen(3131, ()=> console.log('run http://localhost:3131'))