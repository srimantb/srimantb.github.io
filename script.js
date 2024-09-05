document.getElementById('menu-icon').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('nav-links').classList.toggle('show');
});

document.getElementsByClassName('profileimg').length

// sidebar 
window.onscroll = function () {
    adjustSidebar();
};

function adjustSidebar() {
    // Select the sidebar
    var sidebar = document.querySelector(".sidebar");
    var navbarHeight = document.querySelector(".navbar").offsetHeight;

    // Check the screen size (only for larger screens)
    if (window.innerWidth >= 768) {
        var scrollTop = window.scrollY; // Distance scrolled from the top

    // Calculate how much the navbar has scrolled out of view
         var topValue = Math.max(12 - (scrollTop / navbarHeight) * 12, 0); // Gradually reduce top from 12% to 0%

    // Set the sidebar's top value as the navbar goes out of view
         sidebar.style.top = topValue + "%";
    }
}

 // Get the menu button and the sidebar
var menuBtn = document.querySelector(".menu-btn");
var sidebar = document.querySelector(".sidebar");

 // Toggle the sidebar when the menu button is clicked
menuBtn.addEventListener("click", function() {
    sidebar.classList.toggle("active");
 });

//  ##########
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

// Add scroll event listener
window.addEventListener('scroll', function () {
  // Only apply this on small screens (max-width: 768px)
  if (window.innerWidth <= 768) {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // User is scrolling down -> hide the navbar
      navbar.style.top = "-60px"; // Hide the navbar (adjust based on navbar height)
    } else {
      // User is scrolling up -> show the navbar
      navbar.style.top = "0";
    }

    // Update the last scroll position
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative values
  }
});

 





// function toggleSidebar() {
//     const sidebar = document.getElementById('sidebar');
//     const content = document.getElementById('content');

//     sidebar.classList.toggle('hidden'); // Toggle sidebar visibility
//     content.classList.toggle('full-width'); // Toggle content margin
// }
