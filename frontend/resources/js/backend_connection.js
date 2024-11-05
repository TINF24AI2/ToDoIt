let api = "";

function send(method, apiSection, data, callback) {
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open(method, api + apiSection, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.responseText, xhr.status);
        }
    }
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}








/* 
async function load_profile_picture(){
    send("GET", "account/avatar", {}, function (response, status) {
        if (status === 200) {
            localStorage.setItem("profile_picture", response);
            const elementsByClassName = document.getElementsByClassName('avatar');
            for (let i = 0; i < elementsByClassName.length; i++) {
                elementsByClassName[i].style.backgroundImage = "url('" + response + "')";
                console.log(elementsByClassName[i].style);
            }
        }
    });
}
*/