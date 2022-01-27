console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const pUl = document.createElement("ul");
pUl.classList.add("products-list");
document.querySelector("main").appendChild(pUl);

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    let product = document.createElement("li");
    product.innerHTML =
      "<h1>" +
      products[i].name +
      "</h1><em> price: " +
      products[i].price +
      "</em><em> rating: " +
      products[i].rating +
      "</em>";

    pUl.appendChild(product);
  }
}
renderProducts(products);