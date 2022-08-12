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