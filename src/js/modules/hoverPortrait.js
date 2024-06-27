import { gsap } from "gsap";

function hoverPortrait() {
    let portrait = document.querySelector(".portrait");
    let tooltip = document.querySelector(".portrait__tooltip")
    portrait.addEventListener("mouseover", () => {
        let tl = gsap.timeline();
        tl.to(".portrait__point", {opacity: 1, duration: .5});
        tl.to(".portrait__tooltip-line path", {strokeDasharray: 150, strokeDashoffset: 0, duration: .5});
        tl.to(".portrait__tooltip-text_my", {opacity: 1, transform: "translate(0, 0)", duration: .3});
        tl.to(".portrait__tooltip-text_name", {opacity: 1, transform: "translate(0, 0)", duration: .3});
    })
    portrait.addEventListener("mouseout", () => {
        tooltip.querySelector(".portrait__tooltip-wrapper").classList.remove("portrait__tooltip-wrapper_active")

        let tl = gsap.timeline();
        tl.to(".portrait__tooltip-text_name", {opacity: 0, transform: "translate(0, 8px)", duration: .3});
        tl.to(".portrait__tooltip-text_my", {opacity: 0, transform: "translate(16px, 0)", duration: .3});
        tl.to(".portrait__tooltip-line path", {strokeDashoffset: 150, duration: .5});
        tl.to(".portrait__point", {opacity: 0, duration: .5});
    })
}

export default hoverPortrait;