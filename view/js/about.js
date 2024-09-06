import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()


// Counter logic
// Function to run the counter logic
const runCounter = (counter) => {
  counter.innerText = '0';
  
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 200; // Adjust increment for speed
    
    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 10); // Adjust speed here
    } else {
      counter.innerText = target; // Final value
    }
  };

  updateCounter();
};

// Scroll trigger logic using IntersectionObserver
const counters = document.querySelectorAll('.counter');
const statsSection = document.querySelector('.stats-section');

const options = {
  root: null, // viewport
  threshold: 0.1 // Trigger when 10% of the section is in view
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      counters.forEach(counter => runCounter(counter));
      observer.disconnect(); // Stop observing once the counters are triggered
    }
  });
}, options);

observer.observe(statsSection);
