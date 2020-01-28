$(document).ready(function () {
    const textField = document.querySelector('.input-refs__input')
    const btn = document.querySelector('.input-refs__btn')

    if (btn) {
        btn.addEventListener('click', function() {
            textField.select()
            document.execCommand('copy')
        })
    }
})
