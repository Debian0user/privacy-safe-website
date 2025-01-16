document.addEventListener("DOMContentLoaded", function () 
		{
  const texts = ["YOUR PRIVACY, ", "YOUR POWER."];
  const typewriter1 = document.getElementById("yp");
  const typewriter2 = document.getElementById("yr");

  let index1 = 0, index2 = 0;

  function typeEffect1() {
    if (index1 < texts[0].length) {
      typewriter1.textContent += texts[0].charAt(index1);
      index1++;
      setTimeout(typeEffect1, 200); // Adjust typing speed for the first h1
    } else if (index2 === 0) {
      typeEffect2(); // Start the second h1 typing after the first completes
    }
  }

  function typeEffect2() {
    if (index2 < texts[1].length) {
      typewriter2.textContent += texts[1].charAt(index2);
      index2++;
      setTimeout(typeEffect2, 200); // Adjust typing speed for the second h1
    }
  }

  typeEffect1(); // Start the typewriting effect for the first h1
});