// *********************************PANIER**************

// AFFICHER NBR ARTICLES

function displayBasketContent(array) {
  let basketContent = array.length;
  document.getElementById("basketNbr").innerHTML = ' ' + basketContent;
}

// Test OK
var basket = ['64739', '547690', '756463', '2378987']
displayBasketContent(basket)