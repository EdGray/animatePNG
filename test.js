// AnimatePNG v2

function collectAnimParameters() {

    var elements = [].slice.call(document.querySelectorAll("div.animatePNG"));

    for (var index = 0; index < elements.length; index++) {

        var myArray = [ elements[index].dataset.src,
                        elements[index].dataset.height,
                        elements[index].dataset.width,
                        elements[index].dataset.frames,
                        elements[index].dataset.rate ];

        console.log(myArray);
        // var calculatedPosition = 99;
        // elements[index].style.cssText = "display: block; background-image: url('" + myArray[0] + "'); height: " + myArray[1] + "px ; width: " + myArray[2] + "px ; background-repeat: no-repeat; background-position: 0 0;";
        // elements[index].style.cssText = calculatedPosition + "px";

        // set div styles (height + width)
        elements[index].style.height = elements[index].dataset.height + "px";
        elements[index].style.width = elements[index].dataset.width + "px";
        elements[index].style.backgroundImage = 'url(' + elements[index].dataset.src + ")";
        elements[index].style.backgroundPosition = "0 0";

        // test output
        console.log(elements[index]);

        // for each object fire animatePNG pass width  for background calculation, frames for total times to loop, & rate for set timeout
        animatePNG(elements[index], elements[index].dataset.width, elements[index].dataset.frames, elements[index].dataset.rate);

    }
}


function animatePNG(thisElement, thisWidth, thisFrames, thisRate) {

    // start the bugger animating based on frame rate and width

    console.log("object: " + thisElement + " // width: " + thisWidth + " // frames: " + thisFrames + " // rate: " + thisRate);

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
    // Animate like this

    // set a currentPostition var, if it's less than total frames, move to new bg position, loop while true



    /*
    holderPNG.style.backgroundPositionX = calculatedPosition + "px";

    if (frameNumber < (frameTotal - 1)) {
        calculatedPosition = calculatedPosition - animImageWidth;
        frameNumber++;
    } else {
        frameNumber = 0;
        calculatedPosition = 0;
    }

    setTimeout(animateBackground, frameRate);
    */

}

collectAnimParameters();
