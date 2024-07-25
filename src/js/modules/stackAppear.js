import { gsap } from "gsap";
import toggleScroll from "./toggleScroll";

function stackAppear() {
    const buttonStack = document.querySelector(".stack-button");
    const stack = document.querySelector(".stack");
    const stackBlocks = document.querySelectorAll(".stack__column-list-item");
    const overblock = document.querySelectorAll(".overblock");
    const close = stack.querySelector(".stack__close");
    const closeLine1 = close.querySelector(".stack__close-line_1");
    const closeLine2 = close.querySelector(".stack__close-line_2");

    const splitText = (item) => {
        item.innerHTML = item.textContent.replace(/(\S*)/g, m => {
            return `<div class="split-text__word">` +
                    m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='split-text__letter'>$&</div>") +
                    `</div>`;
            });
        return item;
    };

    let master = gsap.timeline({paused: true});
    let tl1 = gsap.timeline();
    let tl2 = gsap.timeline();
    let tl3 = gsap.timeline();
    master.add(tl1)
          .add(tl2, .5)
          .add(tl3, 2)

    tl1.to(overblock, {opacity: .7, duration: 1, ease: "linear"})
       .to(stack, {transform: "translate(0, 0)", duration: .5, ease: "power3.in"}, "<+=50%")
       .set(overblock, {pointerEvents: "all"})
       .set(stack, {pointerEvents: "all"})
    
    tl3.to(closeLine1, {width: "100%", duration: .3, ease: "power4.in"})
       .to(closeLine2, {width: "100%", duration: .3, ease: "power4.in"}, ">")

    stackBlocks.forEach(stackBlock => {
        const title = stackBlock.querySelector(".stack__column-list-title");
        const items = stackBlock.querySelectorAll(".stack__item");
        const line = stackBlock.querySelector(".stack__column-list-line");

        splitText(title);
        tl2.add(animText(title))
           .to(line, {width: "100%", duration: 1, ease: "power4.in"}, "<")

        items.forEach(item => {
            tl2.to(item, {transform: "translate(0, 0)", opacity: 1, duration: .3, ease: "power3.in"}, "<+=15%")
        })
    })

    buttonStack.addEventListener("click", function() {
        master.restart();
        toggleScroll(true);
    })

    close.addEventListener("click", function() {
        master.reverse();
        toggleScroll(false, 2300);
    })

    function animText(el) {
        let letters = el.querySelectorAll(".split-text__letter");
        letters.forEach((item, i) => {
            tl2.add(gsap.to(item, {
                transform: `translate(0, 0)`,
                opacity: 1,
                duration: 0.5,
                ease: "power1.inOut"
            }), "<0.01")
        })
        return tl2;
    }
}

export default stackAppear;