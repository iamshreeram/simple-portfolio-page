$(document).ready(function () {

    // typing effect
    var typed = new Typed('.section-1 h2 span', {
        // Waits 1000ms after typing "First"
        strings: ['ML Engineer.', 'Creator.','SRE.'],
        smartBackspace: true,
        loop: true,
        loopCount: Infinity,
        typeSpeed: 100,
        backSpeed: 100,
        startDelay: 500,
        backDelay: 1000,
    });

})