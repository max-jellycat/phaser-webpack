import 'phaser';
import './assets/css/style.css';

import Play from './scenes/Play';

const config = {
  type: Phaser.AUTO,
  width: 640,
  height: 320,
  pixelArt: true,
  scene: Play
};

new Phaser.Game(config);
