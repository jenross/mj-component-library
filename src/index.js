import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  SignUpModal,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components";
import { GlobalStyle } from "./utils";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <PrimaryButton>Hello world</PrimaryButton>
      <SecondaryButton>Hello world</SecondaryButton>
      <TertiaryButton>Hello world</TertiaryButton>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setShowModal(!showModal)}
      >
        Toggle modal
      </button>
      <SignUpModal showModal={showModal} setShowModal={setShowModal}/>
      <GlobalStyle />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
