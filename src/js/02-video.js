import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(videoCurrentTime, 1000));

function videoCurrentTime(e) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e));
  const time = localStorage.getItem('videoplayer-current-time');
  const parseTime = JSON.parse(time);

  console.log('JSON', time);
  console.log('Parsed', parseTime);
}
