let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

let n = document.getElementById("contact-name").addEventListener("keyup", () => {
    const name = document.getElementById("contact-name").value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required'
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
})


let p = document.getElementById("contact-phone").addEventListener("keyup", () => {
    const phone = document.getElementById("contact-phone").value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits'
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits please';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true;
})

let e = document.getElementById("contact-email").addEventListener("keyup", () => {
    const email = document.getElementById("contact-email").value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }

    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true;
})

let m = document.getElementById("contact-message").addEventListener("keyup", () => {
    const message = document.getElementById("contact-message").value;
    const required = 30;
    const left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + 'more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true;
})

document.getElementById("submit").addEventListener("click", () => {
    if (!n || !p || !e || !m) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit'
        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
});