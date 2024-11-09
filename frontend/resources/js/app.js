function onLoad() {
    //checkSession();
    setUsername();
    loadThemePreference();
    loadLists();
}


//Check if the user still logged in
function checkSession() {
    if (getCookie("session") == null) { // Change '=' to '=='
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
   alert("Search is a work in progress. You searched for: " + searchInput.value);
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

function openPopup(id) {
    const popup = document.getElementById(id);
    if (popup.style.display === 'flex' || popup.style.display === '') {
        popup.style.display = 'none';
        document.body.classList.remove('popup-open');
    } else {
        popup.style.display = 'flex';
        document.body.classList.add('popup-open');
    }
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
    document.body.classList.remove('popup-open');
}

function printList(id, name) { 
    document.getElementById('menu_list_menu').innerHTML += `
    <div id="${id}" class="menu_list">
        <svg width="2rem" height="2rem" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg">
            <path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zM5.164 6.17a.792.792 0 0 0-.792-.792H4.37a.792.792 0 0 0 0 1.583h.002a.792.792 0 0 0 .792-.791zm0 3.475a.792.792 0 0 0-.792-.791H4.37a.792.792 0 0 0 0 1.583h.002a.792.792 0 0 0 .792-.792zm0 3.476a.792.792 0 0 0-.792-.791H4.37a.792.792 0 1 0 0 1.583h.002a.792.792 0 0 0 .792-.792zM13.45 6.17a.792.792 0 0 0-.792-.791H6.922a.792.792 0 1 0 0 1.583h5.736a.792.792 0 0 0 .792-.791zm0 3.476a.792.792 0 0 0-.792-.791H6.922a.792.792 0 1 0 0 1.583h5.736a.792.792 0 0 0 .792-.792zm0 3.476a.792.792 0 0 0-.792-.791H6.922a.792.792 0 1 0 0 1.583h5.736a.792.792 0 0 0 .792-.792z"/>
        </svg>
        <h3>${name}</h3>
    </div>`;
}