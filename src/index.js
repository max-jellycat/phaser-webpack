import 'phaser';

import config from './config/config'
import Play from './scenes/play';



new Phaser.Game({
  width: config.WIDTH,
  height: config.HEIGHT,
  scene: Play
});
