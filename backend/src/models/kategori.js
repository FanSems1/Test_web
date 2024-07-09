const dbPool = require('../config/database');

const getAllKategori = () => {
    const SQLQuery = 'SELECT * FROM tbl_kategori';
    return dbPool.execute(SQLQuery);
};

const createNewKategori = (body) => {
    const SQLQuery = 'INSERT INTO tbl_kategori (nama_kategori) VALUES (?)';
    return dbPool.execute(SQLQuery, [body.nama_kategori]);
};

const updateKategori = (body, id) => {
    const SQLQuery = 'UPDATE tbl_kategori SET nama_kategori=? WHERE id_kategori=?';
    return dbPool.execute(SQLQuery, [body.nama_kategori, id]);
};

const deleteKategori = (id) => {
    const SQLQuery = 'DELETE FROM tbl_kategori WHERE id_kategori = ?';
    return dbPool.execute(SQLQuery, [id]);
};
const filterKategori = (id) => {
    const SQLQuery = 'DELETE FROM tbl_kategori WHERE id_kategori = ?';
    return dbPool.execute(SQLQuery, [id]);
};

module.exports = {
    getAllKategori,
    createNewKategori,
    updateKategori,
    deleteKategori,
};
