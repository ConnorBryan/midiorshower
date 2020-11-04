import React from "react";
import { GameContainer, Panel } from "components";

export default function App() {
  return (
    <Panel.Panels>
      <Panel title="Game">
        <GameContainer />
      </Panel>
    </Panel.Panels>
  );
}
