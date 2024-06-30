import { gsap } from "gsap";

function hoverCardPortfolio() {
    let body = document.querySelector("body");
    let cards = document.querySelectorAll(".portfolio-card");

    cards.forEach(card => {
        let img = card.querySelector(".portfolio-card__image");

        let tl = gsap.timeline({paused: true});
        tl.to(img, {transform: "scale(1)", opacity: 1, duration: .7, ease: "power3.in"}, 0)
        tl.to(card, {transform: "scale(1.05)", duration: .7, ease: "power3.in"}, 0)

        card.addEventListener("mouseenter", () => {
            tl.play()
        })
        card.addEventListener("mouseleave", () => {
            tl.reverse()
        })
    })
}

export default hoverCardPortfolio;