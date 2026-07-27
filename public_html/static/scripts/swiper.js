const swiper1 = new Swiper('.home-hero__slider', {
    loop: false,
    speed: 800,
    allowTouchMove: false,
    direction: 'vertical',
    spaceBetween: 20
});

function nextSlide() {
    setTimeout(() => {

        if (swiper1.isEnd) {
            swiper1.slideTo(0, 500);
        } else {
            swiper1.slideNext();
        }

        swiper1.once('transitionEnd', nextSlide);

    }, 3000);
}
nextSlide();

const homeAboutBottomDetails = document.querySelector('.home-about__bottom-details');
const img = homeAboutBottomDetails.querySelector("img");

homeAboutBottomDetails.addEventListener("mouseenter",
    () => {
        img.src ="./static/images/yellow-arrow-action.webp";
    }
);

homeAboutBottomDetails.addEventListener("mouseleave",
    () => {
        img.src ="./static/images/yellow-arrow.webp";
    }
);