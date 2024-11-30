
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
    const input = document.getElementById('searchBar').value.toLowerCase();
    const articles = document.querySelectorAll('.article');
    const searchResultsDiv = document.getElementById('searchResults');

    // Clear previous search results
    searchResultsDiv.innerHTML = '';

    // If search input is empty, hide the results
    if (input === '') {
      searchResultsDiv.style.display = 'none';
      return;
    }

    let resultsFound = false; // Track if any results are found

    articles.forEach(function(article) {
      const tags = article.getAttribute('data-tags').toLowerCase();
      const title = article.querySelector('a').innerText.toLowerCase();

      // Check if tags or title match the search input
      if (tags.includes(input) || title.includes(input)) {
        resultsFound = true;
        const link = article.querySelector('a').cloneNode(true); // Clone the link
        
        // Add event listener to hide results when a link is clicked
        link.addEventListener('click', function() {
          searchResultsDiv.style.display = 'none';  // Hide results on click
          document.getElementById('searchBar').value = '';  // Clear search bar
        });

        searchResultsDiv.appendChild(link); // Append the link to the search results
      }
    });

    // Display search results if found, otherwise hide the search box
    if (resultsFound) {
      searchResultsDiv.style.display = 'block';
    } else {
      searchResultsDiv.style.display = 'none';
    }
  }

  // Optional: Close search results when the user clicks outside the search box
  window.addEventListener('click', function(e) {
    const searchBar = document.getElementById('searchBar');
    const searchResultsDiv = document.getElementById('searchResults');
    
    if (!searchBar.contains(e.target) && !searchResultsDiv.contains(e.target)) {
      searchResultsDiv.style.display = 'none';
    }
  });

function updateBreadcrumb(page) {
    document.getElementById('breadcrumb').innerText = page;
  }

// Toggle Sidebar for Mobile
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show');
  }
