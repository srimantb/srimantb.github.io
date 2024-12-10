 // ################## date and time ##################
 // Function to get current date 
// ################## date and time End ##################

// ##################################### ################################################################
document.addEventListener("DOMContentLoaded", function () {
  const breadcrumbPath = document.getElementById("breadcrumbPath");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  // Get the current page title
  const pageTitle = document.title.trim(); // e.g., "Blogs"

  // Get the current URL path
  const currentPath = window.location.pathname; // e.g., "/blog.html" or "/blogs/page.html"

  // Extract the path parts
  const pathParts = currentPath.split("/").filter(Boolean); // Removes empty parts

  let breadcrumbHTML = "";

  if (pathParts.length === 1) {
    // Case for root pages like blog.html, about.html
    breadcrumbHTML = `<span>${pageTitle}</span>`;
  } else if (pathParts.length > 1) {
    // Case for deeper paths, extract root folder and add title
    const rootFolder = pathParts[0].charAt(0).toUpperCase() + pathParts[0].slice(1); // Capitalize
    breadcrumbHTML = `<a href="/${pathParts[0]}/" class="breadcrumb-link">${rootFolder}</a> > <span>${pageTitle}</span>`;
  }

  // Set the breadcrumb content
  breadcrumbPath.innerHTML = breadcrumbHTML;

  // Toggle the menu on small screens
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

// #######################################################################################################################
//###############################  news section small screen
const newsSectionn = document.getElementById('newsSection');
let startX = 0;
let endX = 0;

// Function to adjust news section responsiveness
function adjustNewsSection() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 768) {
    // Ensure the news section is hidden initially for small screens
    newsSectionn.style.right = '-100%';
    newsSectionn.style.width = '80%'; // Adjust width for smaller screens
  } else {
    // Reset for larger screens
    newsSectionn.style.right = '-100%';
    newsSectionn.style.width = '30%'; // Normal width for desktop
  }
}
// Detect swipe gesture
document.body.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.body.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;

  // Swipe left to open the news section
  if (startX - endX > 50) { // Swipe threshold
    newsSectionn.classList.add('open');
  }

  // Swipe right to close the news section
  if (endX - startX > 50) { // Swipe threshold
    newsSectionn.classList.remove('open');
  }
});

// Close the news section if clicked outside
document.addEventListener('click', (e) => {
  if (!newsSectionn.contains(e.target) && !e.target.closest('.search-bar')) {
    newsSectionn.classList.remove('open');
  }
});


//###############################  news section small screen end

 
 // #####################  Toggle Sidebar for Mobile ##################
 document.getElementById('menu-icon').addEventListener('click', function() {
  this.classList.toggle('open');
});  
 function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('show');
}// #####################  Toggle Sidebar for Mobile End  ##################


// J####################  javaScript for News Toggle Button
// JavaScript for News Toggle Button
const toggleNewsBtn = document.getElementById("toggle-news-btn");
const newsSection = document.querySelector(".news-section");
const mainContent = document.querySelector(".main");

toggleNewsBtn.addEventListener("click", () => {
    newsSection.classList.toggle("show");
    newsSection.classList.toggle("hidden");
    // Check if the news section is now visible
});


// search result

// Function to perform search and display results
function searchArticles() {
  const searchBar = document.getElementById("searchBar");
  const searchResults = document.getElementById("searchResults");
  const articles = document.querySelectorAll(".article");

  const query = searchBar.value.toLowerCase();
  searchResults.innerHTML = ""; // Clear previous results

  if (query.trim() !== "") {
    articles.forEach((article) => {
      const tags = article.getAttribute("data-tags").toLowerCase();
      if (tags.includes(query)) {
        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("h3");
        title.textContent = article.querySelector("a").textContent;

        const description = document.createElement("p");
        description.textContent = article.querySelector("p").textContent;

        card.appendChild(title);
        card.appendChild(description);
        searchResults.appendChild(card);
      }
    });

    searchResults.style.display = "block";
  } else {
    searchResults.style.display = "none";
  }
}

// Hide search results on outside click
document.addEventListener("click", (e) => {
  const searchBar = document.getElementById("searchBar");
  const searchResults = document.getElementById("searchResults");

  if (!searchBar.contains(e.target) && !searchResults.contains(e.target)) {
    searchResults.style.display = "none";
  }
});


