// POUR FORMATER LES PRIX
function numberWithCommas(x) {
  var formatedPrice = x / 100;
  return formatedPrice;
}
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

function removeFromBasket(productObj) {
  var basket = getBasket();
  basket = basket.filter(
    (product) =>
      product.id != productObj.id || product.color != productObj.color
  );
  localStorage.setItem("basket", JSON.stringify(basket));
}

function Total() {
  var basketContent = getBasket();
  var totalPrice = 0;
  for (let product of basketContent) {
    totalPrice += product.price;
  }
  var totalFormated = numberWithCommas(totalPrice) + " €";
  return totalFormated;
}