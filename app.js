const express = require('express')
const app = express()

const rotaProdutos = require('./routes/produtos') //sem o .js
const rotaPedidos = require('./routes/pedidos') //sem o .js

app.use('/produtos', rotaProdutos)
app.use('/pedidos', rotaPedidos)

module.exports = app
