// *********PRODUCT**************
var products;
let param = new URL(window.location).searchParams;
let productID = param.get("id");

fetch("http://localhost:3000/api/teddies/" + productID)
  .then((res) => res.json())
  .then((product) => {
    if (product == null) {
      window.alert("Oups, aucun produit correspondant n'a été trouvé");
    } else {
      console.log(product);
      console.log(product.colors);
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
              <h2 class="h6 mb-3">Choisissez la couleur de ${product.name}</h2>
              <div id="colorPicker">
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
  });

