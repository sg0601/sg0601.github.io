//  Variables defined with const behave like let variables, except they cannot be reassigned://
// The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
// ul is our mobile menu
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
// adding click event listener
hamburger.addEventListener('click', () => {
	// open and close the menu 3 dots
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});
// event listening for scrolling
document.addEventListener('scroll', () => {
	// The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically. 
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});
// for each and every item toggling the menu
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
