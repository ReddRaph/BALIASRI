const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
        (user) => user.email === email && user.password === password
    );

    if (foundUser) {
        window.location.href = "dashboard.html";
    } else {
        alert("Email atau password salah. Silakan coba lagi.");
    }

    loginForm.reset();
});