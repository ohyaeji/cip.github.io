/* EXPANDER MENU */
const showMenu = (navbarId, toggleId) => {
    const navbar = document.getElementById(navbarId),
          toggle = document.getElementById(toggleId)
    if( toggle && navbar ) {
        toggle.addEventListener('click', ()=>{
            navbar.classList.toggle('expander');
        })
    }
}
showMenu('navbar', 'nav-toggle')
showMenu('navbar', 'nav-close')

function showinfo(){
    const info = document.getElementById('info');
    info.classList.toggle('display_visible');
    info.classList.toggle('info');
}

function showpopup(){
    const popup = document.getElementById('menu_wrap');
    const menu = document.getElementById('menu');
    popup.classList.toggle('menu-wrap-visible');
    popup.classList.toggle('menu_wrap');
    menu.classList.toggle('menu_display');

}


/* LINK ACTIVE */
const linkColor = document.querySelectorAll('.nav__link')
function colorLink() {
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

/* COLLAPSE MENU */
const linkCollapse = document.getElementsByClassName('collapse__link')
var i

for(i=0;i<linkCollapse.length;i++) {
    linkCollapse[i].addEventListener('click', function(){
        const collapseMenu = this.nextElementSibling
        collapseMenu.classList.toggle('showCollapse')

        const rotate = collapseMenu.previousElementSibling
        rotate.classList.toggle('rotate')
    });
}

