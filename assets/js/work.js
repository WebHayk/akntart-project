const cards = document.querySelector('#cards');
const url = 'assets/json/images.json';

async function getImg() {
    let response = await fetch(url);
    let photos = await response.json();
    photos = photos.splice(0,10);

    let key;

    for (key in photos) {
        cards.innerHTML += `
          <img src = "${photos[key].image}" class = "card-img">
        `
    }
}

getImg();