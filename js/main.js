// /* EXPANDER MENU */
const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)

    if( toggle && navbar ) {
        toggle.addEventListener('click', ()=>{
            navbar.classList.toggle('expander');
        })
    }
}

showMenu('nav-toggle', 'navbar', 'body-pd')

// // Expander info
// const showInfo = (toggleId, infoId) => {
//     const toggle = document.getElementById(toggleId),
//     infoId = document.getElementById(infoId)

//     if ( toggle && infoId ) {
//         toggle.addEventListener('click', () => {
//             infoId.classList.toggle('expander2');
//         })
//     }
// }

// showInfo('info-toggle', 'info')

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