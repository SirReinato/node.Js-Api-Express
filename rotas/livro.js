const {Router} = require("express");
const { getLivros, getLivro, postLivro, patchLivro, livroDelete } = require("../controladores/livro");

const router = Router();

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', livroDelete)

module.exports = router