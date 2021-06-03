import React from "react"
import { Carousel } from "react-bootstrap"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import StyledButton from "./StyledButton"
import FeaturedImage from "../images/smiling-woman.jpg"

//Component takes advantage of the bootstrap carousel component
//for the slider functionality
function Slider() {
  const slideID = [1, 2, 3]

  return (
    <StyledCarousel
      indicators
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
      data-sal-duration="600"
    >
      {slideID.map(function (item) {
        return (
          <Carousel.Item key={item}>
            <Slide bgImage={FeaturedImage}>
              <ContentWrapper>
                <h1>Join the fight for mental health!</h1>
                <p>
                  We connect minds. We Support minds. We change minds. For
                  support. For respect. For you.
                </p>

                <StyledButton
                  primary={true}
                  textColor={props => props.theme.main.white}
                  styles={mobileButtonStyles}
                >
                  View Our Services
                </StyledButton>
              </ContentWrapper>
            </Slide>
          </Carousel.Item>
        )
      })}
    </StyledCarousel>
  )
}

export default Slider

//Component Styles
const mobileButtonStyles = {
  width: "100%",
}

const StyledCarousel = styled(Carousel)`
  .carousel-indicators {
    padding: 3rem 0;

    li {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: none;
      border: 2px solid #ffffff;
      margin: 0 0.5rem;
    }
    .active {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #ffffff;
    }
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    .carousel-indicators {
      padding: 2rem 0;
    }
  }
`

const Slide = styled.div`
  color: ${props => props.theme.main.white};
  background: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;

  padding: 25vh 5vw;
  height: 100%;

  h1 {
    font-size: 4rem;
    max-width: 650px;
  }

  p {
    max-width: 450px;
    padding: 1rem 0;
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    padding: 40vh 5vw 5vh 5vw;
    text-align: center;
    background-size: 350% auto;
    background-position: center;

    h1 {
      font-size: 2.5rem;
    }

    p {
      margin: auto auto;
    }
  }
`
const ContentWrapper = styled.div`
  margin: auto auto;
  max-width: 1440px;
  width: 100%;
`
