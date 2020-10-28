declare namespace Phlaser {
  declare namespace Player {
    type Direction = "left" | "right";

    type Player = {
      id: string;
      direction: Direction;
      extraLives: number;
    };
  }

  declare namespace Paddle {
    type Condition =
      | "Full"
      | "ThreeQuarters"
      | "Half"
      | "OneQuarter"
      | "One"
      | "Dead";

    type Paddle = {
      life: number;
      energy: number;
      isFiring: boolean;
      hasRecentlyTakenDamage: boolean;
      condition: Condition;
      weapon: string;
    };
  }

  type Weapon = {
    kind: string;
    cost: number;
    damage: number;
    velocity: number;
    scale: number;
    variation: number;
    reflectChance: number;
  };

  type Colors = Record<string, number>;
}
