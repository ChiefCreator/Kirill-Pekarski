function updateRouteLine() {
    let line = document.querySelector(".route-line__line_progress");
    let circle = document.querySelector(".route-line__circle");

    let availableScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    window.addEventListener("scroll", () => {
        let scrollY = window.scrollY;
        let percent = scrollY / availableScroll * 100;
        
        line.style.height = `${percent}%`;
        circle.style.top = `calc(${percent}% - ${circle.offsetHeight / 2}px)`;
    })
}

export default updateRouteLine;