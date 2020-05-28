const express = require('express')

const porta = 3003

const  app = express()
const bodyParser = require('body-parser')
const DB = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) =>{
<<<<<<< HEAD
   res.send({ nome: 'Notebook', preco: 123.45 })
=======
   res.send(DB.getProdutos())
})

app.get('/produtos/:id', (req, res) => {
   res.send(DB.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
   const produto = DB.salvarProduto({
      nome: req.body.nome,
      preco: req.body.preco
   })
   res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
   const produto = DB.salvarProduto({
      id: req.params.id,
      nome: req.body.nome,
      preco: req.body.preco
   })
   res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
   const produto = DB.excluirProdutos(req.params.id)
   res.send(produto)
>>>>>>> 38b70e50464954bf592daaa77fae77bc5eff99df
})

app.listen(porta, () => {
   console.log(`Servidor esta executando na porta ${porta}`)
})
