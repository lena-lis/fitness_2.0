const videoContainer = document.querySelector('.gym__video-container');
const playButton = videoContainer.querySelector('.gym__video-button');
const poster = videoContainer.querySelector('.gym__video-container img');
const player = videoContainer.querySelector('.gym__video-container iframe');

playButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  poster.style.display = 'none';
  playButton.style.display = 'none';
  player.src += '?autoplay=1';
});
