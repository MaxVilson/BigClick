$(document).ready(function () {
    $('.main-header__burger').click(function() {
        $('.main-overlay').addClass('main-overlay_active')
        $('.main-header__nav').addClass('main-header__nav_active')
        $('.main-header__burger-close').addClass('main-header__burger-close_active')
        $('.main-header__login').addClass('main-header__login_active')
        $('body').css('overflow', 'hidden')
    })

    $('.main-header__burger-close').click(function () {
        $('.main-overlay').removeClass('main-overlay_active')
        $('.main-header__nav').removeClass('main-header__nav_active')
        $('.main-header__burger-close').removeClass('main-header__burger-close_active')
        $('.main-header__login').removeClass('main-header__login_active')
        $('body').css('overflow', 'auto')
    })
})
