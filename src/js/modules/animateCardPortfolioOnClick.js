import { gsap } from "gsap";

function animateCardPortfolioOnClick() {
    let cards = document.querySelectorAll(".portfolio-card");
    let popup = document.querySelector(".popup-portfolio-card");
    let popuLine = popup.querySelector(".popup-portfolio-card__line");
    let popupTitle = popup.querySelector(".popup-portfolio-card__title");
    let popupDefinition = popup.querySelector(".popup-portfolio-card__description");
    let popupText = popup.querySelector(".popup-portfolio-card__text");
    let popupLink = popup.querySelector(".popup-portfolio-card__link");
    let popupCard = document.querySelector(".popup-card");
    let close = popup.querySelector(".popup-portfolio-card__close");
    let closeLine1 = close.querySelector(".popup-portfolio-card__close-line_1");
    let closeLine2 = close.querySelector(".popup-portfolio-card__close-line_2");

        const setContent = (card, popupCard, popupTitle, popupDefinition, popupText) => {
        let imgCard = card.querySelector("img");
        let imgPortfolioCard = popupCard.querySelector("img");
        imgPortfolioCard.src = imgCard.src;

        let data = [
            {
                id: "your_budget",
                title: "Your Budget",
                definition: "Веб-приложение по учету финансов",
                text: "Разработка && дизайн"
            },
            {
                id: "nikita_efremov",
                title: "Nikita Efremov",
                definition: "Веб-сайт профессионального фотографа Никиты Ефремова",
                text: "Разработка && дизайн"
            },
            {
                id: "kolyan_kovsh",
                title: "Kolyan Kovsh",
                definition: "Веб-сайт по аренде строительной техники",
                text: "Разработка && дизайн"
            },
            {
                id: "boxer",
                title: "Boxer",
                definition: "Веб-сайт по продаже игровых автоматов (силомеров)",
                text: "Разработка && дизайн"
            },
            {
                id: "panto",
                title: "Panto",
                definition: "Веб-сайт по продаже мебели",
                text: "Разработка"
            },
            {
                id: "tennis",
                title: "Tennis",
                definition: "Веб-сайт с теннисными услугами",
                text: "Разработка"
            }
        ]

        if (card.id) {
            popupTitle.textContent = data.find(item => item.id === card.id).title;
            popupDefinition.textContent = data.find(item => item.id === card.id).definition;
            popupText.textContent = data.find(item => item.id === card.id).text;
        }
    }

    let portfolioCardConfig = {
        left: parseFloat(document.querySelector(".popup-portfolio-card__img").getBoundingClientRect().left),
        top: parseFloat(document.querySelector(".popup-portfolio-card__img").getBoundingClientRect().top),
        width: parseFloat(document.querySelector(".popup-portfolio-card__img").getBoundingClientRect().width),
        height: parseFloat(document.querySelector(".popup-portfolio-card__img").getBoundingClientRect().height)
    }

    const splitText = (item) => {
        item.innerHTML = item.textContent.replace(/(\S*)/g, m => {
            return `<div class="split-text__word">` +
                    m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='split-text__letter'>$&</div>") +
                    `</div>`;
            });
        return item;
    };

    let popupImgConfig = {
        left: parseFloat(document.querySelector(".popup-portfolio-card__img").getBoundingClientRect().left),
        top: parseFloat(document.querySelector(".popup-portfolio-card__img").getBoundingClientRect().top),
        width: parseFloat(document.querySelector(".popup-portfolio-card__img").getBoundingClientRect().width),
        height: parseFloat(document.querySelector(".popup-portfolio-card__img").getBoundingClientRect().height)
    }

    let master = gsap.timeline({paused: true});
    let tl1 = gsap.timeline();
    let tl2 = gsap.timeline();
    let tl3 = gsap.timeline();
    let tl4 = gsap.timeline();
    master.add(tl1, 0)
          .add(tl2, 0)
          .add(tl3, 1)
          .add(tl4, "<")

    cards.forEach(card => {
        card.addEventListener("click", function() {
            setContent(card, popupCard, popupTitle, popupDefinition, popupText);

            splitText(popupTitle);
            splitText(popupDefinition);
            splitText(popupText);
            splitText(popupLink);

            let img = card.querySelector("img")

            let cardImgConfig = {
                left: parseFloat(img.getBoundingClientRect().left),
                top: parseFloat(img.getBoundingClientRect().top),
                width: parseFloat(img.getBoundingClientRect().width),
                height: parseFloat(img.getBoundingClientRect().height),
            }

            tl1.clear()
            tl2.clear()
            tl3.clear()
            tl4.clear()

            tl1.set(img, {opacity: 0})
               .set(popupCard, {left: cardImgConfig.left, top: cardImgConfig.top, width: cardImgConfig.width, height: cardImgConfig.height, zIndex: 4, opacity: 1})
               .to(popupCard, {left: popupImgConfig.left, top: popupImgConfig.top, height: popupImgConfig.height, duration: 1, ease: "power4.out"})

            tl2.set(popup, {zIndex: 3})
               .to(popup, {opacity: 1, duration: 1, ease: "power4.out"}, 0)
               .to(popuLine, {opacity: 1, width: "100%", duration: 2, ease: "power4.out"}, 0.5)

            tl3.add(animText(popupTitle))
               .add(animText(popupDefinition), "<+=0.5")
               .add(animText(popupText), ">")
               .add(animText(popupLink), "<")

            tl4.to(closeLine1, {width: "100%", duration: .3, ease: "power4.in"}, 1)
               .to(closeLine2, {width: "100%", duration: .3, ease: "power4.in"}, ">")

            master.play();
        })        
    })

    close.addEventListener("click", function() {
        master.reverse();
    })

    function animText(el) {
        let letters = el.querySelectorAll(".split-text__letter");
        letters.forEach((item, i) => {
            tl3.add(gsap.to(item, {
                transform: `translate(0, 0)`,
                opacity: 1,
                duration: 0.5,
                ease: "power1.inOut"
            }), "<0.01")
        })
        return tl3;
    }
}






































