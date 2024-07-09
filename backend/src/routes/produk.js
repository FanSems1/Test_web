const express = require('express');
const ProdukController = require('../controller/produk');

const router = express.Router();

// CREATE - POST
router.post('/', ProdukController.createNewProduk);

// READ - GET
router.get('/', ProdukController.getAllProduk);

// UPDATE - PATCH
router.patch('/:id', ProdukController.updateProduk);

// DELETE - DELETE
router.delete('/:id', ProdukController.deleteProduk);

module.exports = router;
