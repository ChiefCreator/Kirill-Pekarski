import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function animateOnScrollMainSection() {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll(".back-div__text_f").forEach((item, i) => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: '.section-main',
                start: 'top top',
                end: '+=700',
                scrub: 1,
            },
            transform: `translate(0, ${getRandomNum(-200, 200)}px)`,
            color: "#242424",
        });
    })

    function getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

export default animateOnScrollMainSection;