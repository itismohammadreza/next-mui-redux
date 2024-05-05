"use client"
import { createTheme, CssBaseline, ThemeOptions } from "@mui/material";
import { useMemo } from "react";
import { ComponentsOverrides } from "@theme/overrides";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { palette } from './palette';
import { typography } from './typography';
import { WithChildren } from "@models/dataModel";
import { useApp } from "@hooks/useApp";

export const ThemeProvider = ({children}: WithChildren) => {
  const {paletteMode, direction} = useApp();
  const themeOptions: ThemeOptions = useMemo(() => ({
    palette: palette[paletteMode],
    direction,
    typography
  }), [paletteMode, direction]);
  const theme = createTheme(themeOptions);
  theme.components = ComponentsOverrides(theme);

  return (
      <MUIThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
      </MUIThemeProvider>
  );
}
