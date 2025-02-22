document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".parallax-text");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("parallax-visible");
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((element) => observer.observe(element));
});
