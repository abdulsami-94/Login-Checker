const nameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const form = document.getElementById("loginForm");
const output = document.getElementById("output");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = nameInput.value;
    const password = passwordInput.value;

    if (username && password) {
       output.textContent = `Login successfull 🎉` ;
    } else {
        output.textContent = `Login Fail 🥀`  ;

    }
})