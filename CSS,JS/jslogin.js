 function validateForm() {
    if (document.forms["form"]["username"].value == "") {
        alert("Username tidak boleh kosong");
        document.forms["form"]["username"].focus();
        return false;
    }
    if (document.forms["form"]["password"].value == "") {
        alert("Password tidak boleh kosong");
        document.forms["form"]["password"].focus();
        return false;
    }
    else {
    	alert("Selamat Datang");
    }
}