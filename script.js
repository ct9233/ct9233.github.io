const menuLogo = document.getElementById('logo');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const navMenu = document.getElementById('menu');
const navItems = [nav1, nav2, nav3];
const projLinks = document.querySelectorAll('.project-link');
const projImgs = document.querySelectorAll('.project-image');
const projBtns = document.querySelectorAll('.overlay');
let expandTimer;
let borderTimer;

// Expand Nav Menu and Pause Logo Animation
function expandMenu() {
    menuLogo.classList.add('logo-active');
    // After Menu Has Been Retracted
    if (nav1.classList.contains('inactive-1')) {
        navItems.forEach((navItem, i) => 
        navItem.classList.replace(`inactive-${i + 1}`, `active-${i + 1}`));
        menuLogo.classList.remove('logo-pulse');
    } else {
        // First Time After Page Load
        navItems.forEach((navItem, i) => {
        navItem.classList.add(`active-${i + 1}`);
        menuLogo.classList.remove('logo-pulse');
        navItem.classList.remove('first-load');
        })
    }
}

// Retract Nav Menu and Resume Logo Animation
function retractMenu() {
    if (nav1.classList.contains('active-1')) {
        expandTimer = setTimeout(() => {
            navItems.forEach((navItem, i) =>
            navItem.classList.replace(`active-${i + 1}`, `inactive-${i + 1}`));
            menuLogo.classList.remove('logo-active');
        }, 2000);
        borderTimer = setTimeout(() => menuLogo.classList.add('logo-pulse'), 2800)
    }
}

// Prevent Menu Retraction if cursor returns
function clearTimers() {
    clearTimeout(expandTimer);
    clearTimeout(borderTimer);
}

// Display/Hide Button Overlayed on Project Images
function buttonOverlay() {
	projImgs.forEach((img) => {
		img.addEventListener('mouseover', (e) =>
			e.target.nextElementSibling.removeAttribute('hidden')
		);
		img.addEventListener('mouseout', (e) => { 
            buttonTimer = setTimeout(() => {
            e.target.nextElementSibling.setAttribute('hidden', true)
            }, 50)
        });
    });
    // Maintain button visibility while mouse over
    projBtns.forEach((btn) => {
        btn.addEventListener('mouseover', () => clearTimeout(buttonTimer))
    })
}

// Substitution in place of plaintext href in HTML
function sendEmail() {
    const part1 = 'mai';
    const part2 = 'lto:';
    const part3 = 'ct9';
    const part4 = '233@';
    const part5 = 'gma';
    const part6 = 'il.';
    const part7 = 'com';
    window.open(`${part1}${part2}${part3}${part4}${part5}${part6}${part7}`);
}

// Event Listeners
menuLogo.addEventListener('mouseover', expandMenu);
navMenu.addEventListener('mouseleave', retractMenu);
navMenu.addEventListener('mouseover', clearTimers);

buttonOverlay();