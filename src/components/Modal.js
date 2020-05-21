import React from "react";
import { defaultTheme, typeScale } from "../utils";
import styled from "styled-components";
import { Illustrations, CloseIcon } from "../assets";
import { PrimaryButton } from "./Button";
import { useSpring, animated, config } from "react-spring";

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${defaultTheme.backgroundModal};
  color: ${defaultTheme.textOnModal};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.h3};
`;

// const SignUptext = styled.p`
//     font-size: ${typeScale.paragraph};
//     max-width: 70%;
//     text-align: center;
// `;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 40px;
  top: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    config: config.slow,
  });
  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img
          src={Illustrations.SignUp}
          alt="Sign up for email list"
          aria-hidden="true"
        />
        <SignUpHeader>Sign up for our newsletter!</SignUpHeader>
        <PrimaryButton>Sign up</PrimaryButton>
        <CloseModalButton aria-label="Close modal">
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};
