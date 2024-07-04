import { gsap } from "gsap";

function hoverCardPortfolio() {
    let body = document.querySelector("body");
    let cards = document.querySelectorAll(".portfolio-card");

    cards.forEach(card => {
        let img = card.querySelector(".portfolio-card__image img");

        let tl = gsap.timeline({paused: true});
        // tl.to(img, {transform: "scale(1.2)", duration: .3, ease: "power1.out"}, 0)

        card.addEventListener("mouseenter", () => {
            tl.play()
        })
        card.addEventListener("mouseleave", () => {
            tl.reverse()
        })
    })
}

export default hoverCardPortfolio;