import React from "react";
import ReactDOM from "react-dom";
import {ColorModeScript} from "@chakra-ui/react";

import theme from "./theme";
import App from "./App";

ReactDOM.render(
  <>
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.colorMode} />
      <App />
    </React.StrictMode>
  </>,
  document.getElementById("root"),
);
