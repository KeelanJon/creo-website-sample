import React from "react"
import styled from "styled-components"

function FlexBox(props) {
  return (
    <FlexContainer
      direction={props.direction}
      align={props.align}
      justify={props.justify}
    >
      {props.children}
    </FlexContainer>
  )
}

export default FlexBox

const FlexContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  flex-wrap: wrap;

  ${
    "" /* @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    flex-direction: column;
  } */
  }
`
