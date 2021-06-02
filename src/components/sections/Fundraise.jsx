import React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import StyledButton from "../StyledButton"
import SectionContainer from "./SectionContainer"
import FlexBox from "../FlexBox"

//image imports
import squiggle from "../../assets/illustrations/squiggle_layering_large.jpg"

//React component right here
function Fundraise(props) {
  return (
    <SectionContainer wrapperColor={props => props.theme.main.lightBlue}>
      <FlexContainer>
        <TextWrapper>
          <h2>Fundraise for us!</h2>
          <p>
            Volunteering with us can help connect mind, support minds and change
            minds. You can volunteer at one of our events or as apart of a
            fundraising group.
          </p>
          <ButtonWrapper className="desktop-button">
            <StyledButton
              primary={true}
              buttonColor={props => props.theme.main.blue}
              textColor={props => props.theme.main.white}
              style={{ padding: "1rem" }}
            >
              <a href="https://google.com">Fundraising opportunities</a>
            </StyledButton>
          </ButtonWrapper>
        </TextWrapper>
        <IllustrationWrapper>
          <StaticImage
            src="../../assets/illustrations/fundraise.svg"
            alt="An illustration of a person holding a star"
            placeholder="blurred"
            className="illustration-image"
          />
        </IllustrationWrapper>
        <ButtonWrapper className="mobile-button">
          <StyledButton
            primary={true}
            buttonColor={props => props.theme.main.blue}
            textColor={props => props.theme.main.white}
            style={{ padding: "1rem", width: "100%" }}
          >
            <a href="https://google.com">Fundraising opportunities</a>
          </StyledButton>
        </ButtonWrapper>
      </FlexContainer>
      <BackgroundImage bgImage={squiggle} />
    </SectionContainer>
  )
}

export default Fundraise

//Hey there, here's the styled components again!
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.main.lightBlue};

  padding: 2rem 5rem;

  position: relative;
  z-index: 20;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    flex-direction: column;
    padding: 2rem;
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    .desktop-button {
      display: none;
    }
  }

  @media screen and (min-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    .mobile-button {
      display: none;
    }
  }
`
const ButtonWrapper = styled.div`
  width: 100%;
`
const TextWrapper = styled.div`
  flex: 1;
  color: ${props => props.theme.main.blue};

  h2 {
    font-size: 4rem;
    padding: 1rem 0;
  }

  p {
    font-size: ${props => props.theme.fontSizes.small};
    max-width: 600px;
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    h2 {
      font-size: 3rem;
    }
  }
`

const IllustrationWrapper = styled.div`
  flex: 1;
`

//BackgroundImage styles used for the background squiggles
const BackgroundImage = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  height: 100%;
  width: 100%;
  background: url(${props => props.bgImage});
  background-size: cover;
  z-index: 10;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    top: 15px;
    left: 15px;
  }
`
