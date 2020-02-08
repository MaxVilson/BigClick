$(document).ready(function () {
    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.input-file__img').attr('src', e.target.result);
                $('.input-file__img').css('display', 'block');
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".input-file__input").change(function () {
        readURL(this);
    });
})
