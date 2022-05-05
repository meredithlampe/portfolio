$(function () {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let speed = 50000;
    if (vw < 768) {
        speed = 5000000;
    }
    $('.marquee').marquee({
        delayBeforeStart: 0,
        duration: speed,
        startVisible: true,
        gap: 50
    });

    /*  
    usage: ASCIIAnimation(param1, param2, param3)
    
    param1 - array of animation 'frames' (strings)
    param2 - speed of animation in ms
    param3 - DOM target, inserts animation to .innerHTML (retains spaces)
    
    ex: 
    var anim1 = new ASCIIAnimation(["1","2","3"], 100, div1);
    */

    // function ASCIIAnimation(animArray, speed, DOMtarget) {
    //   var currentFrame = 0;
    //     for(var i = 0; i < animArray.length; i++) {
    //         animArray[i] = animArray[i].replace(/ /g,"&nbsp;");
    //         animArray[i] = "<pre>" + animArray[i] + "</pre>";
    //     }
    //     DOMtarget.innerHTML = animArray[0];
    //     currentFrame++;
    //     this.animation = setInterval(function() {
    //         DOMtarget.innerHTML = animArray[currentFrame];
    //         currentFrame++;
    //         if(currentFrame >= animArray.length) currentFrame = 0;
    //     }, speed);
    //     this.getCurrentFrame = function() {
    //         return currentFrame;
    //     }
    // }

    // ASCIIAnimation.prototype.stopAnimation = function() {
    //     clearInterval(this.animation);
    // }

    var div3 = document.createElement('div');
    let asciiContainer = $('.silly-ascii-thing');
    asciiContainer.append(div3);
    var animArray3 = [".(^-^)'","-(^-^)-","'(^-^).","-(^o^)-",".(^-^)'","-(^-^)-","'(^-^).","-(^-^)-"];
    var anim3 = new ASCIIAnimation(animArray3, 125, div3);
});
