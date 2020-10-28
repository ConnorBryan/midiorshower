import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectors, debugMenuUpdated } from "../store";
import Panel from "./Panel";

interface FieldProps {
  name: string;
  label: string;
  type: "text" | "number";
  value: string;
}

function Field(props: FieldProps) {
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <br />
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={({ target: { value } }) =>
          dispatch(debugMenuUpdated(props.name, value))
        }
      />
    </>
  );
}

export default function DebugManager() {
  const { gravity } = useSelector(selectors.settings.getSettings);

  return (
    <Panel title="Debug">
      <Field
        name="gravity"
        label="Gravity"
        type="number"
        value={gravity.toString()}
      />
    </Panel>
  );
}
