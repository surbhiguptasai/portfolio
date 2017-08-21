$(document).ready(function () {

    function showHide(hide, show, showImage) {
        hide.forEach(function (el) {
            el.toggle();
            el.addClass("animated fadeIn");
        });
        $(".portfolio i").toggleClass("fa-chevron-up fa-chevron-down");
        $(".description").toggle();
        $(".contract").toggle();
        show.addClass("animated fadeIn");
        show.toggleClass("box shortBox");
        show.toggleClass("col-lg-3 col-lg-12");
        showImage.toggle();
        showImage.addClass("animated fadeIn bottomSpacer")
    };

    //Expand and Contract Works

    $("#restaurantSearch").on("click", function () {
        showHide([$("#contactApp"), $("#nycBikeApp")], $("#restaurantSearch"), $("#restaurantSearchImage"));
    });
    $("#contactApp").on("click", function () {
        showHide([$("#nycBikeApp"), $("#restaurantSearch")], $("#contactApp"), $("#contactAppImage"));
    });
    $("#nycBikeApp").on("click", function () {
        showHide([$("#contactApp"), $("#restaurantSearch")], $("#nycBikeApp"), $("#nycBikeImage"));
    });

    $("#restaurantSearchClose").on("click", function () {
        showHide([$("#contactApp"), $("#nycBikeApp")], $("#restaurantSearch"), $("#restaurantSearchImage"));
    });
    $("#contactAppClose").on("click", function () {
        showHide([$("#nycBikeApp"), $("#restaurantSearch")], $("#contactApp"), $("#contactAppImage"));
    });
    $("#nycBikeClose").on("click", function () {
        showHide([$("#contactApp"), $("#restaurantSearch")], $("#nycBikeApp"), $("#nycBikeImage"));
    });



    //Setting Scrolls
    $(".navbar-brand").click(function () {
        $(".hero").velocity("scroll", 1000);
    });
    $("#toProfile").click(function () {
        $("#intro").velocity("scroll", 1000);
    });
    $("#profileLink").click(function () {
        $("#intro").velocity("scroll", 1000);
    });
    $("#portfolioLink").click(function () {
        $("#works").velocity("scroll", 1000);
    });
    $("#contactLink").click(function () {
        $("#contact").velocity("scroll", 1000);
    });

    //Callout Styles
    $("#toProfile").velocity({
        translateY: "10px"
    }, {
        loop: 5
    });
});
