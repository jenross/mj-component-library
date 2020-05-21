import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <g transform="translate(0,-1028.3622)">
      <path
      
        d="M 1.4966617,1050.8532 22.503338,1029.8465"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-opacity="1"
        stroke-miterlimit="4"
        stroke-dasharray="none"
      />
      <path
        d="M 22.503338,1050.8532 1.4966617,1029.8465"

        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-opacity="1"
        stroke-miterlimit="4"
        stroke-dasharray="none"
      />
    </g>
    <text
      x="0"
      y="39"
      fill="#000000"
      font-size="5px"
      font-weight="bold"
      font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
    >
      Created by Juan Carlos Altamirano
    </text>
    <text
      x="0"
      y="44"
      fill="#000000"
      font-size="5px"
      font-weight="bold"
      font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
    >
      from the Noun Project
    </text>
  </CloseIconWrapper>
);
