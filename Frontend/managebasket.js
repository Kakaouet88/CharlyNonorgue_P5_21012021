// AFFICHER NBR ARTICLES

function displayBasketContent() {
  let basketContent = getBasket().length;
  document.getElementById("basketNbr").innerHTML = " " + basketContent;
}

displayBasketContent();

function getBasket() {
  var basket = localStorage.getItem("basket");
  if (basket == null) {
    return [];
  } else {
    return JSON.parse(basket);
  }
}

function addToBasket(product) {
  var basket = getBasket();
  basket.push(product);
  localStorage.setItem("basket", JSON.stringify(basket));
  displayBasketContent();
}

function removeFromBasket(product) {
    
}