const toggleButton = document.getElementById('toggle-button');
const navbarWeb = document.getElementById('navbar-web');

toggleButton.addEventListener('click', function() {
  navbarWeb.classList.toggle('click');
});

// 

function showPopup() {
    document.getElementById("popup-alert").style.display = "none";
  }
  setTimeout(showPopup, 15000);