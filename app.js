const menu = document.querySelector('#menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#nav__logo')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);


// const highlightMenu = () => {
//     const elem = document.querySelector('.highlight')
//     const HomeMenu = document.querySelector('#home-page')
//     const AboutMenu = document.querySelector('#about-page')
//     const SkillMenu = document.querySelector('#skill-page')
//     const ProjectMenu = document.querySelector('#projects-page')
//     const ContactMenu = document.querySelector('#contact-page')
//     let scrollPos = window.scrollY

//     if (window.innerWidth > 960 && scrollPos < 600) {
//         HomeMenu.classList.add('highlight')
//         AboutMenu.classList.remove('highlight')
//         return
//     } else if (window.innerWidth > 960 && scrollPos < 1400) {
//         AboutMenu.classList.add('highlight')
//         HometMenu.classList.remove('highlight')
//         SkillMenu.classList.remove('highlight')
//         return
//     } else if (window.innerWidth > 960 && scrollPos < 2345) {
//         SkillMenu.classList.add('highlight')
//         AboutMenu.classList.remove('highlight')
//         return
//     } else if (window.innerWidth > 960 && scrollPos < 3456) {
//         ProjectMenu.classList.add('hightlight')
//         SkillMenu.classList.remove('highlight')
//         AboutMenu.classList.remove('highlight')
//         return
//     }

//     if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
//         elem.classList.remove('highlight')
//     }
// }

// window.addEventListener('scroll', highlightMenu)
// window.addEventListener('click', highlightMenu)