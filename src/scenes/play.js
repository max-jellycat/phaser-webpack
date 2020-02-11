import Skeleton from '../assets/images/sprites/skeleton.png'

class Play extends Phaser.Scene {
  preload() {
    this.load.image('skeleton', Skeleton)
  }

  create() {
    const skeletonSprite = this.add.sprite(450, 290, 'skeleton');
    skeletonSprite.anchor.setTo(0.5, 0.5);
  }

  render() {
    this.debug.text('Adventure Awaits!', 250, 290);
  }
}

export default Play