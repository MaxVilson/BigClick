$(document).ready(function () {
    const output = $('#output');
    $(".js-range-slider").ionRangeSlider({
        min: 0,
        max: 200,
        from: 0,
        onChange: function(data) {
            output.val(data.from);
        }
    });
})
