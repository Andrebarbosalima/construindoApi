const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser")

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())


let db = [
    { id: 1,nome: 'Bob Esponja', genero: 'M', especie: 'esponja', profissao:'cozinheiro'},
    {id: 2,nome: 'Patrick Estrela', genero: 'M', especie: 'estrela do mar', profissao:'Nenhuma atualmente'},
    {id:3,nome: 'Lula Molusco ', genero: 'M', especie: 'molusco', profissao:'caixa'},
    {id:4,nome: 'Seu Siriguejo ', genero: 'M', especie: 'carangueijo', profissao:'chefe de restaurante'},
    {id:5,nome: 'Plâncton ', genero: 'M', especie: 'crustáceos', profissao:'cientista'},
    {id:6,nome: 'Sandy Bochechas ', genero: 'F', especie: 'crustáceos', profissao:'lutador de artes marciais'},
    {id:7,nome: 'Gary Caracol', genero: 'F', especie: 'Caracol marinho', profissao:'Nenhuma atualmente'},
    {id:8,nome: 'Pérola', genero: 'F', especie: 'baleia', profissao:'estudante'},
    {id:9,nome: 'EM.puf', genero: 'F', especie: 'baiacu', profissao:'professora'},
   {id:10,nome: 'Larry', genero: 'F', especie: 'lagosta', profissao:'fisiculturista'},
    {id:11,nome: 'Larry', genero: 'F', especie: 'lagosta', profissao:'fisiculturista'},
    {id:12,nome: 'Karen', genero: 'F', especie: 'computador', profissao:'Nenhuma atualmente'}

]

app.get('/', (req , res)=>{
    return res.json(db)
})

app.post('/add', (req, res)=>{
   const body = req.body
    if(!body)
     return res.status(400).end()

     db.push(body)
     return res.json(body)
})

app.listen(5500,()=>{
console.log(`Express started at http://localhost:5500`)

})

