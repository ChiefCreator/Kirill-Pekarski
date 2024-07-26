import gsap from "gsap";
import toggleScroll from "./toggleScroll";

function preloadAnimation() {
    toggleScroll(true);

    const $preloader = document.querySelector(".preloader");
    const bgElement = document.querySelector(".appeared-bg");
    const bgParentElement = document.querySelector(".brief-information__introduction_vertical");
    const horizontalLineEl = document.querySelector(".header__content");
    const verticalLineEBgl = document.querySelector(".route-line__line_bg");
    const verticalLineProgressEl = document.querySelector(".route-line__line_progress")
    const circleEl = document.querySelector(".route-line__circle");

    let master = gsap.timeline({paused: true});
    let tl1 = gsap.timeline();
    let tl2 = gsap.timeline();
    let tl3 = gsap.timeline();

    master.add(tl2)
          .add(tl1)
          .add(tl3, 1)
          

    tl1.to($preloader, {opacity: 0, duration: 1, ease: "power4.out"});
    tl2.set(bgParentElement, {opacity: 0})
       .set(bgElement, {left: setBgCoordinates(bgParentElement).left, top: setBgCoordinates(bgParentElement).top})
       .set(bgElement, {opacity: 1})
       .set(bgElement, {transform: "scale(70)"})
       .set(horizontalLineEl, {borderBottom: "1px solid #dfdfdf"})
       .set(verticalLineEBgl, {backgroundColor: "#dfdfdf"})
       .set(verticalLineProgressEl, {backgroundColor: "#242424"})
       .set(circleEl, {backgroundColor: "#242424"})

    tl3.to(circleEl, {backgroundColor: "#FF4900", duration: .25, ease: "linear"}, "<")
       .to(verticalLineProgressEl, {backgroundColor: "#FF4900", duration: .25, ease: "linear"}, "<")
       .to(verticalLineEBgl, {backgroundColor: "rgb(58, 58, 58)", duration: .25, ease: "linear"}, "<")
       .to(horizontalLineEl, {borderBottom: "1px solid rgb(58, 58, 58)", duration: .25, ease: "linear"}, "<+=50%")
       .to(bgElement, {transform: "scale(0)", duration: .5, ease: "linear"})
       .set(bgElement, {opacity: 0})
       .set(bgParentElement, {opacity: 1})
       

    window.addEventListener("load", function() {
        setTimeout(function(){
            master.restart();
            toggleScroll(false, master._time);
        }, 1500)
    })

    function setBgCoordinates(bgParentEl) {
        return {
            top: bgParentEl.getBoundingClientRect().top,
            left: bgParentEl.getBoundingClientRect().left,
        }
    }
}

export default preloadAnimation;