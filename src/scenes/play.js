import PlayerIdle from '../assets/sprites/player_idle.png';
import DragonIdle from '../assets/sprites/dragon_idle.png';
import DragonWalk from '../assets/sprites/dragon_walking.png';
import ChestClosed from '../assets/sprites/chest_closed.png';
import Background from '../assets/sprites/background.png';

class Play extends Phaser.Scene {
  init() {
    this.gameWidth = this.sys.game.canvas.width;
    this.gameHeight = this.sys.game.canvas.height;
    this.tileSize = 32;
    this.playerSpeed = 2;
    this.enemyMinSpeed = 2;
    this.enemyMaxSpeed = 5;

    // boundaries
    this.enemyMinY = 0;
    this.enemyMaxY = this.gameHeight - 64 - this.tileSize;
  }

  preload() {
    this.load.image('bg', Background);
    this.load.image('player', PlayerIdle);
    this.load.image('dragon', DragonIdle);
    this.load.image('dragon_walk', DragonWalk);
    this.load.image('chest_closed', ChestClosed);
  }

  create() {
    const bg = this.add.sprite(0, 0, 'bg').setOrigin(0);

    this.player = this.add
      .sprite(32, this.gameHeight / 2 - this.tileSize, 'player')
      .setOrigin(0);

    this.enemy = this.add
      .sprite(128, this.gameHeight / 2 - this.tileSize, 'dragon')
      .setOrigin(0);

    const dir = Math.random() < 0.5 ? 1 : -1;
    const randomSpeed =
      this.enemyMinSpeed +
      Math.random() * (this.enemyMaxSpeed - this.enemyMinSpeed);
    this.enemy.speed = dir * randomSpeed;

    this.goal = this.add
      .sprite(
        this.gameWidth - this.tileSize,
        this.gameHeight / 2 - this.tileSize,
        'chest_closed'
      )
      .setOrigin(0);
  }

  createText() {}

  update(dt) {
    if (this.input.activePointer.isDown) {
      this.player.x += this.playerSpeed;
    }

    // goal overlap check
    const playerRect = this.player.getBounds();
    const goalRect = this.goal.getBounds();

    if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, goalRect)) {
      this.scene.manager.bootScene(this);
    }

    // enemy movement
    this.enemy.y += this.enemy.speed;

    if (this.enemy.speed < 0 && this.enemy.y <= this.enemyMinY)
      this.enemy.speed *= -1;
    if (this.enemy.speed > 0 && this.enemy.y >= this.enemyMaxY)
      this.enemy.speed *= -1;
  }

  render() {}
}

export default Play;
