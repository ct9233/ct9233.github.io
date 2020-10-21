const menuLogo = document.querySelector('.logo');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const navMenu = document.getElementById('menu');
const navItems = [nav1, nav2, nav3]

function expandMenu() {
    if (nav1.classList.contains('inactive-1')) {
        navItems.forEach((navItem, i) => 
        navItem.classList.replace(`inactive-${i + 1}`, `active-${i + 1}`));
    }
}

function retractMenu() {
    if (nav1.classList.contains('active-1')) {
    setTimeout(() => {
		return navItems.forEach((navItem, i) =>
		navItem.classList.replace(`active-${i + 1}`, `inactive-${i + 1}`));
        }, 2500);
    }
}

menuLogo.addEventListener('mouseover', expandMenu);
navMenu.addEventListener('mouseleave', retractMenu);
