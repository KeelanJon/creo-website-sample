import React from "react"
import styled from "styled-components"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
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

function Stories(props) {
  //Static Graphql query to pull in story data
  const data = useStaticQuery(graphql`
    query StoryQuery {
      allStoriesJson {
        nodes {
          id
          personName
          age
          description
          personImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `)

  const storyData = data.allStoriesJson.nodes

  return (
    <SectionContainer bgColor={props => props.theme.main.blue}>
      <SectionTitle>
        <FlexBox justify="space-between" align="center">
          <div>
            <h2>How we've helped</h2>
          </div>
          <div>
            <StyledButton textColor={props => props.theme.main.white}>
              <a href="https://google.com">View all</a>
            </StyledButton>
          </div>
        </FlexBox>
      </SectionTitle>

      <CardContainer>
        {storyData.map(function (item) {
          const image = getImage(item.personImage)

          return (
            <StoryCard
              key={item.id}
              indicators
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="600"
            >
              <img src={quotesSVG} className="quotes" />
              <GatsbyImage
                image={image}
                className="card-image"
                alt="An image of a person"
              />
              <h4>{item.personName + ", " + item.age}</h4>
              <p>"{item.description}"</p>
              <StyledButton textColor={props => props.theme.main.white}>
                <a href="https://google.com">Read {item.personName}'s story</a>
              </StyledButton>
            </StoryCard>
          )
        })}
      </CardContainer>
    </SectionContainer>
  )
}

export default Stories

const SectionTitle = styled.div`
  padding: 1rem 0;

  h2 {
    color: ${props => props.theme.main.white};
  }
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8rem;

  padding-top: 3rem;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    grid-template-columns: 1fr;
  }
`

const StoryCard = styled.div`
  position: relative;

  color: ${props => props.theme.main.white};

  .card-image {
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

const quotesStyles = styled.img``
