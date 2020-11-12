import React from "react";
import { GameContainer, Panel } from "components";

export default function App() {
  return (
    <Panel.Panels>
      <Panel title="Game">
        <p>Hello world!</p>
        <GameContainer />
      </Panel>
    </Panel.Panels>
  );
}
