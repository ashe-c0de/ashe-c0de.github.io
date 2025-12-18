let lastScrollTop = 0;
const threshold = 60; // Threshold to prevent jitter near top

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Prevent scroll bouncing on mobile affecting logic
    if (scrollTop < 0) {
        scrollTop = 0;
    }

    // If scrolling down and passed threshold
    if (scrollTop > lastScrollTop && scrollTop > threshold) {
        document.body.classList.add('hide-topbar');
    }
    // If scrolling up
    else if (scrollTop < lastScrollTop) {
        document.body.classList.remove('hide-topbar');
    }

    lastScrollTop = scrollTop;
}, { passive: true });
