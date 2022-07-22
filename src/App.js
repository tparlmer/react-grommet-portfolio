import {
  Collapsible,
  Grommet,
  Box,
  Button,
  Heading,
  ResponsiveContext,
  Layer,
} from "grommet";
import { FormClose, Notification } from "grommet-icons";
import React, { useState } from "react";

function App() {
  const theme = {
    global: {
      colors: {
        brand: "#FFFFFF",
      },
      border: {
        color: "black",
        size: "medium",
        side: "all",
      },
      font: {
        family: "Source Code Pro",
        size: "20px",
        height: "20px",
      },
    },
  };

  const AppBar = (props) => (
    <Box
      border={{
        color: "black",
        size: "medium",
        side: "all",
      }}
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: "1" }}
      {...props}
    />
  );

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={theme} themeMode="dark" full>
      <ResponsiveContext.Consumer>
        {size => (
        <Box fill>
          <AppBar>
            <Heading level="3" margin="none">
              Click Over There For Content ... 👉
            </Heading>
            <Button
              icon={<Notification />}
              onClick={() => setShowSidebar(!showSidebar)}
            />
          </AppBar>
          <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
            <Box flex align="center" justify="center">
              app body
            </Box>
            {(!showSidebar || size !== "small") ? (
              <Collapsible direction="horizontal" open={showSidebar}>
                <Box
                  flex
                  width="medium"
                  background="light-2"
                  elevation="small"
                  align="center"
                  justify="center"
                >
                  sidebar
                </Box>
              </Collapsible>
            ): (
              <Layer>
                <Box
                  background='light-2'
                  tag='header'
                  justify='end'
                  align='center'
                  direction='row'
                >
                  <Button 
                    icon={<FormClose />}
                    onClick={() => setShowSidebar(false)}
                  />
                </Box>
                <Box
                  fill
                  background='light-2'
                  align='center'
                  justify='center'
                >
                  sidebar
                </Box>
              </Layer>
            )}
          </Box>
        </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
