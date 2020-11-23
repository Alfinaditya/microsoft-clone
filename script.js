const hambugerbutton=document.querySelector('.menu-btn')
const hamburgermenu=document.querySelector('ul.main-menu')

hambugerbutton.addEventListener('click',function() {
    hamburgermenu.classList.toggle('show')
})
