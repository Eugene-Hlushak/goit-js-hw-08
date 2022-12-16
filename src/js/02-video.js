import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(videoCurrentTime, 1000));

function videoCurrentTime(e) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e));
}
const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
player
  .setCurrentTime(currentTime.seconds)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
