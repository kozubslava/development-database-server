const multer = require("multer");
const psth = require("path");
const fs = require("fs");

const imagesPath = path.resolve(__dirname, "..", "public", "images");

if (!fs.existsSync(imagesPath)) {
  fs.mkdirSync(imagesPath, {
    recursive: true,
  });
}

const storageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagesPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const imageUpload = multer({ stotrge: storageConfig });

module.exports = imageUpload;
