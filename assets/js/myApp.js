
const myApp = document.getElementById("app");

buildCard("Koala", "https://dk-drupaller-prod-s3bucket-ymg73fqfni8n.s3.amazonaws.com/udeoghjemme/s3fs-public/styles/full_height_8grid/public/media/article/koalabjoern-der-raekker-tunge_shutterstock_88327147.jpg", "Friendly Koala");

buildCard("Koala", "https://i.ytimg.com/vi/pJumRr72aW4/hqdefault.jpg", "Sad Koala");

buildCard("Koala", "https://i1.sndcdn.com/artworks-000183110244-4i0vhj-t500x500.jpg", "Evil Koala");

function buildCard(myHtwo, myUrl, myDescription){
    // card elements

    const myCard = document.createElement("figure");
    const cardHeadline = document.createElement("h2");
    const cardDescription = document.createElement("p")


    // Billede
    const cardImage = document.createElement("img");
    cardImage.src = myUrl;
    cardHeadline.innerText = myHtwo;
    cardDescription.innerHTML = myDescription;
    myCard.classList = "galleryCard";

    //indsætter elementer i DOM
    myApp.appendChild(myCard);
    myCard.appendChild(cardHeadline);
    myCard.appendChild(cardImage);
    myCard.appendChild(cardDescription);
}