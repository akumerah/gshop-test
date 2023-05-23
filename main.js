// toggle class active//
const navbarNav = document.querySelector('.navbar-nav');

//ketika bars di klik //
document.querySelector('#bars').
onclick = () => {
  navbarNav.classList.toggle('active');
};

//klik di luar, untuk menghilangkan//
const bars = document.querySelector('#bars');

document.addEventListener('click', function(e) {
  if (!bars.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});