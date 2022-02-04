console.log("Script loaded");

const products = getAvailableProducts();

const filter = document.getElementById("filter");
let h3 = document.getElementsByName("h3");
filter.addEventListener("keyup", (e) => {
  const srarchh = e.target.value;
  const fil = h3.filter((p) => {
    return p.includes(srarchh);
  });
  console.log(fil);
});

const pUl = document.createElement("ul");
pUl.classList.add("products-list");
document.querySelector("main").appendChild(pUl);

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    let product = document.createElement("li");
    product.innerHTML = `
      <h3> Title: ${products[i].name} </h3>
      <p> price: ${products[i].price} </p>
      <p> rating: ${products[i].rating} </p>`;

    pUl.appendChild(product);
  }
}
renderProducts(products);
