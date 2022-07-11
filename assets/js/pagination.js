let products = [
  "product1",
  "product2",
  "product3",
  "product4",
  "product5",
  "product6",
  "product7",
  "product8",
  "product9",
  "product10",
  "product11",
  "product12",
];

// num of product 10
let productsperpage = 2;
// let pages = products.length / productsperpage;
let pages = Math.ceil(products.length / productsperpage); // Math.ceil to round a number

// DOM Elms
let container = document.getElementById("data");
let paginationlist = document.getElementById("pagination-list");

function createpaginationlist(params) {
  for (var i = 0; i < pages; i++) {
    paginationlist.innerHTML += `
        <button onclick="displayproducts(${i})"> ${i + 1} </button>
        `;
  }
}

createpaginationlist();

function displayproducts(page) {
  let start = (page - 1) * productsperpage; // detect start index for pagination.
  let end = page * productsperpage;
  let productsToShowInPage = products.slice(start, end);

  container.innerHTML = "";
  for (var i = 0; i < productsToShowInPage.length; i++) {
    container.innerHTML += `<p> ${productsToShowInPage[i]} </p>`;
  }
}

displayproducts(1);
