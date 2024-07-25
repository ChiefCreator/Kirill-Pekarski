import { gsap } from "gsap";

function buttonAnimation() {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            document.querySelectorAll(".button__pulse-element").forEach(item => item.remove());

            let newElement = document.createElement("div");
            newElement.classList.add("button__pulse-element");
            newElement.style.width = newElement.style.height = Math.max(button.offsetHeight, button.offsetWidth) * 2 + "px";
            button.append(newElement);

            let x = event.clientX;
            let y = event.clientY;
            let offsetXButton = button.getBoundingClientRect().left;
            let clientXButton = x - offsetXButton;
            let offsetYButton = button.getBoundingClientRect().top;
            let clientYButton = y - offsetYButton;

            newElement.style.left = clientXButton - (newElement.offsetWidth / 2) + "px";
            newElement.style.top = clientYButton - (newElement.offsetHeight / 2) + "px"
        })

        let tl = gsap.timeline({paused: true});
        tl.add(tl.set(button, {color: "transparent"}))
        tl.add(tl.to(button, {color: "#f0f0f0", duration: 0.3}))

        button.addEventListener("mouseenter", () => {
            tl.restart();
        })
        button.addEventListener("mouseleave", () => {
            tl.restart();
        })
    })
}

export default buttonAnimation;