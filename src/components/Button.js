import styled from "styled-components";
import {defaultTheme, typeScale} from "../utils";

const Button = styled.button`
    padding: 12px 24px; 
    font-size: ${typeScale.paragraph}; 
    min-width: 100px;
    cursor: pointer; 
    font-family: "Raleway";
    transition: background-color 0.2 linear;
    margin: 20px;
`

const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryPurple};
    border: none;
    color: ${defaultTheme.textColorOnPrimary};

    &:hover {
        background-color: ${defaultTheme.primaryPurpleHover};
    }

    &:focus {
        outline: 3px solid ${defaultTheme.primaryPurpleHover};
        outline-offset: 2px;
    }
`
export const SecondaryButton = styled(Button)`
    background-color: ${defaultTheme.secondaryCream};
    border: 1px solid ${defaultTheme.textColorOnSecondary};
    color: ${defaultTheme.textColorOnsecondary};

    &:hover {
        background-color: ${defaultTheme.secondaryCreamHover};
    }

    &:focus {
        outline: 3px solid ${defaultTheme.primaryPurpleHover};
        outline-offset: 2px;
    }
`
export const TertiaryButton = styled(Button)`
    background-color: ${defaultTheme.tertiaryNeutral};
    border: none;
    color: ${defaultTheme.textColorOnTertiary};

    &:hover {
        border: 1px solid ${defaultTheme.textColorOnTertiary};
    }

    &:focus {
        outline: 3px solid ${defaultTheme.textColorOnTertiary};
        outline-offset: 2px;
    }
`

export default PrimaryButton;