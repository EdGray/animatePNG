// AnimatePNG v2
// Ed Gray Aug 2016

function collectAnimParameters() {

    var elements = [].slice.call(document.querySelectorAll("div.animatePNG"));

    for (var index = 0; index < elements.length; index++) {

        elements[index].style.height = elements[index].dataset.height + "px";
        elements[index].style.width = elements[index].dataset.width + "px";
        elements[index].style.backgroundImage = 'url(' + elements[index].dataset.src + ")";
        elements[index].style.backgroundPosition = "0 0";

        animatePNG(elements[index], elements[index].dataset.width, elements[index].dataset.frames, elements[index].dataset.rate);

    }
}

function animatePNG(thisElement, thisWidth, thisFrames, thisRate) {

    // set up
    var frameNumber = 0;
    var calculatedPosition = 0;

    function animateBackground() {

        thisElement.style.backgroundPositionX = calculatedPosition + "px";

        if (frameNumber < (thisFrames - 1)) {
            calculatedPosition = calculatedPosition - thisWidth;
            frameNumber++;
        } else {
            frameNumber = 0;
            calculatedPosition = 0;
        }

        setTimeout(animateBackground, thisRate);
    }

    animateBackground();

}

collectAnimParameters();
