import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import StyledButton from "../StyledButton"
import SectionContainer from "./SectionContainer"

//image imports
import blueSquiggle from "../../assets/illustrations/squiggle_layering_large.jpg"
import pinkSquiggle from "../../assets/illustrations/squiggle_layering_large-2.jpg"

function GetInvolved(props) {
  const backgrounStyles = [
    {
      opacity: 0.5,
      background: blueSquiggle,
    },
  ]

  //Static Graphql query to pull in story data
  const data = useStaticQuery(graphql`
    query SupportQuery {
      allSupportJson {
        nodes {
          title
          id
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `)

  const supportData = data.allSupportJson.nodes

  return (
    <SectionContainer>
      <TextWrapper>
        <h2>How you can help</h2>
        <StyledButton>
          <a href="https://google.com">View all</a>
        </StyledButton>
      </TextWrapper>
      <ArticlesWrapper>
        {supportData.map(function (item) {
          const image = getImage(item.thumbnail)
          return (
            <ArticleCard key={item.id}>
              <ArticleImageWrapper>
                {{ image } ? (
                  <GatsbyImage
                    image={image}
                    alt="Thumbnail Image of person supporting our charity"
                    className="article-image"
                  />
                ) : (
                  <p>No image</p>
                )}

                <img src={blueSquiggle} className="background-image" />
              </ArticleImageWrapper>
              <h3>
                <Link to="https://google.com">{item.title}</Link>
              </h3>
              <p>{item.description}</p>
              <StyledButton textColor={props => props.theme.main.blue}>
                View details
              </StyledButton>
            </ArticleCard>
          )
        })}
      </ArticlesWrapper>
    </SectionContainer>
  )
}

export default GetInvolved

/*Add class name to background iamges
and edit with nth of type instead off adding 
a direct image to the markup */

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 0;

  h2 {
    color: ${props => props.theme.main.blue};
  }
`

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-gap: 5rem;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    grid-template-columns: 1fr;
  }
`

const ArticleCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;

  .article-image {
    height: 100%;
    width: auto;

    position: relative;
    z-index: 20;
  }

  span {
    padding: 0.3rem 1rem;
    background: #8149ff1a;
    color: ${props => props.theme.main.violet};
    border-radius: 4px;
    text-transform: uppercase;
    font-family: ${props => props.theme.fonts.bold};
    font-size: 0.8rem;
  }

  h3,
  a {
    color: ${props => props.theme.main.blue};
    padding: 1rem 0;
  }

  p {
    font-family: ${props => props.theme.fonts.regular};
    color: ${props => props.theme.main.blue};
    font-size: 1rem;
    line-height: 1.8;
  }
`

const ArticleImageWrapper = styled.div`
  position: relative;
  height: 250px;
  margin-bottom: 2rem;

  .background-image {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 15px;
    left: 15px;
    background: red;

    object-fit: cover;
  }
`
