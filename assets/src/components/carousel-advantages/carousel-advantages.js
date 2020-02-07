import 'owl.carousel';

$(document).ready(function () {
    if (document.body.clientWidth <= 768) {
        $(".carousel-advantages__list").owlCarousel({
            margin: 20,
            stagePadding: 20,
            loop: false,
            items: 1
        });
    }
})
