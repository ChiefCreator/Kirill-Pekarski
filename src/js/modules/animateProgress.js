import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

function animateProgress() {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    let section = document.querySelector(".stack-progress");

    let technologies = document.querySelectorAll(".technology");
    technologies.forEach(technology => {
        let progressBar = technology.querySelector(".technology__progress");
        let value = +progressBar.dataset.value;
        let progressBarCurrent = technology.querySelector(".technology__progress-current");
        let percent = technology.querySelector(".technology__percent");
        let arrNums = fillArray(value);
        
        const master = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: () => "+=600",
            }
        });
        let tl = gsap.timeline();

        master.to(progressBarCurrent, {width: `${value}%`, duration: 2}, 0)
              .add(changeNum(arrNums, percent, tl), 0)
    })

    function changeNum(arr, item, tl) {
        arr.forEach(num => {
            tl.to(item, {
                duration: .02,
                text: `${num}%`,
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

export default animateProgress;