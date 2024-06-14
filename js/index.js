$(document).ready(function () {
    if ($(window).width() > 768) {
        // Add animation classes
        $(".jon-head-shot-hi").addClass("hidden");
        $(".cybersecurity-professional").addClass("hidden");

        setTimeout(() => {
            $(".jon-head-shot-hi").removeClass("hidden");
            $(".jon-head-shot-hi").css("visibility", "visible");
            $(".jon-head-shot-hi").hide().fadeIn(750);
        }, 1000);

        setTimeout(() => {
            $(".cybersecurity-professional").removeClass("hidden");
            $(".cybersecurity-professional").css("visibility", "visible");
            $(".cybersecurity-professional").hide().fadeIn(750);
        }, 2500);

        setTimeout(() => {
            $(".top-nav-bar").removeClass("hidden");
            $(".top-nav-bar").css("top", "-100px"); // Ensure initial position is off-screen
            $(".top-nav-bar").animate({ top: "0px" }, 750); // Slide down smoothly
        }, 3500);

        setTimeout(() => {
            $(".footer-container").css("bottom", "0px"); // Slide up smoothly
        }, 3500); // Adjust delay as needed
    } else {
        // Ensure elements are visible without animation on mobile
        $(".jon-head-shot-hi").css("visibility", "visible").removeClass("hidden");
        $(".cybersecurity-professional").css("visibility", "visible").removeClass("hidden");
        $(".top-nav-bar").css("visibility", "visible").removeClass("hidden");
        $(".footer-container").css("visibility", "visible").removeClass("hidden");
    }
});
