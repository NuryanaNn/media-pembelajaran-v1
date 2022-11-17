let burger = document.querySelector('.burger');

let bars1 = document.querySelector('.bars1');
let bars2 = document.querySelector('.bars2');
let bars3 = document.querySelector('.bars3');

let hiddenNav = document.querySelector('.hiddenNav');



burger.addEventListener('click', function(){
	bars1.classList.toggle('change');
	bars2.classList.toggle('change');
	bars3.classList.toggle('change');
	hiddenNav.classList.toggle('change');
})