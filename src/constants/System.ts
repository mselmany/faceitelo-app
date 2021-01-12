import theme from "./Theme";

const SPACE = 16;

export const Space = {
  xsmall: s(SPACE * 0.25),
  small: s(SPACE * 0.5),
  normal: s(SPACE),
  medium: s(SPACE * 1.25),
  large: s(SPACE * 1.5),
  xlarge: s(SPACE * 2),
  screenPadding: s(SPACE * 2),
};

export const FontSize = {
  small: s(16),
  normal: s(20),
  medium: s(28),
  large: s(32),
  xlarge: s(40),
};

export const FontFamily = {
  RubikLight: "RubikLight",
  Rubik: "Rubik",
  RubikBold: "RubikBold",

  WorkSansLight: "WorkSansLight",
  WorkSans: "WorkSans",
  WorkSansBold: "WorkSansBold",

  PromptLight: "PromptLight",
  Prompt: "Prompt",
  PromptBold: "PromptBold",

  BarlowLight: "BarlowLight",
  Barlow: "Barlow",
  BarlowSemiBold: "BarlowSemiBold",
  BarlowBold: "BarlowBold",

  BarlowCondensedLight: "BarlowCondensedLight",
  BarlowCondensed: "BarlowCondensed",
  BarlowCondensedSemiBold: "BarlowCondensedSemiBold",
  BarlowCondensedBold: "BarlowCondensedBold",
};

export const Radius = {
  xsmall: s(3),
  small: s(5),
  normal: s(10),
  large: s(15),
};

export const Opacity = {
  a10: s(0.1),
  a25: s(0.25),
  a50: s(0.5),
  a75: s(0.75),
  none: s(1),
};

export const Shadow = {
  normal: shadow(0, 2, 5, theme.BackgroundComponent__Contrast, 0.2),
  bold: shadow(0, 3, 6, theme.BackgroundComponent__Contrast, 0.35),
};

export const Zindex = {
  reset: "0",
  localUpper: "10",
  globalUpper: "9999",
};

function shadow(x: number, y: number, blur: number, color: string, opacity: number): string {
  return `
    shadow-offset: ${x}px ${y}px;
    shadow-radius: ${blur}px;
    shadow-color: ${color};
    shadow-opacity: ${opacity};
    elevation: ${y};
  `;
}

function s(val: number): string {
  return val.toString();
}

export default {
  shadow,
};
