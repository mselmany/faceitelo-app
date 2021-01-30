import React from "react";

import View from "./view";

type Props = {
  onPress: () => void;
};

export type ViewProps = Props;

function Controller(p: Props) {
  return <View {...p} />;
}

export default Controller;
