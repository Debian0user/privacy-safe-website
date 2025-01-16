const section3 = document.querySelector('#section4');

const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            section3.classList.add('sticky');
        } else {
            section3.classList.remove('sticky');
        }
    },
    {
        root: null, // Use the viewport as the root
        threshold: 1.0, // Trigger when the entire section is in view
    }
);

observer.observe(section3);
