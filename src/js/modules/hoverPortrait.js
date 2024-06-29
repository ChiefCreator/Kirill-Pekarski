import { gsap } from "gsap";

function hoverPortrait() {
    let tl = gsap.timeline({paused: true});
    tl.add(tl.to(".portrait__point", {opacity: 1, duration: .5}))
      .add(tl.to(".portrait__tooltip-line path", {strokeDasharray: 150, strokeDashoffset: 0, duration: .5}))
      .add(tl.to(".portrait__tooltip-text_my", {opacity: 1, transform: "translate(0, 0)", duration: .3}))
      .add(tl.to(".portrait__tooltip-text_name", {opacity: 1, transform: "translate(0, 0)", duration: .3}))

    let portrait = document.querySelector(".portrait");
    portrait.addEventListener("mouseover", () => {
        tl.play()
    })
    portrait.addEventListener("mouseout", () => {
        tl.reverse()
    })
}

export default hoverPortrait;