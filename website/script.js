// script.js
// Smooth Scroll Navigation
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Insert LuxeGlow Hardcoded Products
const productContainer = document.querySelector(".product-list");

productContainer.innerHTML = `
    <div class="product-item" style="text-align: center;">
        <img src="images/luxeglow_foundation.png" alt="LuxeGlow Glowing Foundation" style="width: 300px; border-radius: 15px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);">
        <h3>LuxeGlow Glowing Foundation</h3>
        <p>Our top-selling foundation offers flawless coverage and nourishes your skin.</p>
        <p><strong>€35.00</strong></p>
    </div>
    <div class="product-item" style="text-align: center;">
        <img src="images/luxeglow_lipstick.png" alt="LuxeGlow Luxury Lipstick" style="width: 300px; border-radius: 15px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);">
        <h3>LuxeGlow Luxury Lipstick</h3>
        <p>A creamy, cruelty-free lipstick that gives vibrant color with a smooth finish.</p>
        <p><strong>€25.00</strong></p>
    </div>
`;

// Dynamically Fetch Additional LuxeGlow Products with Provided Image URLs
const apiProducts = [
    {
        image: "https://i.pinimg.com/736x/ac/2f/78/ac2f789cbc52ec09a29b694e27520e8a.jpg", // Eyeshadow
        title: "LuxeGlow Radiant Eyeshadow Palette",
        description: "A versatile eyeshadow palette with 12 stunning shades.",
        price: "€45.00"
    },
    {
        image: "https://cosmetic4you.co.uk/wp-content/uploads/2018/11/types-of-blushers.jpg", // Blush
        title: "LuxeGlow Blush & Glow",
        description: "A silky-smooth blush that enhances your natural glow.",
        price: "€30.00"
    }
];

// Append API Products to Product List
apiProducts.forEach(product => {
    const productHTML = `
        <div class="product-item" style="text-align: center;">
            <img src="${product.image}" alt="${product.title}" style="width: 300px; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); margin-bottom: 20px;">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
        </div>
    `;
    productContainer.innerHTML += productHTML;
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent = document.body.classList.contains("dark-mode")
        ? "Light Mode" : "Dark Mode";
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Apply Dark Mode on Load
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "Light Mode";
}
