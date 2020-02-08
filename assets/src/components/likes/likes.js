$(document).ready(function () {
    let counter = 23;
    let isClick = false;

    $('.likes__btn-count').text(counter);

    $('.likes__btn').click(() => {
        if (isClick === false) {
            isClick = true;
            $('.likes__icon').css('fill', '#85c82b');
            counter += 1;
            $('.likes__btn-count').text(counter);
        }
        else if (isClick === true) {
            isClick = false;
            $('.likes__icon').css('fill', '#999');
            counter -= 1;
            $('.likes__btn-count').text(counter);
        }
    })
})
