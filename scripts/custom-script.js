$(window).scroll(function() {
    $(this).scrollTop() > 0 ? $("header").addClass("fixed") : $("header").removeClass("fixed")
}), $(document).ready(function() {
    $(".mobile-menu-ico").click(function() {
        $(".mobile-menu-wrap").addClass("mobile-menu-wrap-show")
    }), $(".close-ico").click(function() {
        $(".mobile-menu-wrap").removeClass("mobile-menu-wrap-show")
    }), $(".mobile-menu-wrap").show()
}), $(document).mouseup(function(e) {
    var l = $(".mobile-menu-wrap");
    $(".mobile-menu-ico").is(e.target) || l.is(e.target) || 0 != l.has(e.target).length || l.removeClass("mobile-menu-wrap-show")
}), $(document).ready(function() {
    $(".list-menu .link").click(function() {
        $(".mobile-menu-wrap").removeClass("mobile-menu-wrap-show")
    })
});
var i, acc = document.getElementsByClassName("fank-accordion");
for (i = 0; i < acc.length; i++) acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var e = this.nextElementSibling;
    e.style.maxHeight ? e.style.maxHeight = null : e.style.maxHeight = e.scrollHeight + "px"
});
var swiper = new Swiper(".play-fantasy-swiper", {
        slidesPerView: 1,
        spaceBetween: 32,
        slidesPerGroup: 1,
        loop: !1,
        loopFillGroupWithBlank: !0,
        autoplay: {
            delay: 5e3
        },
        centeredSlides: !1,
        pagination: {
            el: ".swiper-pagination",
            clickable: !1
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            375: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 32
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 32
            },
            1200: {
                slidesPerView: 3.8,
                spaceBetween: 25
            },
            1366: {
                slidesPerView: 3.8,
                spaceBetween: 32
            }
        }
    }),
    modal = document.querySelector(".modal"),
    trigger = document.querySelectorAll(".trigger"),
    closeButton = document.querySelector(".close-button");

function toggleModal(e) {
    if (modal.classList.toggle("show-modal"), modal.style.cssText = "display:block", e) {
        let l = e.currentTarget.dataset.vurl;
        document.querySelector(".show-modal .play-fantasy-modal-body iframe").src = l
    }
}

function windowOnClick(e) {
    e.target === modal && toggleModal()
}
trigger.forEach(e => e.addEventListener("click", e => {
    toggleModal(e)
})), closeButton && closeButton.addEventListener("click", toggleModal), window.addEventListener("click", windowOnClick);
var $swiper = $(".why-we-love-fk-review"),
    $bottomSlide = null,
    $bottomSlideContent = null,
    mySwiper = new Swiper(".why-we-love-fk-review", {
        spaceBetween: 1,
        slidesPerView: 3,
        centeredSlides: !0,
        roundLengths: !0,
        loop: !0,
        loopAdditionalSlides: 0,
        autoplay: {
            delay: 4e3
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1.5
            },
            992: {
                slidesPerView: 2.5
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

/*toggle between hiding and showing the dropdown content */
function drowdown(e) {
    var elements = document.querySelectorAll(".dropdown-content");
    elements.forEach(element => element.classList.remove("show"));
    e.nextElementSibling.classList.toggle("show")
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}