import 'phaser';
import './assets/css/style.css';

import Play from './scenes/Play';

const config = {
  type: Phaser.CANVAS,
  width: 512,
  height: 512,
  parent: document.querySelector('#container'),
  pixelArt: true,
  scene: Play,
};

new Phaser.Game(config);
