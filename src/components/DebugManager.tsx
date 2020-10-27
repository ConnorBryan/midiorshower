import React from "react";
import { useSelector } from "react-redux";
import { selectors } from "../store";

interface FieldProps {
  name: string;
  label: string;
  type: "text" | "number";
  value: string;
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
        onChange={() => {}}
      />
    </>
  );
}

export default function DebugManager() {
  const { score } = useSelector(selectors.getDebugValues);

  return (
    <fieldset
      style={{
        padding: 10,
      }}
    >
      <legend>Debug</legend>
      <Field name="score" label="Score" type="number" value={score} />
    </fieldset>
  );
}
