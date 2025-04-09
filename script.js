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
