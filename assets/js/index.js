// Get Current Year (YYYY)
document.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
});

// Sticky Navbar Logic
const nav = document.getElementById("navbar");

// Create a dummy observer target just above the nav
const sentinel = document.createElement("div");
sentinel.style.height = "1px";
nav.before(sentinel);

// Observe when sentinel goes out of view
const observer = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      // Nav has become sticky
      nav.classList.add("border-bottom", "border-3", "border-primary");
    } else {
      // Nav is in original position
      nav.classList.remove("border-bottom", "border-3", "border-primary");
    }
  },
  { threshold: [0] }
);

observer.observe(sentinel);
