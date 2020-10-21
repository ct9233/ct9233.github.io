const menuLogo = document.querySelector('.logo');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const navItems = [nav1, nav2, nav3]
const menuItems = document.querySelectorAll('.menu');

function expandMenu() {
    if (nav1.classList.contains('inactive-1')) {
        navItems.forEach((navItem, i) => 
        navItem.classList.replace(`inactive-${i + 1}`, `active-${i + 1}`));
        setTimeout(() => {
            return navItems.forEach((navItem, i) => 
            navItem.classList.replace(`active-${i + 1}`, `inactive-${i + 1}`));
        }, 5000);
    }
}

menuLogo.addEventListener('mouseover', expandMenu);