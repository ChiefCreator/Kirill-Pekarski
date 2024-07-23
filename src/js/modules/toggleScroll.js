function toggleScroll(isLock, timeout = 500) {
    let body = document.body;
    let lockPadding = document.querySelectorAll(".lock-padding");

    if (isLock) bodyLock();
    else bodyunLock();

    function bodyLock() {

        const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

        if (lockPadding.length > 0) {
            lockPadding.forEach(el => {
                el.style.paddingRight = lockPaddingValue;
            })
        }

        body.classList.add("body_lock");
        body.style.paddingRight = lockPaddingValue;
    }
    function bodyunLock() {
        setTimeout(function() {

            if (lockPadding.length > 0) {
                lockPadding.forEach(el => {
                    el.style.paddingRight = 0;
                })
            }

            body.style.paddingRight = 0;
            body.classList.remove("body_lock");
        },timeout);
    }
}

export default toggleScroll;