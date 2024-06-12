const scriptURL = 'https://script.google.com/macros/s/AKfycbzDllMUV52wCHZk0UI56uCy2dEzCns-zk5iP104EwFPFgJfIJ2uDatZbXsALOrH8U2j/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "thank you for Subscribing!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
