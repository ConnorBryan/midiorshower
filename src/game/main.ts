import Phaser from "phaser";
import { Store } from "redux";
import { DEBUG_ENABLED, SYSTEM_KEYS } from "../constants";
import { StorePlugin } from "./plugins";
import { BattleScene } from "./scenes";

export default function loadGame(parent: HTMLElement, store: Store<any, any>) {
  return new Phaser.Game({
    parent,
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 4500 },
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
