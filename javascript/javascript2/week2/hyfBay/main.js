console.log("Script loaded");

const products = getAvailableProducts();

const pUl = document.createElement("ul");
pUl.classList.add("products-list");
document.querySelector("main").appendChild(pUl);

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    let product = document.createElement("li");
    product.innerHTML = `
      <h3>${products[i].name} </h3>
      <p> price: ${products[i].price} </p>
      <p> rating: ${products[i].rating} </p>`;

    pUl.appendChild(product);
  }
}
renderProducts(products);

let filterInput = document.querySelector(".filterInput");
console.log(filterInput);

filterInput.addEventListener("input", () => {
  const filterByName = products.filter((el) => {
    return el.name.toLowerCase().includes(filterInput.value);
  });
  pUl.innerHTML = "";
  renderProducts(filterByName);
});

let filterInputPrice = document.querySelector(".filterInputPrice");

filterInputPrice.addEventListener("input", () => {
  const filterPrice = products.filter((el) => {
    let colenProducts = { ...products };

    if (filterinputp.value > 0) {
      return el.price < filterPrice.value;
    } else if (filterPrice.value == 0) {
      return colenProducts;
    }
  });
  pUl.innerHTML = "";
  renderProducts(filterPrice);
});
