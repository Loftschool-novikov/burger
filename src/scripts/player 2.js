
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
    height: '405',
    width: '660',
    videoId: 'hqQAj0X74oI',
    events: {
        // 'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
    }
    });
}
