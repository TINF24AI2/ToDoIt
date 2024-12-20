<!DOCTYPE html>
<html lang="en">

<head>
    <title>ToDoIt</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="discription" content="ToDo App by ToDoIt">
    <meta name="author" content="Projektarbeit von Gruppe 1 im Modul Projektmanagement der DHBW">
    <link rel="shortcut icon" href="images/LogoSmall.png" type="image/x-icon">
    <script src="cookies.js"></script>
    <script src="standard.js"></script>
    <script src="hash.js"></script>
    <link rel="stylesheet" href="standard_stylesheet.css">
    <link rel="stylesheet" href="index.css">
    <script src="index.js"></script>
</head>


<body > <!--onload="onIndexLoad()" -->
    <div class="outerdiv">
        <!--Header-->
        <header>
            <img class="header_img" src="images/LogoSmall.png" alt="ToDoIt Logo">
            <h1 class="header_titel">ToDo</h1><h1 class="header_titel_2">It</h1>
            <div class="header_theme_toggler" onclick="toggleTheme()">
                <svg width="2rem" height="2rem" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <title>ThemeToggle</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Icons">
                            <g>
                                <rect width="48" height="48" fill="none"/>
                                <g>
                                    <path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z"/>
                                    <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div id="user_info" style="display: none;"> <span id="logged_in_user"></span> </div>
        </header>
        <!--Content-->

        <!--Sign Up Page-->
        <div id="signup_div" class="form_div" style="display: flex">
            <h2>Sign Up</h2>
            <h3>Join the Productivity Revolution!</h3>
            <form id="signupform" action="javascript: signup()" method="post">
                <label id="signup_username_label" for="signup_username">Enter a Username</label>
                <input type="text" id="signup_username" name="signup_username" placeholder="Username">
                <label id="signup_password_label" for="signup_password">Create a Password</label>
                <input type="password" id="signup_password" name="signup_password" placeholder="Password">
                <div id="checkbox_div" class="form_checkbox"><input id="checkbox" type="checkbox">Accept our<a
                        href="privacy_policy-terms_of_service.php"> Privacy Policy & Terms of Service and Cookies</a></div>
                <input type="submit" name="signup" value="Sign Up">
            </form>
            <p>Already have an account? <a  onclick="toggleSignupLogin()">Login</a></p>
        </div>

        <!--Login Page-->
        <div id="login_div" class="form_div hidden" style="display: none">
            <h2>Login</h2>
            <h3>Welcome Back</h3>
            <form id="loginform" action="javascript:login()" method="post"> 
                <label id="login_username_label" for="login_username">Enter Username</label>
                <input type="text" id="login_username" name="username" placeholder="Username" >
                <label id="login_password_label" for="login_password">Enter Password</label>
                <input type="password" id="login_password" name="password" placeholder="Password" >
                <input type="submit" value="Login">
            </form>
            <p>Don't have an account? <a onclick="toggleSignupLogin()">Sign Up</a></p> 
        </div>
    </div>


    <!--Footer-->
    <footer>
        <p>2024 ToDoIt - Projektmanagement</p>
        <p>
            <a class="footer_github_link" href="https://github.com/TINF24AI2/ToDoIt">GitHub</a>
            <a href="privacy_policy-terms_of_service.php">Privacy Policy & Terms of Service</a>
        </p>
    </footer>
</body>

</html>