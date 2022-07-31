const menuHamburguer = document.getElementById('btn-hamburguer')
const bodySite = document.getElementById('body')

function ativaMenu(){
  const navBar = document.getElementById('nav-bar')
  navBar.classList.toggle('active')
 
}

menuHamburguer.addEventListener('click', ativaMenu);




  
