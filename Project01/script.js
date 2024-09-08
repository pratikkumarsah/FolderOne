const hamburger = document.querySelector('.open');
const cross = document.querySelector('.close');
const navLink = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('show');
  hamburger.classList.toggle('hide');
  cross.classList.toggle('show');

});
cross.addEventListener('click', () => {
    navLink.classList.remove('show');
    hamburger.classList.remove('hide');
    cross.classList.remove('show');
});
