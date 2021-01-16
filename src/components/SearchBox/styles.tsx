import styled from "@emotion/native";
import { Dimensions } from "react-native";

import { Space } from "../../constants/System";
import { TouchableBox } from "../../shareds/Base";

const { height } = Dimensions.get("window");

export const Box = styled(TouchableBox)<{ toggled: boolean }>`
  height: ${(props) => (props.toggled ? height.toString() : "90")}px;
  margin: 0 ${Space.screenPadding}px;
  flex: 1;
`;
