import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function animateOnScrollSectionAbout() {
    gsap.registerPlugin(ScrollTrigger);

    const texts = document.querySelectorAll('.split-text');

    const splitText = (items) => {
        items.forEach(item => {
            item.innerHTML = item.textContent.replace(/(\S*)/g, m => {
                return `<div class="split-text__word">` +
                        m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='split-text__letter'>$&</div>") +
                        `</div>`;
                });
            return item;
        });
    };

    splitText(texts);

    let tl = gsap.timeline({scrollTrigger: {trigger: '.section-about__wrapper', start: 'top bottom', end: '+=500'}});

    document.querySelectorAll(".full-information__text").forEach(text => {
        let letters = text.querySelectorAll(".split-text__letter");

        letters.forEach((item, i) => {
            tl.add(gsap.from(item, {
                transform: `translate(0, 15px)`,
                opacity: 0,
                duration: 0.5,
                ease: "power1.inOut"
            }), "<0.01")
        })
    })
}

export default animateOnScrollSectionAbout;