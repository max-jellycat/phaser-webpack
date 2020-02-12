import config from '../config/config'

import Skeleton from '../assets/images/sprites/skeleton.png'
import DirtBG from '../assets/images/backgrounds/dirt-bg.png'

class Play extends Phaser.Scene {
  preload() {
    this.load.image('skeleton', Skeleton)
    this.load.image('dirtBG', DirtBG)
  }

  create() {
    const dirtBG = this.add.tileSprite(config.WIDTH / 2, config.HEIGHT / 2, 0, 0, 'dirtBG', '');
    const skeletonSprite = this.add.sprite(config.WIDTH / 2, config.HEIGHT / 2 + 55, 'skeleton');
    skeletonSprite.setOrigin(0.5, 0.5);
  }

  render() {
    this.add.text('Adventure Awaits!', 250, 290, { fill: '#0f0' });
  }
}

export default Play