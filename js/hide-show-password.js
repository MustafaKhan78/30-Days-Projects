const eyeicon = document.getElementById("eyeicon");
const password = document.getElementById("password");

eyeicon.addEventListener("click", () => {
    if (password.type == "password") {
        password.type = "text";
        eyeicon.src = "../image/eye-open.png"
    } else {
        password.type = "password";
        eyeicon.src = "../image/eye-close.png"
    }
});