let popup = document.getElementById("popup");


document.getElementById("click").addEventListener("click", () => {
    popup.classList.add("open-popup");
});

document.getElementById("close").addEventListener("click", () => {
    popup.classList.remove("open-popup");
});