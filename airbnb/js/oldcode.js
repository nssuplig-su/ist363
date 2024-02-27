// function renderProperties(properties) {
//   properties.forEach((room) => {
//     // create elements
//     const roomArticle = document.createElement("article");
//     roomArticle.classList.add("room");

//     const roomNameElement = document.createElement("h3");
//     roomNameElement.classList.add("room--name");
//     roomNameElement.textContent = room.name;

//     const roomDescriptionElement = document.createElement("p");
//     roomDescriptionElement.classList.add("room--description");
//     roomDescriptionElement.textContent = room.description;

//     const roomPriceElement = document.createElement("p");
//     roomPriceElement.textContent = `Price: ${room.price}`;

//     const roomGuestsElement = document.createElement("p");
//     roomGuestsElement.textContent = `Guests: ${room.guests}`;

//     roomArticle.appendChild(roomNameElement);
//     roomArticle.appendChild(roomDescriptionElement);
//     roomArticle.appendChild(roomPriceElement);
//     roomArticle.appendChild(roomGuestsElement);

//     document.body.appendChild(roomArticle);
//   }); // end of forEach
// } // end of renderProperties
