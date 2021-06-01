import React from "react"
import styled from "styled-components"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { Carousel } from "react-bootstrap"
import StyledButton from "../StyledButton"
import SectionContainer from "./SectionContainer"
import FlexBox from "../FlexBox"

//image imports
import RojalImage from "../../images/leaning-man.jpg"
import NicImage from "../../images/woman-with-dog.jpg"
import AmobiImage from "../../images/senior-man.jpg"
import { propTypes } from "react-bootstrap/esm/Image"
import quotesSVG from "../../assets/illustrations/quotes.svg"

const storyCardData = [
  {
    name: "Rojal",
    age: "26",
    description:
      "I found family and Community. I found something to be part of...I came from a bad place and now I am on my way to sorting out my life a step at a time.",
    image: "../../images/leaning-man.jpg",
  },
  {
    name: "Nic",
    age: "43",
    description:
      "I found family and Community. I found something to be part of...I came from a bad place and now I am on my way to sorting out my life a step at a time.",
    image: "../../images/leaning-man.jpg",
  },
  {
    name: "Amobi",
    age: "26",
    description:
      "I found family and Community. I found something to be part of...I came from a bad place and now I am on my way to sorting out my life a step at a time.",
    image: "../../images/leaning-man.jpg",
  },
]

function Stories(props) {
  const breakPoint = 1280
  const screenWidth = window.innerWidth

  return (
    <SectionContainer bgColor={props => props.theme.main.blue}>
      {console.log(screenWidth)}
      <SectionTitle>
        <FlexBox justify="space-between" align="center">
          <div>
            <h2>How we've helped</h2>
          </div>
          <div>
            <StyledButton textColor={props => props.theme.main.white}>
              <a href="https://google.com">View all stories</a>
            </StyledButton>
          </div>
        </FlexBox>
      </SectionTitle>

      {/*Here we have a conditional render
        Component will render a coursel style area if on tablet or mobile
        and will render as normal on desktop
       */}
      {screenWidth <= breakPoint ? (
        <StyledCarousel indicators={false} controls={false}>
          {storyCardData.map(function (item, index) {
            return (
              <Carousel.Item key={index}>
                <StoryCard>
                  <img src={quotesSVG} alt="Cotation" className="quotes" />
                  <StaticImage
                    src={"../../images/leaning-man.jpg"}
                    alt="Image of a person"
                    placeholder="blurred"
                    className="imgStyle"
                  />
                  <h4>{item.name + ", " + item.age}</h4>
                  <p>"{item.description}"</p>
                  <StyledButton textColor={props => props.theme.main.white}>
                    <a href="htpps://google.com">Read {item.name}'s story</a>
                  </StyledButton>
                </StoryCard>
              </Carousel.Item>
            )
          })}
        </StyledCarousel>
      ) : (
        <CardContainer>
          {storyCardData.map(function (item, index) {
            return (
              <StoryCard key={index}>
                <img src={quotesSVG} alt="Cotation" className="quotes" />
                <StaticImage
                  src={"../../images/leaning-man.jpg"}
                  alt="Image of a person"
                  placeholder="blurred"
                  className="imgStyle"
                />
                <h4>{item.name + ", " + item.age}</h4>
                <p>"{item.description}"</p>
                <StyledButton textColor={props => props.theme.main.white}>
                  <a href="htpps://google.com">Read {item.name}'s story</a>
                </StyledButton>
              </StoryCard>
            )
          })}
        </CardContainer>
      )}

      {screenWidth < 500 ? console.log("yes") : console.log("no")}
    </SectionContainer>
  )
}

export default Stories

//graphql query
export const storyQuery = graphql`
  query MyQuery {
    allStoriesJson {
      nodes {
        id
        age
        personName
        personImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

const SectionTitle = styled.div`
  padding: 1rem 0;

  h2 {
    color: ${props => props.theme.main.white};
  }
`

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-gap: 8rem;
  padding: 5rem 0;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    flex-direction: column;
  }
`

const StoryCard = styled.div`
  position: relative;

  color: ${props => props.theme.main.white};

  .imgStyle {
    height: 530px;
  }

  .quotes {
    position: absolute;
    top: -20px;
    left: -15px;
    width: 35%;
    z-index: 10;
  }

  h4 {
    font-family: ${props => props.theme.fonts.bold};
    padding: 1rem 0;
  }

  p {
    font-size: 1rem;
    line-height: 2;
    font-family: ${props => props.theme.fonts.regular};
  }
`

const StyledCarousel = styled(Carousel)``

const Slide = styled.div``

const quotesStyles = styled.img``

const CardImage = styled.div`
  position: relative;
`
