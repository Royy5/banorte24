// Función para mostrar u ocultar secciones al hacer clic en los enlaces de navegación
function mostrarSeccion(seccionId) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('main section');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });
    // Mostrar la sección seleccionada
    const seccionSeleccionada = document.getElementById(seccionId);
    if (seccionSeleccionada) {
        seccionSeleccionada.style.display = 'block';
    }
}
// Asignar el evento click a los enlaces de navegación
const enlacesNavegacion = document.querySelectorAll('header nav ul li a');
enlacesNavegacion.forEach(enlace => {
    enlace.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar que el enlace redirija a otra página
        const seccionId = enlace.getAttribute('href').substring(1); // Obtener el ID de la sección del enlace
        mostrarSeccion(seccionId);
    });
});
// Mostrar la sección de gastos por defecto al cargar la página
mostrarSeccion('gastos');
// Manejar el envío de los formularios
const formularios = document.querySelectorAll('form');
formularios.forEach(formulario => {
    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional
        // Aquí puedes agregar el código para manejar los datos del formulario,
        // como enviarlos a un servidor o guardarlos en el almacenamiento local
        console.log('Formulario enviado:', formulario.id);
        // Puedes mostrar un mensaje de éxito al usuario
        alert('Datos registrados correctamente.');
        // Restablecer el formulario después del envío
        // formulario.reset();
    });
});