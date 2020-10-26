const menuLogo = document.getElementById('logo');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const navMenu = document.getElementById('menu');
const navItems = [nav1, nav2, nav3];
let timer;
let borderTimer;

function expandMenu() {
    menuLogo.classList.add('logo-active');
    if (nav1.classList.contains('inactive-1')) {
        navItems.forEach((navItem, i) => 
        navItem.classList.replace(`inactive-${i + 1}`, `active-${i + 1}`));
        menuLogo.classList.remove('logo-pulse');
    } else {
        navItems.forEach((navItem, i) => {
        navItem.classList.add(`active-${i + 1}`);
        menuLogo.classList.remove('logo-pulse');
        navItem.classList.remove('first-load');
        })
    }
}

function retractMenu() {
    if (nav1.classList.contains('active-1')) {
        timer = setTimeout(() => {
            navItems.forEach((navItem, i) =>
            navItem.classList.replace(`active-${i + 1}`, `inactive-${i + 1}`));
            menuLogo.classList.remove('logo-active');
        }, 2000);
        borderTimer = setTimeout(() => menuLogo.classList.add('logo-pulse'), 2800)
    }
}

function clearTimers() {
    clearTimeout(timer);
    clearTimeout(borderTimer);
}

menuLogo.addEventListener('mouseover', expandMenu);
navMenu.addEventListener('mouseleave', retractMenu);
navMenu.addEventListener('mouseover', clearTimers);