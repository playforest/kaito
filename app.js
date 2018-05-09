// UI
const playBtn = document.querySelector('.playBtn');
const pauseBtn = document.querySelector('.pauseBtn');
const slider = document.querySelector('.slider');
console.log(playBtn)

// function setSliderValue() {
//     while(player.getPlayerState() === 1) {
//         slider.value = player.getCurrentTime();
//     }
// }

// setSliderValue()


// function setSliderValue() {
//     while(player) {
//         console.log('player is defined');
//     }
// }
// setSliderValue();


// Controller
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