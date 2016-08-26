/*
-----------------> make an object creator like this

//First, the object creator
function GamePlayer(name,totalScore,gamesPlayed) {
    //should return an object with three keys:
    // name
    // totalScore
    // gamesPlayed

    this.name =  name;
    this.totalScore = totalScore;
    this.gamesPlayed = gamesPlayed;
}
if you will use var player1 = new GamePlayer(a,b,c).

And use

function makeGamePlayer(name,totalScore,gamesPlayed) {
    //should return an object with three keys:
    // name
    // totalScore
    // gamesPlayed

    var obj = {
        name:  name,
        totalScore: totalScore,
        gamesPlayed: gamesPlayed
    };
    return obj;
}
if you will use var player1 = makeGamePlayer(a,b,c).

Note that when you are creating an object you don't have to use this.

And if after creating the object you don't do anything with it, you could also use

return {
    name: name,
    totalScore: totalScore,
    gamesPlayed: gamesPlayed
};

--------------------------------> then generate instance for each div.animatePNG
--------------------------------> then animate each object for the given number of frames








// Declare and initiate at the beginning
/* declaring
    myArray = [],
    myObject = {};
*/



/*
function animatePNG() {


    holderPNG.style.cssText = "display: block; background-image: url('" + animImage + "'); height: " + animImageHeight + "px ; width: " + animImageWidth + "px ; background-repeat: no-repeat; background-position: 0 0;";





    // Animate
    function animateBackground() {

        holderPNG.style.backgroundPositionX = calculatedPosition + "px";

        if (frameNumber < (frameTotal - 1)) {
            calculatedPosition = calculatedPosition - animImageWidth;
            frameNumber++;
        } else {
            frameNumber = 0;
            calculatedPosition = 0;
        }

        setTimeout(animateBackground, frameRate);
    }

    animateBackground()
}









// <a href="http://www.javascriptkit.com"><img src="default.jpg" data-out="default.jpg" data-over="over.jpg" /></a>
// <div class="animatePNG" data-src="img/animTest.png" data-height="60" data-width="60" data-frames="12" data-rate="100"></div>

/*
function animatePNG() {
    var elements = [].slice.call(document.querySelectorAll("div.animatePNG"));
    for (var index = 0; index < elements.length; index++) {
        console.log(elements[index]);
        console.log(elements[index].dataset.src);
        console.log(elements[index].dataset.height);
        console.log(elements[index].dataset.width);
        console.log(elements[index].dataset.frames);
        console.log(elements[index].dataset.rate);

        elements[index].style.cssText = "display: block; background-image: url('" + elements[index].dataset.src + "'); height: " + elements[index].dataset.height + "px ; width: " + elements[index].dataset.width + "px ; background-repeat: no-repeat; background-position: 0 0;";

        var calculatedPosition = 0;
        var currentAnimationObject = 0;
        var animFramesTotal = elements[index].dataset.frames;
        var currentElement = elements[index].id;
        var nextPos = (elements[index].dataset.width - elements[index].dataset.width);
        var currentBackgroundPosition = 0;

        function testing() {
            for (var newIndex = 0; newIndex < (animFramesTotal - 1); newIndex++) {
                console.log(newIndex);
            }
        }

        setTimeout(testing, 1000);

    }

}

animatePNG();

*/


/* stuff

                console.log("element: " + currentElement + " | background position: " + currentBackgroundPosition);
                currentBackgroundPosition = currentBackgroundPosition - elements[index].dataset.width;
                elements[index].style.cssText = "display: block; background-image: url('" + elements[index].dataset.src + "'); height: " + elements[index].dataset.height + "px ; width: " + elements[index].dataset.width + "px ; background-repeat: no-repeat; background-position-x:" + currentBackgroundPosition + ";";

*/


/*

        function animateBackground() {

            for (var objectNumber = 0; objectNumber < elements.length; objectNumber++) {

                // get current element
                var currentElement = elements[objectNumber];
                console.log("----------------------------------------------" + '\n');
                console.log("Current Object Source: " + currentElement.dataset.src)
                console.log("Current Background Position: " + currentElement.style.backgroundPositionX);
                currentElement.style.backgroundPositionX = currentElement.style.backgroundPositionX - currentElement.dataset.width;
                var testVar = currentElement.style.backgroundPositionX - currentElement.dataset.width;
                console.log("Calculation: " + testVar);
                var frameTotal = currentElement.dataset.frames;
                var frameNumber = 0;
                if (frameNumber < frameTotal - 1) {
                    var currentBackgroundPosition = currentElement.style.backgroundPositionX;
                    console.log("------->" + currentElement.style.backgroundPositionX);
                    currentElement.style.backgroundPositionX = currentElement.style.backgroundPositionX - currentElement.dataset.width;
                }

                // elements[objectNumber].style.backgroundPositionX = elements[objectNumber].style.backgroundPositionX - elements[objectNumber].dataset.width;
                // console.log("object number: " + elements[objectNumber] + ". background position: " + elements[objectNumber].style.backgroundPositionX);
            }

            setTimeout(animateBackground, 1000);

        }

        animateBackground();
*/
