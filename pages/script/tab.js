(function () {
    var $video = $('#background');
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    $video.delay(300).animate({"opacity": "1"});
    setTimeout(() => {
        var height = $video.height();
        var width = $video.width();
        if ((windowWidth / width) > (windowHeight / height)) {
            $video.width(windowWidth);
        } else {
            $video.height(windowHeight);
        }
    }, 300);
})()
