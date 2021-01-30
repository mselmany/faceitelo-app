import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    BackgroundMain: "#FBFBFB";

    BackgroundComponent: "#F0F0F0";
    BackgroundComponent__Contrast: "#E5E5E5";
    BackgroundComponent__Hover: "#EBECF0";

    BorderColor: "rgba(51, 51, 51, 0.10)";

    ColorPrimary: "#333333";
    ColorError: "#FC5454";

    Color10: "rgba(51, 51, 51, 0.10)";
    Color25: "rgba(51, 51, 51, 0.25)";
    Color50: "rgba(51, 51, 51, 0.5)";
    Color75: "rgba(51, 51, 51, 0.75)";
    Color100: "rgba(51, 51, 51, 1)";

    ColorWin: "#27AE60";
    ColorLost: "#FB3538";

    BackgroundGreen: "rgba(36, 201, 43, 0.2)";
    ColorGreen: "#007107";
    ColorGreen50: "rgba(0, 113, 7, 0.5)";

    BackgroundYellow: "#FFF4B8";
    ColorYellow: "#EFCA00";
  }
}
