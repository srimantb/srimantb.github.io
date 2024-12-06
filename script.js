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
// ########################### NAme promp
// Check if a name is already saved in localStorage
    // JavaScript Function to Redirect to Home Page
//     window.onload = function () {
//       const savedName = localStorage.getItem('userName');
//       if (savedName) {
//         console.log(savedName)
//         window.location.href = 'home.html';
//       } else {
//         window.location.href = 'home.html';// Default fallback
//       }}
//     function submitLogin() {
//       const username = document.getElementById('username').value.trim();
//       if (username) {
//           localStorage.setItem('userName', username); // Save name to localStorage
//           window.location.href = 'home.html'; // Redirect to home page
//       } else {
//           alert('Please enter your name!');
//       }
//   }
//   console.log(localStorage.getItem('userName'));
//   window.onload = function () {
//     const savedName = localStorage.getItem('userName');
//     if (savedName) {
//         document.getElementById('welcomeMessage').textContent = `Welcome, ${savedName}!`;
//     } else {
//         document.getElementById('welcomeMessage').textContent = `Hey Welcome!`; // Default fallback
//     }
// };
// function logout() {
//   localStorage.removeItem('userName'); // Clear stored name
//   window.location.href = 'index.html'; // Redirect to login page
// }

// //############################### Welcome section start
// const hours = new Date().getHours();
// const greeting =
//     hours < 12
//         ? "Good Morning, Hacker!"
//         : hours < 18
//         ? "Good Afternoon, Hacker!"
//         : "Good Evening, Hacker!";
// document.querySelector('.welcome-title').textContent = greeting;

// Array of quotes
// Array of quotes
// const quotes = [
//   "The quieter you become, the more you are able to hear.",
//   "The only true wisdom is in knowing you know nothing. – Socrates",
//   "Hack the planet!",
//   "In the middle of difficulty lies opportunity. – Albert Einstein",
//   "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill"
// ];

// Function to insert <br> tags for long quotes
// function insertLineBreaks(text, maxLength = 50) {
  // Split the text into an array of words
  // let words = text.split(' ');
  // let line = '';
  // let result = [];

  // Loop through the words and group them into lines
  // words.forEach(word => {
  //     if (line.length + word.length + 1 > maxLength) {
  //         result.push(line);
  //         line = word;
  //     } else {
  //         line += (line.length ? ' ' : '') + word;
  //     }
  // });
  // Add any remaining text as the last line
  // if (line) {
  //     result.push(line);
  // }

  // Join the lines with <br> tags
  // return result.join('<br>');
// }

// Function to change the quote
// function changeQuote() {
//   const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//   const formattedQuote = insertLineBreaks(randomQuote);
//   document.querySelector(".quote").innerHTML = formattedQuote;
// }

// Change the quote on page load
// window.onload = changeQuote;


// //############################### Welcome section end

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
const toggleNewsBtn = document.getElementById("toggle-news-btn");
const newsSection = document.querySelector(".news-section");
const mainContent = document.querySelector(".main");

toggleNewsBtn.addEventListener("click", () => {
    newsSection.classList.toggle("hidden");
    newsSection.classList.toggle("show");
    // Check if the news section is now visible
    if (newsSection.classList.contains("show")) {
      // News section is visible, set main content width to 67%
      mainContent.style.width = "auto";
  } else {
      // News section is hidden, set main content width to auto
      mainContent.style.width = "67%";
  }
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


