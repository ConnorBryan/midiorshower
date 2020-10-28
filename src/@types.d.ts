declare namespace Phlaser {
  declare namespace Player {
    type Direction = "left" | "right";

    type Player = {
      id: string;
      direction: PlayerDirection;
      extraLives: number;
      life: number;
      energy: number;
    };
  }
}
