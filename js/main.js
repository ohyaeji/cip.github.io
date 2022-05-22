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
const closeMenu = (navbarId, toggleId) => {
    const navbar = document.getElementById(navbarId),
          toggle = document.getElementById(toggleId)
    if( toggle && navbar ) {
        toggle.addEventListener('click', ()=>{
            navbar.classList.toggle('expander');
        })
    }
}
showMenu('navbar', 'nav-toggle')
closeMenu('navbar', 'nav-close')

$(function () {
    $("#info-toggle").click(function(){
        $("#info").toggle();
    })
})

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

$(function(){
    $("#confirm").click(function(){
        modalClose();
        //컨펌 이벤트 처리
    });
    $("#modal-open").click(function(){        
        $("#popup").css('display','flex').hide().fadeIn();
    });
    $("#close").click(function(){
        modalClose();
    });
    function modalClose(){
      $("#popup").fadeOut();
    }
  });

  /*!
* Start Bootstrap - Blog Post v5.0.8 (https://startbootstrap.com/template/blog-post)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-post/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project