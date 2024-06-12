const quote = document.getElementById("Quote");
const auther = document.getElementById("auther");
const api_url = "https://api.quotable.io/random";


async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json()

    quote.innerHTML = data.content;
    auther.innerHTML = data.author;
}

getQuote(api_url);

document.getElementById("new").addEventListener("click", function () {
    getQuote(api_url);
})

document.getElementById("tweet").addEventListener("click", function () {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + auther.innerHTML, "Tweet Window","width=600,height=300,top=200px,left=300px")
})