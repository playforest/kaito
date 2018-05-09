// UI
const playPauseBtn = document.querySelector('.playPauseBtn');
const playBtn = document.querySelector('.playBtn');
const pauseBtn = document.querySelector('.pauseBtn');
const slider = document.querySelector('.slider');
console.log(playBtn)

let switchBtnUI = function(state) {
    if(state === 1) {
        playPauseBtn.className = "btn btn-secondary playPauseBtn";
        document.querySelector('.fas').className = "fas fa-pause";
    } else {
        playPauseBtn.className = "btn btn-primary playPauseBtn";
        document.querySelector('.fas').className = "fas fa-play";
    }
}


//////////////////
// Controller
//////////////////
// Youtube API:
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
//   event.target.playVideo();

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
  state = event.data;
  switchBtnUI(state);
//   function stopVideo() {
//     player.stopVideo();
}
///////////////////////
/// end Youtube API ///
///////////////////////


playPauseBtn.addEventListener('click', () => {
    player.playVideo()      // in case of non 1 || 2 status (see api docs to confirm initialisation status)
    // switchBtnUI(state);
    console.log(`button selected state is ${state}`)
    if(state === 1) {
        player.pauseVideo();
    } else if (state === 2) {
        player.playVideo();
    }
})

playBtn.addEventListener('click', (e) => {
    console.log(e)
    player.playVideo()
})

pauseBtn.addEventListener('click', (e) => {
    player.pauseVideo();
})


function seek() {
slider.addEventListener('change', (e) => {
    console.log(slider.value);
    player.seekTo(slider.value);
})
}

function updateSlider() {
    slider.value = player.getCurrentTime();
}

seek()

//player.seekTo(seconds:Number, allowSeekAhead:Boolean)