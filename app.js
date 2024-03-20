const express = require("express")
const rotaLivros = require("./rotas/livro")

const app = express()

app.use(express.json())

app.use('/livros', rotaLivros)

const port = 8000


app.listen(port, () =>{
    console.log(`Escutando a porta ${port}`);
    
})