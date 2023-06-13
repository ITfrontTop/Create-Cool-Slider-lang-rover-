// import { Swiper, Parallax, Mousewheel, Controller} from 'swiper';
// Swiper.use([ Parallax, Mousewheel, Controller ])


const swiperIMG = new Swiper('.slider-img', {
    loop: false,
    speed: 2400,
    parallax: true
})

const swiperText = new Swiper('.slider-text', {
    loop: false,
    speed: 2400,
    mousewheel: {
        invert: false,
    },
    pagination: {
        el: '.slider-pagination',
        type: 'bullets',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
})

swiperIMG.controller.control = swiperText
swiperText.controller.control = swiperIMG