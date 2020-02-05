import 'owl.carousel';

$(document).ready(function () {
    if (getWindowWidth() <= 768) {
        $(".carousel-advantages__list").owlCarousel({
            margin: 20,
            stagePadding: 20,
            loop: false,
            items: 1
        });
    }

    function getWindowWidth() {
        return window.innerWidth || document.body.clientWidth;
    }
})
