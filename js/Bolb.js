document.getElementById("on").addEventListener("click", function () {
    document.getElementById("bolb").style.background = "yellow";
    document.body.style.background = "lightyellow";
});


document.getElementById("off").addEventListener("click", function () {
    document.getElementById("bolb").style.background = "#333";
    document.body.style.background = "#111";
});