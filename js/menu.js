let but = document.querySelector('.but')
let nav = document.querySelector('.head')
but.onclick = function() {
  but.classList.toggle('active')
  nav.classList.toggle('back')
}
