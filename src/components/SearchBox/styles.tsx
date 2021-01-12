import styled from "@emotion/native";

import { Space } from "../../constants/System";
import { TouchableBox } from "../../shareds/Base";

export const Box = styled(TouchableBox)`
  margin: 0 ${Space.screenPadding}px;
  flex: 1;
`;
