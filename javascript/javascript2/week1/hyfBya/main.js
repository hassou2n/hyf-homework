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
      "<h3>" +
      products[i].name +
      "</h3><p> price: " +
      products[i].price +
      "</p><p rating: " +
      products[i].rating +
      "</p>";

    pUl.appendChild(product);
  }
}
renderProducts(products);