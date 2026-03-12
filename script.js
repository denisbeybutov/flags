// отрытие выпадающего меню фильтр по региону

const searchButton = document.querySelector('.search__button')
searchButton.addEventListener('click', function() {
    this.classList.toggle('active')
})

//закрытие всплывающего окна по клику вне его
document.addEventListener('click', function(event) {
    if (!searchButton.contains(event.target)) {
        searchButton.classList.remove('active')
    }
})


// переключение светлой темной тем
document.querySelector('.header__theme-switcher').addEventListener('click', function() {
    document.querySelector('body').classList.toggle('light-mode')
    localStorage.setItem('site-mode', document.querySelector('body').className)
    
    
})

// чтение темы при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const savedMode = localStorage.getItem('site-mode')
    if (savedMode) {
        document.querySelector('body').classList.toggle(savedMode)
    }
})

// фильтр по региону, логика фильтрации

const searchItems = document.querySelectorAll('.search__item')
searchItems.forEach(function(region){
    region.addEventListener('click', function() {
        document.querySelector('.filter-by-region').innerHTML = 'Filter by Region: ' + region.textContent
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

//поиск 
// отмена отправки формы
document.querySelector('.search__form').addEventListener('submit', function(event){
    event.preventDefault()
})

document.querySelector('.search__input').addEventListener('change', function(event){
    const searchCountry = event.target.value
    const countryNames = document.querySelectorAll('.flags__name')
    countryNames.forEach(function(country) {
        if (!country.textContent.toLowerCase().includes(searchCountry.toLowerCase())) {
            country.closest('.flags__item').classList.add('hidden')

        }
    })
    

})

//сброс поика и фильтра, показываем все страны

document.querySelector('.search__clear-button').addEventListener('click', function(){
    document.querySelectorAll('.flags__item').forEach(function(item){
        item.classList.remove('hidden')
        document.querySelector('.search__input').value = ""
    })
})




