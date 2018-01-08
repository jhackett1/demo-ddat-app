// Get an array of menu items
var menuItems = document.querySelectorAll('footer ul li a');
// Check whether any manu item is equal to the current route
for (var i = 0; i < menuItems.length; i++) {
  if (menuItems[i].href === document.location.href) {
    // ...and add a class to it if so
    menuItems[i].classList.add('active');
  }
}
