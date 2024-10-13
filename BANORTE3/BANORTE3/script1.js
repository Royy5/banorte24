function showRegistration() {
    document.getElementById('registration-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}

function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('registration-form').style.display = 'none';
}

function continueAsGuest() {
    alert('Has elegido continuar sin registrarte. Tendrás acceso limitado.');
    window.location.href = 'financial-education.html'; 
}

document.getElementById('registerForm').onsubmit = function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Guardar los datos en LocalStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Te has registrado exitosamente, ¡bienvenido!');
    window.location.href = 'index.html';
};

document.getElementById('loginForm').onsubmit = function (e) {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Obtener los datos guardados en LocalStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Verificar si el usuario existe y la contraseña es correcta
    if (username === storedUsername && password === storedPassword) {
        alert('Inicio de sesión exitoso, ¡bienvenido de vuelta!');
        window.location.href = 'index.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos.');
    }
};