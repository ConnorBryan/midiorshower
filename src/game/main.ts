import Phaser from "phaser";
import { DEBUG_ENABLED } from "keys";
import { TestScene } from "./scenes";

export default function loadGame(parent: HTMLElement) {
  return new Phaser.Game({
    parent,
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 1000 },
        debug: DEBUG_ENABLED,
      },
    },
    scene: [TestScene],
  });
}