// function animateCardPortfolioOnClick() {
//     let cards = document.querySelectorAll(".portfolio-card");
//     let popup = document.querySelector(".popup-portfolio-card");
//     let popuLine = popup.querySelector(".popup-portfolio-card__line");
//     let popupTitle = popup.querySelector(".popup-portfolio-card__title");
//     let popupDefinition = popup.querySelector(".popup-portfolio-card__description");
//     let popupText = popup.querySelector(".popup-portfolio-card__text");
//     let popupLink = popup.querySelector(".popup-portfolio-card__link");
//     let portfolioCard = document.querySelector(".popup-card");
//     let close = popup.querySelector(".popup-portfolio-card__close");
//     let closeLine1 = close.querySelector(".popup-portfolio-card__close-line_1");
//     let closeLine2 = close.querySelector(".popup-portfolio-card__close-line_2");

//     const setContent = (card, portfolioCard, popupTitle, popupDefinition, popupText) => {
//         let imgCard = card.querySelector("img");
//         let imgPortfolioCard = portfolioCard.querySelector("img");
//         imgPortfolioCard.src = imgCard.src;

//         let data = [
//             {
//                 id: "your_budget",
//                 title: "Your Budget",
//                 definition: "Веб-приложение по учету финансов",
//                 text: "Разработка && дизайн"
//             },
//             {
//                 id: "nikita_efremov",
//                 title: "Nikita Efremov",
//                 definition: "Веб-сайт профессионального фотографа Никиты Ефремова",
//                 text: "Разработка && дизайн"
//             },
//             {
//                 id: "kolyan_kovsh",
//                 title: "Kolyan Kovsh",
//                 definition: "Веб-сайт по аренде строительной техники",
//                 text: "Разработка && дизайн"
//             },
//             {
//                 id: "boxer",
//                 title: "Boxer",
//                 definition: "Веб-сайт по продаже игровых автоматов (силомеров)",
//                 text: "Разработка && дизайн"
//             },
//             {
//                 id: "panto",
//                 title: "Panto",
//                 definition: "Веб-сайт по продаже мебели",
//                 text: "Разработка"
//             },
//             {
//                 id: "tennis",
//                 title: "Tennis",
//                 definition: "Веб-сайт с теннисными услугами",
//                 text: "Разработка"
//             }
//         ]

