"use client";

import { FieldLabel, TextInput, useField } from "@payloadcms/ui";
import type { TextFieldClientComponent } from "payload";
import type { ChangeEvent } from "react";

export const ColorPickerField: TextFieldClientComponent = ({ path, field }) => {
  const { value = "#000000", setValue } = useField<string>({ path });

  return (
    <div className="field-type text">
      <FieldLabel label={field.label || field.name} path={path} required={field.required} />
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", width: "100%" }}>
        <input
          type="color"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          style={{
            width: 44,
            height: 44,
            padding: 0,
            border: 0,
            boxShadow: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        />
        <TextInput style={{ width: "100%" }} path={path} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
      </div>
    </div>
  );
};

export default ColorPickerField;
