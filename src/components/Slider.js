import React from "react"
import { Carousel, Jumbotron, Button } from "react-bootstrap"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import FeaturedImage from "../images/smiling-woman.jpg"
import StyledButton from "./StyledButton"

const Slide = styled(Jumbotron)`
  color: ${props => props.theme.main.mainFontColor};

  background: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;

  padding: 20vh 10vw;
  height: 50vh;

  h1 {
    font-size: 4rem;
    max-width: 600px;
  }

  p {
    max-width: 600px;
    padding: 1rem 0;
  }
`

//Image and content wrapper not used.
//I'm currently experimenting with the new gatsby image plugin
//to ecorporate more image optimisation
const ImageWrapper = styled.div`
  background: red;
  position: absolute;
  width: 100%;
`

const contentWraper = styled.div`
  position: relative;
  z-index: 1;
`

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <Slide bgImage={FeaturedImage}>
          <h1>Join the fight for mental health!</h1>
          <p>
            We connect minds. We Support minds. We change minds. For support.
            For respect. For you.
          </p>
          <p>
            <StyledButton primary={true}>Learn more</StyledButton>
          </p>
        </Slide>
      </Carousel.Item>
      <Carousel.Item>
        <Slide bgImage={FeaturedImage}>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <StyledButton primary={true}>Learn more</StyledButton>
          </p>
        </Slide>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
