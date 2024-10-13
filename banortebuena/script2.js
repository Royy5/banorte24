// Ocultar o mostrar campos de inversión y renta
function toggleInvesting(show) {
    const InvestingsAmountShow = document.getElementById('InvestingsAmountShow');
    InvestingsAmountShow.classList.toggle('hidden', !show);
}

function toggleRent(show) {
    const RentAmountShow = document.getElementById('RentAmountShow');
    RentAmountShow.classList.toggle('hidden', !show);
}

// Manejar el envío del formulario y redireccionar a la opción 2
document.getElementById('financialForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto
    window.location.href = "index.html"; // Redirige al archivo principal

    // Usar setTimeout para esperar hasta que la página principal se cargue
    setTimeout(function() {
        showContent('opcion2'); // Muestra la opción 2 en el menú
    }, 500); // Ajusta el tiempo de espera según sea necesario
});
