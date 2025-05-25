const cards = document.querySelectorAll(".card");

const btnForward = document.getElementById("btn-forward");
const btnBack = document.getElementById("btn-back");

let currentCardIndex = 0;

function updateButtonStates() {
    if (currentCardIndex === 0) {
        btnBack.classList.add("disabled");
    } else {
        btnBack.classList.remove("disabled");
    }

    if (currentCardIndex === cards.length - 1) {
        btnForward.classList.add("disabled");
    } else {
        btnForward.classList.remove("disabled");
    }
}

function hideSelectedCard() {
    const selectedCard = document.querySelector(".selected");
    selectedCard.classList.remove("selected");
}

function showCard(cardIndex) {
    cards[cardIndex].classList.add("selected");
}

updateButtonStates();

btnForward.addEventListener("click", function () {
    if (currentCardIndex === cards.length - 1) {
        return;
    }

    hideSelectedCard();
    currentCardIndex++;
    showCard(currentCardIndex);
    updateButtonStates();
});

btnBack.addEventListener("click", function () {
    if (currentCardIndex === 0) {
        return;
    }

    hideSelectedCard();
    currentCardIndex--;
    showCard(currentCardIndex);
    updateButtonStates();
});