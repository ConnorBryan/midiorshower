import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectors, debugMenuUpdated } from "../store";
import Panel from "./Panel";

interface FieldProps {
  label: string;
  type: "text" | "number";
  settingsKey: string;
  settingKey: string;
  value: string;
}

function Field(props: FieldProps) {
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor={props.settingKey}>{props.label}</label>
      <br />
      <input
        name={props.settingKey}
        type={props.type}
        value={props.value}
        onChange={({ target: { value } }) =>
          dispatch(debugMenuUpdated(props.settingsKey, props.settingKey, value))
        }
      />
    </>
  );
}

export default function DebugManager() {
  const { physics } = useSelector(selectors.settings.getSettings);

  return (
    <Panel title="Debug">
      <Field
        label="Gravity"
        type="number"
        settingsKey="physics"
        settingKey="gravity"
        value={physics.gravity.toString()}
      />
    </Panel>
  );
}
