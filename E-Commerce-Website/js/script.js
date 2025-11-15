document.querySelector("button").addEventListener("click", () => {
  window.location.href = "shop.html";
});


// Step 1: Select all Add to Cart buttons
const buttons = document.querySelectorAll(".product button");

// Step 2: Add click event to each button
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const product = button.parentElement;
    const name = product.querySelector("h3").innerText;
    const price = product.querySelector("p").innerText;

    // Step 3: Create product object
    const item = { name, price };

    // Step 4: Get existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);

    // Step 5: Save updated cart
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${name} added to cart!`);
  });
});
