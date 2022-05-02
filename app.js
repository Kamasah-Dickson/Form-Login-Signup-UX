const registerBtn = document.getElementById('register');
const loginLink = document.getElementById('loginLink');
const closeBtn = document.getElementById('close');
const forgotPassword = document.getElementById('password');
const regisContainer = document.getElementById('register-container');
const loginContainer = document.getElementById('login-container');
const resetContainer = document.getElementById('reset-container');

window.ondragstart = () => false;

forgotPassword.addEventListener('click', () => {
    loginContainer.style.display ="none"; 
    resetContainer.style.display ="flex";
});

registerBtn.addEventListener('click', () => {
loginContainer.style.display="none";
regisContainer.style.display="flex"; 
});

loginLink.addEventListener('click', () => {
   regisContainer.style.display ="none";
   loginContainer.style.display ="flex";
});

closeBtn.addEventListener('click', () => {
resetContainer.style.display ="none";
loginContainer.style.display ="flex";
});


