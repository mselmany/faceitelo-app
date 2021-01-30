import styled from "@emotion/native";

import { Space } from "../../constants/System";
import { Label as _Label } from "../../shareds/Base";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Label = styled(_Label)`
  display: flex;
  margin-left: ${Space.screenPadding}px;
  margin-bottom: ${Space.small}px;
`;

export const Scroll = styled.FlatList`
  display: flex;
`;
