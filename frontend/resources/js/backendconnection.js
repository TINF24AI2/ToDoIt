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