import React from "react";

import SearchBox from "../components/SearchBox";
import * as Screen from "../shareds/Screen";

export default () => (
  <Screen.WrapperWithKeyboard>
    <Screen.Status />
    <Screen.Content>
      <SearchBox isFocused />
    </Screen.Content>
  </Screen.WrapperWithKeyboard>
);
