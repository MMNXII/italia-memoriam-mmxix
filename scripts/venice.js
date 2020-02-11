
document.body.style.backgroundImage = "url('../images/venice/background.jpg')";
document.body.style.backgroundColor = "rgba(0, 97, 117, 0.85)";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "fill";


var header = document.getElementById("headerContainer");
    header.style.opacity = "0";
var introPara = document.getElementById("intro");
    introPara.style.opacity = "0";
var imgContainer = document.getElementById("imgContainer");
    imgContainer.style.opacity = "0";

    function headerFade() {
        header.style.opacity = "1";
        header.style.transitionProperty = "opacity";
        header.style.transitionDuration = "3s";
        header.style.transitionDelay = "2s";

        function introParaFade() {
            introPara.style.opacity = "1";
            introPara.style.transitionProperty = "opacity";
            introPara.style.transitionDuration = "3s";
            introPara.style.transitionDelay = "4s";

            function imageFade() {
                imgContainer.style.opacity = "1";
                imgContainer.style.transitionProperty = "opacity";
                imgContainer.style.transitionDuration = "3s";
                imgContainer.style.transitionDelay = "22s";
            }

                imageFade();
            }
        introParaFade();
    }


function captionAppear(className) {
    var captions = document.getElementById("imgContainer")
        .getElementsByClassName(className);

    for(let i = 0; i<captions.length; i++) {
        captions[i].style.opacity = "0";

        captions[i].addEventListener("click", func = () => {

            if (captions[i].style.opacity == "0") {
            captions[i].style.opacity = "1";
            captions[i].style.transition = "opacity .5s linear";
            captions[i].style.backgroundColor = "rgba(255, 255, 255, 0.70)";

            } else {
                captions[i].style.opacity = "0";
            }
        });
    }
}

captionAppear("caption");

































      









