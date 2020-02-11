import 'phaser';

import Play from './scenes/play';

const gameConfig = {
  width: 680,
  height: 400,
  scene: Play
};

new Phaser.Game(gameConfig);