//         if (card.id) {
//             popupTitle.textContent = data.find(item => item.id === card.id).title;
//             popupDefinition.textContent = data.find(item => item.id === card.id).definition;
//             popupText.textContent = data.find(item => item.id === card.id).text;
//         }
//     }

//     let portfolioCardConfig = {
//         left: parseFloat(document.querySelector(".popup-portfolio-card__img").getBoundingClientRect().left),
//         top: parseFloat(document.querySelector(".popup-portfolio-card__img").getBoundingClientRect().top),
//         width: parseFloat(document.querySelector(".popup-portfolio-card__img").getBoundingClientRect().width),
//         height: parseFloat(document.querySelector(".popup-portfolio-card__img").getBoundingClientRect().height)
//     }

//     const splitText = (item) => {
//         item.innerHTML = item.textContent.replace(/(\S*)/g, m => {
//             return `<div class="split-text__word">` +
//                     m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='split-text__letter'>$&</div>") +
//                     `</div>`;
//             });
//         return item;
//     };

//     cards.forEach(card => {

//         let master = gsap.timeline({paused: true});
//         let tl1 = gsap.timeline();
//         let tl2 = gsap.timeline();
//         let tl3 = gsap.timeline();
//         let tl4 = gsap.timeline();

//         master.add(tl1, 0)
//               .add(tl2, 0)
//               .add(tl3, 1)
//               .add(tl4, "<")

//         card.addEventListener("click", function() {
//             `setContent(card, portfolioCard, popupTitle, popupDefinition, popupText);

//             splitText(popupTitle);
//             splitText(popupDefinition);
//             splitText(popupText);
//             splitText(popupLink);`

//             let img = card.querySelector("img")

//             let cardImgConfig = {
//                 left: parseFloat(img.getBoundingClientRect().left),
//                 top: parseFloat(img.getBoundingClientRect().top),
//                 width: parseFloat(img.getBoundingClientRect().width),
//                 height: parseFloat(img.getBoundingClientRect().height),
//             }

//             tl1.set(img, {opacity: 0})
//                .set(portfolioCard, {left: cardImgConfig.left, top: cardImgConfig.top, width: cardImgConfig.width, height: cardImgConfig.height, zIndex: 4, opacity: 1})
//                .to(portfolioCard, {left: portfolioCardConfig.left, top: portfolioCardConfig.top, height: portfolioCardConfig.height, duration: 1, ease: "power4.out"})
              
//             tl2.set(popup, {zIndex: 3})
//                .to(popup, {opacity: 1, duration: 1, ease: "power4.out"}, 0)
//                .to(popuLine, {opacity: 1, width: "100%", duration: 2, ease: "power4.out"}, 0.5)

//             tl3.add(animText(popupTitle))
//                .add(animText(popupDefinition), "<+=0.5")
//                .add(animText(popupText), ">")
//                .add(animText(popupLink), "<")

//             tl4.to(closeLine1, {width: "100%", duration: .3, ease: "power4.in"}, 1)
//                .to(closeLine2, {width: "100%", duration: .3, ease: "power4.in"}, ">")

//             master.play();
//         })
        
//         close.addEventListener("click", function() {
//             master.reverse();
//         })

//         function animText(el) {
//             let letters = el.querySelectorAll(".split-text__letter");
//             letters.forEach((item, i) => {
//                 tl3.add(gsap.to(item, {
//                     transform: `translate(0, 0)`,
//                     opacity: 1,
//                     duration: 0.5,
//                     ease: "power1.inOut"
//                 }), "<0.01")
//             })
//             return tl3;
//         }
//     })
// }

export default animateCardPortfolioOnClick;