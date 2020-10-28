import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectors, slice } from "../store";

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
  const { score } = useSelector(selectors.getDebugValues);

  return (
    <fieldset
      style={{
        padding: 10,
      }}
    >
      <legend>Debug</legend>
      <Field
        name="score"
        label="Score"
        type="number"
        value={score}
        onChange={({ target: { value } }) =>
          dispatch(slice.actions.scoreSet(parseInt(value)))
        }
      />
    </fieldset>
  );
}
