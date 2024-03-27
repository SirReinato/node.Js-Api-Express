const { deletaFavoritoId, getTodosFavoritos, inserirFavorito } = require("../servicos/favorito")

function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos();
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            inserirFavorito(id)
            res.status(201)
            res.send('Livro adicionado com sucesso')

        } else {
            res.status(422)
            res.send("Por favor, insira um id valido")

        }


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function favoritoDelete(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletaFavoritoId(id)
            res.send('Favorito deletado com sucesso')
        } else {
            res.status(422)
            res.send("ID fornecida não é válida")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    favoritoDelete
}