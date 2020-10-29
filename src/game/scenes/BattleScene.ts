import Phaser from "phaser";
import { COLOR_KEYS, SCENE_KEYS } from "../../constants";
import { battleStarted } from "../../store";
import BaseScene from "./BaseScene";

export default class BattleScene extends BaseScene {
  ball!: Phaser.GameObjects.Arc;
  wall!: Phaser.GameObjects.Rectangle;
  paddles!: Phaser.GameObjects.Rectangle[];

  constructor() {
    super(SCENE_KEYS.Battle);
  }

  preload() {}

  create() {
    this.store.dispatch(battleStarted());

    this.createBall();
    this.createWall();
    this.paddles = [this.createPaddle(0), this.createPaddle(455)];
    this.moveWall();

    const ballBody = this.ball.body as Phaser.Physics.Arcade.Body;

    this.physics.world.setBounds(0, 0, this.scale.width, this.scale.height);

    this.physics.add.collider(this.ball, this.paddles, () => {
      ballBody.setAccelerationY(ballBody.acceleration.scale(1.2).y);
    });
    this.physics.add.collider(this.ball, this.wall);

    this.physics.world.on(
      Phaser.Physics.Arcade.Events.COLLIDE,
      (a: Phaser.GameObjects.Shape, b: Phaser.GameObjects.Shape) => {
        [a, b].forEach((participant) => {
          if (participant === this.ball && !ballBody.wasTouching) {
            this.ball.setScale(this.ball.scale - 0.2);

            if (this.ball.scale <= 0) {
              this.scene.restart();
            }

            if (ballBody.blocked.down) {
              ballBody.setAccelerationY(ballBody.acceleration.y + 400);
            }
          }
        });
      }
    );

    this.input.on(
      Phaser.Input.Events.POINTER_MOVE,
      ({ x }: Phaser.Input.Pointer) => {
        const [left, right] = this.paddles;
        const { left: boundLeft, right: boundRight } = this.wall.getBounds();

        if (x + left.width / 2 < boundLeft) {
          left.setX(x);
        }

        if (x - right.width / 2 > boundRight) {
          right.setX(x);
        }
      }
    );
  }

  update() {}

  //

  createBall() {
    const ball = this.add.circle(
      this.scale.width / 2,
      this.scale.height / 2,
      15,
      COLOR_KEYS.White
    );

    this.physics.add.existing(ball);

    (ball.body as Phaser.Physics.Arcade.Body)
      .setCollideWorldBounds(true)
      .setBounce(1, 1)
      .setVelocity(500)
      .setAcceleration(10, 10).onCollide = true;

    this.ball = ball;
  }

  createWall() {
    const wall = this.add
      .rectangle(
        this.scale.width / 2,
        this.scale.height,
        10,
        this.scale.height / 3,
        COLOR_KEYS.Black
      )
      .setStrokeStyle(3, COLOR_KEYS.White);

    this.physics.add.existing(wall);

    (wall.body as Phaser.Physics.Arcade.Body)
      .setAllowGravity(false)
      .setImmovable(true)
      .setCollideWorldBounds(true);

    this.wall = wall;
  }

  createPaddle(x: number) {
    const paddle = this.add
      .rectangle(x, this.scale.height, 100, 20, COLOR_KEYS.White)
      .setStrokeStyle(3, COLOR_KEYS.Blue)
      .setInteractive({});

    this.physics.add.existing(paddle);

    (paddle.body as Phaser.Physics.Arcade.Body)
      .setCollideWorldBounds()
      .setAllowGravity(false)
      .setMaxVelocity(100, 0)
      .setImmovable();

    return paddle;
  }

  moveWall() {
    this.tweens.add({
      targets: this.wall,
      y: 0,
      duration: 2000,
      loop: -1,
      yoyo: true,
    });
  }
}
