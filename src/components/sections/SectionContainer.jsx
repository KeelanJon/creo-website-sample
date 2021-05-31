import React from "react"
import styled from "styled-components"

function SectionContainer(props) {
  return (
    <StyledContainer bgColor={props.bgColor}>
      <ContentWrapper wrapperColor={props.wrapperColor}>
        {props.children}
      </ContentWrapper>
    </StyledContainer>
  )
}

export default SectionContainer

const StyledContainer = styled.section`
  background: ${props => props.bgColor};
  padding: 10vh 5vw;
  width: 100%;
`
const ContentWrapper = styled.div`
  margin: auto auto;
  width: 100%;
  max-width: ${props => props.theme.screenDimensions.desktop};
  background: ${props => props.wrapperColor};
  position: relative;
`
