import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function initSlider() {
    const swiper = new Swiper('.swiper', {
        speed: 1000,
        spaceBetween: 100,
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
        },
        parallax:true,
    });
}

export default initSlider;