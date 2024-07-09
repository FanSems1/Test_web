const express = require('express');
const StokController = require('../controller/stok');

const router = express.Router();

// CREATE - POST
router.post('/', StokController.createNewStok);

// READ - GET
router.get('/', StokController.getAllStok);

// UPDATE - PATCH
router.patch('/:id', StokController.updateStok);

// DELETE - DELETE
router.delete('/:id', StokController.deleteStok);

module.exports = router;
