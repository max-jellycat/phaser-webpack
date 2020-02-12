import config from '../config/config'

import Skeleton from '../assets/images/sprites/skeleton.png'
import DirtBG from '../assets/images/backgrounds/dirt-bg.png'

class Play extends Phaser.Scene {
  preload() {
    this.load.image('skeleton', Skeleton)
  }

  create() {
    const skeletonSprite = this.add.sprite(config.WIDTH / 2, config.HEIGHT / 2, 'skeleton');
    skeletonSprite.setOrigin(0.5);
    const title = this.add.text(config.WIDTH/ 2, config.HEIGHT / 2, 'Adventure Awaits!');
    title.setOrigin(0.5)
  }

  render() {
  }
}

export default Play