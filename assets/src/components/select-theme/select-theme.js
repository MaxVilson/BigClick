$(document).ready(function () {
    $('#theme-black').click(function() {
        $('#theme-main').removeClass('select-theme__btn_active')
        $(this).addClass('select-theme__btn_active')
        $('.page-main').addClass('page-main_dark')
    })

    $('#theme-main').click(function() {
        $('#theme-black').removeClass('select-theme__btn_active')
        $(this).addClass('select-theme__btn_active')
        $('.page-main').removeClass('page-main_dark')
    })
})
