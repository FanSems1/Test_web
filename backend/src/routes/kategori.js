const express = require('express');
const KategoriController = require('../controller/kategori');

const router = express.Router();

// CREATE - POST
router.post('/', KategoriController.createNewKategori);

// READ - GET
router.get('/', KategoriController.getAllKategori);

// UPDATE - PATCH
router.patch('/:id', KategoriController.updateKategori);

// DELETE - DELETE
router.delete('/:id', KategoriController.deleteKategori);

module.exports = router;
