$(document).ready(function () {
    const output = $('.input-range__input-output');

    $("#inputRange").ionRangeSlider({
        min: 0,
        max: 200,
        from: 0,
        onChange: function(data) {
            output.val(data.from);
        }
    });

    $("#inputRangeTiser").ionRangeSlider({
        min: 0.01,
        max: 10,
        from: 0.01,
        step: 0.01,
        onChange: function (data) {
            output.val(data.from);
        }
    });
})
