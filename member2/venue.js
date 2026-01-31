function acceptCookies() {
    document.getElementById("cookieBox").style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
}

window.onload = function () {
    if (localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookieBox").style.display = "none";
    }
};
