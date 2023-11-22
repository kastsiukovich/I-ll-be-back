'use strict'
let elClose = document.getElementById('x');
let form = document.getElementsByTagName('form')[0];
let mySearch = document.querySelector('.my-search');
let search2 = document.getElementsByClassName('search-2')[0];
let submit1 = document.getElementsByClassName('submit-1')[0];
let searchInput = document.getElementsByClassName('search')[0];
let burger1 = document.getElementsByClassName('burger1')[0];
let menu = document.getElementsByClassName('menu')[0];
function f(v, i, a) {
   console.log(v, i, a)
}

function showBurger() {

   let liMenu0 = document.querySelectorAll('.padd')[0];
   let liMenu1 = document.querySelectorAll('.padd')[1];
   let liMenu2 = document.querySelectorAll('.padd')[2];
   let liMenu3 = document.querySelectorAll('.padd')[3];


   let mq = window.matchMedia('(max-width: 650px)');
   console.log(mq)
   if (menu.classList == 'menu' && mq.matches == true) {
      menu.classList.add('visible-flex');
      menu.style.cssText = `display: flex; 
      flex-direction: column;`
      liMenu0.style.padding = '0 0 0 0';
      liMenu1.style.padding = '0 0 0 0';
      liMenu2.style.padding = '0 0 0 0';
      liMenu3.style.padding = '0 0 0 0';
      
   } else if (mq.matches == true) {
      menu.classList.remove('visible-flex');
      menu.style.cssText = `display: none; 
      flex-direction: row;`
     
   }
}
function showLi() {
   let mq1 = window.matchMedia('(min-width: 651px)');

   if (mq1.matches === true) {
      // console.log(mq1.matches)
      menu.style.cssText = `display: flex; 
      flex-direction: row; padding-left: 50px;`
   } else {
      menu.style.cssText = 'display: none;';
   }
}
showLi()

function closeSearch(el) {
   mySearch.className = '';
   mySearch.className = 'hidden';
   mySearch.style.opacity = '0';
   search2.style.opacity = '1';
   search2.style.transition = '0.5s'
}

function show(el) {
   mySearch.className = '';
   mySearch.className = 'my-search className visible';
   mySearch.style.opacity = '1';
   search2.style.opacity = '0';
   search2.style.transition = '0.5s'
}

function clearInput(e) {
   let inputValue = searchInput.value;
   // console.log(inputValue);
   searchInput.value = '';
}
burger1.addEventListener('click', showBurger);
submit1.addEventListener('click', clearInput);
search2.addEventListener('click', show);
elClose.addEventListener('click', closeSearch);


function showEvent(e) {
   console.log(e.target)
}
document.addEventListener('click', showEvent)