const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

// Toggle navigation menu
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Translations for "WELCOME" in different languages
const translations = [
  "WELCOME", // English
  "BIENVENUE", // French
  "BIENVENIDOS", // Spanish
  "欢迎", // Chinese
  "BEM-VINDO",  // Portuguese
];

const logo = document.getElementById("logo");
let index = 0;

function updateLogoText() {
  const text = translations[index];
  logo.innerHTML = ""; // Clear current content

  // Add each letter as a span with animation
  [...text].forEach((letter, i) => {
    const span = document.createElement("span");
    span.style.setProperty("--i", i + 1);
    span.textContent = letter;
    span.classList.add("letter"); // Add the 'letter' class
    logo.appendChild(span);
  });

  // Add a small happy face icon after the text
  const icon = document.createElement("span");
  icon.textContent = "😊"; // You can replace this with an image if needed
  icon.classList.add("icon"); // Add a class for styling
  logo.appendChild(icon);

  // Update index for the next language
  index = (index + 1) % translations.length;
}

// Initialize the first text and start updating every 5 seconds
updateLogoText();
setInterval(updateLogoText, 5000);