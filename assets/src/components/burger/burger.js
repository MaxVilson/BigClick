$(document).ready(function () {
    var burger = $('.page-dashboard__content-burger');
    var burgerSideBar = $('.sidebar__burger');
    var content = $('.page-dashboard__content');
    var overlay = $('.overlay');
    var sidebar = $('.sidebar');
    burger.click(function() {
        sidebar.addClass('sidebar_active');
        overlay.addClass('overlay_active')
    })
    overlay.click(function () {
        sidebar.removeClass('sidebar_active')
        overlay.removeClass('overlay_active')
    })
    burgerSideBar.click(function() {
        sidebar.removeClass('sidebar_active')
        overlay.removeClass('overlay_active')
    })
})
