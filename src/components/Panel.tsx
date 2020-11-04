import React from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
}

type GroupProps = Pick<Props, "children">;

export default function Panel(props: Props) {
  return (
    <fieldset
      style={{
        padding: 10,
      }}
    >
      <legend
        style={{
          letterSpacing: 3,
          textTransform: "uppercase",
        }}
      >
        {props.title}
      </legend>
      {props.children}
    </fieldset>
  );
}

Panel.Panels = function Panels(props: GroupProps) {
  return (
    <div
      style={{
        display: "flex",
      }}
      {...props}
    />
  );
};
