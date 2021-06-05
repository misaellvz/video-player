
const playVideo = () => video.play();
const pauseVideo = () => video.pause();
const playPause = () => {
  if (video.paused) {
    video.play()
    buttonPlayPause.innerHTML = '<img class= "pause-icon" src="https://img.icons8.com/dotty/80/000000/circled-pause.png"/>';
  } else {
    video.pause()
    buttonPlayPause.innerHTML = '<img class="play-icon" src="https://img.icons8.com/dotty/80/000000/play.png"/>';
  }
};
const muteUnmute = () => {
  if (video.muted) {
    video.muted = true;
    buttonMuteUnmute.innerHTML = '<img src="https://img.icons8.com/dotty/80/000000/no-audio.png" />'
  } else {
    buttonMuteUnmute.innerHTML = '<img class="sound-icon" src="https://img.icons8.com/dotty/80/000000/audio.png"/>'
    video.unmuted = false;
  }
}
const mute = () => video.muted = true;
const unmute = () => video.muted = false;
const buttonMuteUnmute = document.getElementById("muteUnmute");
const buttonUnmute = document.getElementById("unMuteVideo");
const buttonPlayPause = document.getElementById("playPause");
const video = document.getElementById("video");

buttonPlayPause.addEventListener("click", playPause)
buttonMuteUnmute.addEventListener("click", muteUnmute)



