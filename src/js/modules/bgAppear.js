import { gsap } from "gsap";

function appearBg() {
    const bgElement = document.querySelector(".appeared-bg");
    const bgParentElement = document.querySelector(".brief-information__introduction_vertical");
    const horizontalLineEl = document.querySelector(".header__content");
    const verticalLineEBgl = document.querySelector(".route-line__line_bg");
    const verticalLineProgressEl = document.querySelector(".route-line__line_progress")
    const circleEl = document.querySelector(".route-line__circle");

    let master = gsap.timeline({paused: true});
    master.set(bgElement, {opacity: 1})
          .to(bgElement, {transform: "scale(70)", duration: .5, ease: "linear"})
          .to(horizontalLineEl, {borderBottom: "1px solid #dfdfdf", duration: .25, ease: "linear"}, "<+=50%")
          .to(verticalLineEBgl, {backgroundColor: "#dfdfdf", duration: .25, ease: "linear"}, "<")
          .to(verticalLineProgressEl, {backgroundColor: "#242424", duration: .25, ease: "linear"}, "<")
          .to(circleEl, {backgroundColor: "#242424", duration: .25, ease: "linear"}, "<")

    bgParentElement.addEventListener("mouseenter", function(event) {
        setBgCoordinates(event, bgElement);
        master.restart();
    })
    bgParentElement.addEventListener("mouseleave", function() {
        master.reverse();
    })

    function setBgCoordinates(event, bgEl) {
        let cursorCoordinates = {
            top: event.y,
            left: event.x,
        }

        console.log(cursorCoordinates.top)

        bgEl.style.left = `${cursorCoordinates.left}px`;
        bgEl.style.top = `${cursorCoordinates.top}px`;
    }
}

export default appearBg;