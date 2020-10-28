import Phaser from "phaser";
import { SCENE_KEYS } from "../../constants";
import { battleStarted } from "../../store";
import BaseScene from "./BaseScene";

export default class BattleScene extends BaseScene {
  constructor() {
    super(SCENE_KEYS.Battle);
  }

  preload() {}

  create() {
    this.store.dispatch(battleStarted());

    const ball = this.add.circle(
      this.scale.width / 2,
      this.scale.height / 2,
      30,
      0xffffff
    );

    this.physics.add.existing(ball);
    this.physics.world.setBounds(0, 0, this.scale.width, this.scale.height);

    (ball.body as Phaser.Physics.Arcade.Body)
      .setCollideWorldBounds(true)
      .setBounce(0.5, 0.5)
      .setVelocityX(100).onWorldBounds = true;

    this.physics.world.on(
      Phaser.Physics.Arcade.Events.WORLD_BOUNDS,
      () => {
        console.log(this.store.getState());
      },
      this
    );
  }

  update() {}
}
