import React from "react";
import styled from "@emotion/native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@emotion/react";

import theme from "./src/constants/Theme";
import ResourceLoader from "./src/utils/ResourceLoader";
import Navigations from "./src/screens";

export default function App() {
  return (
    <ResourceLoader>
      <ThemeProvider theme={theme}>
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="auto" animated={true} />
        <AppContainer>
          <Navigations />
        </AppContainer>
      </ThemeProvider>
    </ResourceLoader>
  );
}

const AppContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.BackgroundMain};
`;
