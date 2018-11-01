const cardsColor = ["red", "red", "green", "green"
    , "blue", "blue", "brown", "brown", "yellow", "yellow",
    "gray", "gray", "cadetblue","cadetblue", "violet", "violet",
    "lightgreen", "lightgreen"];

let cards = document.querySelectorAll("div");
cards = [...cards];
const startTime = new Date().getTime();
let activeCard = "";
const activeCards = [];

const gamePairs = cards.length / 2;
let gameResult = 0;


const clickCard = function ()
{
    activeCard = this;
    activeCard.classList.remove("hidden");

    if (activeCards.length === 0) {
        activeCards[0] = activeCard;
        return;
    } else
    {
        cards.forEach(card =>
        {
            card.removeEventListener("click", clickCard);
        })
    }

};
const init = function ()
{
    cards.forEach(function (card)
    {
        const position = Math.floor(Math.random() * cardsColor.length);
        card.classList.add(cardsColor[position]);
        cardsColor.splice(position,1);
    })
    setTimeout(function () {
        cards.forEach(function (card)
        {
            card.classList.add("hidden");
            card.addEventListener("click",clickCard)
        })
    }, 2000)
}
init()