// *******************BASKET PAGE*****************************

console.log(localStorage);

// AFFICHER CONTENU PANIER
function displayBasketHTML() {
  var basketContent = getBasket();
  var basketHTML = document.getElementById("basketContent");
  if (basketContent.length < 1) {
    basketHTML.innerHTML = `<p class="text-center page-height">Oups !... C'est bien vide ici...<br><br><a href="../Frontend/index.html" alt="Liste des produits">Jetez un coup d'oeil à nos oursons</a></p>`;
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
                    <p class="cardPrice font-weight-bold">${numberWithCommas(
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
<p class="total dropshadow-sm">TOTAL : <span id="totalNbr" class="totalNbr">${Total()}</span></p>
</div>

<!-- BTN ORDER -->
<div id="orderDiv" class="d-flex justify-content-center m-5">
<a href="../Frontend/order.html"><button id="orderRedirectBtn" class="button dropshadow-sm"> Finaliser ma commande </button></a>
</div>`;

    var listRemoveBtn = document.getElementsByClassName("removeBtn");
    for (let removeBtn of listRemoveBtn) {
      removeBtn.addEventListener("click", () => {
        var removeProduct = {
          id: removeBtn.dataset.id,
          color: removeBtn.dataset.color,
        };
        console.log(removeProduct);
        removeFromBasket(removeProduct);
        displayBasketHTML();
        displayBasketContent();
      });
    }
  }
}

displayBasketHTML();

// REMOVE
