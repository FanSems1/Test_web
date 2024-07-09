const StokModel = require('../models/stok');

const getAllStok = async (req, res) => {
    try {
        const [data] = await StokModel.getAllStok();
        res.json({
            message: 'Get all stok success',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

const createNewStok = async (req, res) => {
    const { body } = req;
    try {
        await StokModel.createNewStok(body);
        res.status(201).json({
            message: 'Create new stok success',
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

const updateStok = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        await StokModel.updateStok(body, id);
        res.json({
            message: 'Update stok success',
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

const deleteStok = async (req, res) => {
    const { id } = req.params;
    try {
        await StokModel.deleteStok(id);
        res.json({
            message: 'Delete stok success',
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
    getAllStok,
    createNewStok,
    updateStok,
    deleteStok,
}
