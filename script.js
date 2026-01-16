const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

function showSignup() {
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
}

function showLogin() {
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
}

function togglePassword(id) {
    const field = document.getElementById(id);
    field.type = field.type === "password" ? "text" : "password";
}

/* SIGN UP */
signupForm.addEventListener("submit", e => {
    e.preventDefault();

    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const username = document.getElementById("signupUsername").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("signupPassword").value;
    const error = document.getElementById("signupError");

    if (!fname || !lname || !username || !email || !password) {
        error.textContent = "All fields are required";
        return;
    }

    localStorage.setItem("user", JSON.stringify({ fname, lname, username, email, password }));
    error.textContent = "";
    showLogin();
});

/* LOGIN */
loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
    const error = document.getElementById("loginError");

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.username !== username || user.password !== password) {
        error.textContent = "Invalid username or password";
        return;
    }

    alert(`Welcome, ${user.fname}`);
});
