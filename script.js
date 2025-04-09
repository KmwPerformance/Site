const products = [
    { name: "Turbo Manifold", price: 500 },
    { name: "Exhaust System", price: 700 }
];

function loadProducts() {
    let shopSection = document.getElementById("shop");
    products.forEach(product => {
        let div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `<h3>${product.name}</h3><p>$${product.price}</p><button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>`;
        shopSection.appendChild(div);
    });
}

let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        cartList.innerHTML += `<li>${item.product} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></li>`;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function sendOrder() {
    let orderText = "New Order:\n";
    cart.forEach(item => {
        orderText += `${item.product} - $${item.price}\n`;
    });

    let mailtoLink = `mailto:your-email@example.com?subject=New Order&body=${encodeURIComponent(orderText)}`;
    window.location.href = mailtoLink;
}

window.onload = function() {
    if (document.getElementById("shop")) {
        loadProducts();
    }
};
