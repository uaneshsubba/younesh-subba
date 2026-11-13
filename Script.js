
/* ========================================
   WEEK 10: JS BASICS & CONTROL FLOW
   ======================================== */

// Part 1: Time-based Greeting

let userName = prompt("Please enter your name:");
let currentHour = new Date().getHours();

if (currentHour < 12) {
    console.log("Good morning, " + userName + "!");
} else if (currentHour < 18) {
    console.log("Good afternoon, " + userName + "!");
} else {
    console.log("Good evening, " + userName + "!");
}


// Part 2: Age and Days Lived Verification

let birthYear = prompt("Please enter your birth year:");

let currentYear = 2026;
let age = currentYear - Number(birthYear);
let daysLived = age * 365;

console.log("You have lived for approximately " + daysLived + " days!");

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


/* ========================================
   WEEK 11: DOM & DYNAMIC EVENT HANDLING
   ======================================== */

// Part 3: Dark Mode Toggle

let themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
    themeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
}
