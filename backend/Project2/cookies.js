function setCookie(name, value, minutes) {
    let cookie = name + "=" + (value || "") + ';path=/;';

    if (minutes) {
        const date = new Date();
        date.setTime(date.getTime() + (minutes * 60 * 1000));
        cookie += "expires=" + date.toUTCString() + ";";
    }

    document.cookie = cookie;
}

function getCookie(name) {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.split("=")[0] === name) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return undefined;
}

function deleteCookie(name) {
    document.cookie = name + '=;Max-Age=-99999999;path=/;';
}

function checkSession() {
    if (getCookie("session") == null) {
        window.location.href = "../../index.html";
        return false;
    }
    let data = {
        "session": getCookie("session")
    }

    let valid = true;
    send("POST", "account/session", JSON.stringify(data), function (response, status) {
        console.log(response);
        if (status !== 200) {
            window.location.href = "../../index.html";
            openModal('loginModal');
            valid = false;
        }
    });
    return valid;
}