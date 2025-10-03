const form = document.getElementById("registerForm");
let users = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const newUser = {
        name: document.getElementById("name").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    form.reset();
});