function togglePassword() {
  const input = document.getElementById("password");
  const eyeOpen = document.getElementById("eyeOpen");
  const eyeSlash = document.getElementById("eyeSlash");

  if (input.type === "password") {
    input.type = "text";
    eyeOpen.style.display = "none";
    eyeSlash.style.display = "block";
  } else {
    input.type = "password";
    eyeOpen.style.display = "block";
    eyeSlash.style.display = "none";
  }
}