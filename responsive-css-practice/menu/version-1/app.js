// const burgerMenu = document.getElementById("burger");
// const navbarMenu = document.getElementById("menu");

// // Responsive Navbar Toggle
// burgerMenu.addEventListener("click", function () {
// 	navbarMenu.classList.toggle("active");
// 	burgerMenu.classList.toggle("active");
// });
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});

const btn_menu = document.querySelector('.menu-icon')
const menu_items = document.querySelector('.menu_items')
console.log(btn_menu)

  btn_menu.addEventListener('click', () =>{
  menu_items.classList.toggle('show')
   })
