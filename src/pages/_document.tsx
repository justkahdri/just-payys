/* eslint-disable @next/next/no-document-import-in-page */
import React from "react";
import {ColorModeScript} from "@chakra-ui/react";
import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
