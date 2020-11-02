import Phaser from "phaser";
import { DEBUG_ENABLED, SYSTEM_KEYS } from "keys";
import { ConfiguredStore } from "store";
import { StorePlugin } from "./plugins";
import { TestScene } from "./scenes";

export default function loadGame(parent: HTMLElement, store: ConfiguredStore) {
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
    plugins: {
      global: [
        {
          key: SYSTEM_KEYS.Store,
          start: true,
          plugin: StorePlugin,
          data: store,
        },
      ],
    },
  });
}
