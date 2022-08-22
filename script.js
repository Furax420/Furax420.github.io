// NAVBAR
// let lastScrollTop =0;
// navbar = document.getElementById('navbar');

// window.addEventListener('scroll',function() {
//     const scrollTop = window.pageTOffset ||
//     this.document.documentElement.scrollTop;

//     if (scrollTop > lastScrollTop) {
//         navbar.style.top="-50px";
//     } else {
//         navbar.style.top="0";
//     }
//     lastScrollTop = scrollTop;
// });

let lastScrollTop =0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
    const scrollTop = window.pageTOffset ||
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top="-50px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});




//TYPED//
var typed = new Typed('.typed', {
    strings: ["Après un <b>BAC STI2D</b> obtenu en 2014, mon parcours profesionel m'a amené à aborder différents types de poste comme expliqué plus bas. Aujourd'hui et depuis quelques temps déjà j'ai décidé de m'orienter vers l'apprentissage poussé de l'informatique et plus précisement le dévelopement web. J'ai réussi à apprendre les bases et le fonctionement des langages HTML et CSS. Je cherche maintenant à approfondir ces connaissances dans un cadre profesionnel."],
    typeSpeed: 30,
    backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: false
  });
//  AOS
AOS.init();