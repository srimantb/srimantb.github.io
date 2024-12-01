
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

  // ################## Call the updateDateTime function when the page loads ##################
  window.onload = function() {
    updateDateTime(); // Immediately show the current time on page load
    setInterval(updateDateTime, 60000);  // Update every minute
  };


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


// Toggle Sidebar for Mobile
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show');
  }

  // news section

  const newsSection = document.getElementById('newsSection');
    let startX = 0;
    let endX = 0;

    // Detect swipe gesture
    document.body.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    document.body.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;

      // Swipe left to open the news section
      if (startX - endX > 50) { // Swipe threshold
        newsSection.classList.add('open');
      }

      // Swipe right to close the news section
      if (endX - startX > 50) { // Swipe threshold
        newsSection.classList.remove('open');
      }
    });

    // Close the news section if clicked outside
    document.addEventListener('click', (e) => {
      if (!newsSection.contains(e.target) && !e.target.closest('.search-bar')) {
        newsSection.classList.remove('open');
      }
    });