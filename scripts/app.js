const navBtn = document.querySelector(".nav__btn");
const navMenu = document.querySelector(".nav-menu");

let navOpen = false;
navBtn.addEventListener("click", function () {
  if (navOpen) {
    navBtn.classList.remove("nav__btn--open");
    navMenu.classList.remove("nav-menu--open");

    navOpen = false;
  } else {
    navBtn.classList.add("nav__btn--open");
    navMenu.classList.add("nav-menu--open");
    navOpen = true;
  }
});

//Password
function togglePasswordVisibility() {
  const passwordInput = document.querySelector('input[name="password"]');
  const eyeIcon = document.querySelector(".eye-icon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}

// Form validation on submission
const signupForm = document.getElementById("signupForm");
const identifierInput = document.getElementById("identifier");

signupForm.addEventListener("submit", (e) => {
  const value = identifierInput.value.trim();

  // Email pattern
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  // Phone number pattern (10 to 15 digits)
  const isPhone = /^[0-9]{10,15}$/.test(value);

  // Prevent form submission if neither is valid
  if (!isEmail && !isPhone) {
    e.preventDefault(); // Stop form submission
    alert("Please enter a valid email or phone number.");
  }
});

// Function to move focus to the next input when a value is entered
function moveFocus(event, currentInput) {
  if (event.target.value.length === 1 && currentInput < 6) {
    document.getElementById(`code${currentInput + 1}`).focus();
  }
}

// Optional: Implement backspace functionality
document.querySelectorAll(".code-input").forEach((input, index) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && input.value === "") {
      if (index > 0) {
        document.querySelectorAll(".code-input")[index - 1].focus();
      }
    }
  });
});
