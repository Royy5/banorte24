function showContent(option) {
    const message = document.getElementById("contentMessage");
    switch (option) {
        case 'opcion1':
            message.textContent = "Has seleccionado la Opción 1.";
            break;
        case 'opcion2':
            message.textContent = "Has seleccionado la Opción 2.";
            break;
        case 'opcion3':
            message.textContent = "Has seleccionado la Opción 3.";
            break;
        case 'opcion4':
            message.textContent = "Has seleccionado la Opción 4.";
            break;
        default:
            message.textContent = "Selecciona una opción del menú.";
    }
}
    const username = localStorage.getItem('username');

    if (username) {
        document.getElementById('user-info').textContent = `Bienvenido, ${username}`;
    }