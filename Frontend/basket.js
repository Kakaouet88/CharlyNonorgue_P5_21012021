// *******************BASKET PAGE*****************************

// RECUP CONTENU BASKET

console.log(localStorage);

// TOTAL
function Total() {
  var basketContent = getBasket();
  var totalPrice = 0;
  for (let product of basketContent) {
    totalPrice += product.price;
  }
  document.getElementById("totalNbr").innerHTML =
    spacenumber(totalPrice) + " €";
}

// POUR ESPACER LES MILLIEMES
function spacenumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// AFFICHER CONTENU PANIER
function displayBasketHTML() {
  var basketContent = getBasket();
  var basketHTML = document.getElementById("basketContent");
  if (basketContent.length < 1) {
    basketHTML.innerHTML = `<p class="text-center page-height">Oups !... C'est bien vide ici...<br><br><a href="../index.html" alt="Liste des produits">Jetez un coup d'oeil à nos oursons</a></p>`;
  } else {
    basketHTML.innerHTML = "";
    for (let product of basketContent) {
      basketHTML.innerHTML += `
    <div class=""justify-content-center">
        <div class="productCard shadow-sm row mx-auto d-flex justify-content-center align-items-center my-5">
        <a href="../Frontend/product.html?id=${
          product.id
        }" class="text-decoration-none text-reset">
            <div class="ml-4 cardText">
            <h2 class="cardTitle productName">${product.name}</h2>
            </div>
            </a>
            <div class="mx-auto cardColor">
            <div class="colorPuce puce${product.color}"></div>
                </div>
                <div class="p-2 mx-auto">
                <img src="${product.img}" alt="productName" class="cardImg">
                    </div>
                <div class="mx-auto my-auto">
                    <p class="cardPrice font-weight-bold">${spacenumber(
                      product.price
                    )} €</p>
                </div>
                <div class="my-auto mx-auto">
                <button type="button" class="button removeBtn dropshadow-sm" id="removeBtn" data-id="${
                  product.id
                }" data-color="${
        product.color
      }"><i class="bi bi-trash-fill"></i></button>
                    </div>
                    </div>
                    </div>
                    </div>
                    `;
    }
    basketHTML.innerHTML += `<hr>
  <div id="basketTotal" class="basketTotal d-flex justify-content-center m-5 h4">
<p class="total dropshadow-sm">TOTAL : <span id="totalNbr" class="totalNbr"></span></p>
</div>

<!-- BTN ORDER -->
<div id="orderDiv" class="d-flex justify-content-center m-5">
<a href="../Frontend/order.html"><button id="orderRedirectBtn" class="button dropshadow-sm"> Finaliser ma commande </button></a>
</div>`;
    Total();
    var listRemoveBtn = document.getElementsByClassName("removeBtn");
    // obtenir les keys associées à leur value pour comparer à celle de removeBtn.value

    for (let removeBtn of listRemoveBtn) {
      removeBtn.addEventListener("click", () => {
        var removeProduct = {
          id: removeBtn.dataset.id,
          color: removeBtn.dataset.color,
        };
        console.log(removeProduct);
        removeFromBasket(removeProduct);
        displayBasketHTML();
      });
    }
  }
}

displayBasketHTML();

// REMOVE
