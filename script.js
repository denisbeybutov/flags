// отрытие выпадающего меню фильтр по региону

const searchButton = document.querySelector('.search__button')
searchButton.addEventListener('click', function() {
    this.classList.toggle('active')
})

// переключение светлой темной тем
document.querySelector('.header__theme-switcher').addEventListener('click', function() {
    document.querySelector('body').classList.toggle('dark-mode')
})

// фильтр по региону, логика фильтрации

const searchItems = document.querySelectorAll('.search__item')
searchItems.forEach(function(region){
    region.addEventListener('click', function() {
        searchButton.classList.toggle('active')
        document.querySelectorAll('.flags__item').forEach(function(flag){
            flag.classList.remove('hidden')
            if(flag.querySelector('[data-region]').getAttribute('data-region') !== region.textContent) {
                flag.classList.add('hidden')
            }  
            if (region.textContent === 'All') {
                    flag.classList.remove('hidden')
            }


        })
    })
})