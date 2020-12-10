 function validateForm() {
    var username = document.getElementById('username');  
    var password = document.getElementById('password');

    if (!username.value) {
        alert("Username tidak boleh kosong");
        username.focus();
    }
    else if (!password.value) {
        alert("Password tidak boleh kosong");
        password.focus();
    }
    else {
        alert("Selamat Datang");
        window.location.href = "HTML/beranda.html";
    }
    // if (document.forms["form"]["username"].value == "") {
    //     alert("Username tidak boleh kosong");
    //     document.forms["form"]["username"].focus();
    //     return false;
    // }
    // if (document.forms["form"]["password"].value == "") {
    //     alert("Password tidak boleh kosong");
    //     document.forms["form"]["password"].focus();
    //     return false;
    // }
    // else {
    // 	alert("Selamat Datang");
    //     window.location.href = "../HTML/beranda.html";
    // }
}