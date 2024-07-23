import { gsap } from "gsap";

function animateSkillCardOnHover() {
    const cards = document.querySelectorAll(".skill-card");
    for (let card of cards) {

        let title = card.querySelector(".skill-card__title");
        let titleBefore = card.querySelector(".skill-card__title-before");
        let titleAfter = card.querySelector(".skill-card__title-after");
        let bg = card.querySelector(".skill-card__bg")

        let master = gsap.timeline({paused: true});
        let tl1 = gsap.timeline();
        let tl2 = gsap.timeline();

        master.clear();
        tl1.clear();
        tl2.clear();

        tl1.to(titleBefore, {height: "100%", duration: .8, ease: "linear"})
           .to(titleAfter, {width: "100%", duration: .8, ease: "linear"}, "<+=50%")
           
        tl2.to(bg, {transform: "scale(60)", opacity: 1, duration: .4, ease: "linear"})

        master.add(tl1)
              .add(tl2, "<")

        card.addEventListener("mouseenter", (event) => {
            setBgCoordinates(event, card, bg);
            master.restart()
        })
        card.addEventListener("mouseleave", (event) => {
            setBgCoordinates(event, card, bg);
            master.reverse()
        })

        function setBgCoordinates(event, card, bg) {
            let cursorCoordinates = {
                top: event.y,
                left: event.x,
            }
            let cardCoordinates = {
                top: card.getBoundingClientRect().top,
                left: card.getBoundingClientRect().left,
            }

            let bgOffsetTop = cursorCoordinates.top - cardCoordinates.top;
            let bgOffsetLeft = cursorCoordinates.left - cardCoordinates.left;

            bg.style.left = `${bgOffsetLeft}px`;
            bg.style.top = `${bgOffsetTop}px`;
        }
    }
}

export default animateSkillCardOnHover;