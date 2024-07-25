import gsap from "gsap";
import toggleScroll from "./toggleScroll";

function animateBurgerMenu() {
    const $button = document.querySelector(".header__menu-button");
    const $mobileMenu = document.querySelector(".mobile-menu");
    const $headerContent = document.querySelectorAll(".header__content");
    const $mobileLinks = $mobileMenu.querySelectorAll(".link");

    const timelineMobileMenu = gsap.timeline({paused: true});
    timelineMobileMenu.to($mobileMenu, {left: 0, duration: .5, ease: "power3.in"})
                      .to($headerContent, {borderBottom: "1px solid #dfdfdf", duration: .25, ease: "linear"}, "<+=50%")

    $mobileLinks.forEach(link => {
        const $linkTitle = link.querySelector(".link__title");
        const $linkTitleTop = link.querySelector(".link__top");
        const $linkTitleBottom = link.querySelector(".link__bottom");

        splitText($linkTitle);

        timelineMobileMenu
            .set($linkTitle, {opacity: 1})
            .add(animText($linkTitle), ">")
            .set($linkTitle, {opacity: 0})
            .set($linkTitleTop, {opacity: 1})
            .set($linkTitleBottom, {opacity: 1})

        link.addEventListener("click",function(e) {
            e.preventDefault();
            
            timelineMobileMenu.reverse()
            $button.classList.toggle("header__menu-button_active");

            gsap.to(window, {duration: 5, ease: "elastic.out", delay: 3.5, scrollTo:{y: link.getAttribute("data-href"), autoKill: true}})
            toggleScroll(false, 3500);
        })

    })

    $button.onclick = function(e) {
        e.preventDefault();
        $button.classList.toggle("header__menu-button_active");
        

        if ($button.classList.contains("header__menu-button_active")) {
            timelineMobileMenu.restart();
            toggleScroll(true);
        } else {
            timelineMobileMenu.reverse();
            toggleScroll(false, 3500);
        }
    }

    function animText(el) {
        let letters = el.querySelectorAll(".split-text__letter");
        letters.forEach((item, i) => {
            timelineMobileMenu.add(gsap.to(item, {
                transform: `translate(0, 0)`,
                opacity: 1,
                duration: .5,
                ease: "power1.inOut"
            }), "<0.03")
        })
        return timelineMobileMenu;
    }
    function splitText(item) {
        item.innerHTML = item.textContent.replace(/(\S*)/g, m => {
            return `<div class="split-text__word">` +
                    m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='split-text__letter'>$&</div>") +
                    `</div>`;
            });
        return item;
    };
}

export default animateBurgerMenu;