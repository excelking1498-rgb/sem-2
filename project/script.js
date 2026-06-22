let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

const cartDisplay = document.getElementById("cart-count");

if (cartDisplay) {
    cartDisplay.textContent = cart.length;
}

const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const box = button.closest(".box");

        const productName =
            box.querySelector("h2").innerText;

        cart.push(productName);

        sessionStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        if (cartDisplay) {
            cartDisplay.textContent = cart.length;
        }

        alert(productName + " added to cart!");
    });

});