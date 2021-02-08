// *********************ORDER*******************

// récup en string les ids des produits du panier + couleur
function basketIds() {
    let ids = [];
    let basket = getBasket();
    for (let product of basket) {
        ids.push(product.id + "/" + product.color)
    }
    basket = ids
    return basket
}
console.log(basketIds());

// fonction pour envoyer la requete POST
function sendDatas(x) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/order");
    xhr.send(x);
}

// POST au click submit
const submit = document.getElementById('submitBtn')
const contact = document.getElementById('contactForm')

submit.addEventListener('click', () => {
    var formD = new FormData(contact)
    formD.append("basket", basketIds())
    sendDatas(formD)
})

