import styled from "@emotion/native";

import { Space } from "../../constants/System";
import { PressableBox } from "../../shareds/Base";

export const Box = styled(PressableBox)`
  margin: 0 ${Space.screenPadding}px;
  flex: 1;
`;
