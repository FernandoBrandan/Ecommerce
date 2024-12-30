// Variables
const linkCart = document.querySelector(".link-cart");
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");

cargarEventListeners();
function cargarEventListeners() {
  listaCursos.addEventListener("click", agregarCurso);
  carrito.addEventListener("click", eliminarCurso);
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
}
 
