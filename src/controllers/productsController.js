const productModel = require("../models/productModel");

const getCategoryList = (req, res) => {
  res.render("products/CategoryList", { title: "titulo" });
};

const getProductList = async (req, res) => {
  const productList = await productModel.find();
  if (productList) {
    let userEmail;
    if (req.session.email) {
      userEmail = req.session.email;
    }
    res.render("products/productsList", { products: productList, userEmail: userEmail });
  }
};

const getProductId = async (req, res) => {
  const product = await productModel.findById({_id: req.params.id})  
  if(product){
    res.render("products/productsDetail", { product });
  }
};

const postProduct = async (req, res) => {
  const { name, description } = req.body;
  const { filename } = req.file;
  const newProduct = new productModel({ name, description, image: filename });
  const productSaved = await newProduct.save();
  if (productSaved) {
    console.log("okkkkk");
  }
};

/*********************************************************************************************************+ */

const buy = () => {}
const addCart = () => {}


/*********************************************************************************************************+ */
/** Utilities */
/*********************************************************************************************************+ */

module.exports = {
  getCategoryList,
  getProductList,
  getProductId,
  postProduct,
  /** */
  buy,
  addCart,
};
