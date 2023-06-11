const dropdownButton = document.querySelector('.dropdown-btn')
const dropdownNav = document.querySelector('.dropdown-nav')

dropdownButton.addEventListener('click', () => {
    if (dropdownNav.classList.contains('open')) {
        dropdownNav.classList.remove('open')
    } else {
        dropdownNav.classList.add('open')
    }
})