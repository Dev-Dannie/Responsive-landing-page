const navLinks = document.querySelector('.nav-links')
const navBar = document.getElementById('nav-icon')
const closeBtn = document.getElementById('close-btn')

navBar.addEventListener('click', () => {
    navLinks.classList.toggle('display-nav')
})

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('display-nav')
})