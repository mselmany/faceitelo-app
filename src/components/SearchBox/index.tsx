import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Dimensions } from "react-native";
import { useSharedValue, useAnimatedStyle, withTiming, Easing, interpolate } from "react-native-reanimated";

import { Space } from "../../constants/System";

import View from "./view";

const { height } = Dimensions.get("window");

const BOX_HEIGHT = 90;

interface Props {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

export interface ViewProps extends Props {
  toggleStyle: any;
}

function Controller(p: Props) {
  const progress = useSharedValue(1);

  useEffect(() => {
    progress.value = withTiming(p.toggle ? 0 : 1, { easing: Easing.elastic(0.75), duration: 250 });
  }, [p.toggle, progress]);

  const toggleStyle = useAnimatedStyle(
    () => ({
      height: interpolate(progress.value, [0, 1], [BOX_HEIGHT, height - Number(Space.screenPadding) * 2.5]),
      // top: interpolate(progress.value, [0, 1], [0, -140]),
      transform: [{ translateY: interpolate(progress.value, [0, 1], [0, -194 + Number(Space.screenPadding) * 1.5]) }],
      zIndex: 2,
    }),
    [p.toggle]
  );

  return <View {...{ ...p, toggleStyle }} />;
}

export default Controller;
