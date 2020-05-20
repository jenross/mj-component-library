import styled from "styled-components";

const primaryPurple = "#524f85";
const primaryCream = "#f0e7df";

const Button = styled.button`
    padding: 12px 24px; 
    font-size: 1rem; 
    min-width: 100px;
    cursor: pointer; 
    font-family: "Raleway";
`

const PrimaryButton = styled(Button)`
    background-color: ${primaryPurple};
    border: none;
    color: ${primaryCream};
`
export const SecondaryButton = styled(Button)`
    background-color: ${primaryCream};
    border: 1px solid ${primaryPurple};
    color: ${primaryPurple};
`
export const TertiaryButton = styled(Button)`
    background-color: transparent;
    border: none;
    color: ${primaryPurple};
`

export default PrimaryButton;