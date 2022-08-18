// app element required
let imageOnCard = "https://www.dyrenesbeskyttelse.dk/sites/dyrenesbeskyttelse.dk/files/2020-02/Roskilde%20sort%20kat%20KIM%20JOHNSEN.jpg";
let imageHeader = "Venlig kattekilling?";
let imageDescription = "Dette er Kiwi, hun er 2 måneder gammel og MEGET skræmmende"
// let imageWidth = 500;
// let imageHeight = 300;


const myApp = document.getElementById("app");
const newDiv = document.createElement("div");

const myCard = document.createElement("figure");
const cardHeadline = document.createElement("h2");
const cardDescription = document.createElement("p")

// definere text
newDiv.innerHTML = "<h1>hellow world</h1>"
cardHeadline.innerText = imageHeader;
cardDescription.innerHTML = imageDescription;

// Billede
const cardImage = document.createElement("img");
cardImage.src = imageOnCard;
myCard.classList = "galleryCard";
// cardImage.setAttribute("height", imageHeight);
// cardImage.setAttribute("width", imageWidth);

//indsætter elementer i DOM
// myApp.appendChild(newDiv);
myApp.appendChild(myCard);
myCard.appendChild(cardHeadline);
myCard.appendChild(cardImage);
myCard.appendChild(cardDescription);