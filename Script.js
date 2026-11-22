
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
// ==========================================
// STEP 1: Hobby/Skill List Rendering
// ==========================================
const hobbies = [
  'Computer Engineering & Coding',
  'Table Tennis',
  'Pocket Ball (Billiards)',
  'Traveling',
  'Photography'
];

const listContainer = document.getElementById('hobby-list');

if (listContainer) {
  const ul = document.createElement('ul');

  for (let i = 0; i < hobbies.length; i++) {
    const li = document.createElement('li');
    li.textContent = hobbies[i];
    ul.appendChild(li);
  }

  listContainer.appendChild(ul);
}

// ==========================================
// STEP 2: Hobby Gallery (Extension)
// ==========================================
const galleryImages = [
  'https://picsum.photos/id/1/400/300',
  'https://picsum.photos/id/20/400/300',
  'https://picsum.photos/id/48/400/300',
  'https://picsum.photos/id/180/400/300'
];

let currentIndex = 0;
const galleryImgElement = document.getElementById('gallery-image');
const nextPhotoBtn = document.getElementById('next-photo-btn');

if (galleryImgElement && nextPhotoBtn) {
  nextPhotoBtn.addEventListener('click', function () {
    currentIndex++;

    if (currentIndex >= galleryImages.length) {
      currentIndex = 0;
    }

    galleryImgElement.src = galleryImages[currentIndex];
  });
}
