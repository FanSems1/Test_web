const ProdukModel = require('../models/produk');

const getAllProduk = async (req, res) => {
    try {
        const [data] = await ProdukModel.getAllProduk();
        res.json({
            message: 'Get all produk success',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

const createNewProduk = async (req, res) => {
    const { body } = req;
    try {
        await ProdukModel.createNewProduk(body);
        res.status(201).json({
            message: 'Create new produk success',
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

const updateProduk = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        await ProdukModel.updateProduk(body, id);
        res.json({
            message: 'Update produk success',
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

const deleteProduk = async (req, res) => {
    const { id } = req.params;
    try {
        await ProdukModel.deleteProduk(id);
        res.json({
            message: 'Delete produk success',
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
    getAllProduk,
    createNewProduk,
    updateProduk,
    deleteProduk,
}
