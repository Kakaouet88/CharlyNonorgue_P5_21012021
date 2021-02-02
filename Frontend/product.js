// *********PRODUCT**************
var products;
let param = new URL(window.location).searchParams;
let productID = param.get("id");

fetch("http://localhost:3000/api/teddies/" + productID)
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

            <hr>
            <div class="table-responsive mb-2">
            <table class="table table-sm table-borderless">
                <tbody>
                  <tr>
                  <td class="pl-0 pb-0 w-25">Quantity</td>
                  </tr>
                  <tr>
                    <td class="pl-0">
                      <div class="def-number-input number-input safari_only mb-0">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        class="font-weight-bold"> - </button>
                        <input id="inputQty" class="quantity" min="0" name="quantity" value="1" type="number">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="font-weight-bold"> + </button>
                          </div>
                          </td>
                  </tr>
                </tbody>
                </table>
            </div>
            <button type="button" id="addToBasket" class="button m-2 d-flex align-items-center px-3"><i class="bi bi-cart3 mr-2"></i
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
    for (i = 0; i < product.colors.length; i++) {
      // Puce couleur
      document.getElementById("colorPickerForm").innerHTML += `
      <input type="radio" name="color" value="${product.colors[
        i
      ].toLowerCase()}" id="${product.colors[i].toLowerCase()}" />
      <label for="${product.colors[
        i
      ].toLowerCase()}"  class="mr-2"><span class="${product.colors[
        i
      ].toLowerCase()}"></span></label>
      `;
    }

    // AJOUT BASKET
    document.getElementById("colorPickerForm").addEventListener("click", () => {
      var productColor = document.querySelector("input[name = color]:checked")
        .value;
      console.log(productColor);
      
      var inputQty = document.getElementById("inputQty");
      var productSpecs = {
        ID: productID,
        COLOR: productColor,
      };
    });
      
      document.getElementById("addToBasket").addEventListener("click", () => {
        console.log("piip");
        console.log(productColor);

        if (productColor != undefined) {
        
        for (i = 0; i < inputQty.value; i++) {
          localStorage.setItem(
            "Product" + (localStorage.length + 1),
            JSON.stringify(productSpecs)
            );
            console.log(localStorage);
          }
          displayBasketContent(basket);
        } else {
        alert('Vous devez choisir une couleur !')
      }
    });
  })

console.log(localStorage);
