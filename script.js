const btnMob = document.getElementById('btn-mobile');
const menu = document.querySelectorAll('#menu a');


function showMobMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

function closeMenu() {
  const nav = document.getElementById('nav');
  nav.classList.remove('active');
}

btnMob.addEventListener('click', showMobMenu);

menu.forEach(item => {
  item.addEventListener('click', closeMenu);
})