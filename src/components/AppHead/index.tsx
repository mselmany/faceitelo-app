import React from "react";

import View from "./view";

interface Props {
  toggle: boolean;
}

function Controller(p: Props) {
  return <View {...p} />;
}

export default Controller;
