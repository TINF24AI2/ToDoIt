// Task 1: Add the date add funtionality
//Task 2 add menu funktionality an the load the todos
//Task 3: responsivness of app

function onLoad() {
    //checkSession();
    setUsername();
    loadThemePreference();

    //Task 2: Load the lists and todos
    loadLists();
    loadTodos(); 
}


//Check if the user still logged in
function checkSession() {
    if (getCookie("session") == null) { 
        window.location.href = 'index.html';
    }
}

// Function to lout
function logout() {
    logoutBack();
    deleteCookie("session");
    window.location.href = 'index.html';
}

function setUsername() {
    if (getCookie("username") == null) {
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
        <div class="menu_list_left">
            <svg width="2rem" height="2rem" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg">
                <path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zM5.164 6.17a.792.792 0 0 0-.792-.792H4.37a.792.792 0 0 0 0 1.583h.002a.792.792 0 0 0 .792-.791zm0 3.475a.792.792 0 0 0-.792-.791H4.37a.792.792 0 0 0 0 1.583h.002a.792.792 0 0 0 .792-.792zm0 3.476a.792.792 0 0 0-.792-.791H4.37a.792.792 0 1 0 0 1.583h.002a.792.792 0 0 0 .792-.792zM13.45 6.17a.792.792 0 0 0-.792-.791H6.922a.792.792 0 1 0 0 1.583h5.736a.792.792 0 0 0 .792-.791zm0 3.476a.792.792 0 0 0-.792-.791H6.922a.792.792 0 1 0 0 1.583h5.736a.792.792 0 0 0 .792-.792z"/>
            </svg>
            <h3>${name}</h3>
        </div>
        <svg class="delete_icon" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="showDeletePopup(${id})">
            <path d="M3 6H5H21" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
    `;
}

function deleteList(id) {
    const listElement = document.getElementById(id);
    if (listElement && listElement.classList.contains('menu_list')) {
        listElement.remove();
        backendDeleteList(id);
    }
}

function showDeletePopup(id) {
    const popup = document.getElementById('delete_popup');
    popup.style.display = 'flex';
    document.body.classList.add('popup-open');
    document.getElementById('confirm_delete_button').onclick = function() {
        deleteList(id);
        closeDeletePopup();
    };
}

function closeDeletePopup() {
    const popup = document.getElementById('delete_popup');
    popup.style.display = 'none';
    document.body.classList.remove('popup-open');
}

function printToDo(id, checked, text, date) {
    const todoHTML = `
    <div id="${id}" class="todo">
        <div class="todo_header">
            <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleTodoStatus(${id}, this.checked)">
            <div>
                <p>${text}</p>
                ${date ? `<p class="todo_date_text">${date}</p>` : ''}
            </div>
        </div>
        <div class="todo_icons">
            <svg class="todo_icon_date" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 14.95C0 16.395 1.105 17.5 2.55 17.5H14.45C15.895 17.5 17 16.395 17 14.95V8.15H0V14.95ZM14.45 2.2H12.75V1.35C12.75 0.84 12.41 0.5 11.9 0.5C11.39 0.5 11.05 0.84 11.05 1.35V2.2H5.95V1.35C5.95 0.84 5.61 0.5 5.1 0.5C4.59 0.5 4.25 0.84 4.25 1.35V2.2H2.55C1.105 2.2 0 3.305 0 4.75V6.45H17V4.75C17 3.305 15.895 2.2 14.45 2.2Z" fill="#98C1D9"/>
            </svg>
            <svg class="delete_icon" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="deleteTodo(${id})">
                <path d="M3 6H5H21" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
    `;
    document.getElementById('todos_div').insertAdjacentHTML('beforeend', todoHTML);
}

function deleteTodo(id) {
    const todoElement = document.getElementById(id);
    if (todoElement && todoElement.classList.contains('todo')) {
        todoElement.remove();
        backendDeleteTodo(id);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.addList').addEventListener('click', showNewListInput);
    document.querySelector('.todo_add').addEventListener('click', showNewTodoInput);
});

function showNewListInput() {
    const existingInput = document.getElementById('newListInput');
    if (existingInput) {
        existingInput.focus();
        return;
    }
    const newListDiv = document.createElement('div');
    newListDiv.className = 'menu_list';
    newListDiv.innerHTML = `
        <div class="menu_list_left">
            <svg width="2rem" height="2rem" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg">
                <path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zM5.164 6.17a.792.792 0 0 0-.792-.792H4.37a.792.792 0 0 0 0 1.583h.002a.792.792 0 0 0 .792-.791zm0 3.475a.792.792 0 0 0-.792-.791H4.37a.792.792 0 0 0 0 1.583h.002a.792.792 0 0 0 .792-.792zm0 3.476a.792.792 0 0 0-.792-.791H4.37a.792.792 0 1 0 0 1.583h.002a.792.792 0 0 0 .792-.792zM13.45 6.17a.792.792 0 0 0-.792-.791H6.922a.792.792 0 1 0 0 1.583h5.736a.792.792 0 0 0 .792-.791zm0 3.476a.792.792 0 0 0-.792-.791H6.922a.792.792 0 1 0 0 1.583h5.736a.792.792 0 0 0 .792-.792z"/>
            </svg>
            <input type="text" id="newListInput" placeholder="Enter list name" onkeypress="handleNewListKeyPress(event)">
        </div>
    `;
    document.getElementById('menu_list_menu').appendChild(newListDiv);
    document.getElementById('newListInput').focus();
}

function showNewTodoInput() {
    const existingInput = document.getElementById('newTodoInput');
    if (existingInput) {
        existingInput.focus();
        return;
    }
    const newTodoDiv = document.createElement('div');
    newTodoDiv.className = 'todo';
    newTodoDiv.innerHTML = `
        <div class="todo_header">
            <input type="checkbox" disabled>
            <div>
                <input type="text" id="newTodoInput" placeholder="Add todo" onkeypress="handleNewTodoKeyPress(event)">
            </div>
        </div>
    `;
    document.getElementById('todos_div').appendChild(newTodoDiv);
    document.getElementById('newTodoInput').focus();
}

function handleNewListKeyPress(event) {
    if (event.key === 'Enter') {
        const input = event.target;
        const listName = input.value.trim();
        input.parentElement.parentElement.remove(); // Remove input field
        if (listName) {
            addNewList(listName);
        }
    }
}

function handleNewTodoKeyPress(event) {
    if (event.key === 'Enter') {
        const input = event.target;
        const todoText = input.value.trim();
        input.parentElement.parentElement.parentElement.remove(); // Remove input field
        if (todoText) {
            addNewTodo(todoText);
        }
    }
}

function addNewList(name) {
    // Task 7: Add BackendConnection to the backend to add a new list
    if (name) { //check if the name is not empty
        const newTodoId = Date.now(); // Simulate a unique ID
        printList(newTodoId, name);
        backendAddNewList(newTodoId, name);
    } 
}

function addNewTodo(text) {
    const newTodoId = Date.now(); // Simulate a unique ID
    const checked = false; // Ensure the new todo is added with the correct checked status
    printToDo(newTodoId, checked, text);
    backendAddNewTodo(newTodoId, text);
}

