const { Router } = require('express')
const user = Router()
const userController = require('../controllers/userController')
/**
 * Inicio de sesion para usuarios:
 * Poder cargar items de producto al carrito
 * Habilitar carrito si existe una session
 * Get  signIn - View page
 * Post signIn - Form execute
 */
user.get('/signIn', userController.signInPage)  // Muestra el formulario de inicio de sesion
user.post('/signIn', userController.signInValidation) // Valida datos de inicio de sesion
user.get('/logout', userController.logout) // Valida datos de inicio de sesion
/**
 * Get  signUp   - View page
 * Post Register - Form execute
 *      LogOut   - Remove session  
 */
user.get('/signUp', userController.signUpPage)
user.post('/register', userController.register)
/** */
user.get('/logout', userController.signInPage)

/**
 * Agregar al carrito
 * 
 * 
 */

 user.get('/getCart', userController.getCart)
 user.get('/getCart/:id', userController.getCart)
 user.post('/postCart', userController.postCart)

module.exports = user


/**
 * MIDDLEWARE 
 * validaciones
 * verifyToken(jwt)
 * checkRoles
 * checkDuplicatesUserEmail *              
 *  */

/**
 * !  user.get('/login', validation ,userController.getUserId)
 * !  user.get('/register', checkDuplicates, userController.getUserId)
 * !  user.get('/logout', userController.getUserId)
 */
