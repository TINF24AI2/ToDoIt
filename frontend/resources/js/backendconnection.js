// This function will be used to login the user return 0 on success and 1 on rong password and 2 on wrong username
function loginBack(username, password) {
    //Task 1: Make BackendConection to the backend to login the user and set the secion cookie and username cookie
    console.log("loginBack called with username:", username, "and password:", password);
    // Simulate backend connection
    if (username && password) {
        document.cookie = "session=valid; path=/";
        console.log("Login successful");
        return 0;
    } else if (!username) {
        console.log("Wrong username");
        return 2;
    } else {
        console.log("Wrong password");
        return 1;
    }
}

// This function will be used to register the user return 0 on success
function signupBack(username, password) {
    //Task 2: Make BackendConection to the backend to register the user and refers to login function to login the user
    return -1;
}


function loadLists() {
    //Task 3: Make BackendConection to the backend to get the lists refer to printList to print the lists
    
    printList(1, "List 1");
}

function loadTodos(listId) {
    //Task 4: Make BackendConection to the backend to get the todos refer to printTodo to print the todos
    //load them in with ther priority
    printToDo(2,false,"Todo 1");
    printToDo(23,true,"Todo 2","12.10.24");
}

function changeDateOfToDo(id, date) {
    //Task 5: Make BackendConection to the backend to change the date of the todo
}

function backendDeleteList(id) {
    // Task 6: Make BackendConnection to the backend to delete the list
    console.log("backendDeleteList called with id:", id);
    return 0;
}

function addNewList(name) {
    // Task 7: Make BackendConnection to the backend to add a new list
    console.log("addNewList called with name:", name);
    // Simulate backend connection
    if (name) {
        const newListId = Date.now(); // Simulate a unique ID
        printList(newListId, name);
        return newListId;
    } else {
        console.log("List name cannot be empty");
        return null;
    }
}

function backendAddNewTodo(id, text) {
    // Task 8: Make BackendConnection to the backend to add a new todo
    console.log("backendAddNewTodo called with id:", id, "and text:", text);
    // Simulate backend connection
    return 0;
}

function toggleTodoStatus(id, checked) {
    // Task 9: Make BackendConnection to the backend to update the todo status
    console.log("toggleTodoStatus called with id:", id, "and checked:", checked);
    // Simulate backend connection
    return 0;
}

function backendDeleteTodo(id) {
    // Task 10: Make BackendConnection to the backend to delete the todo
    console.log("backendDeleteTodo called with id:", id);
    // Simulate backend connection
    return 0;
}