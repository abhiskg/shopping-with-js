interface Products {
  productName: string;
  productPrice: number;
}

const allProducts: Products[] = [];

function addToCart(element: HTMLButtonElement) {
  const productCount = document.querySelector(
    "#product-count"
  ) as HTMLSpanElement;
  const prevProductAdded = parseInt(productCount.innerText);

  if (prevProductAdded < 3) {
    const productName = element.closest(".card-body")?.children[0].textContent;
    const productPrice =
      element.closest(".card-body")?.children[1].children[0].textContent;

    if (productName === null || productName === undefined) {
      alert("Product not avaiable");
      return;
    }

    if (productPrice === null || productPrice === undefined) {
      alert("Product not avaiable");
      return;
    }

    element.setAttribute("disabled", "");

    const product = {
      productName: productName,
      productPrice: parseInt(productPrice),
    };

    allProducts.push(product);

    const totalProduct = allProducts.length;
    productCount.innerText = totalProduct.toString();

    displayInCart(allProducts);
  } else {
    alert("Can't select more than 3 products");
    return;
  }
}

function displayInCart(products: Products[]) {
  const cartBody = document.querySelector(
    "#cart-body"
  ) as HTMLTableSectionElement;
  cartBody.innerHTML = "";
  let totalPrice = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productName = product.productName;
    const productPrice = product.productPrice;

    totalPrice = totalPrice + productPrice;
    const tr = document.createElement("tr");
    tr.innerHTML = `<th>${i + 1}</th>
      <td>${productName}</td>
      <td>${productPrice}</td>`;

    cartBody.append(tr);
  }
  const tr = document.createElement("tr");
  tr.innerHTML = `<th></th>
      <td>Total</td>
      <td>${totalPrice}</td>`;
  cartBody.append(tr);
}
