const hamburgerElement = documcent.querySelector('#myBtn');
const navElement = document.querySelector('.menulink');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
});