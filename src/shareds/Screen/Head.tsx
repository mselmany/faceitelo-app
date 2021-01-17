import React, { memo } from "react";
import styled from "@emotion/native";

import { Space, FontFamily } from "../../constants/System";
import appJson from "../../../app.json";

interface Props {
  loading?: boolean;
}

const { name } = appJson.expo;

function Status(p: Props) {
  // const progress = useSharedValue(1);

  // useEffect(() => {
  //   progress.value = withTiming(p.loading ? 1 : 0, { easing: Easing.elastic(2) });
  // }, [p.loading, progress]);

  // const fadeInStyle = useAnimatedStyle(() => ({
  //   opacity: interpolate(progress.value, [1, 0], [0, 1]),
  //   transform: [{ translateY: interpolate(progress.value, [1, 0], [-5, 0]) }],
  // }));

  return (
    <StatusWrapper>
      <StatusText>{name}</StatusText>
    </StatusWrapper>
  );
}

export default memo(Status);

const StatusWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 ${Space.screenPadding}px;
  height: ${(+Space.screenPadding * 3).toString()}px;
`;

const StatusText = styled.Text`
  font-size: 20px;
  font-family: ${FontFamily.Prompt};
`;
