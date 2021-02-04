import React, { ReactElement, ReactNode, useMemo } from "react";
import styled from "@emotion/native";
import { Theme } from "@emotion/react";

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
} & { children: ReactNode };

const boxStyles = (p: BoxProps & { theme: Theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex: 1 1 auto;
  width: 100%;
  position: relative;
  margin-left: ${p.index ? Space.screenPadding : "0"}px;
  border-radius: ${Radius.large}px;
  background-color: ${p.solid ? p.theme.BackgroundComponent : p.theme.BackgroundMain};
  ${!p.solid ? `border-width: 1px; border-color: ${p.theme.BorderColor};` : ""};
`;

export const Box = styled.View<BoxProps>(boxStyles);

export const PressableBox = styled.Pressable<BoxProps>(boxStyles);

export const Padding = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex: 1 1 auto;
  padding: ${Space.normal}px;
`;
