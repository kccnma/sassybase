document.addEventListener("DOMContentLoaded", function() {

  //TOGGLE MENU NAV
  var sitenav = document.querySelector(".site-header .site-nav");
  var menubutton = document.querySelector(".menu-button");
  menubutton.onclick = function() {
      sitenav.classList.toggle("expanded");
    };

});
