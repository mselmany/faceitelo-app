import styled from "@emotion/native";
import { Theme } from "@emotion/react";

import { Space, Radius, FontSize, FontFamily } from "../constants/System";

const boxStyles = (p: { theme: Theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${p.theme.BackgroundComponent};
  padding: ${Space.normal}px;
  border-radius: ${Radius.large}px;
`;

export const Box = styled.View(boxStyles);

export const PressableBox = styled.Pressable(boxStyles);

export const Seperator = styled.View<{ vertical?: boolean; ratio?: number | string }>`
  display: flex;
  ${({ vertical = false, ratio = 1 }) =>
    vertical
      ? `
        height: 100%;
        width: ${String(+Space.small * +ratio)}px;`
      : `
        width: 100%;
        height: ${String(+Space.small * +ratio)}px;`}
`;

export const TextAlignments = {
  start: "left",
  center: "center",
  end: "right",
} as const;

export type TextProps = {
  size?: keyof typeof FontSize;
  family?: keyof typeof FontFamily;
  align?: keyof typeof TextAlignments;
  color?: keyof Theme;
  opacity?: string | number;
};

export const Text = styled.Text<TextProps>`
  font-size: ${({ size = "small" }) => FontSize[size]}px;
  font-family: ${({ family = "Rubik" }) => FontFamily[family]};
  ${({ theme, color = "ColorPrimary" }) => (theme[color] ? `color: ${theme[color]};` : "")};
  ${({ opacity }) => (opacity ? `opacity: ${opacity};` : "")};
  text-align: ${({ align = "start" }) => TextAlignments[align]};
`;

export const Label = styled(Text)`
  color: ${({ theme }) => theme.Color25};
`;

export const MoreLabel = styled(Text)`
  color: ${({ theme }) => theme.Color50};
  padding: ${Space.normal}px;
`;

export const BoxAlignments = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
} as const;

export type AlignmentProps = {
  align?: keyof typeof BoxAlignments;
  ratio?: number | string;
  full?: boolean;
};

export const AlignmentBox = styled.View<AlignmentProps>`
  display: flex;
  justify-content: space-between;
  align-items: ${({ align = "stretch" }) => BoxAlignments[align]};
  ${({ ratio }) => (ratio !== undefined ? `flex: ${ratio};` : "")};
  ${({ full }) => (full !== undefined ? "flex: 1 1 auto;" : "")};
  position: relative;
`;

export const Horizontal = styled(AlignmentBox)`
  flex-direction: row;
`;

export const Vertical = styled(AlignmentBox)`
  flex-direction: column;
`;

export const Center = styled.View<Pick<AlignmentProps, "ratio" | "full">>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${({ ratio }) => (ratio !== undefined ? `flex: ${ratio};` : "")};
  ${({ full }) => (full !== undefined ? "flex: 1 1 auto;" : "")};
  position: relative;
`;

export const HorizontalFlatlist = styled.FlatList`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  width: 100%;
  position: relative;
`;

HorizontalFlatlist.defaultProps = {
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
};

export const TextInput = styled.TextInput`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 1 auto;
  font-size: ${FontSize.large}px;
  font-family: ${FontFamily.RubikBold};
  color: ${({ theme }) => theme.ColorPrimary};
`;
