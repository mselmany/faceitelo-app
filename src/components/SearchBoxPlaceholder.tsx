import React, { memo } from "react";
import styled from "@emotion/native";

import { Space } from "../constants/System";
import * as Base from "../shareds/Base";

type Props = {
  onPress: () => void;
};

function Component(p: Props) {
  return (
    <Box onPress={p.onPress}>
      <Base.Horizontal>
        <Base.Label>Search</Base.Label>
      </Base.Horizontal>
      <Base.Seperator />
      <Base.Horizontal>
        <Base.Text size="normal">Search by nickname</Base.Text>
      </Base.Horizontal>
    </Box>
  );
}

export default memo(Component);

const Box = styled(Base.PressableBox)`
  margin: ${Space.screenPadding}px;
  margin-top: 0;
`;
