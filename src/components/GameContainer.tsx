import React, { memo, useEffect, useRef } from "react";
import { loadGame } from "../game";

export default memo(
  (props: any) => {
    const container = useRef<null | HTMLElement>(null);
    const game = useRef<null | Phaser.Game>(null);

    useEffect(() => {
      if (container.current && !game.current) {
        game.current = loadGame(container.current);

        setImmediate(() =>
          game
            .current!.scene.getScenes()
            .forEach((scene) => scene.data.set("store", props.store))
        );
      }
    });

    return <main ref={container} />;
  },
  () => true
);
