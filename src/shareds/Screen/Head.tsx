import React, { memo, useEffect } from "react";
import styled from "@emotion/native";
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import { Space, FontFamily } from "../../constants/System";
import appJson from "../../../app.json";

interface Props {
  toggle: boolean;
}

const { name } = appJson.expo;

const AMOUNT = 5;

function Status(p: Props) {
  const progress = useSharedValue(1);

  useEffect(() => {
    progress.value = withTiming(p.toggle ? 1 : 0, { easing: Easing.elastic(2) });
  }, [p.toggle, progress]);

  const fadeInStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [1, 0], [0, 1]),
    transform: [{ translateY: interpolate(progress.value, [1, 0], [-AMOUNT, 0]) }],
  }));

  return (
    <StatusWrapper style={fadeInStyle}>
      <StatusText>{name}</StatusText>
    </StatusWrapper>
  );
}

export default memo(Status);

const StatusWrapper = styled(Animated.View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 ${Space.screenPadding}px;
  height: ${(+Space.screenPadding * 1.5).toString()}px;
`;

const StatusText = styled.Text`
  font-size: 20px;
  font-family: ${FontFamily.Prompt};
`;
