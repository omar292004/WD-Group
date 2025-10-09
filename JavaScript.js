﻿// Theme toggle with memory across pages
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") document.body.classList.add("dark");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const theme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
    themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
});

if (document.body.classList.contains("dark")) themeToggle.textContent = "☀️";

// Expand card details
document.querySelectorAll(".expand-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const details = btn.nextElementSibling;
        details.style.display =
            details.style.display === "block" ? "none" : "block";
    });
});
