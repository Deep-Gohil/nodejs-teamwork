import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

// console.log("udehudh");

//  document.querySelector(".parentMain").style.display = "none";
// window.addEventListener('load', function() {
//   setTimeout(function() {
//      document.querySelector('.loader-parent').style.display = 'none';
//      document.querySelector(".parentMain").style.display = "block";  }, 2000);
//  });


const section = document.querySelector('.parentMain');
const circle = document.querySelector('.circle');

section.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 
    setTimeout(() => {
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
  }, 150);
});

// to off copy any text 

document.addEventListener('copy', function(e) {
    e.preventDefault();
    alert('This text cannot be copied!');
});
