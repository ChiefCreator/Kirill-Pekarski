import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

function transitionToSections() {
    gsap.registerPlugin(ScrollToPlugin);

    const $headerLinks = document.querySelectorAll(".header .link");
    const $buttonContact = document.querySelector(".button_contact");
    const $buttonAbout = document.querySelector(".button_about");

    $headerLinks.forEach($link => {
        $link.onclick = function(e) {
            e.preventDefault();
            gsap.to(window, {duration: 5, ease: "elastic.out", scrollTo:{y: $link.getAttribute("data-href"), autoKill: true}});
        }
    })
    $buttonContact.onclick = () => gsap.to(window, {duration: 40, ease: "elastic.out", delay: .5, scrollTo:{y: $buttonContact.getAttribute("data-href"), autoKill: true}});
    $buttonAbout.onclick = () => gsap.to(window, {duration: 5, ease: "elastic.out", delay: .5, scrollTo:{y: $buttonAbout.getAttribute("data-href"), autoKill: true}});
}

export default transitionToSections;