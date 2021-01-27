
var products

const listProducts = document.getElementById('listProducts')


// OBTENIR DONNEES API SOUS FORME LISTE PRODUIT

fetch('http://localhost:3000/api/teddies')
.then(function(response){
    response.text().then(function(text){
        products = text
        console.log(JSON.parse(products));
    })
})

console.log(products);




// DISPLAY NBR ARTICLES PANIER

function displayBasketContent(array) {
    let basketContent = array.length
    document.getElementById('basketNbr').innerHTML = basketContent
}
// Test OK
// var basket = ['64739', '547690', '756463']
// displayBasketContent(basket)


