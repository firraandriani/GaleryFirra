function popupToggle(){
	var popup = document.querySelector('.popup');
	popup.classList.toggle('active')
}
const thumbnail = document.querySelectorAll('.thumbnail');
var jumbo = document.querySelector(".jumbo");

thumbnail.forEach(function(e){
	e.addEventListener('click', function(){
		jumbo.src = e.src;
	});
});

function popupToggle(){
	var popup = document.querySelector('.popup');
	popup.classList.toggle('active')
}
function validateForm() {
    var nama = document.getElementById('nama');  
    var gmail = document.getElementById('gmail');
    var username = document.getElementById('username');
    var hobi = document.getElementById('hobi');
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
    else if (!hobi.value) {
        alert("Hobi tidak boleh kosong");
        hobi.focus();
    }
    else if (!pass1.value) {
        alert("Password tidak boleh kosong");
        pass1.focus();
    }
    else if (!pass2.value) {
        alert("Password tidak boleh kosong");
        pass2.focus();
    }
    else {
        alert("Terimakasih!");
        window.location.href = "../HTML/beranda.html";
    }
}