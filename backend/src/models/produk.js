const dbPool = require('../config/database');

const getAllProduk = () => {
    const SQLQuery = `
        SELECT 
            produk.id_produk,
            produk.kode_produk,
            produk.nama_produk,
            produk.tgl_register,
            stok.id_stok,
            stok.jumlah_barang,
            stok.tgl_update,
            kategori.id_kategori,
            kategori.nama_kategori
        FROM 
            tbl_produk AS produk
        JOIN 
            tbl_stok AS stok ON produk.id_produk = stok.id_produk
        JOIN 
            tbl_kategori AS kategori ON produk.id_kategori = kategori.id_kategori
    `;
    return dbPool.execute(SQLQuery);
};

const createNewProduk = (body) => {
    const SQLQuery = 'INSERT INTO tbl_produk (id_kategori, nama_produk, kode_produk, foto_produk, tgl_register) VALUES (?, ?, ?, ?, ?)';
    return dbPool.execute(SQLQuery, [body.id_kategori, body.nama_produk, body.kode_produk, body.foto_produk, body.tgl_register]);
};

const updateProduk = (body, id) => {
    const SQLQuery = 'UPDATE tbl_produk SET id_kategori=?, nama_produk=?, kode_produk=?, foto_produk=?, tgl_register=? WHERE id_produk=?';
    return dbPool.execute(SQLQuery, [body.id_kategori, body.nama_produk, body.kode_produk, body.foto_produk, body.tgl_register, id]);
};

const deleteProduk = (id) => {
    const SQLQuery = 'DELETE FROM tbl_produk WHERE id_produk = ?';
    return dbPool.execute(SQLQuery, [id]);
};

module.exports = {
    getAllProduk,
    createNewProduk,
    updateProduk,
    deleteProduk,
};
