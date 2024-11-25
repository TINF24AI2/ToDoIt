<!DOCTYPE html>
<html lang="en">

<head>
    <title>ToDoIt</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="discription" content="ToDo App by ToDoIt">
    <meta name="author" content="Projektarbeit von Gruppe 1 im Modul Projektmanagement der DHBW">
    <link rel="shortcut icon" href="images/LogoSmall.png" type="image/x-icon">
    <script src="standard.js"></script>
    <script src="cookies.js"></script>
    <link rel="stylesheet" href="standard_stylesheet.css">
    <link rel="stylesheet" href="app.css">
</head>


<body onload="onLoad();">
    <div class="blur-background">
        <!--Header-->
        <header>
            <img class="header_img" src="images/LogoSmall.png" alt="ToDoIt Logo">
            <h1 class="header_titel">ToDo</h1>
            <h1 class="header_titel_2">It</h1>
            <div class="header_funktions_div">
                <div style="display: none;">
                    <input class="header_search" name="Search" type="text" placeholder="Search...">
                </div>
                <div class="header_icon" onclick="toggleTheme()">
                    <svg width="1.8rem" height="1.8rem" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <title>ThemeToggle</title>
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Icons">
                                <g>
                                    <rect width="48" height="48" fill="none" />
                                    <g>
                                        <path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z" />
                                        <path
                                            d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="header_icon" onclick="openPopup('profile_popup')">
                    <svg width="1.8rem" height="1.8rem" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
        
                        <title>profile_round [#1342]</title>
                        <desc>Created with Sketch.</desc>
                        <defs>
        
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -2159.000000)" fill="#000000">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598" id="profile_round_1342">
                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div> 
            </div>
        </header>
        <hr>
        <!--Content-->
        <div class="content">
            <!--menu--> 
            <div class="menu"> 
                <div class="menu_scheduled"> 
                    <h2>Scheduled</h2>
                    <div class="menu_scheduled_buttons_div">
                        <div class="menu_scheduled_buttons" onclick="openList(1, 'Today')">   <!--Today-->
                            <svg class="menu_scheduled_icons" width="4rem" height="4rem" viewBox="0 0 49 49" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.9513 3.49578H40.2034V1.79697C40.2034 0.856347 39.4801 0.0490022 38.5395 0.00202544C38.3032 -0.00936173 38.067 0.0273537 37.8452 0.109947C37.6235 0.192541 37.4209 0.319293 37.2496 0.482523C37.0783 0.645752 36.9419 0.842061 36.8487 1.05955C36.7555 1.27705 36.7074 1.5112 36.7074 1.74781V3.49578H12.2358V1.79697C12.2358 0.856347 11.5126 0.0490022 10.572 0.00202544C10.3356 -0.00936173 10.0994 0.0273537 9.87769 0.109947C9.65595 0.192541 9.4533 0.319293 9.282 0.482523C9.1107 0.645752 8.97432 0.842061 8.88113 1.05955C8.78794 1.27705 8.73988 1.5112 8.73986 1.74781V3.49578H6.99189C5.13753 3.49578 3.35911 4.23243 2.04788 5.54366C0.736643 6.8549 0 8.63331 0 10.4877V11.7987C0 11.9146 0.0460403 12.0257 0.127992 12.1077C0.209945 12.1896 0.321095 12.2356 0.436993 12.2356H48.5062C48.6221 12.2356 48.7333 12.1896 48.8152 12.1077C48.8972 12.0257 48.9432 11.9146 48.9432 11.7987V10.4877C48.9432 8.63331 48.2066 6.8549 46.8953 5.54366C45.5841 4.23243 43.8057 3.49578 41.9513 3.49578Z" fill="white"/>
                                <path d="M48.6155 15.7317H0.327745C0.240821 15.7317 0.157458 15.7662 0.0959944 15.8277C0.0345303 15.8891 0 15.9725 0 16.0594V41.9513C0 43.8056 0.736643 45.584 2.04788 46.8953C3.35911 48.2065 5.13753 48.9432 6.99189 48.9432H41.9513C43.8057 48.9432 45.5841 48.2065 46.8953 46.8953C48.2066 45.584 48.9432 43.8056 48.9432 41.9513V16.0594C48.9432 15.9725 48.9087 15.8891 48.8472 15.8277C48.7858 15.7662 48.7024 15.7317 48.6155 15.7317ZM20.9757 30.0902C20.9757 30.918 20.6468 31.7119 20.0615 32.2972C19.4761 32.8826 18.6822 33.2114 17.8544 33.2114H10.1131C9.28531 33.2114 8.49142 32.8826 7.90607 32.2972C7.32073 31.7119 6.99189 30.918 6.99189 30.0902V22.3489C6.99189 21.5211 7.32073 20.7272 7.90607 20.1418C8.49142 19.5565 9.28531 19.2276 10.1131 19.2276H17.8544C18.6822 19.2276 19.4761 19.5565 20.0615 20.1418C20.6468 20.7272 20.9757 21.5211 20.9757 22.3489V30.0902Z" fill="white"/>
                            </svg>
                            <h3>Today</h3>
                        </div>
                        
                        <div class="menu_scheduled_buttons" onclick="openList(2, 'This Week')"> <!--This Week-->
                            <svg class="menu_scheduled_icons" width="4rem" height="4rem" viewBox="0 0 49 49" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.6157 3.46782H39.8817V1.7826C39.8817 0.849496 39.1643 0.0486102 38.2312 0.00200924C37.9967 -0.00928684 37.7624 0.0271348 37.5425 0.109068C37.3225 0.191 37.1215 0.316738 36.9516 0.478662C36.7816 0.640586 36.6463 0.835324 36.5539 1.05108C36.4615 1.26683 36.4138 1.49911 36.4138 1.73383V3.46782H12.1379V1.7826C12.1379 0.849496 11.4205 0.0486102 10.4874 0.00200924C10.2529 -0.00928684 10.0186 0.0271348 9.79866 0.109068C9.5787 0.191 9.37767 0.316738 9.20774 0.478662C9.03781 0.640586 8.90253 0.835324 8.81008 1.05108C8.71764 1.26683 8.66996 1.49911 8.66994 1.73383V3.46782H6.93595C5.09642 3.46782 3.33224 4.19857 2.03149 5.49931C0.73075 6.80006 0 8.56424 0 10.4038V11.7043C0 11.8192 0.045672 11.9295 0.126968 12.0108C0.208265 12.0921 0.318527 12.1378 0.433497 12.1378H48.1182C48.2332 12.1378 48.3434 12.0921 48.4247 12.0108C48.506 11.9295 48.5517 11.8192 48.5517 11.7043V10.4038C48.5517 8.56424 47.8209 6.80006 46.5202 5.49931C45.2194 4.19857 43.4553 3.46782 41.6157 3.46782Z" fill="white"/>
                                <path d="M48.2266 15.6057H0.325123C0.238895 15.6057 0.156199 15.64 0.0952264 15.7009C0.0342541 15.7619 0 15.8446 0 15.9308V41.6155C0 43.4551 0.73075 45.2193 2.03149 46.52C3.33224 47.8207 5.09642 48.5515 6.93595 48.5515H41.6157C43.4553 48.5515 45.2194 47.8207 46.5202 46.52C47.8209 45.2193 48.5517 43.4551 48.5517 41.6155V15.9308C48.5517 15.8446 48.5174 15.7619 48.4564 15.7009C48.3955 15.64 48.3128 15.6057 48.2266 15.6057ZM42.0319 29.8493C42.0319 30.6705 41.7057 31.4581 41.125 32.0387C40.5443 32.6194 39.7568 32.9456 38.9356 32.9456H10.0322C9.21103 32.9456 8.42349 32.6194 7.84283 32.0387C7.26217 31.4581 6.93595 30.6705 6.93595 29.8493V22.1699C6.93595 21.3488 7.26217 20.5612 7.84283 19.9806C8.42349 19.3999 9.21103 19.0737 10.0322 19.0737H38.9356C39.7568 19.0737 40.5443 19.3999 41.125 19.9806C41.7057 20.5612 42.0319 21.3488 42.0319 22.1699V29.8493Z" fill="white"/>
                            </svg>
                            <h3>This Week</h3>
                        </div>
                    </div>                   
                </div>
    
                <div class="menu_lists"> <!--MyLists-->
                    <h2>My Lists</h2>
                    <div class="menu_list_menu" id="menu_list_menu">
                        


                    </div>
                </div>
    
                <div class="addList">
                    Add List
                </div>
            </div>
    
            <!--ToDos-->
            <div id="todo_div" class="todo_div"> 
                <h2 id="todo_div_header">[List]</h2> 
                <div id="todos_div" class="todos_div"> 
                    <!-- Todos will be inserted here --> 
                </div> 
                <div class="todo_add"> 
                    Add ToDo 
                </div> 
            </div>           
        </div>
    </div>
    <!--Profile Popup-->
    <div class="popup" id="profile_popup">
        <div class="profile_popup_username" id="profile_popup_username">.</div>
        <hr>
        <div onclick="logout()" class="profile_popup_signout"> 
            <svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H17C17.5523 21 18 20.5523 18 20C18 19.4477 17.5523 19 17 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5H17C17.5523 5 18 4.55228 18 4C18 3.44772 17.5523 3 17 3H6ZM15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289C13.9024 7.68342 13.9024 8.31658 14.2929 8.70711L16.5858 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16.5858L14.2929 15.2929C13.9024 15.6834 13.9024 16.3166 14.2929 16.7071C14.6834 17.0976 15.3166 17.0976 15.7071 16.7071L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L15.7071 7.29289Z" fill="#000000"/>
            </svg>
            Sign Out
        </div>
        <div onclick="closePopup('profile_popup')">
            <svg  class="popup_close" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" fill="#0F0F0F"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#0F0F0F"/>
            </svg>
        </div>
    </div>

    <!-- Delete Confirmation Popup -->
    <div class="popup delete_popup" id="delete_popup">
        <div>Are you sure you want to delete this list</div>
        <div>and all its todos?</div>
        <div class="delete_popup_buttons">
            <div class="delete_popup_button warning" id="confirm_delete_button">Yes</div>
            <div class="delete_popup_button" onclick="closeDeletePopup()">No</div>
        </div>
    </div>

    <!-- Date Change Popup -->
    <div class="popup" id="date_change_popup">
        <div>Enter the new date (dd.mm.yy):</div>
        <input type="text" id="date_input" class="styled-input" placeholder="dd.mm.yy">
        <div class="popup_buttons">
            <div class="popup_button save" id="confirm_date_button">Save</div>
            <div class="popup_button cancel" onclick="closeDateChangePopup()">Cancel</div>
        </div>
    </div>
    <script src="app.js"></script>
</body>

</html>