

document.body.style.backgroundImage = "url('../images/florence/background.jpg')";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "fill";


let header = document.getElementById("headerContainer");
    header.style.opacity = "0";
let introPara = document.getElementById("intro");
    introPara.style.opacity = "0";
let arrow = document.getElementById("arrow");
    arrow.style.opacity = "0";

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

            function arrowFade() {
                arrow.style.opacity = "1";
                arrow.style.transitionProperty = "opacity";
                arrow.style.transitionDuration = "3s";
                arrow.style.transitionDelay = "24s";
            }

                arrowFade();
            }
        introParaFade();
    }



let a;
let index = 1;
showSlides(index);

    function slides(n) {
        showSlides(index += n);
    }

        function showSlides(n) {
            let images = document.getElementsByClassName("imgContainer");
                if (n > images.length) {
                    index = 1;

                } if (n < 1) {
                    index = images.length;

                } for (a = 0; a < images.length; a++) {
                    images[a].style.display = "none";
                }

                images[index-1].style.display = "block";
        }

