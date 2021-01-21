import React from "react";

import { IPlayer } from "../../typings/types";

import View from "./view";

interface Props {
  player: IPlayer;
}

export type ViewProps = Props;

function Controller(p: Props) {
  return <View {...p} />;
}

export default Controller;
