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

// Function to lout
function logout() {
    //Delete the session cookie
    deleteCookie("session");
    window.location.href = 'index.html';
}

function setUsername(){
    if(getCookie("username") == null){
        document.getElementById('profile_popup_username').innerHTML = "[Username not found]";
    } else {
        document.getElementById('profile_popup_username').innerHTML = getCookie("username");
    }
}

function openPopup(id){
    const popup = document.getElementById(id);
    if (popup.style.display === 'flex' || popup.style.display === '') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'flex';
    }
}

function closePopup(id){
    document.getElementById(id).style.display = 'none';
}