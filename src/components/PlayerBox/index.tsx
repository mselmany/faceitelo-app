import React, { memo } from "react";

import { IPlayer } from "../../types";

import View from "./view";

export interface IPlayerBox extends IPlayer {
  index?: number;
  onPress?: () => void;
}

function Controller(p: IPlayerBox) {
  return <View {...p} />;
}

export default memo(Controller);
