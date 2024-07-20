function updateRouteLine() {
    let line = document.querySelector(".route-line__line_progress");
    let circle = document.querySelector(".route-line__circle");

    function getScrollPercentage() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        return scrollPercentage;
    }

    window.addEventListener("scroll", () => {  
        line.style.height = `${getScrollPercentage()}%`;
        circle.style.top = `calc(${getScrollPercentage()}% - ${circle.offsetHeight / 2}px)`;
    })
}

export default updateRouteLine;