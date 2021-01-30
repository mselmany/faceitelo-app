import styled from "@emotion/native";
import Constants from "expo-constants";

import { Space } from "../../constants/System";

export { default as Status } from "./Head";

export const Wrapper = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.BackgroundMain};
  padding-top: ${(Constants.statusBarHeight || 0).toString()}px;
  overflow: hidden;
`;

export const Content = styled.View<{ center?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${({ center }) => (center ? "align-items: center;" : "")}
  flex: 1;
`;

export const Scroll = styled.ScrollView<{ center: boolean }>`
  display: flex;
`;

Scroll.defaultProps = {
  contentContainerStyle: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
};

export const Block = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  width: 100%;
`;
