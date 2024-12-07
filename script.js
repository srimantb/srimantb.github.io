 // ################## date and time ##################
 // Function to get current date and time
 var span = document.getElementById('span');
 function time() {
   var d = new Date();
   var s = d.getSeconds();
   var m = d.getMinutes();
   var h = d.getHours();
   span.textContent = 
     ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
 }
 setInterval(time, 1000);
   // Call the updateDateTime function when the page loads 
   window.onload = function() {
     updateDateTime(); // Immediately show the current time on page load
     setInterval(updateDateTime, 60000);  // Update every minute
   };
// ################## date and time End ##################

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


// ##############################  sidebar stick
// sidebar stick
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.sidebar-link');
  const scrollStick = document.querySelector('.scroll-stick');

  links.forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
      // Get the top position of the hovered link
      const rect = link.getBoundingClientRect();
      const sidebarRect = link.parentElement.getBoundingClientRect();
      const topOffset = rect.top - sidebarRect.top;

      // Move the scroll stick to the hovered link
      scrollStick.style.top = `${topOffset}px`;
      scrollStick.style.height = `${rect.height}px`;
    });

    link.addEventListener('mouseleave', () => {
      // Reset to the currently active link after hover
      const activeLink = document.querySelector('.sidebar-link.active');
      if (activeLink) {
        const rect = activeLink.getBoundingClientRect();
        const sidebarRect = activeLink.parentElement.getBoundingClientRect();
        const topOffset = rect.top - sidebarRect.top;

        scrollStick.style.top = `${topOffset}px`;
        scrollStick.style.height = `${rect.height}px`;
      }
    });
  });

  // On page load, set the stick position to the active link
  const activeLink = document.querySelector('.sidebar-link.active');
  if (activeLink) {
    const rect = activeLink.getBoundingClientRect();
    const sidebarRect = activeLink.parentElement.getBoundingClientRect();
    const topOffset = rect.top - sidebarRect.top;

    scrollStick.style.top = `${topOffset}px`;
    scrollStick.style.height = `${rect.height}px`;
  }
});
// ################################################# 

// J####################  javaScript for News Toggle Button
// JavaScript for News Toggle Button
document.addEventListener("DOMContentLoaded", () => {
  const newsSection = document.getElementById("newsSection");
  const toggleNewsBtn = document.getElementById("toggle-news-btn");
  const mainContent = document.querySelector(".main");

  // Ensure news section is hidden initially
  newsSection.classList.add("hidden");

  toggleNewsBtn.addEventListener("click", () => {
    newsSection.classList.toggle("hidden");
    newsSection.classList.toggle("show");

    
  });
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


//  ################################################   TOC list the contents
// JavaScript to highlight active ToC link
document.addEventListener("DOMContentLoaded", () => {
  const tocLinks = document.querySelectorAll(".toc-link");
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const tocLink = document.querySelector(
          `.toc-link[href="#${entry.target.id}"]`
        );

        if (entry.isIntersecting) {
          tocLinks.forEach((link) => link.classList.remove("active"));
          tocLink.classList.add("active");
        }
      });
    },
    { root: null, threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));

  tocLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });
});