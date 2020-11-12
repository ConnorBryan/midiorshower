import Phaser from "phaser";
import { DEBUG_ENABLED, SystemKeys } from "keys";
import { MidiPlugin } from "../plugins";
import { TestScene } from "./scenes";

export default function loadGame(parent: HTMLElement) {
  return new Phaser.Game({
    parent,
    backgroundColor: 0xfefefe,
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
    plugins: {
      global: [
        {
          key: SystemKeys.Midi,
          start: true,
          plugin: MidiPlugin,
        },
      ],
    },
  });
}
