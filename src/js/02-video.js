import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', videoCurrentTime);

function videoCurrentTime(e) {
  localStorage.setItem('videoCurrentTime', JSON.stringify(e));
  const time = localStorage.getItem('videoCurrentTime');
}
