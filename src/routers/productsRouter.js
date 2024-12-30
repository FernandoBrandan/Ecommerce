const { Router } = require("express");
const product = Router();

const productController = require("../controllers/productsController");
const multer = require("../middlewares/multerFiles");

product.get("/categories", productController.getCategoryList);
/** */
product.get("/", productController.getProductList);
product.get("/:id", productController.getProductId);
product.post("/", multer.uploadImage, productController.postProduct);

/** */
product.post("/buy", productController.buy);
product.post("/addCart", productController.addCart);

module.exports = product;
