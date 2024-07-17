import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function animateOnScrollCardPortfolio() {
    let portfolioCardsOdd = document.querySelectorAll(".portfolio-card_odd");
    let portfolioCardsEven = document.querySelectorAll(".portfolio-card_even");
    gsap.registerPlugin(ScrollTrigger);

    let master = gsap.timeline();
    let tl1 = gsap.timeline();
    let tl2 = gsap.timeline();

    const splitText = (item) => {
        item.innerHTML = item.textContent.replace(/(\S*)/g, m => {
            return `<div class="split-text__word">` +
                    m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='split-text__letter'>$&</div>") +
                    `</div>`;
            });
        return item;
    };

    portfolioCardsOdd.forEach(portfolioCard => {
        let img = portfolioCard.querySelector(".portfolio-card__image");
        let title = portfolioCard.querySelector(".portfolio-card__title");
        let text = portfolioCard.querySelector(".portfolio-card__text");
        let button = portfolioCard.querySelector(".portfolio-card__button");
        let number1 = portfolioCard.querySelector(".portfolio-card__number-span_1");
        let number2 = portfolioCard.querySelector(".portfolio-card__number-span_2");

        splitText(title);
        splitText(text);

        let tl3 = gsap.timeline({scrollTrigger: {trigger: portfolioCard, scrub: 3, start: 'top bottom', end: '+=100'}});

        tl1.to(img, {scrollTrigger: {trigger: portfolioCard, scrub: 1, start: 'top bottom', end: '+=500'}, transform: "translate(0, 0)"})
           .to(button, {scrollTrigger: {trigger: button, scrub: 1, start: 'top bottom', end: '+=500'}, transform: "translate(50%, -50%) scale(1)"})
           .to(number1, {scrollTrigger: {trigger: portfolioCard, scrub: 1, start: 'top bottom', end: '+=500'}, transform: "translate(0, 0) scale(1)"})
           .to(number2, {scrollTrigger: {trigger: portfolioCard, scrub: 1, start: 'top bottom', end: '+=500'}, transform: "translate(0, 0) scale(1)"})

        tl3.add(animText(title))
        tl3.add(animText(text))

        function animText(el) {
            let letters = el.querySelectorAll(".split-text__letter");
            letters.forEach((item, i) => {
                tl3.add(gsap.to(item, {
                    transform: `translate(0, 0)`,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power1.inOut"
                }), "<0.01")
            })
            return tl3;
        }
    })
    portfolioCardsEven.forEach(portfolioCard => {
        let img = portfolioCard.querySelector(".portfolio-card__image");
        let title = portfolioCard.querySelector(".portfolio-card__title");
        let text = portfolioCard.querySelector(".portfolio-card__text");
        let button = portfolioCard.querySelector(".portfolio-card__button");
        let number1 = portfolioCard.querySelector(".portfolio-card__number-span_1");
        let number2 = portfolioCard.querySelector(".portfolio-card__number-span_2");

        splitText(title);
        splitText(text);

        let tl3 = gsap.timeline({scrollTrigger: {trigger: portfolioCard, scrub: 3, start: 'top bottom', end: '+=100'}});

        tl2.to(img, {scrollTrigger: {trigger: portfolioCard, scrub: 1, start: 'top bottom', end: '+=500'}, transform: "translate(0, 0)"})
           .to(button, {scrollTrigger: {trigger: button, scrub: 1, start: 'top bottom', end: '+=500'}, transform: "translate(50%, -50%) scale(1)"})
           .to(number1, {scrollTrigger: {trigger: portfolioCard, scrub: 1, start: 'top bottom', end: '+=500'}, transform: "translate(0, 0) scale(1)"})
           .to(number2, {scrollTrigger: {trigger: portfolioCard, scrub: 1, start: 'top bottom', end: '+=500'}, transform: "translate(0, 0) scale(1)"})

        tl3.add(animText(title))
        tl3.add(animText(text))

        function animText(el) {
            let letters = el.querySelectorAll(".split-text__letter");
            letters.forEach((item, i) => {
                tl3.add(gsap.to(item, {
                    transform: `translate(0, 0)`,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power1.inOut"
                }), "<0.01")
            })
            return tl3;
        }
    })
}

export default animateOnScrollCardPortfolio;