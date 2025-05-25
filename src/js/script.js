const cards = document.querySelectorAll(".card");


const btnForward = document.getElementById("btn-forward");
const btnBack = document.getElementById("btn-back");


let currentCardIndex = 0;


function hideSelectedCard() {
    const selectedCard = document.querySelector(".selected");
    selectedCard.classList.remove("selected");
}

function showCard(cardIndex) {
    cards[cardIndex].classList.add("selected");
}


btnForward.addEventListener("click", function () {
        if (currentCardIndex === cards.length - 1) {
        return;
    }

        hideSelectedCard();

    currentCardIndex++;
    
    showCard(currentCardIndex);
});


btnBack.addEventListener("click", function () {
    
    if (currentCardIndex === 0) {
    return;
    }

    hideSelectedCard();

    currentCardIndex--;
    showCard(currentCardIndex);
});