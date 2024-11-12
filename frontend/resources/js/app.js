//Task: responsivness of app

function onLoad() {
    //checkSession();
    setUsername();
    loadThemePreference();
    loadLists();
    if (window.innerWidth > 600) {
        openList(0, "");
    } else {
        document.getElementById('todo_div').style.display = 'none';
    }
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
    <div id="${id}" class="menu_list" onclick="openList(${id},'${name}')">
        <div class="menu_list_left">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 11.5C23 13.7745 22.3255 15.9979 21.0619 17.8891C19.7983 19.7802 18.0022 21.2542 15.9009 22.1246C13.7995 22.995 11.4872 23.2228 9.25646 22.779C7.02568 22.3353 4.97658 21.24 3.36828 19.6317C1.75997 18.0234 0.664704 15.9743 0.220974 13.7435C-0.222756 11.5128 0.00498276 9.20049 0.87539 7.09914C1.7458 4.99779 3.21978 3.20174 5.11095 1.9381C7.00211 0.674463 9.22552 0 11.5 0C13.0102 0 14.5056 0.297456 15.9009 0.875385C17.2961 1.45331 18.5639 2.3004 19.6317 3.36827C20.6996 4.43614 21.5467 5.7039 22.1246 7.09914C22.7025 8.49438 23 9.9898 23 11.5ZM6.65423 6.54238C6.65423 6.23726 6.53302 5.94464 6.31727 5.7289C6.10153 5.51315 5.80891 5.39194 5.50379 5.39194H5.50089C5.20304 5.40253 4.92092 5.52829 4.71396 5.74275C4.50699 5.95721 4.39132 6.24361 4.39132 6.54165C4.39132 6.83969 4.50699 7.12609 4.71396 7.34055C4.92092 7.555 5.20304 7.68077 5.50089 7.69136H5.50379C5.80866 7.69136 6.10105 7.57035 6.31676 7.35492C6.53247 7.13948 6.65384 6.84724 6.65423 6.54238ZM6.65423 11.5901C6.65384 11.2852 6.53247 10.9929 6.31676 10.7775C6.10105 10.5621 5.80866 10.4411 5.50379 10.4411H5.50089C5.20304 10.4517 4.92092 10.5774 4.71396 10.7919C4.50699 11.0063 4.39132 11.2927 4.39132 11.5908C4.39132 11.8888 4.50699 12.1752 4.71396 12.3897C4.92092 12.6041 5.20304 12.7299 5.50089 12.7405H5.50379C5.80891 12.7405 6.10153 12.6193 6.31727 12.4035C6.53202 12.1878 6.65384 11.8952 6.65423 11.5901ZM6.65423 16.6392C6.65384 16.3343 6.53247 16.0421 6.31676 15.8266C6.10105 15.6112 5.80866 15.4902 5.50379 15.4902H5.50089C5.34647 15.4847 5.19252 15.5104 5.04824 15.5657C4.90396 15.621 4.7723 15.7048 4.66112 15.8121C4.54993 15.9194 4.4615 16.048 4.4011 16.1902C4.34071 16.3325 4.30958 16.4854 4.30958 16.6399C4.30958 16.7944 4.34071 16.9474 4.4011 17.0896C4.4615 17.2318 4.54993 17.3604 4.66112 17.4677C4.7723 17.575 4.90396 17.6588 5.04824 17.7141C5.19252 17.7694 5.34647 17.7951 5.50089 17.7896H5.50379C5.80891 17.7896 6.10153 17.6684 6.31727 17.4527C6.53302 17.2369 6.65423 16.9443 6.65423 16.6392ZM18.6902 6.54238C18.6898 6.23751 18.5685 5.94527 18.3528 5.72983C18.137 5.5144 17.8447 5.39339 17.5398 5.39339H9.20785C9.05343 5.3879 8.89948 5.41358 8.7552 5.46888C8.61092 5.52419 8.47926 5.60799 8.36808 5.7153C8.25689 5.8226 8.16846 5.9512 8.10806 6.09342C8.04767 6.23565 8.01654 6.38858 8.01654 6.5431C8.01654 6.69762 8.04767 6.85055 8.10806 6.99278C8.16846 7.135 8.25689 7.2636 8.36808 7.37091C8.47926 7.47821 8.61092 7.56201 8.7552 7.61732C8.89948 7.67263 9.05343 7.6983 9.20785 7.69281H17.5398C17.8447 7.69281 18.137 7.57181 18.3528 7.35637C18.5685 7.14094 18.6898 6.84724 18.6902 6.54238ZM18.6902 11.5915C18.6898 11.2866 18.5685 10.9944 18.3528 10.779C18.137 10.5635 17.8447 10.4425 17.5398 10.4425H9.20785C9.05343 10.437 8.89948 10.4627 8.7552 10.518C8.61092 10.5733 8.47926 10.6571 8.36808 10.7644C8.25689 10.8717 8.16846 11.0003 8.10806 11.1426C8.04767 11.2848 8.01654 11.4377 8.01654 11.5922C8.01654 11.7468 8.04767 11.8997 8.10806 12.0419C8.16846 12.1841 8.25689 12.3127 8.36808 12.42C8.47926 12.5273 8.61092 12.6111 8.7552 12.6665C8.89948 12.7218 9.05343 12.7474 9.20785 12.7419H17.5398C17.6909 12.7419 17.8405 12.7122 17.98 12.6544C18.1196 12.5966 18.2464 12.5118 18.3533 12.405C18.4601 12.2982 18.5448 12.1713 18.6027 12.0318C18.6605 11.8922 18.6902 11.7426 18.6902 11.5915ZM18.6902 16.6406C18.6898 16.3358 18.5685 16.0435 18.3528 15.8281C18.137 15.6127 17.8447 15.4917 17.5398 15.4917H9.20785C9.05343 15.4862 8.89948 15.5118 8.7552 15.5672C8.61092 15.6225 8.47926 15.7063 8.36808 15.8136C8.25689 15.9209 8.16846 16.0495 8.10806 16.1917C8.04767 16.3339 8.01654 16.4869 8.01654 16.6414C8.01654 16.7959 8.04767 16.9488 8.10806 17.091C8.16846 17.2333 8.25689 17.3619 8.36808 17.4692C8.47926 17.5765 8.61092 17.6603 8.7552 17.7156C8.89948 17.7709 9.05343 17.7966 9.20785 17.7911H17.5398C17.6909 17.7911 17.8405 17.7613 17.98 17.7035C18.1196 17.6457 18.2464 17.561 18.3533 17.4541C18.4601 17.3473 18.5448 17.2205 18.6027 17.0809C18.6605 16.9413 18.6902 16.7917 18.6902 16.6406Z" fill="white"/>
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
    openList(0, "");
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
                ${date ? `<p class="todo_date_text ${isDateInPast(date) && !checked ? 'past_due' : ''}">${date}</p>` : ''}
            </div>
        </div>
        <div class="todo_icons">
            <svg class="todo_icon_date" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="changeDate(${id})">
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

function toggleTodoStatus(id, checked) {
    toggleTodoStatusBackend(id, checked);
    const todoElement = document.getElementById(id);
    const dateElement = todoElement.querySelector('.todo_date_text');
    if (checked) {
        dateElement.classList.remove('past_due');
    } else if (isDateInPast(dateElement.innerText)) {
        dateElement.classList.add('past_due');
    }
}

let currentTodoId = null;

function changeDate(id) {
    currentTodoId = id;
    const todoElement = document.getElementById(id);
    const existingDate = todoElement.querySelector('.todo_date_text') ? todoElement.querySelector('.todo_date_text').innerText : '';
    document.getElementById('date_input').value = existingDate;
    openPopup('date_change_popup');
}

function closeDateChangePopup() {
    closePopup('date_change_popup');
}

function isValidDate(date) {
    const regex = /^\d{2}\.\d{2}\.\d{2}$/;
    return regex.test(date);
}

function isDateInPast(date) {
    const [day, month, year] = date.split('.').map(Number);
    const todoDate = new Date(year + 2000, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return todoDate < today;
}

function printDate(id, date) {
    const todoElement = document.getElementById(id);
    const dateElement = todoElement.querySelector('.todo_date_text');
    const isChecked = todoElement.querySelector('input[type="checkbox"]').checked;
    if (dateElement) {
        dateElement.innerText = date;
    } else {
        const newDateElement = document.createElement('p');
        newDateElement.className = 'todo_date_text';
        newDateElement.innerText = date;
        todoElement.querySelector('.todo_header div').appendChild(newDateElement);
    }
    if (isDateInPast(date) && !isChecked) {
        dateElement.classList.add('past_due');
    } else {
        dateElement.classList.remove('past_due');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.addList').addEventListener('click', showNewListInput);
    document.querySelector('.todo_add').addEventListener('click', showNewTodoInput);

    document.getElementById('confirm_date_button').onclick = function() {
        const date = document.getElementById('date_input').value;
        if (date && isValidDate(date)) {
            changeDateOfToDo(currentTodoId, date);
            printDate(currentTodoId, date);
            closeDateChangePopup();
        } else {
            alert('Invalid date format. Please enter the date in dd.mm.yy format.');
        }
    };

    document.getElementById('date_input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById('confirm_date_button').click();
        }
    });
});

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
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 11.5C23 13.7745 22.3255 15.9979 21.0619 17.8891C19.7983 19.7802 18.0022 21.2542 15.9009 22.1246C13.7995 22.995 11.4872 23.2228 9.25646 22.779C7.02568 22.3353 4.97658 21.24 3.36828 19.6317C1.75997 18.0234 0.664704 15.9743 0.220974 13.7435C-0.222756 11.5128 0.00498276 9.20049 0.87539 7.09914C1.7458 4.99779 3.21978 3.20174 5.11095 1.9381C7.00211 0.674463 9.22552 0 11.5 0C13.0102 0 14.5056 0.297456 15.9009 0.875385C17.2961 1.45331 18.5639 2.3004 19.6317 3.36827C20.6996 4.43614 21.5467 5.7039 22.1246 7.09914C22.7025 8.49438 23 9.9898 23 11.5ZM6.65423 6.54238C6.65423 6.23726 6.53302 5.94464 6.31727 5.7289C6.10153 5.51315 5.80891 5.39194 5.50379 5.39194H5.50089C5.20304 5.40253 4.92092 5.52829 4.71396 5.74275C4.50699 5.95721 4.39132 6.24361 4.39132 6.54165C4.39132 6.83969 4.50699 7.12609 4.71396 7.34055C4.92092 7.555 5.20304 7.68077 5.50089 7.69136H5.50379C5.80866 7.69136 6.10105 7.57035 6.31676 7.35492C6.53247 7.13948 6.65384 6.84724 6.65423 6.54238ZM6.65423 11.5901C6.65384 11.2852 6.53247 10.9929 6.31676 10.7775C6.10105 10.5621 5.80866 10.4411 5.50379 10.4411H5.50089C5.20304 10.4517 4.92092 10.5774 4.71396 10.7919C4.50699 11.0063 4.39132 11.2927 4.39132 11.5908C4.39132 11.8888 4.50699 12.1752 4.71396 12.3897C4.92092 12.6041 5.20304 12.7299 5.50089 12.7405H5.50379C5.80891 12.7405 6.10153 12.6193 6.31727 12.4035C6.53202 12.1878 6.65384 11.8952 6.65423 11.5901ZM6.65423 16.6392C6.65384 16.3343 6.53247 16.0421 6.31676 15.8266C6.10105 15.6112 5.80866 15.4902 5.50379 15.4902H5.50089C5.34647 15.4847 5.19252 15.5104 5.04824 15.5657C4.90396 15.621 4.7723 15.7048 4.66112 15.8121C4.54993 15.9194 4.4615 16.048 4.4011 16.1902C4.34071 16.3325 4.30958 16.4854 4.30958 16.6399C4.30958 16.7944 4.34071 16.9474 4.4011 17.0896C4.4615 17.2318 4.54993 17.3604 4.66112 17.4677C4.7723 17.575 4.90396 17.6588 5.04824 17.7141C5.19252 17.7694 5.34647 17.7951 5.50089 17.7896H5.50379C5.80891 17.7896 6.10153 17.6684 6.31727 17.4527C6.53302 17.2369 6.65423 16.9443 6.65423 16.6392ZM18.6902 6.54238C18.6898 6.23751 18.5685 5.94527 18.3528 5.72983C18.137 5.5144 17.8447 5.39339 17.5398 5.39339H9.20785C9.05343 5.3879 8.89948 5.41358 8.7552 5.46888C8.61092 5.52419 8.47926 5.60799 8.36808 5.7153C8.25689 5.8226 8.16846 5.9512 8.10806 6.09342C8.04767 6.23565 8.01654 6.38858 8.01654 6.5431C8.01654 6.69762 8.04767 6.85055 8.10806 6.99278C8.16846 7.135 8.25689 7.2636 8.36808 7.37091C8.47926 7.47821 8.61092 7.56201 8.7552 7.61732C8.89948 7.67263 9.05343 7.6983 9.20785 7.69281H17.5398C17.8447 7.69281 18.137 7.57181 18.3528 7.35637C18.5685 7.14094 18.6898 6.84724 18.6902 6.54238ZM18.6902 11.5915C18.6898 11.2866 18.5685 10.9944 18.3528 10.779C18.137 10.5635 17.8447 10.4425 17.5398 10.4425H9.20785C9.05343 10.437 8.89948 10.4627 8.7552 10.518C8.61092 10.5733 8.47926 10.6571 8.36808 10.7644C8.25689 10.8717 8.16846 11.0003 8.10806 11.1426C8.04767 11.2848 8.01654 11.4377 8.01654 11.5922C8.01654 11.7468 8.04767 11.8997 8.10806 12.0419C8.16846 12.1841 8.25689 12.3127 8.36808 12.42C8.47926 12.5273 8.61092 12.6111 8.7552 12.6665C8.89948 12.7218 9.05343 12.7474 9.20785 12.7419H17.5398C17.6909 12.7419 17.8405 12.7122 17.98 12.6544C18.1196 12.5966 18.2464 12.5118 18.3533 12.405C18.4601 12.2982 18.5448 12.1713 18.6027 12.0318C18.6605 11.8922 18.6902 11.7426 18.6902 11.5915ZM18.6902 16.6406C18.6898 16.3358 18.5685 16.0435 18.3528 15.8281C18.137 15.6127 17.8447 15.4917 17.5398 15.4917H9.20785C9.05343 15.4862 8.89948 15.5118 8.7552 15.5672C8.61092 15.6225 8.47926 15.7063 8.36808 15.8136C8.25689 15.9209 8.16846 16.0495 8.10806 16.1917C8.04767 16.3339 8.01654 16.4869 8.01654 16.6414C8.01654 16.7959 8.04767 16.9488 8.10806 17.091C8.16846 17.2333 8.25689 17.3619 8.36808 17.4692C8.47926 17.5765 8.61092 17.6603 8.7552 17.7156C8.89948 17.7709 9.05343 17.7966 9.20785 17.7911H17.5398C17.6909 17.7911 17.8405 17.7613 17.98 17.7035C18.1196 17.6457 18.2464 17.561 18.3533 17.4541C18.4601 17.3473 18.5448 17.2205 18.6027 17.0809C18.6605 16.9413 18.6902 16.7917 18.6902 16.6406Z" fill="white"/>
            </svg>
            <input type="text" id="newListInput" placeholder="Enter list name" onkeypress="handleNewListKeyPress(event)">
        </div>
    `;
    if (window.innerWidth <= 600) {
        const saveButton = document.createElement('button');
        saveButton.className = 'save-button';
        saveButton.innerText = 'Save';
        saveButton.onclick = function() {
            const input = document.getElementById('newListInput');
            const listName = input.value.trim();
            input.parentElement.parentElement.remove(); // Remove input field
            if (listName) {
                addNewList(listName);
            }
        };
        newListDiv.appendChild(saveButton);
    }
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
    if (window.innerWidth <= 600) {
        const saveButton = document.createElement('button');
        saveButton.className = 'save-button';
        saveButton.innerText = 'Save';
        saveButton.onclick = function() {
            console.log('Save button clicked');
            const input = document.getElementById('newTodoInput');
            const todoText = input.value.trim();
            input.parentElement.parentElement.parentElement.remove(); // Remove input field
            if (todoText) {
                addNewTodo(todoText);
            }
        };
        newTodoDiv.appendChild(saveButton);
    }
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
    if (name) { //check if the name is not empty
        const newTodoId = Date.now(); // Simulate a unique ID
        printList(newTodoId, name);
        backendAddNewList(newTodoId, name);
        openList(newTodoId, name);
    } 
}

function addNewTodo(text) {
    const newTodoId = Date.now(); // Simulate a unique ID
    const checked = false; // Ensure the new todo is added with the correct checked status
    printToDo(newTodoId, checked, text);
    backendAddNewTodo(newTodoId, text);
}

function openList(listId, name) {
    const todoDiv = document.getElementById('todo_div');
    const todosDiv = document.getElementById('todos_div');
    const todoDivHeader = document.getElementById('todo_div_header');
    const todoAddButton = document.querySelector('.todo_add');
    const backButton = document.createElement('div');

    // Remove active class from all lists
    document.querySelectorAll('.menu_list, .menu_scheduled_buttons').forEach(list => {
        list.classList.remove('active_list');
    });

    // Add active class to the selected list
    if (listId === 1) {
        name = 'Today';
        const todayButton = document.querySelector('.menu_scheduled_buttons[onclick="openList(1, \'Today\')"]');
        if (todayButton) {
            todayButton.classList.add('active_list');
        }
        todoAddButton.classList.add('hide-todo-add'); // Hide add todo button
    } else if (listId === 2) {
        name = 'This Week';
        const thisWeekButton = document.querySelector('.menu_scheduled_buttons[onclick="openList(2, \'This Week\')"]');
        if (thisWeekButton) {
            thisWeekButton.classList.add('active_list');
        }
        todoAddButton.classList.add('hide-todo-add'); // Hide add todo button
    } else {
        const selectedList = document.getElementById(listId);
        if (selectedList) {
            selectedList.classList.add('active_list');
        }
        todoAddButton.classList.remove('hide-todo-add'); // Show add todo button
    }

    if (listId === 0) {
        todoDiv.style.display = 'block';
        todosDiv.innerHTML = window.innerWidth > 600 ? '<p class="welcome-text">Welcome to ToDoIt!</p>' : '';
        todoDivHeader.innerHTML = '';
        todoAddButton.style.display = 'none';
        return;
    }

    todoDiv.style.display = 'block';
    todosDiv.innerHTML = '';
    todoDivHeader.innerHTML = name;
    if (listId === 1 || listId === 2) {
        todoAddButton.style.display = 'none'; // Hide add todo button
    } else {
        todoAddButton.style.display = 'block'; // Show add todo button
    }
    loadTodos(listId);

    // Show todos div and add back button for phone views
    if (window.innerWidth <= 600) {
        todoDiv.classList.add('show');
        backButton.className = 'back-button';
        backButton.innerText = '< Back';
        backButton.onclick = function() {
            todoDiv.classList.remove('show');
            todoDiv.style.display = 'none'; // Hide todos div
            document.querySelector('.menu').style.display = 'block'; // Show menu
        };
        todoDivHeader.prepend(backButton);
    }
}

