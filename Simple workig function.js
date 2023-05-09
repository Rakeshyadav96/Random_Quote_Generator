const btnEl = document.getElementById("btn");
const authorEl = document.getElementById("author");
const quoteEl = document.getElementById("quote");
const apiUrl = "https://api.quotable.io/random";

async function getQuote() {
    
        const response = await fetch(apiUrl);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;

        authorEl.innerText = "~" + quoteAuthor;
        quoteEl.innerText = quoteContent;
        btnEl.innerText = "Get a New quote";
   
}

getQuote();
btnEl.addEventListener("click", getQuote);
