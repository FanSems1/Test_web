require('dotenv').config();

const PORT = process.env.PORT || 5000;
const express = require('express');

const usersRoutes = require('./routes/users.js');
const produkRoutes = require('./routes/produk.js'); 
const stokRoutes = require('./routes/stok.js'); 
const kategoriRoutes = require('./routes/kategori.js'); 

const middlewareLogRequest = require('./middleware/logs.js');
const upload = require('./middleware/multer.js');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets', express.static('public/images'));

app.use('/users', usersRoutes);
app.use('/produk', produkRoutes); // Use produk route
app.use('/stok', stokRoutes); // Use stok route
app.use('/kategori', kategoriRoutes); // Use kategori route

app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload Berhasil'
    });
});

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
