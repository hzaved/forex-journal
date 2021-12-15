function openForm() {
    document.getElementById("myForm").style.display = "block";
};

function closeForm() {
    document.getElementById("myForm").style.display = "none";
};

function sendForm() {
    document.getElementById("myForm").style.display = "none";
};

// Search Input
const searchInput = document.getElementById('forex-ticker-input');
searchInput.addEventListener('input', onSearchInput);

function onSearchInput(e) {
    e.target.value = e.target.value.toUpperCase();
}

// Currency search 

var searchTerm = "";
var forexResults = {};

function getForexResults() {
    const apiKey = 'b13e205f8933b1a52fd1fd509f8c3d41';
    const urlString = `http://api.currencylayer.com/live?access_key=${apiKey}`

    fetch(urlString, {
        method: "get"
    })
    .then(response => response.json())
    .then(jsonData => {
        // response from the API is here
        forexResults = jsonData.quotes;
        console.log("forexResults:", forexResults);
    })
    .catch(error => {
       //error block
        console.log("error:", error);
    });
}
// execute function and get forex results right away on browser load
getForexResults();

const submitForex = document.getElementById("submit-forex");
submitForex.addEventListener("click", function(event) {
    event.preventDefault();

    searchTerm = document.getElementById("forex-ticker-input").value;
    console.log("searchTerm:", searchTerm);

    searchTicker(searchTerm);
});

function searchTicker(forexPairName) {
    const forexPairPrice = forexResults[forexPairName];
    displayResults(forexPairName, forexPairPrice);
};

function displayResults(name, price) {
    const forexResult = document.getElementById("forex-result");
    forexResult.classList.remove('error');

    if (!name || !price) {
        forexResult.innerText = `Pair ${name} not found`;
        forexResult.classList.add('error');
        return
    }
    
    forexResult.innerText = `Price for pair ${name} is $${price.toFixed(2)}`;
}
