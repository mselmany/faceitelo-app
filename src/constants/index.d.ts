import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    BackgroundMain: string;

    BackgroundComponent: string;
    BackgroundComponent__Contrast: string;
    BackgroundComponent__Hover: string;

    BorderColor: string;

    ColorPrimary: string;
    ColorError: string;

    Color10: string;
    Color25: string;
    Color50: string;
    Color100: string;

    ColorWin: string;
    ColorLost: string;

    BackgroundGreen: string;
    ColorGreen: string;
    ColorGreen50: string;

    BackgroundYellow: string;
    ColorYellow: string;
  }
}
