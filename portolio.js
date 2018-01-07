$(window).on("load", start);

function start() {
    console.log("start");

    $("#opening").show();
    $("#logo").on("click", portfolio);

    $("#stilart_splash").on("click", stil);
    $("#video_splash").on("click", video);
    $("#ani_splash").on("click", ani);
    $("#ux_splash").on("click", ux);
    $("#om_splash").on("click", mig);

    $("#portfolio").hide();
    $("#ux").hide();


}

function portfolio() {
    console.log("portfolio");


    $("#opening").hide();

    $("#portfolio").show();
    $("#hej").show();
    $("#video_splash").show();
    $("#ani_splash").show();
    $("#ux_splash").show();
    $("#om_splash").show();


    $("#stilart_splash").show;
    $("#stilart_splash").addClass("stil_splash");

    $("#video_splash").addClass("splash1");
    $("#video_splash").removeClass("video_splash_push");

    $("#ani_splash").addClass("splash2");
    $("#ani_splash").removeClass("ani_splash_push");

    $("#ux_splash").addClass("splash3");
    $("#ux_splash").removeClass("ux_splash_push");

    $("#om_splash").addClass("om_splash1");
    $("#om_splash").removeClass("om_splash2");

    $("#stil").hide();
    $("#video").hide();
    $("#animation").hide();
    $("#ux").hide();
    $("#bonus").hide();
    $("#om").hide();
    $("#mig").hide();
    $("#design").hide();
    $("#proces").hide();
    $("#proces2").hide();
    $("#asset").hide();



}

function stil() {
    console.log("stil");



    $("#stilart_splash").removeClass("stil_splash");
    $("#stilart_splash").addClass("splash_push");

    $("#video_splash").addClass("splash1");
    $("#video_splash").removeClass("video_splash_push");


    $("#ani_splash").addClass("splash2");
    $("#ani_splash").removeClass("ani_splash_push");

    $("#ux_splash").addClass("splash3");
    $("#ux_splash").removeClass("ux_splash_push");

    $("#om_splash").addClass("om_splash1");
    $("#om_splash").removeClass("om_splash2");

    $("#video").hide();
    $("#animation").hide();
    $("#ux").hide();
    $("#bonus").hide();
    $("#om").hide();
    $("#hej").hide();
    $("#om").show();
    $("#mig").hide();
    $("#design").hide();
    $("#proces").hide();
    $("#proces2").hide();
    $("#asset").hide();

}

function video() {
    console.log("video");

    $("#mig").hide();
    $("#video").show();
    $("#ux").hide();
    $("#bonus").show();
    $("#animation").hide();
    $("#om").hide();

    $("#design").hide();
    $("#proces").hide();
    $("#proces2").hide();
    $("#asset").hide();

    $("#video_splash").removeClass("splash1");
    $("#video_splash").addClass("video_splash_push");

    $("#stilart_splash").addClass("stil_splash");
    $("#stilart_splash").removeClass("splash_push");

    $("#ani_splash").addClass("splash2");
    $("#ani_splash").removeClass("ani_splash_push");

    $("#ux_splash").addClass("splash3");
    $("#ux_splash").removeClass("ux_splash_push");

    $("#animation").hide();
    $("#hej").hide();

    $("#om_splash").addClass("om_splash1");
    $("#om_splash").removeClass("om_splash2");

}

function ani() {
    console.log("ani");
    $("#video").hide();
    $("#ux").hide();
    $("#bonus").hide();
    $("#om").hide();
    $("#hej").hide();
    $("#mig").hide();



    $("#animation").show();
    $("#design").show();
    $("#proces").show();
    $("#proces2").show();
    $("#asset").show();






    $("#ani_splash").removeClass("splash2");
    $("#ani_splash").addClass("ani_splash_push");

    $("#video_splash").addClass("splash1");
    $("#video_splash").removeClass("video_splash_push");

    $("#stilart_splash").addClass("stil_splash");
    $("#stilart_splash").removeClass("splash_push");

    $("#ux_splash").addClass("splash3");
    $("#ux_splash").removeClass("ux_splash_push");

    $("#om_splash").addClass("om_splash1");
    $("#om_splash").removeClass("om_splash2");


}


function ux() {
    console.log("ux");

    $("#om").hide();
    $("#video").hide();
    $("#animation").hide();
    $("#ux").show();
    $("#bonus").hide();
    $("#om").hide();
    $("#hej").hide();
    $("#mig").hide();
    $("#design").hide();
    $("#proces").hide();
    $("#proces2").hide();
    $("#asset").hide();

    $("#ani_splash").addClass("splash2");
    $("#ani_splash").removeClass("ani_splash_push");

    $("#video_splash").addClass("splash1");
    $("#video_splash").removeClass("video_splash_push");

    $("#stilart_splash").addClass("stil_splash");
    $("#stilart_splash").removeClass("splash_push");

    $("#ux_splash").removeClass("splash3");
    $("#ux_splash").addClass("ux_splash_push");

    $("#om_splash").addClass("om_splash1");
    $("#om_splash").removeClass("om_splash2");


}

function mig() {
    console.log("om");

    $("#om").hide();
    $("#video").hide();
    $("#animation").hide();
    $("#ux").hide();
    $("#bonus").hide();
    $("#mig").show();
    $("#hej").hide();
    $("#design").hide();
    $("#proces").hide();
    $("#proces2").hide();
    $("#asset").hide();

    $("#ani_splash").addClass("splash2");
    $("#ani_splash").removeClass("ani_splash_push");

    $("#video_splash").addClass("splash1");
    $("#video_splash").removeClass("splash_push");

    $("#stilart_splash").addClass("stil_splash");
    $("#stilart_splash").removeClass("splash_push");

    $("#ux_splash").addClass("splash3");
    $("#ux_splash").removeClass("ux_splash_push");

    $("#om_splash").addClass("om_splash2");
    $("#om_splash").removeClass("om_splash1");

}
