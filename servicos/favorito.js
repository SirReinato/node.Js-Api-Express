const fs = require('fs');
const { getTodosLivros } = require('./livro');

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json'))
}

function deletaFavoritoId(id) {
    const oLivro = getTodosFavoritos();
    const livrosFiltrado = oLivro.filter(livro => livro.id !== parseInt(id));

    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrado))
}

function inserirFavorito(id) {
    const oLivro = getTodosLivros();
    const favoritos = getTodosFavoritos();
    
    const favoritao = oLivro.find(livro => livro.id === parseInt(id))

    const addOutroFavoritao = [...favoritos, favoritao]

    fs.writeFileSync("favoritos.json", JSON.stringify(addOutroFavoritao))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoId,
    inserirFavorito
}