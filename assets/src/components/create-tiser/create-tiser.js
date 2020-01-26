$(document).ready(function () {
    const content = $('.accordion')

    // Добавление красного цвета при вводе макс. кол. символов
    content.keyup(function(e) {
        if (e.target.classList.value.indexOf('input-text__input-length') !== -1) {
            if (e.target.value.length >= 75) {
                e.target.nextElementSibling.style.color = 'red'
            } else {
                e.target.nextElementSibling.style.color = '#999'
            }
        }
    })

    // Копируем и вставляем элемент в DOM при клике на кнопку
    let createTiser = () => {
        let count = $('.create-tiser').length
        const clone = $('#tiser').clone().attr('id', `tiser${count + 1}`).appendTo('.accordion')
        clone.find('[type=text]').val('');
        clone.find('.create-tiser__field').html(`Тизер #${count + 1}`);
        $('.create-tiser__content').removeClass('show')
        clone.find('.create-tiser__content').addClass('show')
        clone.find('#tiserName').attr('id', `tiserName${count + 1}`)
        clone.find('.input-text__length').removeAttr('style')
        clone.find('.input-checkbox__input').attr('id', `checkPause${count + 1}`)
        clone.find('.input-checkbox__label').attr('for', `checkPause${count + 1}`)

    }
    $('#addTiser').click(createTiser)

    // Открываем поле по клику
    content.click(function(e) {
        if (e.target.classList.value === 'create-tiser__field') {
            $(e.target.nextSibling).collapse('toggle')
        }
    })
