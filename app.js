const hamburg = document.querySelector('.mainNavHamburg');
const hamburgContainer = document.querySelector('#mainNav');
const links = document.querySelectorAll('.mainNavLinks li');


hamburg.addEventListener('click', () => {
    hamburgContainer.classList.toggle("clicked");
    for (let link of links) {
        link.classList.toggle("fade");
    }
});