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

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const Block = styled.View`
  padding: 0 ${Space.normal}px;
`;
