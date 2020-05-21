import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {SecondaryButton, TertiaryButton} from "./components/Button";
import { GlobalStyle } from "./utils";

const App = () => (
    <div>
        <PrimaryButton>Hello world</PrimaryButton>
        <SecondaryButton>Hello world</SecondaryButton>
        <TertiaryButton>Hello world</TertiaryButton>
        <GlobalStyle />
    </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));