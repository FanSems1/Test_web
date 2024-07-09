const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now(); 
        const originalname = file.originalname; 
        // const extension = path.extname(file.originalname);

        cb(null, `${timestamp}-${originalname}`); 
    }
});

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 10 * 1000 * 1000 // 10 MB
    }
 });

module.exports = upload;
