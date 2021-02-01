// ***************FETCH*************

let products;

const fetchProducts = async () => {
  products = await fetch("http://localhost:3000/api/teddies").then((res) =>
    res.json()
  );
  console.log(products);
};

// **************************PAGE INDEX******************************

// AFFICHER LA LISTE DES ARTICLES SUR LA PAGE ACCUEIL

const displayProductsList = async () => {
  await fetchProducts();

  document.getElementById("productsList").innerHTML = products
    .map(
      (product) =>
      
        `
        <a href="./Frontend/product.html#${product._id}" class="text-decoration-none text-reset col-md-4 my-4 productLink" id="${product._id}">
          <div class="card shadow-sm mx-3" style="height : 70vh; max-height: 500px; min-height: 370px">
            <img class="card-img-top" src=${product.imageUrl} alt="Card image cap">
            <div class="card-body">
              <h5 class="cardProductName">${product.name}</h5>
              <p class="cardProductDescription">${product.description}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item cardProductPrice font-weight-bold">${product.price} €</li>
              <li class="list-group-item cardProductColors">${product.colors.length} choix de couleur</li>
            </ul>
          </div>
        </a>

    `
    )
    .join("");
};

displayProductsList();
// le lien et l'url héritent de l'id de l'objet

// AFFICHAGE INTERACTIF SANS CHGT DE PAGE --- ???

document.getElementById("testbtn").addEventListener("click", function () {
  document.getElementById("productsList").id = "productSolo";

  document.getElementById("productSolo").innerHTML = 
  
  `
    <button type="button" id="retourbtn" class="button my-5 d-flex align-items-center px-3">Retour</button>

    <section class="my-5">
  
          <div class="row">
            <div class="col-md-5 mb-4 mb-md-0">
  
              <div class="view zoom z-depth-2 rounded">
                <img class="img-fluid w-100" src="../JWDP5/images/teddy_5.jpg" alt="bobby">
              </div>
            </div>
            <div class="col-md-7">
  
              <h1 id="productPageName" class="h3">Bobby</h1>
              <p id="productPagePrice" class="font-weight-bold">185€</p>
              <p id="prodctPageDescription" class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
                error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
                officia quis dolore quos sapiente tempore alias.</p>

              <div class="colorPick">
                <h2 class="h6">Choisissez la couleur de votre nouvel ami</h2>

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

  document.getElementById("retourbtn").addEventListener("click", function () {
    document.getElementById("productSolo").id = "productsList";
    displayProductsList();
  });
});