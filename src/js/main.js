$(document).ready(function() {

    $('.menu-mobile-toggle').click(function() {
        $('.offcanvas-wrap').fadeIn().addClass('offcanvas-open')
    })

    $('.offcanvas-wrap').click(function(e) {
        if (e.target !== e.currentTarget) return
        $('.offcanvas-wrap').fadeOut().removeClass('offcanvas-open')
    })
    swiperInit();
    wowBookInit();
});

const mainMenuMobileMapping = new MappingListener({
    selector: ".menu-wrapper",
    mobileWrapper: ".mobile-menu",
    mobileMethod: "appendTo",
    desktopWrapper: ".right-header",
    desktopMethod: "appendTo",
    breakpoint: 1024.98,
}).watch();

const webNavMobileMapping = new MappingListener({
    selector: ".website-nav-wrap",
    mobileWrapper: ".mobile-menu",
    mobileMethod: "appendTo",
    desktopWrapper: ".right-top-header",
    desktopMethod: "prependTo",
    breakpoint: 1024.98,
}).watch();

function wowBookInit() {
    $("#wowbook").wowBook({
        width: 1240,
        height: 800,
        centeredWhenClosed: true,
        hardcovers: true,
        pageNumbers: false,
        mouseWheel: true,
        controls: {
            zoomIn: "#zoomin",
            zoomOut: "#zoomout",
            next: "#next",
            back: "#back",
            first: "#first",
            last: "#last"
        },
        scaleToFit: ".wowbook-wrapper"
    });
}

function swiperInit() {
    var homerSwiper = new Swiper(".home-banner .swiper-container", {
        // Optional parameters
        speed: 1205,
        slidesPerView: 1,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: ".home-banner-pagination",
            type: "bullets",
            clickable: "true"
        }
    });

    var MenuSwiper = new Swiper(".other_food .swiper-container", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        // autoplay: {
        //     delay: 5000,
        // },
        navigation: {
            nextEl: '.nav-arrow-next',
            prevEl: '.nav-arrow-prev',
        },
        breakpoints: {
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            990: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });

    var AboutSwiper = new Swiper(".about_2 .swiper-container", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        // autoplay: {
        //     delay: 5000,
        // },
        navigation: {
            nextEl: '.nav-arrow-next',
            prevEl: '.nav-arrow-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });

    // Menu
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

