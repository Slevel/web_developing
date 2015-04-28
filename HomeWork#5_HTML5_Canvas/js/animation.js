function anim(canvas, fps, clear)
{
    var canva = canvas.getContext("2d");
    var interval = null;
    var update = null;
    var draw = null;
 
    this.update = function(func) {
        update = func;
    };
 
    this.draw = function(func) {
        draw = func;
    };
 
    var step = function() {
        if (update !== null) {
            update();
        }
        if (draw !== null) {
            draw();
        }
    };
 
    this.stop = function() {
        clearInterval(interval);
    };
 
    this.play = function() {
        if (draw !== null) {
            draw();
        }
        interval = setInterval(step, 1000 / fps);
    };
}