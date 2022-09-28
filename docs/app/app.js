import mainPart from './logic/mainPart.js'

const header = document.querySelector('header')
const projectsInfoForMobile = document.getElementById('projectsInfoForMobile')
let sticky = document.querySelector('.sticky')
const coverShadow = document.querySelector('.coverShadow')

window.addEventListener ('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0)

    if (navlist.classList.value === 'navlist') {
        coverShadow.style.display = 'none'

        if (header.classList.value === 'sticky') {
            sticky = document.querySelector('.sticky')
            sticky.style.boxShadow = '0px 0px 10px rgb(0 0 0 / 10%)'
        }
    }
})
window.addEventListener ('click', () => {
    sticky = document.querySelector('.sticky')

    if (navlist.classList.value === 'navlist active') {

        setTimeout(() => {

            if (window.scrollY === 0) {
                coverShadow.style.top = '56px'
            } else if (window.scrollY > 0) {
                coverShadow.style.top = '46px'
            }

            coverShadow.style.display = 'flex'

        }, 600);

        if (header.classList.value === 'sticky') {
            sticky.style.boxShadow = 'none'
        }
    } else if (navlist.classList.value === 'navlist') {
            coverShadow.style.display = 'none'

        if (header.classList.value === 'sticky') {
            sticky.style.boxShadow = '0px 0px 10px rgb(0 0 0 / 10%)'
        }
    }
})

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
sr.reveal('#projectsInfoForMobile', {delay:1000, duration: 2000, origin: 'top', distance: '100px', beforeReveal: checkIfIsMobileDevice, afterReveal: hideEffect})


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
    }, 1500);

    setTimeout(() => {

        projectsInfoForMobile.style.display = 'none'
    }, 2550);
}

mainPart()