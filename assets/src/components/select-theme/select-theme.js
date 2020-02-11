$(document).ready(function () {
    $('#theme-black').click(function() {
        $('#theme-main').removeClass('select-theme__btn_active')
        $(this).addClass('select-theme__btn_active')
        $('#girl').attr('src', 'img/girl-green.png')
        $('#man').attr('src', 'img/man-green.png')
        $('.page-main').addClass('page-main_dark')
    })

    $('#theme-main').click(function() {
        $('#theme-black').removeClass('select-theme__btn_active')
        $(this).addClass('select-theme__btn_active')
        $('#girl').attr('src', 'img/girl.png')
        $('#man').attr('src', 'img/man.png')
        $('.page-main').removeClass('page-main_dark')
    })
})
