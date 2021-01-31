import styled from "@emotion/native";
import { Theme } from "@emotion/react";
import Constants from "expo-constants";
import { Platform } from "react-native";

import * as Base from "../Base";

export { default as Status } from "./Head";

const wrapperStyles = (p: { theme: Theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex: 1 1 auto;
  position: relative;
  padding-top: ${(Constants.statusBarHeight || 0).toString()}px;
  overflow: hidden;
  background-color: ${p.theme.BackgroundMain};
`;

export const Wrapper = styled.SafeAreaView(wrapperStyles);

export const WrapperWithKeyboard = styled.KeyboardAvoidingView(wrapperStyles);

WrapperWithKeyboard.defaultProps = {
  behavior: Platform.select({ ios: "padding", android: "height" }),
};

export const Content = styled.View<{ center?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex: 1 1 auto;
`;

export const Scroll = styled.ScrollView<{ center?: boolean }>`
  display: flex;
  flex: 1 1 auto;
`;

Scroll.defaultProps = {
  contentContainerStyle: {
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
};

export const { Vertical } = Base;
