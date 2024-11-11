// This file will be used to make the backend connection and get the data from the backend
// All the IDs and are defined in this file in the add functions and will be used in the frontend to get the data from the backend

// This function will be used to login the user
function loginBack(username, password) {
    //Task 1: Make BackendConnector to the backend to login the user and set the session cookie and username cookie

    // return 0 on success and 1 on rong password and 2 on wrong username
}

// This function will be used to register the user 
function signupBack(username, password) {
    //Task 2: Make BackendConection to the backend to register the user and refers to login function to login the user

    //return 0 on success and -1 on failure
}

function logoutBack() {
    //this function gets called when the user logs out
}


function loadLists() {
    //Task 3: Make BackendConection to the backend to get all the lists refer to printList to print the lists
    

    //print the indiviual lists by calling printList(listid, listname)

    //Simulate backend connection for testing musst be removed in the final version
    printList(6575567, "List 1");
    printList(5675677, "List 2");
}

function loadTodos(listId) {
    //Task 4: Make BackendConection to the backend to get the todos of a list refers to printTodo to print the todos

    //if listId is 0 do nothing
    //if listId is 1 then print all the todos of today
    //if listID is 2 then print all the todos of this week
    //print the indiviual todos by calling printToDo(id, checked, text, date)

    //Simulate backend connection for testing musst be removed in the final version
    if (listId == 1) {
        printToDo(1, false, "Todo of today", "2021-06-01");
        printToDo(2, true, "Todo of today", "2021-06-01");
    }else if (listId == 2) {
        printToDo(3, false, "Todo of this week", "2021-06-05");
        printToDo(4, true, "Todo of this week", "2021-06-05");
    }else if (listId == 6575567) {
        printToDo(5, false, "Todo of List 1", "2021-06-05");
        printToDo(6, true, "Todo of List 1", "2021-06-05");
    }else if (listId == 5675677) {
        printToDo(7, false, "Todo of List 2", "2021-06-05");
        printToDo(8, true, "Todo of List 2", "2021-06-05");
    }
}



function backendAddNewList(id, text) {
    // Task 5: Make BackendConnection to the backend to add a new todo
    
}

function backendAddNewTodo(id, text) {
    // Task 6: Make BackendConnection to the backend to add a new todo
    
}

function toggleTodoStatusBackend(id, checked) {
    // Task 7: Make BackendConnection to the backend to update the todo status

}


function changeDateOfToDo(todoId, date) {
    //Task 8: Make BackendConection to the backend to change the date of the todo

}

function backendDeleteTodo(id) {
    // Task 9: Make BackendConnection to the backend to delete the todo

}

function backendDeleteList(listId) {
    // Task 10: Make BackendConnection to the backend to delete the list
    // this function should also delete all the todos of the list

}