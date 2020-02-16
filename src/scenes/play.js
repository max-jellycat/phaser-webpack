import Player from '../assets/images/sprites/player.png';

class Play extends Phaser.Scene {
  init() {
    this.gameW = this.sys.game.canvas.width;
    this.gameH = this.sys.game.canvas.height;
    this.tileSize = 32;
  }

  preload() {
    this.load.image('player', Player);
  }

  create() {
    this.player = this.add
      .sprite(this.gameW / 2, this.gameH / 2 - 64, 'player')
      .setOrigin(0.5);

    this.player.scale = 2;

    this.createText(this.gameW / 2, this.gameH / 2, 'Adventure awaits!');
  }

  render() {}

  createText(x, y, value) {
    const text = this.add
      .text(x, y, value, {
        fontFamily: 'PixelFont'
      })
      .setOrigin(0.5, 0);
    return text;
  }
}

export default Play;
