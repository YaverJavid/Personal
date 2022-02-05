var menuElement = document.getElementById('menu')
var open = false;
var menu = () => {
  open = !open
  menuElement.classList.toggle('open')
  document.getElementsByTagName('body')[0].style.overflow = open ? 'hidden' : 'scroll'
}