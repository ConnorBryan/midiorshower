import Phaser from "phaser";

const AVATAR_CIRCLE_WIDTH = 128;
const HEALTH_BAR_HEIGHT = AVATAR_CIRCLE_WIDTH / 3;
const ENERGY_BAR_HEIGHT = HEALTH_BAR_HEIGHT * 0.75;
const RESOURCE_BAR_HEIGHT = ENERGY_BAR_HEIGHT * 0.75;

export default class PlayerStatus extends Phaser.GameObjects.GameObject {
  leftAvatarCircle!: Phaser.GameObjects.Shape;
  leftAvatarHealth!: Phaser.GameObjects.Shape;
  leftAvatarEnergy!: Phaser.GameObjects.Shape;
  leftAvatarResource!: Phaser.GameObjects.Shape;

  constructor(scene: Phaser.Scene) {
    super(scene, "playerStatus");

    this.init();
  }

  init() {
    const { width } = this.scene.scale;
    const barWidth = width / 3;

    // Left
    this.leftAvatarResource = this.scene.add
      .rectangle(
        AVATAR_CIRCLE_WIDTH - 20,
        HEALTH_BAR_HEIGHT + 16,
        barWidth,
        RESOURCE_BAR_HEIGHT,
        0xff00ff
      )
      .setStrokeStyle(2, 0x000000)
      .setOrigin(0, 0.5);

    this.leftAvatarEnergy = this.scene.add
      .rectangle(
        AVATAR_CIRCLE_WIDTH - 12,
        HEALTH_BAR_HEIGHT,
        barWidth,
        ENERGY_BAR_HEIGHT,
        0x0000ff
      )
      .setStrokeStyle(2, 0x000000)
      .setOrigin(0, 0.5);

    this.leftAvatarHealth = this.scene.add
      .rectangle(
        AVATAR_CIRCLE_WIDTH - 8,
        HEALTH_BAR_HEIGHT / 2,
        barWidth,
        HEALTH_BAR_HEIGHT,
        0xff0000
      )
      .setStrokeStyle(2, 0x000000)
      .setOrigin(0, 0.5);

    this.leftAvatarCircle = this.scene.add.circle(
      0,
      0,
      AVATAR_CIRCLE_WIDTH,
      0x333333
    );
  }
}
