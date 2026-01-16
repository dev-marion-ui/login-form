const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

function showLogin() {
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
}

function showSignup() {
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
}

/* Optional: prevent actual form submission */
signupForm.addEventListener("submit", e => {
    e.preventDefault();
    showLogin(); // move to login after signup
});

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Login submitted");
});
