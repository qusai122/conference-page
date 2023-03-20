function ReadElement(selector) {
  return document.querySelector(selector);
}
const menu = ReadElement('#menu-icon');
const closeNav = ReadElement('.close-button');
const choose = ReadElement('.mobile-nav');
const nav = ReadElement('.mobile-nav');
const hello = ReadElement('#hello-dic');

function Add() {
  nav.classList.add('nav-toggle');
  document.body.classList.add('stop-scrolling');
  hello.classList.add('transparent');
}
function AddMenu(selected) {
  return selected.addEventListener('click', Add);
}
function Remove() {
  nav.classList.remove('nav-toggle');
  document.body.classList.remove('stop-scrolling');
  hello.classList.remove('transparent');
}
function RemoveMenu(selected) {
  return selected.addEventListener('click', Remove);
}
AddMenu(menu);
RemoveMenu(closeNav);
RemoveMenu(choose);