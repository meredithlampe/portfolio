$(function () {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let speed = 50000;
    if (vw < 768) {
        speed = 5000000;
    }
    $('.marquee').marquee({
        delayBeforeStart: 0,
        duration: speed,
        startVisible: true,
        gap: 50
    });
});
