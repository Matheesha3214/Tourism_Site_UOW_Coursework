document.addEventListener('DOMContentLoaded', function() {
  // Fetch the HTML for the navbar
    fetch("../pages/navBar.html")
          .then(response => response.text())
          .then(data => {
            // Insert the content into the container element in the page
            let container = document.getElementById("navbar");
            container.innerHTML += data;
          })
          .catch(error => console.log(error));
});