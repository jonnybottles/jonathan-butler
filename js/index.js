$(document).ready(function() {
    $(".jon-head-shot-hi").addClass("hidden");
    $(".cybersecurity-professional").addClass("hidden");

    setTimeout(() => {
        $(".jon-head-shot-hi").removeClass("hidden");
        $(".jon-head-shot-hi").hide().fadeIn(750);
    }, 1000);

    setTimeout(() => {
        $(".cybersecurity-professional").removeClass("hidden");
        $(".cybersecurity-professional").hide().fadeIn(750);
    }, 2500);

    setTimeout(() => {
        $(".top-nav-bar").removeClass("hidden");
        $(".top-nav-bar").hide().slideDown(750);
    }, 3500);
});
