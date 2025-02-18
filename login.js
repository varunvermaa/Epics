const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active"); // Add 'active' class for Sign Up
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active"); // Remove 'active' class for Sign In
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqzM8Jn476R6Np9gxkSSFuUN3-YHitKx4",
    authDomain: "mindtunes-c09c9.firebaseapp.com",
    projectId: "mindtunes-c09c9",
    storageBucket: "mindtunes-c09c9.firebasestorage.app",
    messagingSenderId: "711226726879",
    appId: "1:711226726879:web:23ab595820e81663660c6a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up
document.getElementById("signup-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User signed up:", userCredential.user);
            alert("Account created successfully!");
        })
        .catch((error) => {
            document.getElementById("signup-error").innerText = error.message;
        });
});

// Sign In
document.getElementById("signin-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User signed in:", userCredential.user);
            alert("Login successful!");
            window.location.href = "onboarding.html"; // Redirect after successful login
        })
        .catch((error) => {
            document.getElementById("signin-error").innerText = error.message;
        });
});

