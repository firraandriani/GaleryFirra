 function validateForm() {
    var nama = document.getElementById('nama');  
    var gmail = document.getElementById('gmail');
    var username = document.getElementById('username'); 
    var pass1 = document.getElementById('pass1'); 
    var pass2 = document.getElementById('pass2'); 

    if (!nama.value) {
        alert("Nama Lengkap tidak boleh kosong");
        nama.focus();
    }
    else if (!gmail.value) {
        alert("Gmail tidak boleh kosong");
        gmail.focus();
    }
    else if (!username.value) {
        alert("Username tidak boleh kosong");
        username.focus();
    }
    else if (!pass1.value) {
        alert("Password tidak boleh kosong");
        pass1.focus();
    }
    else if (!pass2.value) {
        alert("Confrim Password tidak boleh kosong");
        pass2.focus();
    }
    else {
        alert("Silahkan login terlebih dahulu");
        window.location.href = "../index.html";
    }
}

function buttonCancel() {
    alert("Apakah sudah punya akun?");
    window.location.href = "../index.html";
}