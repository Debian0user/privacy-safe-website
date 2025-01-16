document.addEventListener("scroll", () => {
  const box = document.querySelector(".p3-vline");
  const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);

  // Dynamically reveal the box based on scroll percentage
  box.style.clipPath = `inset(${(scrollPercent - 1) * 100}% 0 0 0)`;
});
