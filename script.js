document.querySelector('.search__button').addEventListener('click', function() {
    this.classList.toggle('active')
})

document.querySelector('.header__theme-switcher').addEventListener('click', function() {
    document.querySelector('body').classList.toggle('dark-mode')
})