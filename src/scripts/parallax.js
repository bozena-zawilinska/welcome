// document.addEventListener("DOMContentLoaded", () => {
//   const elements = document.querySelectorAll(".parallax-text");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("parallax-visible");
//           observer.unobserve(entry.target); // Stop observing once it's visible
//         }
//       });
//     },
//     { threshold: 0.2 }
//   );

//   elements.forEach((element) => observer.observe(element));
// });

// Prevents elements from “disappearing” after a live reload.
// document.addEventListener("DOMContentLoaded", () => {
//   const elements = document.querySelectorAll(".parallax-text");

//   const observer = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("parallax-visible");
//           entry.target.classList.add("parallax-done"); // Mark as processed
//           localStorage.setItem(entry.target.dataset.id, "true"); // Save state
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.2 }
//   );

//   elements.forEach((element, index) => {
//     // Assign a unique ID if not present
//     if (!element.dataset.id) {
//       element.dataset.id = `parallax-${index}`;
//     }

//     // Restore state if already visible
//     if (localStorage.getItem(element.dataset.id) === "true") {
//       element.classList.add("parallax-visible", "parallax-done");
//     } else {
//       observer.observe(element);
//     }
//   });
// });
