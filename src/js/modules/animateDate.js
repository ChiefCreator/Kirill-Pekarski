import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function animateDate() {
    let firstNum = document.querySelector(".date__num_first");
    let secondNum = document.querySelector(".date__num_second");

    setCurrentDate();

    let firstNumArr = fillArray(firstNum.dataset.countTo);
    let secondNumArr = fillArray(secondNum.dataset.countTo);

    gsap.registerPlugin(TextPlugin, ScrollTrigger);
    let master = gsap.timeline({scrollTrigger: {trigger: '.section-about__wrapper', start: 'top bottom', end: '+=500'}});
    let tl1 = gsap.timeline();
    let tl2 = gsap.timeline();
    master.add(changeNum(firstNumArr, firstNum, tl1)).add(master.from(".date__month", {duration: .3, transform: "translate(-10px, 0)", opacity: 0})).add(changeNum(secondNumArr, secondNum, tl2), "-0.1").add(master.from(".date__text", {duration: .3, transform: "translate(0, 10px)", opacity: 0}));
    
    function setCurrentDate() {
        let date = new Date();
        let dateNum = date.getDate();
        let month = date.toLocaleString("ru", {month: "long"});

        firstNum.dataset.countTo = Math.floor(dateNum / 10);
        secondNum.dataset.countTo = Math.floor(dateNum % 10);
        firstNum.textContent = Math.floor(dateNum / 10);
        secondNum.textContent = Math.floor(dateNum % 10);
        document.querySelector(".date__month").textContent = month;
    }
    function changeNum(arr, item, tl) {
        arr.forEach(num => {
            tl.to(item, {
                duration: .2,
                text: num,
                ease: "none",
            })
        })

        return tl;
    }
    function fillArray(limit) {
        let arr = [];
        for (let i = 0; i <= limit; i++) {
            arr.push(i);
        }

        return arr;
    }
}

export default animateDate;