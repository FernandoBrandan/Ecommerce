const { Router } = require("express");
const home = Router();

/**
 * Home page
 * TODO: 
 * Validar sesion
 * Traer datos usuario
 * Habilitar funciones
 */
home.get("/", (req, res) => {
  let userEmail;
  let userRol;
  if (req.session.email) {
    userEmail = req.session.email;
  }
  if (req.session.rol) {
    userRol = req.session.rol;
  }
  res.render("pages/home", { userEmail, userRol });
});
module.exports = home;
