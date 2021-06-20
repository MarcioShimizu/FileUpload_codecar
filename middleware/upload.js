const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");

const storage = new GridFsStorage({
    url: process.env.DB,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg","application/pdf"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}code-fy${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "files",
            filename: `${Date.now()}code-fy${file.originalname}`,
        };
    },
});

module.exports = multer({ storage });