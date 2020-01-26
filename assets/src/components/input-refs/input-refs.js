$(document).ready(function () {
    const textField = document.querySelector('.input-refs__input')
    const btn = document.querySelector('.input-refs__btn')

    btn.addEventListener('click', function() {
        textField.select()
        document.execCommand('copy')
    })
})
