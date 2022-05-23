const header = document.querySelector('header')

window.addEventListener ('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 0)
})


// const links = document.querySelectorAll('.link');
// const sections = document.querySelectorAll('section');

// let activeLink = 0;

// links.forEach((link, i) => {
//     link.addEventListener('click', () => {
//         if(activeLink != i){
//             links[activeLink].classList.remove('active');
//             link.classList.add('active');
//             sections[activeLink].classList.remove('active');

//             setTimeout(() => {
//                 activeLink = i;
//                 sections[i].classList.add('active');
//             }, 1000);
//         }
//     })
// })