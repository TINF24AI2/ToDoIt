// Description: This file contains the javascript code for the index page.

//Todo1: Add code to handle the api call 
        //and send error message to the user if the username or password is incorrect
        //and send the user to the home page if the username and password is correct
//Todo2: Add code to check if the user is already logged in


// Check if the user is already logged in

// Function to login
function login() {
    // Get the username and password from the input fields
    var username = document.getElementById('login_username').value;
    var password = document.getElementById('login_password').value
    var username_label = document.getElementById('login_username_label');
    var password_label = document.getElementById('login_password_label');

    // Reset the labels to their original state
    username_label.style.color = 'var(--text_color)';
    password_label.style.color = 'var(--text_color)';
    username_label.innerHTML = 'Enter Username';
    password_label.innerHTML = 'Enter Password';
    // Check if the username and password are not empty with html injection
    var flag = 0;
    if (username == '') {
        username_label.style.color = 'var(--warning_color)';
        username_label.innerHTML += ' - Username is required';
        flag = 1;
    }
    if (password == '') {
        password_label.style.color = 'var(--warning_color)';
        password_label.innerHTML += ' - Password is required';
        flag = 1;
    }
    
    if(flag = 1){
        return;
    }
    

    
}



// Function to signup
function signup() {
    // Get the username and password from the input fields
    var username = document.getElementById('signup_username').value;
    var password = document.getElementById('signup_password').value;
    var checkbox = document.getElementById('checkbox').checked;
    var username_label = document.getElementById('signup_username_label');
    var password_label = document.getElementById('signup_password_label');
    var checkbox_div = document.getElementById('checkbox_div');

    // Reset the labels to their original state
    username_label.style.color = 'var(--text_color)';
    password_label.style.color = 'var(--text_color)';
    checkbox_div.innerHTML = '<input id="checkbox" type="checkbox">Accept our<a href="ref/privacy_policy-terms_of_service.html"> Privacy Policy & Terms of Service</a>';
    username_label.innerHTML = 'Enter a Username';
    password_label.innerHTML = 'Create a Password';

    // Check if the username and password are not empty
   
    var flag = 0;
    if (username == '') {
        username_label.style.color = 'var(--warning_color)';
        username_label.innerHTML += ' - Username is required';
        flag = 1;
    }
    if (password == '') {
        password_label.style.color = 'var(--warning_color)';
        password_label.innerHTML += ' - Password is required';
        flag = 1;
    }
    if (checkbox == false) {
        checkbox_div.innerHTML = '<input id="checkbox" type="checkbox" style="color: var(--warning_color);" > You have to accept our<a href="ref/privacy_policy-terms_of_service.html"> Privacy Policy & Terms of Service</a>';
        flag = 1;
    }
    
    if(flag = 1){
        return;
    }
    

    
}



// Function to switch between login and signup form
function switch_signup_login_form() {
    if (document.getElementById('signup_div').style.display == 'flex') {
        document.getElementById('signup_div').style.display = 'none';
        document.getElementById('login_div').style.display = 'flex';
    } else {
        document.getElementById('signup_div').style.display = 'flex';
        document.getElementById('login_div').style.display = 'none';
    }
}









// Api call to signup
    /*
    var data = {
        username: username,
        password: password
    };
    fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                window.location.href = '/home';
            });
        } else {
            response.json().then(data => {
                alert(data.message);
            });
        }
    });
    */