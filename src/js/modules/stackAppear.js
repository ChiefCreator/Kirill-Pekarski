import { gsap } from "gsap";
import toggleScroll from "./toggleScroll";

function stackAppear() {
    const buttonStack = document.querySelector(".stack-button");
    const stack = document.querySelector(".stack");
    const stackBlocks = document.querySelectorAll(".stack__column-list-item");
    const overblock = document.querySelectorAll(".overblock");

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
    master.add(tl1)
          .add(tl2, .5)

    tl1.to(overblock, {opacity: .7, duration: 1, ease: "linear"})
       .to(stack, {transform: "translate(0, 0)", duration: .5, ease: "power3.in"}, "<+=50%")
       .set(overblock, {pointerEvents: "all"})
       .set(stack, {pointerEvents: "all"})

    stackBlocks.forEach(stackBlock => {
        const title = stackBlock.querySelector(".stack__column-list-title");
        const items = stackBlock.querySelectorAll(".stack__item");

        splitText(title);
        tl2.add(animText(title))

        items.forEach(item => {
            tl2.to(item, {transform: "translate(0, 0)", opacity: 1, duration: .3, ease: "power3.in"}, "<+=15%")
        })
    })

    buttonStack.addEventListener("click", function() {
        if (buttonStack.classList.contains("stack-button_active")) {
            master.reverse();
            toggleScroll(false, 2300);

            document.querySelector(".circle-link__title").textContent = "Мой стэк";
            document.querySelector(".circle-link__top span").textContent = "Мой стэк";
            document.querySelector(".circle-link__bottom span").textContent = "Мой стэк";
        } else {
            master.restart();  
            toggleScroll(true);
                      
            document.querySelector(".circle-link__title").textContent = "Закрыть";
            document.querySelector(".circle-link__top span").textContent = "Закрыть";
            document.querySelector(".circle-link__bottom span").textContent = "Закрыть";
        }
        buttonStack.classList.toggle("stack-button_active");
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