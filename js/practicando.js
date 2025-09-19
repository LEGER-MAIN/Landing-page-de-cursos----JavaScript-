// Variables
const carrito = document.querySelector('#carrito')
const listaCursos = document.querySelector('#lista-cursos')

cargarEventsListenners()
function cargarEventsListenners() {
     listaCursos.addEventListener('click', agregarCarrito)
}

function agregarCarrito(e) {
     e.preventDefault()

     if(e.target.classList.contains('agregar-carrito')) {
          const cursoSeleccionado = e.target.parentElement.parentElement
          leerDatosCurso(cursoSeleccionado)
     }
}

function leerDatosCurso(curso) {
     const infoCurso = {
          image: curso.querySelector('img').src,
          titulo: curso.querySelector('h4').textContent,
          precio: curso.querySelector('.precio span').textContent,
          id: curso.querySelector('a').getAttribute('data-id'),
          cantidad: 1
     }
     console.log(infoCurso)
}