// Description: This file contains the javascript code for the index page.
import * as backend from './backendconnection.js';

function onIndexLoad() {
    //checkSession();
    loadThemePreference();
}
// Check if the user is already logged in
function checkSession() {
    if (getCookie("session") != null) {
       window.location.href = 'app.html';
   }
}

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
    
    if(flag == 1){
        return;
    }

    var loginAnswer = backend.loginBack(username, password);
    console.log("loginBack returned:", loginAnswer);
    if(loginAnswer == 0){
        window.location.href = 'app.html';
    }
    else if(loginAnswer == 1){
        password_label.style.color = 'var(--warning_color)';
        password_label.innerHTML += ' - Wrong Password';
    }
    else if(loginAnswer == 2){
        username_label.style.color = 'var(--warning_color)';
        username_label.innerHTML += ' - Wrong Username';
    }
    else{
        alert('An error occured on Login');
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
    checkbox_div.innerHTML = '<input id="checkbox" type="checkbox">Accept our<a href="ref/privacy_policy-terms_of_service.html"> Privacy Policy & Terms of Service and Cookies</a>';
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
    }else if(password.length < 8){
        password_label.style.color = 'var(--warning_color)';
        password_label.innerHTML += ' - Password must be at least 8 characters';
        flag = 1;
    }
    if (checkbox == false) {
        checkbox_div.innerHTML = '<input id="checkbox" type="checkbox" style="color: var(--warning_color);" > You have to accept our<a href="ref/privacy_policy-terms_of_service.html"> Privacy Policy & Terms of Service and Cookies</a>';
        flag = 1;
    } 
    if(flag == 1){
        return;
    }
    

    var signupAnswer = backend.signupBack(username, password);
    if(signupAnswer == 0){
        window.location.href = 'app.html';
    }
    else{
        alert('An error occured on Signup');
    }

    
}



// Function to switch between login and signup form
function toggleSignupLogin() {
    var signupDiv = document.getElementById('signup_div');
    var loginDiv = document.getElementById('login_div');
    signupDiv.classList.toggle('hidden');
    loginDiv.classList.toggle('hidden');
    if (signupDiv.classList.contains('hidden')) {
        signupDiv.style.display = 'none';
        loginDiv.style.display = 'flex';
    } else {
        signupDiv.style.display = 'flex';
        loginDiv.style.display = 'none';
    }
}


function temForwarding(){
    window.location.href = 'app.html';
}