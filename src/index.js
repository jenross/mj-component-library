import React from "react";
import ReactDOM from "react-dom";
import {
  SignUpModal,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components";
import { GlobalStyle } from "./utils";

const App = () => (
  <div>
    <PrimaryButton>Hello world</PrimaryButton>
    <SecondaryButton>Hello world</SecondaryButton>
    <TertiaryButton>Hello world</TertiaryButton>
    <SignUpModal />
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
