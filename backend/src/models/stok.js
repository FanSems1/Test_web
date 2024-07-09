const dbPool = require('../config/database');

const getAllStok = () => {
    const SQLQuery = 'SELECT * FROM tbl_stok';
    return dbPool.execute(SQLQuery);
};

const createNewStok = (body) => {
    const SQLQuery = 'INSERT INTO tbl_stok (id_produk, jumlah_barang, tgl_update) VALUES (?, ?, ?)';
    return dbPool.execute(SQLQuery, [body.id_produk, body.jumlah_barang, body.tgl_update]);
};

const updateStok = (body, id) => {
    const SQLQuery = 'UPDATE tbl_stok SET id_produk=?, jumlah_barang=?, tgl_update=? WHERE id_stok=?';
    return dbPool.execute(SQLQuery, [body.id_produk, body.jumlah_barang, body.tgl_update, id]);
};

const deleteStok = (id) => {
    const SQLQuery = 'DELETE FROM tbl_stok WHERE id_stok = ?';
    return dbPool.execute(SQLQuery, [id]);
};

module.exports = {
    getAllStok,
    createNewStok,
    updateStok,
    deleteStok,
};
