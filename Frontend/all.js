// *********************************PANIER**************

// AFFICHER NBR ARTICLES

function displayBasketContent(array) {
  let basketContent = array.length;
  document.getElementById("basketNbr").innerHTML = ' ' + basketContent;
}

// Test OK
var basket = localStorage
displayBasketContent(basket)