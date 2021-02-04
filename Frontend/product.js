// *********PRODUCT**************
let apiUrl = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
? "http://localhost:3000"
: "https://orinoco-p5-nonorgue.herokuapp.com"

var products;
let param = new URL(window.location).searchParams;
let productID = param.get("id");

fetch(apiUrl + "/api/teddies/" + productID)
  // RECUP PRODUIT PAR ID
  .then((res) => res.json())
  .then((product) => {
    if (product._id != undefined) {
      console.log(product);
      console.log(product.colors);
      // AFFICHER PRODUIT
      document.getElementById("productPageContent").innerHTML = `
    <section class="my-5">
    
    <div class="row">
          <div class="col-md-5 mb-4 mb-md-0">
          
          <div class="view zoom z-depth-2 rounded">
              <img class="img-fluid w-100" src="${product.imageUrl}" alt="${product.name}">
              </div>
          </div>
          <div class="col-md-7">

          <h1 id="productPageName" class="h3">${product.name}</h1>
            <p id="productPagePrice" class="font-weight-bold">${product.price} €</p>
            <p id="prodctPageDescription" class="pt-1">${product.description}</p>

            <div class="colorPick">
              <h2 class="h6 mb-4">Choisissez la couleur de ${product.name}</h2>
              <div id="colorPickerPucesDiv" class="row">
              <form id="colorPickerForm" name="colorForm" class="mx-3"></form>
              </div>
            </div>

            <hr class="mt-5">
            
            <button type="button" id="addToBasket" class="button m-2 mt-5 d-flex align-items-center px-3"><i class="bi bi-cart3 mr-2"></i
              >Ajouter au panier </button>
          </div>
        </div>
        
        </section>
        `;
    } else {
      // MESSAGE D ERREUR SI URL INCORRECTE
      document.getElementById("productPageContent").innerHTML = `
      <div class=" my-3 py-3 text-center mx-auto">
        <h1 class="h3 m-4">Erreur 404</h1>
        <p class="m-3 h5 font-weight-normal">Oups, aucun produit correspondant n'a été trouvé.</p>
        <img class="m-5" src="../Frontend/img/sad_teddy.gif" height=120vh alt="sad_teddy_404">
      </div>
      `;
    }

    // AFFICHER COULEURS
    for (let color of product.colors) {
      // Puce couleur
      document.getElementById("colorPickerForm").innerHTML += `
      <input type="radio" name="color" id="${color.toLowerCase()}" value="${color.toLowerCase().replace(/\s+/g, '')}"/>
      <label for="${color.toLowerCase()}" class="colorPickerRadio"><span class="${color.toLowerCase().replace(/\s+/g, '')}"></span></label>
      `;
    }

    // AJOUT BASKET
    var productSpecs = {
      id: product._id,
      color: null,
      name: product.name,
      price: product.price,
      img: product.imageUrl,
    };

    var colorPickerRadio = document.getElementsByClassName("colorPickerRadio");

    for (let radio of colorPickerRadio) {
      radio.addEventListener("click", (event) => {
        productSpecs.color = event.target.parentNode.previousElementSibling.value
        console.log(productSpecs.color);
      });
    }

    document.getElementById("addToBasket").addEventListener("click", () => {
      if (productSpecs.color != null) {
        console.log("piip");
        addToBasket(productSpecs);
      } else {
        alert("Vous n'avez pas sélectionné de couleur pour votre ourson")
      }
    });
  });

console.log(localStorage);
