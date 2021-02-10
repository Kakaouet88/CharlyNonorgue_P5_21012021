// *********************ORDER*******************
const submit = document.getElementById("submitBtn");
const contact = document.getElementById("contactForm");

const email = document.getElementById("email");
const address = document.getElementById("address");
const city = document.getElementById("city");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

// récup en string les ids des produits du panier + couleur
function basketIds() {
  let ids = [];
  let basket = getBasket();
  for (let product of basket) {
    ids.push(product.id);
  }
  basket = ids;
  return basket;
}

// fonction pour envoyer la requete POST
var post = function (x) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.status == 201) {
          console.log("success", xhr);
          resolve(JSON.parse(xhr.responseText));
        } else {
          console.log("error");
          contact.innerHTML = `
        <div class="page-height"><p class="text-danger">Une erreur s'est produite : ${xhr.status} <br> ${xhr.responseText}</p></div>
        `;
          reject(xhr);
        }
      }
    };
    xhr.open("POST", "http://localhost:3000/api/teddies/order", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(x));
  });
};


// boolean qui verif le formulaire et affiche erreur si mal rempli
var checkForm = function () {
  if (
    email.checkValidity() &&
    address.checkValidity() &&
    city.checkValidity() &&
    firstName.checkValidity() &&
    lastName.checkValidity()
  ) {
    return true;
  } else {
    document.getElementById("validForm").innerHTML = `
        <span class="text-danger">Veuillez renseigner correctement tous les champs du formulaire afin de passer la commande.</span>
        `;
    return false;
  }
};

// POST au click submit

submit.addEventListener("click", (event) => {
    event.preventDefault();

  var order = {
    contact: {
      email: email.value,
      address: address.value,
      city: city.value,
      firstName: firstName.value,
      lastName: lastName.value,
    },
    products: basketIds(),
  };

  // validation des données form
  if (checkForm()) {

    // si valide = envoi de la requete post
    post(order).then(result => {
        contact.classList.add("text-center");
    document.getElementById("validForm").innerHTML = "";
    contact.innerHTML = `
          <div class="page-height"><p class="text-success">Félicitations, votre commande <strong>n°${result.orderId}</strong> est confirmée !</p><p class="text-success">Vous pourrez très prochainement profiter de votre nouvel ourson. <br>Toutes les informations de livraison vous seront envoyées à <strong>${email.value}</strong>.</p><p class="text-success">A bientôt sur Orinoco Teddies ${firstName.value} !</p></div>
          `;
    document.getElementById("banner").innerHTML = `
      <h1 class="h2 dropshadow">Commande confirmée !</h1>
      <p class="fs-3 dropshadow m-0">Merci de votre confiance</p>
      `;
    })

    // remise à 0 du localstorage et sessionstorage
    // localStorage.clear();
    // sessionStorage.clear();
  } else {
    checkForm();
  }
});
