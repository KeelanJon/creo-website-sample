import React from "react"
import styled from "styled-components"
import { Button } from "react-bootstrap"

function StyledButton(props) {
  if (props.primary == true) {
    return (
      <PrimaryButton
        bgColor={props.buttonColor}
        primary={props.primary}
        color={props.textColor}
        style={props.style}
      >
        {props.children}
      </PrimaryButton>
    )
  } else {
    return (
      <SecondaryButton color={props.textColor} style={props.style}>
        {props.children}
      </SecondaryButton>
    )
  }
}

export default StyledButton

const PrimaryButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 1rem 2rem;

  background: ${props =>
    props.bgColor ? props.bgColor : props.theme.main.blue};
  color: ${props => (props.color ? props.color : props.theme.main.blue)};

  text-align: center;
  font-family: ${props => props.theme.fonts.bold};
  margin: 2rem 0;

  transition: 0.3s ease 0s;

  &:hover {
    opacity: 0.5;
    letter-spacing: 0.5px;
  }

  a {
    color: ${props => (props.color ? props.color : props.theme.main.blue)};
  }
`

const SecondaryButton = styled.button`
  border: none;
  border-bottom: 3px solid;
  border-color: ${props => props.theme.main.violet};
  padding: 0rem 0rem;

  background: none;
  color: ${props => (props.color ? props.color : props.theme.main.blue)};

  text-align: center;
  font-family: ${props => props.theme.fonts.regular};
  margin: 1rem 0;

  transition: 0.3s ease 0s;

  &:hover {
    opacity: 0.5;
    letter-spacing: 0.5px;
  }

  a {
    color: ${props => (props.color ? props.color : props.theme.main.blue)};
  }
`
