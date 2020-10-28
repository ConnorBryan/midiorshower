import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectors, scoreSlice } from "../store";
import Panel from "./Panel";

interface FieldProps {
  name: string;
  label: string;
  type: "text" | "number";
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

function Field(props: FieldProps) {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <br />
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}

export default function DebugManager() {
  const dispatch = useDispatch();
  const { score } = useSelector(selectors.score.getDebugValues);

  return (
    <Panel title="Debug">
      <Field
        name="score"
        label="Score"
        type="number"
        value={score}
        onChange={({ target: { value } }) =>
          dispatch(scoreSlice.actions.scoreSet(parseInt(value)))
        }
      />
    </Panel>
  );
}
