const { Router } = require("express");
const admin = Router();

admin.get("/addProduct", (req, res) => {
  
  if (req.session.email) {
    userEmail = req.session.email;
  } 
  res.render("admin/addProduct", { userEmail: userEmail });
});

admin.get("/editProduct", () => {});


admin.get("/createUser", (req, res) => {
  if (req.session.email) {
    userEmail = req.session.email;
  } 
  res.render("admin/createUser", { userEmail: userEmail });
});

module.exports = admin;
