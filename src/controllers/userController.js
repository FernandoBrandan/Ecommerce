const userModel = require("../models/userModel");
const cartModel = require("../models/cartModel");

const bcrypt = require("bcrypt");



const signInPage = async (req, res) => {
  /**
   * Principal Login page redirection
   */
  res.render("user/login");
};

const signInValidation = async (req, res) => {
  /**
   * User login validation *
   * TODO: Validar email formato en front *
  */
  try {
    const { email, password } = req.body;
    const userData = await userModel.findOne({ email: email });
    if (userData) {
      const VPWD = await bcrypt.compare(password, userData.password);
      if (VPWD) {
        req.session.email = userData.email;
        req.session.rol = userData.rol;
        res.redirect("/home");
      } else {
        res.render("user/login", { confirmpass: "Error, try again" });
      }
    } else {
      res.render("user/login", { confirmpass: "Incorrect email" });
    }
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req, res) => {   
  /**
   * logout user
   */
  
  req.session.destroy();
  res.redirect("/");
};

/*********************************************************************************************************+ */
/*********************************************************************************************************+ */

const signUpPage = async (req, res) => {
  /**
   * Principal SignUp page redirection
   */
  res.render("user/register");
};

const register = async (req, res) => {
  /**
   * User login validation 
   * TODO: 
   * usar flash ????
   */
  try {
    console.log("entro a register");
    const { email, newPassword, confirmPasword, rol } = req.body;
    let userData = await userModel.findOne({ email: email });
    if (!userData) {
      if (newPassword === confirmPasword) {
        const password = await passwordEncription(newPassword);
        console.log(password);
        if (password) {
          const newUser = new userModel({ email, password, rol });
          const userSaved = await newUser.save();
          if (userSaved) {
            res.render("user/register", {
              succ: "SuccessFully Create Your Account",
            });
          }
        } else {
          res.render("user/register", {
            succ: "The password are not encripted, please contact to support",
          });
        }
      } else {
        res.render("user/register", {
          succ: "The password are not same, please check it",
        });
      }
    } else {
      res.render("user/register", {
        succ: "Email exist, please change",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

/*********************************************************************************************************+ */
/*********************************************************************************************************+ */

const getCart = async (req, res) => {  

  let userEmail;
  if (req.session.email) {
    userEmail = req.session.email;
  }
  /**
   * select productModel.name, productModel.description, productModel.price, cartModel.amount
   * from productModel, cartModel
   * where cartModel.email = session.email
   * and cartModel.productoID = productModel.id 
   */  
  const userCart = await cartModel.find({email , userEmail})
  res.render("pages/cart", { userEmail: userEmail });
}

const postCart = async (req, res) => {
  
  const newProductCart = new userModel({ email, productID });
  const productCartSave = await newProductCart.save();
  if(productCartSave){

  }

}

/*********************************************************************************************************+ */
/** Utilities */
/*********************************************************************************************************+ */
const passwordEncription = (password) => {
  encipted = bcrypt.hash(password, 10);
  return encipted;
};

/*********************************************************************************************************+ */
module.exports = {
  signInPage,
  signInValidation,
  logout,
  signUpPage,
  register,
  getCart,
  postCart,
};
