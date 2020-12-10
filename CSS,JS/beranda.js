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