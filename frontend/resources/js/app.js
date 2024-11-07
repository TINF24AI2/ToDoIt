//Check if the user still logged in
function checkSession() {
    if (getCookie("session") = null) {
       window.location.href = 'index.html';
   }
}

// Search Funktion
/* Event listener */
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector(".header_search");
    if (searchInput) {
        searchInput.addEventListener('keypress', handleKeyPress);
    }
});

/* Function */
function performSearch(){
   const searchInput = document.querySelector(".header_search");
   
   //Task1 - Search for ToDos
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}