const mongoose = require("mongoose");

const cadastro = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
});

module.exports = cadastro;