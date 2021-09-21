let btMenuChecked = document.querySelector('#menuMobile')

btMenuChecked.addEventListener('click', () => {
    if (btMenuChecked.checked) {
        document.querySelector('.menu-mobile ul').classList.add('checked')
        document.querySelector('.overlay').style.display = 'block'
    } else {
        document.querySelector('.menu-mobile ul').classList.remove('checked')
        document.querySelector('.overlay').style.display = 'none'
    }
        
})