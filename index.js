// Henter container-elementet og knappene for registrering og pålogging
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Legger til en hendelselytter for registreringsknappen
registerBtn.addEventListener('click', () => {
    // Aktiverer registreringsskjema og skjuler påloggingsskjema ved å legge til klassen "active"
    container.classList.add("active");
});

// Legger til en hendelselytter for påloggingsknappen
loginBtn.addEventListener('click', () => {
    // Aktiverer påloggingsskjema og skjuler registreringsskjema ved å fjerne klassen "active"
    container.classList.remove("active");
});