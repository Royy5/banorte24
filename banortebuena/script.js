function showContent(option) {
    const message = document.getElementById("contentMessage");
    switch (option) {
        case 'opcion1':
            message.textContent = "Bienvenido a nuestra plataforma interactiva de educación financiera, donde combinamos la inteligencia artificial (IA) con herramientas avanzadas para ayudarte a tomar el control de tus finanzas de manera sencilla y personalizada. Aquí encontrarás simuladores financieros y un sistema de registro de gastos que se adaptan a tu perfil, brindándote recomendaciones prácticas para alcanzar tus metas económicas. Nuestra misión es brindarte un recorrido de aprendizaje personalizado: desde lo básico de la gestión financiera hasta decisiones más complejas, como invertir o planificar tu retiro. Con nuestra tecnología de IA, aprenderás a manejar tu dinero de forma efectiva, tomando decisiones informadas y ajustadas a tu situación actual";
            break;
        case 'opcion2':
            // hábitos financieros
            window.location.href = "index2.html";
            break;
        case 'opcion3':
            window.location.href = "index3.html";
            break;
        case 'opcion4':
            window.location.href = "index4.html";
            break;
        default:
            message.textContent = "Selecciona una opción del menú.";
    }
}

// Verificar si hay un nombre de usuario almacenado en localStorage
const username = localStorage.getItem('username');
if (username) {
    document.getElementById('user-info').textContent = `Bienvenido, ${username}`;
}
