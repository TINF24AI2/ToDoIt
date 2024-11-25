
function onIndexLoad() {
    //checkSession();
    loadThemePreference();
}
// Check if the user is already logged in
function checkSession() {
    if (getCookie("session") != null) {
       window.location.href = 'app.php';
   }
}

function onIndexLoad() { 
    //checkSession(); 
    loadThemePreference(); 
    checkUserSession(); 
} 
    
function checkUserSession() { 
    var xhr = new XMLHttpRequest(); 
    xhr.open("GET", "check_session.php", true); 
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4 && xhr.status === 200) { 
            var response = JSON.parse(xhr.responseText); 
            if (response.loggedIn) { 
                document.getElementById('logged_in_user').innerText = "Logged in as: " + response.username; 
                document.getElementById('user_info').style.display = 'block'; 
            } 
        } 
    }; 
    xhr.send();             
}




// Function to signup
function signup() {
    var username = document.getElementById('signup_username').value;
    var password = document.getElementById('signup_password').value;
    var checkbox = document.getElementById('checkbox').checked;
    var username_label = document.getElementById('signup_username_label');
    var password_label = document.getElementById('signup_password_label');
    var checkbox_div = document.getElementById('checkbox_div');

    username_label.style.color = 'var(--text_color)';
    password_label.style.color = 'var(--text_color)';
    checkbox_div.innerHTML = '<input id="checkbox" type="checkbox">Accept our<a href="privacy_policy-terms_of_service.php"> Privacy Policy & Terms of Service and Cookies</a>';
    username_label.innerHTML = 'Enter a Username';
    password_label.innerHTML = 'Create a Password';

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
    } else if (password.length < 8) {
        password_label.style.color = 'var(--warning_color)';
        password_label.innerHTML += ' - Password must be at least 8 characters';
        flag = 1;
    }
    if (!checkbox) {
        checkbox_div.innerHTML = '<input id="checkbox" type="checkbox" style="color: var(--warning_color);"> You have to accept our<a href="privacy_policy-terms_of_service.php"> Privacy Policy & Terms of Service and Cookies</a>';
        flag = 1;
    }
    if (flag === 1) {
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "signup.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.status === 'success') {
                alert(response.message);
                // Reset form fields
                document.getElementById('signupform').reset();
            } else {
                alert(response.message);
            }
        }
    };
    xhr.send("signup_username=" + username + "&signup_password=" + password);
}



// Function to login
function login() {
    var username = document.getElementById('login_username').value;
    var password = document.getElementById('login_password').value;
    var username_label = document.getElementById('login_username_label');
    var password_label = document.getElementById('login_password_label');

    username_label.style.color = 'var(--text_color)';
    password_label.style.color = 'var(--text_color)';
    username_label.innerHTML = 'Enter Username';
    password_label.innerHTML = 'Enter Password';

    var flag = 0;
    if (username === '') {
        username_label.style.color = 'var(--warning_color)';
        username_label.innerHTML += ' - Username is required';
        flag = 1;
    }
    if (password === '') {
        password_label.style.color = 'var(--warning_color)';
        password_label.innerHTML += ' - Password is required';
        flag = 1;
    }
    if (flag === 1) {
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "login.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Response received:", xhr.responseText); // Debugging line
            var response = JSON.parse(xhr.responseText);
            if (response.status === 'success') {
                window.location.href = 'app.php';
            } else {
                alert(response.message);
            }
        }
    };
    xhr.send("username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password));
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
