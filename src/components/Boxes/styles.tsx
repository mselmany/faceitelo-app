import React from "react";
import styled from "@emotion/native";
import { PressableProps, ViewProps } from "react-native";
import { Theme } from "@emotion/react";

import { FontSize, FontFamily, Space, Radius } from "../../constants/System";

type _BoxProps = {
  solid?: boolean;
  nth?: "odd" | "even";
  index?: number;
  noPadding?: boolean;
} & { children: any };

export type BoxProps = _BoxProps & ViewProps;

export type PressableBoxProps = _BoxProps & PressableProps;

const boxStyles = (p: _BoxProps & { theme: Theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex: 1;
  flex-basis: auto;
  width: 100%;
  position: relative;
  margin-left: ${p.index ? Space.screenPadding : "0"}px;
  border-radius: ${Radius.large}px;
  background-color: ${p.solid ? p.theme.BackgroundComponent : p.theme.BackgroundMain};
  ${!p.solid ? `border-width: 1px; border-color: ${p.theme.BorderColor};` : ""};
`;

export const Box = styled.View<BoxProps>(boxStyles);

export const PressableBox = styled.Pressable<PressableBoxProps>(boxStyles);

export const Padding = styled.View`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  padding: ${Space.normal}px;
`;

export const BoxLine = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Label = styled.Text`
  font-size: ${FontSize.small}px;
  font-family: ${FontFamily.Rubik};
  color: ${({ theme }) => theme.Color25};
`;

export const Text = styled.Text`
  font-size: ${FontSize.xlarge}px;
  font-family: ${FontFamily.RubikBold};
`;

export const MoreLabel = styled(Label)`
  color: ${({ theme }) => theme.Color50};
  padding: ${Space.normal}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  flex: 1;
`;
