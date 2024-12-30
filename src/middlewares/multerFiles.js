const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/img"),
  filename: (req, file, callback) => {
    callback(null, req.body.name + "-" + file.originalname);
  },
});

const uploadImage = multer({
  storage,
  limits: { fileSize: 1000000 },
}).single("image");

module.exports = { 
    uploadImage
  };
