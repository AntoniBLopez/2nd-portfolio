import mainPart from './logic/mainPart.js'

const header = document.querySelector('header')
const projectsInfoForMobile = document.getElementById('projectsInfoForMobile')

window.addEventListener ('scroll', () => header.classList.toggle('sticky', window.scrollY > 0))

const menu = document.querySelector('#menu-icon')
const navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navlist.classList.remove('active')
}

// Transition efect
const sr = ScrollReveal ({
    distance: '45px',
    duration: 2700,
    reset: true
})
sr.reveal('.home-text', {delay:350, origin:'left'})
sr.reveal('.home-img', {delay:350, origin:'right'})
sr.reveal('.heading-skills', {delay:200, origin:'bottom'})
sr.reveal('.skills-container', {delay:200, origin:'bottom'})
sr.reveal('.heading-project', {delay:200, origin:'bottom'})
sr.reveal('.project-content', {delay:200, origin:'bottom'})
sr.reveal('.contact-section', {delay:200, origin:'bottom'})

// Esta lógica de a continuación que es info. para una buena experiencia de usuario con interacción, ponerlo en otro archivo y añadirlo aquí modularizado
sr.reveal('#projectsInfoForMobile', {delay:3000, duration: 3000, origin: 'top', distance: '100px', beforeReveal: checkIfIsMobileDevice, afterReveal: hideEffect})

const pageWidth  = document.documentElement.scrollWidth;
function checkIfIsMobileDevice (el) {

    if (pageWidth > 950) {
        projectsInfoForMobile.style.display = 'none'
    }
}

function hideEffect (el) {

    setTimeout(() => {

        projectsInfoForMobile.style.opacity = '0.1'
        projectsInfoForMobile.style.visibility = 'hidden'
        projectsInfoForMobile.style.transition = 'all 2s'
    }, 2000);

    setTimeout(() => {

        projectsInfoForMobile.style.display = 'none'
    }, 4000);
}

// escuchador de width
// window.addEventListener ('scroll', () => console.log(document.documentElement.scrollWidth))

mainPart()