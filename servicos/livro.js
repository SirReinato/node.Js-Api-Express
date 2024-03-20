const fs = require('fs')

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('livros.json'))
}

function getLivroPorId(id) {
    const livros = getTodosLivros()
    const livroFiltrado = livros.find(livro => livro.id === parseInt(id))
    return livroFiltrado
}

function addLivro(livroNovo) {
    const livros = getTodosLivros()
    const novaLista = [...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaLista))
}

function editarLivro(modificacoes, id) {
    let TodosOslivros = getTodosLivros()

    const indiceModificado = TodosOslivros.findIndex(livro => livro.id === parseInt(id))

    const livroMudado = {...TodosOslivros[indiceModificado], ...modificacoes}

    TodosOslivros[indiceModificado] = livroMudado

    fs.writeFileSync("livros.json", JSON.stringify(TodosOslivros))
}

function deletarLivro(id) {
    let osLivros = getTodosLivros()
    const aDeletar = osLivros.filter(livro => livro.id !== parseInt(id))
    fs.writeFileSync("livros.json", JSON.stringify(aDeletar))
}


module.exports = {
    getTodosLivros,
    getLivroPorId,
    addLivro,
    editarLivro,
    deletarLivro
}