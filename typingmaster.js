let speedTypingTestContainer = document.getElementById("speedTypingTest");

let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");

let quoteInputEl = document.getElementById("quoteInput");

let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");

let spinnerEl = document.getElementById("spinner");

function requestQuote() {
    let requestUrl = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            //console.log(jsonData);
            let {
                content
            } = jsonData;
            quoteDisplayEl.textContent = content;
        });
}


requestQuote();
let uniqueId;

function startTimer() {
    let counter = 0;
    uniqueId = setInterval(function() {
        timerEl.textContent = counter;
        counter = counter + 1;
    }, 1000);

    // return uniqueId;
}

startTimer();

submitBtn.onclick = function() {
    if (quoteDisplayEl.textContent === quoteInputEl.value) {
        resultEl.textContent = "You have typed in " + timerEl.textContent + " seconds";
        clearInterval(uniqueId);
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
};

resetBtn.onclick = function() {
    speedTypingTestContainer.classList.add("d-none");
    spinnerEl.classList.remove("d-none");
    requestQuote();
    speedTypingTestContainer.classList.remove("d-none");
    spinnerEl.classList.add("d-none");
    clearInterval(uniqueId);
    startTimer();
    quoteInputEl.value = "";
    resultEl.textContent = "";
};