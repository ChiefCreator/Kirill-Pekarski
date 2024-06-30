import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function animateOnScrollPortfolioSection() {
    gsap.registerPlugin(ScrollTrigger);

    let pageWrapper = document.querySelector(".section-portfolio__wrapper");

    let line1 = document.querySelector(".section-portfolio__line_1");
    let line2 = document.querySelector(".section-portfolio__line_2");
    let distance = (container) => {
        let localItems = container.querySelectorAll(".portfolio-card")
        let lastItemBounds = localItems[localItems.length - 1].getBoundingClientRect()
        let containerBounds = container.getBoundingClientRect();

        return Math.max(0, lastItemBounds.right - containerBounds.right);
    };
    line2.style.transform = `translate(${-distance(line2)}px, 0)`;

    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pageWrapper,
          start: "top top",
          pinnedContainer: pageWrapper,
          end: () => "+=" + distance(line1),
          pin: pageWrapper,
          scrub: 2,
          invalidateOnRefresh: true
        }
      });

    tl.to(line1, {x: () => -distance(line1), ease: "none"}, 0)
    tl.to(line2, {x: 0, ease: "none"}, 0); 
}

export default animateOnScrollPortfolioSection;