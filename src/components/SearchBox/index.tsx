import React, { Dispatch, SetStateAction } from "react";

import View from "./view";

interface Props {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

export type ViewProps = Props;

function Controller(p: Props) {
  return <View {...p} />;
}

export default Controller;
