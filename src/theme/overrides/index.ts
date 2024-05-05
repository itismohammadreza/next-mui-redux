import { Theme } from "@mui/material";
import { TextField } from "./TextField";
import { Button } from "./Button";

export const ComponentsOverrides = (theme: Theme) => {
  return Object.assign(
      TextField(theme),
      Button(theme),
  )
}
