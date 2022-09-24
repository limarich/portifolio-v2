// toggle nav bar 
let navbar = document.querySelector('#navbar');
let openMenuBtn = document.querySelector('.menu-btn');
let closeMenuBtn = document.querySelector('#close-menu');
closeMenuBtn.addEventListener('click',()=> {
   navbar.classList.toggle("desactive");
});
openMenuBtn.addEventListener('click',()=> {
    navbar.classList.toggle("desactive");
 });
//  scroll top button
let scrollTopBtn = document.querySelector('#scroll-top');
window.onscroll = () => {
   if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopBtn.style.display = "block";
   } else {
      scrollTopBtn.style.display = "none";
   }
}
function goToTop() {
   document.body.scrollTop = 0;// For Safari
   document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}
