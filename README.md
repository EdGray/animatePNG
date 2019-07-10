# animatePNG

Ever needed to animate multiple PNGs on the web? Nope, me neither. So here's a handy script to do just that.

The configuration is all taken care of in you HTML markup - no Javascript knowledge needed.

PNGs are animated as the background of a div element. The PNG must be a horizontal sequence of equally sized frames, like so:

![example png](/img/animTest.png)


Place a div that you'd like your animatedPNG to live in, give it the class "animatePNG" with the following data attributes:

data-src: the PNG to be animated  
data-height: the height of the PNG  
data-width: the width of each frame of the PNG  
data-frames: the number of frames in the PNG  
data-rate: the number of milliseconds per frame   

example:
<div class="animatePNG" data-src="img/animTest.png" data-height="60" data-width="60" data-frames="12" data-rate="40"></div>

and reference the animatePNG.js script within your HTML
<script src="path/to/animatePNG.js"></script>

Easy.
