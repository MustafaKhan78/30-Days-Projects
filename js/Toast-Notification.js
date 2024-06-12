let toastBox = document.getElementById('toast-box');
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted'
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again'

document.getElementById("successbutton").addEventListener("click", function () {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = successMsg;
    toastBox.appendChild(toast);

    setTimeout(() =>{
        toast.remove();
    },5000);
});

document.getElementById("errorbutton").addEventListener("click", function () {
    let toast = document.createElement('div');
    toast.classList.add('toast','error');
    toast.innerHTML = errorMsg;
    toastBox.appendChild(toast);

    setTimeout(() =>{
        toast.remove();
    },5000);
});

document.getElementById("invalidbutton").addEventListener("click", function () {
    let toast = document.createElement('div');
    toast.classList.add('toast','invalid');
    toast.innerHTML = invalidMsg;
    toastBox.appendChild(toast);

    setTimeout(() =>{
        toast.remove();
    },5000);
});