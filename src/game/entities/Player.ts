import Phaser from "phaser";
import { ENTITY_KEYS } from "../constants";

enum PlayerDirections {
  Left,
  Right,
}

export default class Player extends Phaser.GameObjects.GameObject {
  direction: PlayerDirections;

  constructor(scene: Phaser.Scene, direction: PlayerDirections) {
    super(scene, ENTITY_KEYS.Player);

    this.direction = direction;
  }
}
