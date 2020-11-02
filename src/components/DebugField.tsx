import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "store";

interface Props {
  label: string;
  type: "text" | "number";
  settingsKey: string;
  settingKey: string;
  value: string;
}

export default function DebugField(props: Props) {
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
          dispatch(
            actions.debugMenuUpdated(props.settingsKey, props.settingKey, value)
          )
        }
      />
    </>
  );
}
