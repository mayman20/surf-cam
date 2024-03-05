var myPlayer = videojs('player');
function throttle(fn, threshhold, scope) {
    threshhold || (threshhold = 250);
    var last, deferTimer;
    return function() {
        var context = scope || this;
        var now = +new Date
          , args = arguments;
        if (last && now < last + threshhold) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function() {
                last = now;
                fn.apply(context, args);
            }, threshhold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    }
    ;
}
myPlayer.on('timeupdate', throttle(function(e) {
    myPlayer.pause()
}, 300000));
$(document).ready(function() {
    $('#player_html5_api').attr('controls');
    $('#player_html5_api').attr('preload');
});
