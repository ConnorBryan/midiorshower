import Phaser from "phaser";
import { DEBUG_ENABLED, SYSTEM_KEYS } from "../constants";
import { ConfiguredStore } from "../store";
import { StorePlugin } from "./plugins";
import { BattleScene } from "./scenes";

export default function loadGame(parent: HTMLElement, store: ConfiguredStore) {
  const { settings } = store.getState();

  return new Phaser.Game({
    parent,
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: settings.physics.gravity },
        debug: DEBUG_ENABLED,
      },
    },
    scene: [BattleScene],
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
