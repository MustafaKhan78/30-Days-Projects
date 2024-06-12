const select = document.getElementById('select');
const color = document.getElementById('color');
select.addEventListener('change', (options)=> {
    color.style.backgroundColor = options.target.value
    generateNumber(0, 7, options)
})

function generateNumber(min, max, options) {
    const random = parseInt(Math.random() * (max - min) + min);
    document.body.style.backgroundColor = options.target[random].value
}