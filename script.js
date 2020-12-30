const colors = {
    BRA: "green",
    AUT: "red",
    USA: "darkblue",
    ESP: "gold"
}
// list of quotes
const quotes = [
    {
        quote: "I have no idols. I admire work, dedication and competence.",
        author: "Ayrton Senna",
        color: colors.BRA
    },
    {
        quote: "If you no longer go for a gap that exists, you are no longer a racing driver.",
        author: "Ayrton Senna",
        color: colors.BRA
    },
    {
        quote: "Being second is to be the first of the ones who lose.",
        author: "Ayrton Senna",
        color: colors.BRA
    },
    {
        quote: "Really, you should always discuss the defeats because you can learn much more from failure than from success.",
        author: "Niki Lauda",
        color: colors.AUT
    },
    {
        quote: "If everything seems under control, you’re not going fast enough.",
        author: "Mario Andretti",
        color: colors.USA
    },
    {
        quote: "When you aim perfection, you discover that it is a moving target.",
        author: "Fernando Alonso",
        color: colors.ESP
    }
]

// generates a random quote in DOM
function getRandomQuote()
{
    let randomNum = Math.floor(Math.random() * quotes.length);

    document.getElementById("text").innerHTML = quotes[randomNum].quote;
    document.getElementById("author").innerHTML = quotes[randomNum].author;

    document.body.style.background = quotes[randomNum].color;

    let twitterUrl = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";

    // adding quote to twitterUrl
    let quoteUrl = '"' + quotes[randomNum].quote.replace(/ /g, "%20");
    twitterUrl += quoteUrl;

    // adding author to twitterUrl
    let authorUrl = quotes[randomNum].author.replace(/ /g, "%20");
    twitterUrl += '" - ' + authorUrl;

    document.getElementById("tweet-quote").href = twitterUrl;

}

getRandomQuote();