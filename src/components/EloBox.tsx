import React, { memo, useEffect, useState } from "react";
import styled from "@emotion/native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, Easing } from "react-native-reanimated";

import { FontSize, FontFamily, Radius, Space } from "../constants/System";
import iconArrow from "../../assets/icons/icon-arrow.png";

import MiniDotGraphComponent from "./MiniDotGraph";

function EloBox() {
  const [active, setActive] = useState(false);

  const boxHeight = useSharedValue(Box.HEIGHT);
  const boxAnimate = useAnimatedStyle(() => ({
    height: boxHeight.value,
  }));
  useEffect(() => {
    boxHeight.value = withSpring(active ? Box.HEIGHT_EXPANDED : Box.HEIGHT, { damping: 20 });
  }, [active, boxHeight]);

  const arrowRotate = useSharedValue(ArrowButton.ROTATE);
  const arrowAnimate = useAnimatedStyle(() => ({
    transform: [{ rotate: `${arrowRotate.value}deg` }],
  }));
  useEffect(() => {
    arrowRotate.value = withSpring(active ? ArrowButton.ROTATED : ArrowButton.ROTATE, { damping: 20 });
  }, [active, arrowRotate]);

  return (
    <Box active={active} style={boxAnimate} onStartShouldSetResponder={() => setActive((s) => !s)}>
      <H2>Elo</H2>
      <StatLine>
        <StatText>2573</StatText>
        {/* <ArrowButton style={arrowAnimate}>
          <Arrow source={iconArrow} resizeMode="contain" />
        </ArrowButton> */}
      </StatLine>
      <MiniDotGraph />
    </Box>
  );
}

export default memo(EloBox);

const Box = styled(Animated.View)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: ${Space.xlarge}px;
  margin-top: ${Space.small}px;
  background-color: #fbe8e6;
  border-radius: ${Radius.large}px;
`;

Box.HEIGHT = 205;
Box.HEIGHT_EXPANDED = 500;

const H2 = styled.Text`
  display: flex;
  font-size: ${FontSize.normal}px;
  font-family: ${FontFamily.RubikLight};
  color: ${({ theme }) => theme.Color50};
`;

const StatLine = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const StatText = styled.Text`
  font-size: ${FontSize.large}px;
  font-family: ${FontFamily.RubikBold};
  color: ${({ theme }) => theme.Color100};
`;

enum EArrowButton {
  ROTATE = 0,
  ROTATED = 180,
}

const ArrowButton = styled(Animated.View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${Space.xlarge}px;
  height: ${Space.xlarge}px;
  margin-left: ${Space.normal}px;
  background-color: ${({ theme }) => theme.BackgroundComponent__Accent};
  border-radius: ${Space.xlarge}px;
  border-color: ${({ theme }) => theme.BorderColor};
  border-width: 1px;
`;

ArrowButton.ROTATE = 0;
ArrowButton.ROTATED = 180;

const Arrow = styled.Image`
  width: ${Space.small}px;
  height: ${Space.small}px;
`;

const MiniDotGraph = styled(MiniDotGraphComponent)`
  display: flex;
  margin-top: ${Space.large}px;
`;
