$(document).ready(function () {
    $('.scroll-top__btn').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    })
})
