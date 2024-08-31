import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

// console.log("udehudh");

document.querySelector(".parentMain").style.display = "none";
window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('.loader-parent').style.display = 'none';
    document.querySelector(".parentMain").style.display = "block";
  }, 2000);
});
