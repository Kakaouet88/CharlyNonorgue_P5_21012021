// *********FETCH**************
var products;

const fetchProducts = async () => {
  products = await fetch("http://localhost:3000/api/teddies").then((res) =>
    res.json()
  );
};

// *************************PAGE PRODUIT**************

productPageContent = document.getElementById("productPageContent");

// RECUP L ID DE L URL POUR GENERER LE CONTENU DE LA PAGE PRODUIT

var id = window.location.toString().split("#")[1];

console.log(id);

// RECUP L ITEM PAR SON ID ET LE STOCKE DANS UN ARRAY

var productItem = [];

const getProductByID = async () => {
  await fetchProducts();

  for (i = 0; i < products.length; i++) {
    if (products[i]._id === id) {
      productItem.push(products[i]);
      console.log(productItem);
    }
  }
};
// message d'alerte si l'url ne correspond à aucun produit

// INJECTE L AFFICHAGE DE L ITEM DANS LE HTML

const displayProduct = async () => {
  await getProductByID();

  if (productItem.length < 1) {
    window.alert("Oups, aucun produit correspondant n'a été trouvé");
  } else {
    document.getElementById("productPageContent").innerHTML = `
    <section class="my-5">
    
    <div class="row">
          <div class="col-md-5 mb-4 mb-md-0">
          
          <div class="view zoom z-depth-2 rounded">
              <img class="img-fluid w-100" src="${productItem[0].imageUrl}" alt="${productItem[0].name}">
              </div>
          </div>
          <div class="col-md-7">

          <h1 id="productPageName" class="h3">${productItem[0].name}</h1>
            <p id="productPagePrice" class="font-weight-bold">${productItem[0].price} €</p>
            <p id="prodctPageDescription" class="pt-1">${productItem[0].description}</p>

            <div class="colorPick">
              <h2 class="h6 mb-3">Choisissez la couleur de ${productItem[0].name}</h2>
              
              <input type="radio" name="color" id="chocolate" />
              <label for="chocolate"><span class="chocolate"></span></label>

              <input type="radio" name="color" id="tan" />
              <label for="tan"><span class="tan"></span></label>

              <input type="radio" name="color" id="beige" />
              <label for="beige"><span class="beige"></span></label>
              
              <input type="radio" name="color" id="brown" />
              <label for="brown"><span class="brown"></span></label>
              
              <input type="radio" name="color" id="darkbrown" />
              <label for="darkbrown"><span class="darkbrown"></span></label>
              
              <input type="radio" name="color" id="palebrown" />
              <label for="palebrown"><span class="palebrown"></span></label>

              <input type="radio" name="color" id="blue" />
              <label for="blue"><span class="blue"></span></label>
              
              <input type="radio" name="color" id="white" />
              <label for="white"><span class="white"></span></label>

              <input type="radio" name="color" id="pink" />
              <label for="pink"><span class="pink"></span></label>
              
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
                        <input class="quantity" min="0" name="quantity" value="1" type="number">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="font-weight-bold"> + </button>
                          </div>
                          </td>
                  </tr>
                </tbody>
                </table>
            </div>
            <button type="button" id="addCart" class="button m-2 d-flex align-items-center px-3"><i class="bi bi-cart3 mr-2"></i
              >Ajouter au panier </button>
          </div>
        </div>
        
        </section>
        `;
  }
};

displayProduct();

// COULEURS ......


