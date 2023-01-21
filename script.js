// Get the navigation bar
var navbar = document.getElementsByTagName("nav")[0];

// Get the icon that opens the navigation bar
var icon = document.getElementsByClassName("icon")[0];

// When the user clicks on the icon, toggle between adding and removing the "responsive" class
icon.onclick = function() {
  navbar.classList.toggle("responsive");
}
