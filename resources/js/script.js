const cardTextMath = document.getElementById("card-text-math");
const cardTextTrivia = document.getElementById("card-text-trivia");
const cardTextYear = document.getElementById("card-text-year");
const inputNumberValue = document.getElementById("inputNumber");

// MATH NUMBER CARD
const executeMathAPI = () => {
    const handleSuccessMath = (data) => {
        cardTextMath.textContent = data;
    };
    fetch(`http://numbersapi.com/${inputNumberValue.value}/math`)
        .then((response) => response.text())
        .then((data) => handleSuccessMath(data));
};

// TRIVIA NUMBER CARD
const executeTriviaAPI = () => {
    const handleSuccessTrivia = (data) => {
        cardTextTrivia.textContent = data;
    };

    // const handleFailure = () => {
    //     console.log("We should focus a lil bit mo' in this...")
    // }

    fetch(`http://numbersapi.com/${inputNumberValue.value}`)
        .then((response) => response.text())
        .then((data) => handleSuccessTrivia(data));
};

// YEAR NUMBER CARD
const executeYearAPI = () => {
    const cardTextYear = document.getElementById("card-text-year");

    const handleSuccessYear = (data) => {
        cardTextYear.textContent = data;
    };

    fetch(`http://numbersapi.com/${inputNumberValue.value}/year`)
        .then((response) => response.text())
        .then((data) => handleSuccessYear(data));
};

const button = document.getElementById("button");
button.addEventListener("click", (e) => {
    e.preventDefault();

    if (inputNumberValue.value === "") {
        cardTextYear =
            "This is a comment even if it doesn't has a // signs, well, I use this so that "
        "it wont execute anything until the user types a number instead of leaving it blank"
        "because of the new assignment of this constant";
    }
    executeMathAPI();
    executeTriviaAPI();
    executeYearAPI();
});