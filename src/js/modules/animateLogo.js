function animateLogo() {
    let titleBg = document.querySelector(".logo__title_bg");
    window.addEventListener("mousemove", function(e) {
        let coef = ((e.x / window.innerWidth) + (e.y / window.innerHeight)) / 1.3;

        titleBg.style.clipPath = `polygon(0% calc(${coef} * 46%), calc(${coef} * 12%) calc(${coef} * 40%), calc(${coef} * 24%) calc(${coef} * 41%), calc(${coef} * 36%) calc(${coef} * 46%), calc(${coef} * 50%) calc(${coef} * 52%), calc(${coef} * 62%) calc(${coef} * 58%), calc(${coef} * 74%) calc(${coef} * 62%), calc(${coef} * 86%) calc(${coef} * 56%), 100% calc(${coef} * 51%), 100% 100%, 0% 100%)`;
    })
}

export default animateLogo;