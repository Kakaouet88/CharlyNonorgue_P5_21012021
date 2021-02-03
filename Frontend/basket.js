// *******************BASKET PAGE*****************************

// RECUP CONTENU BASKET
var basketContent = getBasket();

console.log(localStorage);

// TOTAL
var totalPrice = 0;
for (let product of basketContent) {
  totalPrice += product.PRICE;
}
document.getElementById("totalNbr").innerHTML = spacenumber(totalPrice) + " €";

// POUR ESPACER LES MILLIEMES
function spacenumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// AFFICHER CONTENU PANIER
var basketHTML = document.getElementById("basketContent");

if (basketContent.length < 1) {
  basketHTML.innerHTML = `<p class="text-center page-height">Oups !... C'est bien vide ici...</p>`;
} else {
  for (let product of basketContent) {

    basketHTML.innerHTML += `
        <div class="productCard shadow-sm row mx-auto d-flex justify-content-center align-items-center my-5">
        <a href="../Frontend/product.html?id=${
          product.ID
        }" class="text-decoration-none text-reset">
            <div class="ml-4 cardText">
            <h2 class="cardTitle productName">${product.NAME}</h2>
            </div>
            </a>
            <div class="mx-auto cardColor">
            <div class="colorPuce puce${product.COLOR}"></div>
                </div>
                <div class="p-2 mx-auto">
                <img src="${product.IMG}" alt="productName" class="cardImg">
                    </div>
                <div class="mx-auto my-auto">
                    <p class="cardPrice font-weight-bold">${spacenumber(
                      product.PRICE
                    )} €</p>
                </div>
                <div class="my-auto mx-auto">
                <button type="button" class="removeBtn button dropshadow-sm" id="removeBtn" data-id="${product}"><i class="bi bi-trash-fill"></i></button>
                    </div>
                    </div>
                    </div>
                    `;
  }
}

// REMOVE

var listRemoveBtn = document.getElementsByClassName("removeBtn");

// obtenir les keys associées à leur value pour comparer à celle de removeBtn.value

for (let removeBtn of listRemoveBtn) {
  console.log(removeBtn.value);
  removeBtn.addEventListener("click", () => {});
}
