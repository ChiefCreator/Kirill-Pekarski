import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function animateOnScrollMainSection() {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll(".back-div__text_f").forEach((item, i) => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: '.section-main',
                start: 'top top',
                end: '+=500',
                scrub: 1,
            },
            transform: `translate(0, ${getRandomNum(-100, 100)}px)`,
            opacity: 0,
        });
    })

    function getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

export default animateOnScrollMainSection;