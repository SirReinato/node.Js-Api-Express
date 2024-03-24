const { Router } = require("express")
const { getFavoritos, postFavorito, favoritoDelete } = require("../controladores/favorito");
const router = Router();


router.get('/', getFavoritos)

router.post('/:id', postFavorito)

router.delete('/:id', favoritoDelete)

module.exports = router