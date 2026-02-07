// Test JS connection
console.log("JavaScript connected successfully");

// ==========================
// Dark Mode (with LocalStorage)
// ==========================
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save preference
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );
});

// Load saved theme
window.addEventListener("load", () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
});

// ==========================
// Form Validation
// ==========================
const form = document.querySelector("form");
const messageBox = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "") {
    showMessage("Name is required", "red");
    return;
  }

  if (!email.includes("@")) {
    showMessage("Please enter a valid email", "red");
    return;
  }

  if (message.length < 10) {
    showMessage("Message must be at least 10 characters", "red");
    return;
  }

  showMessage("Message sent successfully!", "green");
  form.reset();
});

// Reusable function
function showMessage(text, color) {
  messageBox.textContent = text;
  messageBox.style.color = color;
}

// ==========================
// Show / Hide About Section
// ==========================
const aboutSection = document.getElementById("about");

aboutSection.addEventListener("click", () => {
  aboutSection.classList.toggle("highlight");
});
