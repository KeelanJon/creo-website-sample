import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import StyledButton from "../StyledButton"
import SectionContainer from "./SectionContainer"
import FlexBox from "../FlexBox"

//image imports
import squiggle from "../../assets/illustrations/squiggle_layering_large.jpg"

function Volunteer(props) {
  return (
    <SectionContainer wrapperColor={props => props.theme.main.lightBlue}>
      <FlexContainer>
        <TextWrapper style={{ flex: 1 }}>
          <h2>Fundraise for us!</h2>
          <p>
            Volunteering with us can help connect mind, support minds and change
            minds. You can volunteer at one of our events or as apart of a
            fundraising group.
          </p>
          <StyledButton
            primary={true}
            buttonColor={props => props.theme.main.blue}
            textColor={props => props.theme.main.white}
          >
            <a href="https://google.com">View fundraising opportunities</a>
          </StyledButton>
        </TextWrapper>
        <div style={{ flex: 1 }}>
          <StaticImage
            src="../../assets/illustrations/fundraise.svg"
            alt="An illustration of a person holding a star"
            placeholder="blurred"
            layout="fixed"
            width={600}
            height={600}
          />
        </div>
      </FlexContainer>
      <BackgroundImage bgImage={squiggle} />
    </SectionContainer>
  )
}

export default Volunteer

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.main.lightBlue};

  padding-left: 5rem;

  position: relative;
  z-index: 20;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    flex-direction: column;
  }
`

const TextWrapper = styled.div`
  color: ${props => props.theme.main.blue};

  h2 {
    font-size: 4rem;
  }

  p {
    font-size: ${props => props.theme.fontSizes.small};
  }
`

const BackgroundImage = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  height: 100%;
  width: 100%;
  background: url(${props => props.bgImage});
  background-size: cover;
  z-index: 10;
`
