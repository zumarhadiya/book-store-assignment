 // JavaScript to toggle the visibility of the nav items when the menu icon is clicked
 document.getElementById('menu-icon').addEventListener('click', function () {
    var navItems = document.querySelectorAll('nav h4');
    navItems.forEach(function (item) {
        item.style.display = (item.style.display === 'none' || item.style.display === '') ? 'block' : 'none';
    });
});