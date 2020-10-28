import Phaser from "phaser";
import { ENTITY_KEYS } from "../../constants";
import BaseEntity from "./BaseEntity";

export default class Player extends BaseEntity<Phlaser.Player.Player> {
  constructor(scene: Phaser.Scene, id: string) {
    super(scene, ENTITY_KEYS.Player, "player", id);
  }
}
