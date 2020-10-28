import Phaser from "phaser";
import { COLOR_KEYS, SCENE_KEYS } from "../../constants";
import { battleStarted } from "../../store";
import BaseScene from "./BaseScene";

export default class BattleScene extends BaseScene {
  ball!: Phaser.GameObjects.Arc;
  wall!: Phaser.GameObjects.Rectangle;

  constructor() {
    super(SCENE_KEYS.Battle);
  }

  preload() {}

  create() {
    this.store.dispatch(battleStarted());

    this.createBall();
    this.createWall();

    this.ball.on(Phaser.Physics.Arcade.Events.COLLIDE, console.log);

    this.physics.add.collider(this.wall, this.ball);

    this.physics.world.setBounds(0, 0, this.scale.width, this.scale.height);
    this.physics.world.on(
      Phaser.Physics.Arcade.Events.COLLIDE,
      (a: Phaser.GameObjects.Shape, b: Phaser.GameObjects.Shape) => {
        [a, b].forEach((participant) => {
          if (participant === this.ball) {
            this.ball.setScale(this.ball.scale - 0.2);

            if (this.ball.scale <= 0) {
              this.scene.restart();
            }
          }
        });
      }
    );
  }

  update() {}

  //

  createBall() {
    const ball = this.add.circle(
      this.scale.width / 2,
      this.scale.height / 2,
      30,
      0xffffff
    );

    this.physics.add.existing(ball);

    (ball.body as Phaser.Physics.Arcade.Body)
      .setCollideWorldBounds(true)
      .setBounce(1, 1)
      .setVelocity(500).onCollide = true;

    this.ball = ball;
  }

  createWall() {
    const wall = this.add
      .rectangle(
        this.scale.width / 2,
        this.scale.height,
        10,
        this.scale.height,
        COLOR_KEYS.Black
      )
      .setStrokeStyle(3, COLOR_KEYS.White);

    this.physics.add.existing(wall);

    (wall.body as Phaser.Physics.Arcade.Body)
      .setAllowGravity(false)
      .setImmovable(true);

    this.wall = wall;
  }
}
