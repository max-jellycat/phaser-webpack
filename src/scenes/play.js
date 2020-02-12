import PlayerIdle from '../assets/sprites/player_idle.png'
import Background from '../assets/sprites/background.png'

class Play extends Phaser.Scene {

  preload() {
    this.canvas = this.sys.game.canvas;
    this.load.image('bg', Background)
    this.load.image('player', PlayerIdle)
  }

  create() {
    const bg = this.add.sprite(0, 0, 'bg')
    bg.setOrigin(0)

    const player = this.add.sprite(this.canvas.width / 2, this.canvas.height / 2, 'player');

    this.createText()
  }

  createText() {
    const title = this.add.text(this.canvas.width/ 2, this.canvas.height - 20, 'Adventure Awaits!', {
      fontFamily: 'PixelFont'
    });
    title.setOrigin(0.5)
  }

  render() {
  }
}

export default Play