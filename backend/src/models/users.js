const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM tbl_user';
    return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
    const SQLQuery = 'INSERT INTO users (name, email, address) VALUES (?, ?, ?)';
    return dbPool.execute(SQLQuery, [body.name, body.email, body.address]);
};

const updateUser = (body, id) => {
    const SQLQuery = 'UPDATE users SET name=?, email=?, address=? WHERE id=?';
    return dbPool.execute(SQLQuery, [body.name, body.email, body.address, id]);
};

const deleteUser = (id) => {
    const SQLQuery = 'DELETE FROM tbl_user WHERE id_user = ?';
    return dbPool.execute(SQLQuery, [id]);
};
module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
};
