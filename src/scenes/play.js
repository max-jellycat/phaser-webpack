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
    this.enemyMaxSpeed = 4;
    this.numberOfEnemies = 5;

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

    this.enemies = this.add.group({
      key: 'dragon',
      repeat: this.numberOfEnemies - 1,
      setXY: {
        x: 128,
        y: 32,
        stepX: 96,
        stepY: 32
      }
    });

    Phaser.Actions.Call(
      this.enemies.getChildren(),
      function(enemy) {
        enemy.setOrigin(0);
        const dir = Math.random() < 0.5 ? 1 : -1;
        const randomSpeed =
          this.enemyMinSpeed +
          Math.random() * (this.enemyMaxSpeed - this.enemyMinSpeed);
        enemy.velocity = dir * randomSpeed;
      },
      this
    );

    this.goal = this.add
      .sprite(
        this.gameWidth - this.tileSize,
        this.gameHeight / 2 - this.tileSize,
        'chest_closed'
      )
      .setOrigin(0.5, 0);
  }

  update(dt) {
    if (this.input.activePointer.isDown) {
      this.player.x += this.playerSpeed;
    }

    // goal overlap check
    const playerRect = this.player.getBounds();
    const goalRect = this.goal.getBounds();

    if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, goalRect)) {
      this.scene.restart();
    }

    // Get enemies
    const enemies = this.enemies.getChildren();
    // enemy movement

    Phaser.Actions.Call(
      this.enemies.getChildren(),
      function(enemy) {
        enemy.y += enemy.velocity;

        const conditionMin = enemy.velocity < 0 && enemy.y <= this.enemyMinY;
        const conditionMax = enemy.velocity > 0 && enemy.y >= this.enemyMaxY;

        if (conditionMin || conditionMax) enemy.velocity *= -1;

        const enemyRect = enemy.getBounds();

        if (
          Phaser.Geom.Intersects.RectangleToRectangle(playerRect, enemyRect)
        ) {
          this.scene.restart();
        }
      },
      this
    );
  }

  render() {}
}

export default Play;
