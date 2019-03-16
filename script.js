
function getRandom() {

   return Math.floor((Math.random() * quotes.length));
}

function newQuote() {

    var index = getRandom();

    document.getElementById("text").innerHTML = "\"" + quotes[index].text + "\"";
    document.getElementById("author").innerHTML = "- " + quotes[index].author;
}

function tweetQuote() {

    window.open("https://www.twitter.com/intent/tweet?text=" + document.getElementById("text").innerHTML);
} 