function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}

let cookie = getCookie("flwd")

if (cookie !== null) {
    console.log("Cookie found: " + cookie)
    let info = cookie.split(":")
    if (!["211", "111", "210", "110", "100"].includes(info[5])) {
        // The user is not vip, modify the cookie
        info[5] = "100"
        let newCookie = info.join(":")

        console.log("New cookie: " + newCookie)
        document.cookie = "flwd=" + newCookie
    }
} else {
    console.log("Cookie not found, adding anonymous info")
    document.cookie = "flwd=::User:::100:::::"
}
