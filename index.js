const express = require ('express'); 
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/chat")

  .then(() => {
    console.log("Conectado ao MongoDB!");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get("/login", (req,res) => {
    res.render("index");
});


app.get("/chat", (req,res) => {
    res.render("chat");
});

app.listen(2711, () => {
    console.log("App rodandoo");
});


