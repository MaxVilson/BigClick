$(document).ready(function () {
    $('.breadcrumbs__link').click(function() {
        $('.breadcrumbs__link').removeClass('breadcrumbs__link_active')
        $(this).addClass('breadcrumbs__link_active')
    })
})
