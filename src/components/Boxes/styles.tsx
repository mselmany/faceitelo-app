import React, { ReactNode, useMemo } from "react";
import styled from "@emotion/native";
import { Theme } from "@emotion/react";
import { PressableProps } from "react-native";

import { Space, Radius } from "../../constants/System";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  max-width: 480px;
  flex: 1 1 auto;
  padding: 0 ${Space.screenPadding}px;
`;

const BoxGroup = styled.View<{ noPadding?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex: 1;
  flex-basis: auto;
  flex-wrap: nowrap;
  ${({ noPadding = false }) => (!noPadding ? `padding-top: ${Space.screenPadding}px;` : "")};
`;

export const Group = (p: { noPadding?: boolean; children: any }) => {
  const childrens = useMemo(
    () =>
      React.Children.map(p.children, (child, index) =>
        React.cloneElement<BoxProps>(child, { nth: index % 2 === 0 ? "even" : "odd", index })
      ),
    [p.children]
  );

  return <BoxGroup {...p}>{childrens}</BoxGroup>;
};

export type BoxProps = {
  solid?: boolean;
  nth?: "odd" | "even";
  index?: number;
  pressed?: boolean;
} & { children: ReactNode };

const boxLayoutStyles = (p: BoxProps & { theme: Theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex: 1 1 auto;
  width: 100%;
  position: relative;
  margin-left: ${p.index ? Space.screenPadding : "0"}px;
`;

const boxPaintStyles = (p: BoxProps & { theme: Theme }) => `
  border-radius: ${Radius.large}px;
  background-color: ${p.solid ? p.theme.BackgroundComponent : p.theme.BackgroundMain};
  ${!p.solid ? `border-width: 1px; border-color: ${p.theme.BorderColor};` : ""};
  ${p.pressed ? `background-color: ${p.theme.BackgroundComponent__Contrast}` : ""};
`;

export const Box = styled.View<BoxProps>`
  ${(p) => boxLayoutStyles(p)}
  ${(p) => boxPaintStyles(p)}
`;

export const Pressable = styled.Pressable<BoxProps>(boxLayoutStyles);
export const PressableView = styled.View<BoxProps>(boxPaintStyles);

export const PressableBox = (p: PressableProps & BoxProps) => {
  const { style, ...omitStyle } = p;
  return <Pressable {...omitStyle}>{({ pressed }) => <PressableView {...p} pressed={pressed} />}</Pressable>;
};

export const Padding = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex: 1 1 auto;
  padding: ${Space.normal}px;
`;
