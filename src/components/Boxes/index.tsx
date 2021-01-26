import React, { useMemo } from "react";
import styled from "@emotion/native";

import { Space } from "../../constants/System";

import { BoxProps } from "./styles";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  max-width: 480px;
  padding: ${Space.screenPadding}px;
`;

export const Group = (p: any) => {
  const childrens = useMemo(
    () =>
      React.Children.map(p.children, (child, index) =>
        React.cloneElement<BoxProps>(child, { nth: index % 2 === 0 ? "even" : "odd", index })
      ),
    [p.children]
  );

  return <BoxGroup>{childrens}</BoxGroup>;
};

const BoxGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex: 1;
  flex-basis: auto;
  flex-wrap: nowrap;
  padding-top: ${Space.screenPadding}px;
`;
