const KategoriModel = require('../models/kategori');

const getAllKategori = async (req, res) => {
    try {
        const [data] = await KategoriModel.getAllKategori();
        res.json({
            message: 'Get all kategori success',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

const createNewKategori = async (req, res) => {
    const { body } = req;
    try {
        await KategoriModel.createNewKategori(body);
        res.status(201).json({
            message: 'Create new kategori success',
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

const updateKategori = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        await KategoriModel.updateKategori(body, id);
        res.json({
            message: 'Update kategori success',
            data: {
                id: id,
                ...body
            },
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

const deleteKategori = async (req, res) => {
    const { id } = req.params;
    try {
        await KategoriModel.deleteKategori(id);
        res.json({
            message: 'Delete kategori success',
            data: null
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

module.exports = {
    getAllKategori,
    createNewKategori,
    updateKategori,
    deleteKategori,
}
