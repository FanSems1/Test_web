const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();

        res.json({
            message: 'Get all users success',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        });
    }
};

const createNewUsers = async (req, res) => {
    const {body} = req;

    try {
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: 'Create new users success',
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
    
}
const updateUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateUser(body, id);
        res.json({
            message: 'Update User success',
            data: {
                id: id,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        await UsersModel.deleteUser(id);
        res.json({
            message: 'Delete user success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })       
    }
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUser,
    deleteUser,
}