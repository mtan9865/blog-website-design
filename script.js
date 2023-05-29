document.querySelector('.navbar-toggle').addEventListener('click', function() {
  var navItems = document.querySelectorAll('.nav-items');
  navItems.forEach(function(item) {
    item.classList.toggle('active');
  });
});