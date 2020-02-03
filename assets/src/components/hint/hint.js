$(document).ready(function () {
    const content = $('.hint__content')

    $('.hint__btn').hover(
        function() {
            content.addClass('hint__content_active')
        },
        function () {
            content.removeClass('hint__content_active')
        }
    )
})
