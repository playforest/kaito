var state;
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': initialise,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {
      'controls': 0
    }
  });
}

// 4. The API will call this function when the video player is ready.
function initialise(event) {
  event.target.playVideo();
  
  // set slider params
  const slider = document.querySelector('.slider');
  const duration = player.getDuration();
  slider.max = duration;
  slider.value = player.getCurrentTime();

  console.log('event index:', event.data)
  
  controllerTimeUpdate = setInterval(() => {
      updateSlider();
  }, 500)
}


// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
//   var done = false;
function onPlayerStateChange(event) {
  console.log(event.data)

  if(event.data === 1) {
      console.log(playBtn)
  }

//     if (event.data == YT.PlayerState.PLAYING && !done) {
//       setTimeout(stopVideo, 6000);
//       done = true;
//     }
//   }


//   function stopVideo() {
//     player.stopVideo();
}