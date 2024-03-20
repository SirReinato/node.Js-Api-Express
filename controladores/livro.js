const { getTodosLivros, getLivroPorId, addLivro, editarLivro, deletarLivro } = require('../servicos/livro')

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("ID fornecida não é válida")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body

        if (req.body.nome && req.body.src && req.body.id) {
            addLivro(livroNovo)
            res.status(201)
            res.send('Livro adicionado com sucesso')
        } else {
            res.status(422)
            res.send("Verifique se o objeto que está tentando inserir possui: nome, src, id")
        }


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body

            editarLivro(body, id)
            res.send('Livro modificado com sucesso')
        } else {
            res.status(422)
            res.send("ID fornecida não é válida")
        }


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function livroDelete(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletarLivro(id)
            res.send('Livro deletado com sucesso')
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
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    livroDelete
}
