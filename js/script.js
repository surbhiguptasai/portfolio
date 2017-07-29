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

    $("#apiHack").on("click", function () {
        showHide([$("#quizApp"), $("#pictionary"), $("#noteKeeper")], $("#apiHack"), $("#apiHackImage"));
    });
    $("#quizApp").on("click", function () {
        showHide([$("#pictionary"), $("#apiHack"), $("#noteKeeper")], $("#quizApp"), $("#quizAppImage"));
    });
    $("#pictionary").on("click", function () {
        showHide([$("#quizApp"), $("#apiHack"), $("#noteKeeper")], $("#pictionary"), $("#pictionaryImage"));
    });
    $("#noteKeeper").on("click", function () {
        showHide([$("#quizApp"), $("#apiHack"), $("#pictionary")], $("#noteKeeper"), $("#noteKeeperImage"));
    });
    $("#apiHackClose").on("click", function () {
        showHide([$("#quizApp"), $("#pictionary"), $("#noteKeeper")], $("#apiHack"), $("#apiHackImage"));
    });
    $("#quizAppClose").on("click", function () {
        showHide([$("#pictionary"), $("#apiHack"), $("#noteKeeper")], $("#quizApp"), $("#quizAppImage"));
    });
    $("#pictionaryClose").on("click", function () {
        showHide([$("#quizApp"), $("#apiHack"), $("#noteKeeper")], $("#pictionary"), $("#pictionaryImage"));
    });
    $("#noteKeeperClose").on("click", function () {
        showHide([$("#quizApp"), $("#apiHack"), $("#pictionary")], $("#noteKeeper"), $("#noteKeeperImage"));
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
