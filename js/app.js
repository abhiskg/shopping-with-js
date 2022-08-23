"use strict";
const allProducts = [];
function addToCart(element) {
    var _a, _b;
    const productCount = document.querySelector("#product-count");
    const prevProductAdded = parseInt(productCount.innerText);
    if (prevProductAdded < 3) {
        const productName = (_a = element.closest(".card-body")) === null || _a === void 0 ? void 0 : _a.children[0].textContent;
        const productPrice = (_b = element.closest(".card-body")) === null || _b === void 0 ? void 0 : _b.children[1].children[0].textContent;
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
    }
    else {
        alert("Can't select more than 3 products");
        return;
    }
}
function displayInCart(products) {
    const cartBody = document.querySelector("#cart-body");
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
