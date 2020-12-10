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
}