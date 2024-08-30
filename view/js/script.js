import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

window.addEventListener('load', function() {
    setTimeout(function() {
      document.querySelector('.loader-parent').style.display = 'none';
    }, 2000);
  });
  