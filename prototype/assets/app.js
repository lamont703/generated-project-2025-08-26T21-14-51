import productData from "./dummy-data.json" assert { type: "json" };
const productList = document.getElementById('product-list');
const cart = document.getElementById('cart');
let cartItems = [];
productData.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `<h2>${product.name}</h2><p>$${product.price}</p><button onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(productDiv);
});
window.addToCart = function(productId) {
    const product = productData.find(p => p.id === productId);
    cartItems.push(product);
    updateCart();
};
function updateCart() {
    cart.innerHTML = "";
    cartItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.textContent = `${item.name} - $${item.price}`;
        cart.appendChild(cartItemDiv);
    });
}