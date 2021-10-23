import React from "react";
import ReactDOM from "react-dom";
import {ColorModeScript} from "@chakra-ui/react";

import theme from "./theme";
import App from "./App";

ReactDOM.render(
  <>
    {console.log(theme.config.initialColorMode)}
    <ColorModeScript initialColorMode="dark" />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById("root"),
);
