let products;

const listProducts = document.getElementById("productsList");

// OBTENIR DONNEES API SOUS FORME LISTE PRODUIT

const fetchProducts = async() => {
    products =  await fetch("http://localhost:3000/api/teddies").then(res => res.json())

    console.log(products);
  };

  fetchProducts()




// DISPLAY NBR ARTICLES PANIER

function displayBasketContent(array) {
  let basketContent = array.length;
  document.getElementById("basketNbr").innerHTML = basketContent;
}

// Test OK
// var basket = ['64739', '547690', '756463']
// displayBasketContent(basket)

// AFFICHER LA LISTE DES ARTICLES SUR LA PAGE ACCUEIL

const displayListProducts = async() => {
    await fetchProducts();

    listProducts.innerHTML = products.map(product =>(

        `
        <a href="product.html" class="text-reset text-decoration-none col-4 my-4">
          <div class="card shadow-sm" style="width: 18rem;">
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
    
    )).join('')
  }

displayListProducts()

// ALIMENTATION DE LA PAGE PRODUCT

