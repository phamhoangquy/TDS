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
    sideNavigation();
    sideNavigation2();
    tabActive();
    tabActiveHome();
    tabActiveHome2();
    showBackToTop();
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

// Modal
$('.readmore').click(function() {
    $('.modal').toggleClass("show");
    $('.overlay').toggleClass("show");
});
$('.overlay').click(function() {
    $(this).toggleClass("click");
    $('.modal').toggleClass("show");
    $('.overlay').toggleClass("show");
});
$('.close-btn').click(function() {
    $('.modal').toggleClass("show");
    $('.overlay').toggleClass("show");
});

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
        autoplay: {
            delay: 5000,
        },
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

    var TinhthanSwiper = new Swiper(".tinhthan_slide .swiper-container", {
        direction: 'vertical',
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 4000,
        },
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        // breakpoints: {
        //     576: {
        //         slidesPerView: 2,
        //         spaceBetween: 10,
        //         scrollbar: {
        //             dragSize: 165,
        //         }
        //     },
        //     1024: {
        //         slidesPerView: 3,
        //         spaceBetween: 30,
        //         scrollbar: {
        //             dragSize: 215,
        //         }
        //     },
        //     1200: {
        //         slidesPerView: 4,
        //         spaceBetween: 30
        //     }
        // }
    });
    var homeNewsSwiper = new Swiper(".block_s-6 .swiper-container", {
        spaceBetween: 25,
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.block_s-6 .nav-arrow-next',
            prevEl: '.block_s-6 .nav-arrow-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 5,
            },
            1600: {
                slidesPerView: 5,
            },
        },
        // spaceBetween: 25,
        // // freeMode: true,
        // autoplay: {
        //     delay: 4000,
        // },
        // navigation: {
        //     nextEl: '.block_s-6 .nav-arrow-next',
        //     prevEl: '.block_s-6 .nav-arrow-prev',
        // },
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        //     dragSize: 472,
        // },
        // breakpoints: {
        //     320: {
        //         slidesPerView: 1,
        //     },
        //     400: {
        //         slidesPerView: 1,
        //     },
        //     480: {
        //         slidesPerView: 1,
        //     },
        //     768: {
        //         slidesPerView: 3,
        //     },
        //     1025: {
        //         slidesPerView: 3,
        //     },
        //     1440: {
        //         slidesPerView: 5,
        //     },
        //     1600: {
        //         slidesPerView: 5,
        //     },
        // },
    });
    var brandSwiper = new Swiper(".about_2 .swiper-container", {
        // Optional parameters
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".about_2 .nav-arrow-next",
            prevEl: ".about_2 .nav-arrow-prev",
        },
        breakpointsInverse: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 3,
            },
        },
    });
    // // Menu
    // var coll = document.getElementsByClassName("collapsible");
    // var i;

    // for (i = 0; i < coll.length; i++) {
    //     coll[i].addEventListener("click", function() {
    //         this.classList.toggle("active");
    //         var content = this.nextElementSibling;
    //         if (content.style.maxHeight) {
    //             content.style.maxHeight = null;
    //         } else {
    //             content.style.maxHeight = content.scrollHeight + "px";
    //         }
    //     });
    // }
}

function sideNavigation() {
    let trigger = $('.side-navigation-wrapper .side-navigation .title em');
    let close = $('.side-navigation-wrapper .side-navigation  .nav-sub');
    let parent = $('.side-navigation-wrapper .side-navigation  li');
    trigger.on('click', function(e) {
        e.preventDefault();
        if (!$(this).parent().parent().hasClass("open")) {
            close.slideUp();
            $(this).parent().next().slideToggle();
            parent.removeClass('open')
            $(this).parents('li').addClass('open')
        } else {
            $(this).parent().next().slideToggle();
            parent.removeClass('open')
        }
    })

}

function sideNavigation2() {
    let trigger = $('.side-navigation-wrapper .side-navigation .title-2 em');
    let close = $('.side-navigation-wrapper .side-navigation  .nav-sub-2');
    let parent = $('.side-navigation-wrapper .side-navigation  li');
    trigger.on('click', function(e) {
        e.preventDefault();
        if (!$(this).parent().parent().hasClass("open")) {
            close.slideUp();
            $(this).parent().next().slideToggle();
            parent.removeClass('open')
            $(this).parents('li').addClass('open')
        } else {
            $(this).parent().next().slideToggle();
            parent.removeClass('open')
        }
    })
}

function tabActive() {
    $(".tab-navigation li a").on("click", function() {
        $(this)
            .parents(".tab-navigation")
            .find("li")
            .removeClass("active");
        $(this)
            .parents("li")
            .addClass("active");

        var display = $(this).attr("data-type");
        $(".tab-item").removeClass("active");
        $("#" + display).addClass("active");

        let maxHeight = 400;
        let contentTab = $(".tab-wrapper .tab-item.active");
        // console.log(contentTab.height())
        if (contentTab.height() < maxHeight) {
            $(contentTab).find('.btn-view-more').hide()
        }
    });
}

function tabActiveHome() {
    $(".tab-navigation-food li a").on("click", function() {
        $(this)
            .parents(".tab-navigation-food")
            .find("li")
            .removeClass("active");
        $(this)
            .parents("li")
            .addClass("active");

        var display = $(this).attr("data-type");
        $(".tab-item-food").removeClass("active");
        $("#" + display).addClass("active");

        let maxHeight = 400;
        let contentTab = $(".tab-wrapper-food .tab-item-food.active");
        // console.log(contentTab.height())
        if (contentTab.height() < maxHeight) {
            $(contentTab).find('.btn-view-more').hide()
        }
    });
}

function tabActiveHome2() {
    $(".tab-navigation-news li a").on("click", function() {
        $(this)
            .parents(".tab-navigation-news")
            .find("li")
            .removeClass("active");
        $(this)
            .parents("li")
            .addClass("active");

        var display = $(this).attr("data-type");
        $(".tab-item-news").removeClass("active");
        $("#" + display).addClass("active");

        let maxHeight = 400;
        let contentTab = $(".tab-wrapper-news .tab-item-news.active");
        // console.log(contentTab.height())
        if (contentTab.height() < maxHeight) {
            $(contentTab).find('.btn-view-more').hide()
        }
    });
}

function showBackToTop() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#back-to-top').addClass('active');
        } else {
            $('#back-to-top').removeClass('active');
        }
    });

    $("#back-to-top").on("click", function(e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        })
    })
}