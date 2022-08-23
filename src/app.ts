const allProducts: object[] = [];

function addToCart(element: HTMLButtonElement) {
  element.setAttribute("disabled", "");
  const productName = element.closest(".card-body")?.children[0].textContent;
  const productPrice =
    element.closest(".card-body")?.children[1].children[0].textContent;
  const product = {
    productName: productName,
    productPrice: productPrice,
  };
  allProducts.push(product);
  console.log(allProducts);
}
