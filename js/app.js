"use strict";
const allProducts = [];
function addToCart(element) {
    var _a, _b;
    element.setAttribute("disabled", "");
    const productName = (_a = element.closest(".card-body")) === null || _a === void 0 ? void 0 : _a.children[0].textContent;
    const productPrice = (_b = element.closest(".card-body")) === null || _b === void 0 ? void 0 : _b.children[1].children[0].textContent;
    const product = {
        productName: productName,
        productPrice: productPrice,
    };
    allProducts.push(product);
    console.log(allProducts);
}
