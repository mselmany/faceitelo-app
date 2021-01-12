import React, { useEffect } from "react";
import { useSharedValue, useAnimatedStyle, interpolate, withTiming, Easing, withDelay } from "react-native-reanimated";

import View from "./view";

interface Props {
  toggle: boolean;
}

export interface ViewProps extends Props {
  fadeOutStyle: any;
}

const AMOUNT = 5;

function Controller(p: Props) {
  const progress = useSharedValue(1);

  useEffect(() => {
    progress.value = withDelay(p.toggle ? 250 : 0, withTiming(p.toggle ? 1 : 0, { easing: Easing.elastic(2) }));
  }, [p.toggle, progress]);

  const fadeOutStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [1, 0], [1, 0]),
    transform: [{ translateY: interpolate(progress.value, [1, 0], [0, -AMOUNT]) }],
  }));

  return <View {...{ ...p, fadeOutStyle }} />;
}

export default Controller;
