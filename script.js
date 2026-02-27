const productList = document.getElementById("productList");
const products = Array.from(document.querySelectorAll(".product"));
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const originalOrder = [...products];

searchInput.addEventListener("input", searchProduct);
searchBtn.addEventListener("click", searchProduct);

function searchProduct() {

  const input = searchInput.value.toLowerCase().trim();

  if (input === "") {

    originalOrder.forEach(product =>
      productList.appendChild(product)
    );

    return;
  }

  const matched = [];
  const unmatched = [];

  products.forEach(product => {

    const title = product
      .querySelector("h3")
      .innerText
      .toLowerCase();

    title.includes(input)
      ? matched.push(product)
      : unmatched.push(product);

  });

  matched.forEach(p => productList.appendChild(p));
  unmatched.forEach(p => productList.appendChild(p));

}