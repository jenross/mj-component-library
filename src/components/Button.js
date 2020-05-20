import styled from "styled-components";
import {defaultTheme, typeScale} from "../utils";

const Button = styled.button`
    padding: 12px 24px; 
    font-size: ${typeScale.paragraph}; 
    min-width: 100px;
    cursor: pointer; 
    font-family: "Raleway";
`

const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryPurple};
    border: none;
    color: ${defaultTheme.textColorOnPrimary};
`
export const SecondaryButton = styled(Button)`
    background-color: ${defaultTheme.textColorOnPrimary};
    border: 1px solid ${defaultTheme.primaryPurple};
    color: ${defaultTheme.primaryPurple};
`
export const TertiaryButton = styled(Button)`
    background-color: transparent;
    border: none;
    color: ${defaultTheme.primaryPurple};
`

export default PrimaryButton;