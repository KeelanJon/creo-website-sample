import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import StyledButton from "../StyledButton"
import SectionContainer from "./SectionContainer"

function LatestUpdates(props) {
  const posts = props.postData

  return (
    <SectionContainer>
      <TextWrapper>
        <h2>Latest Updates</h2>
        <StyledButton>
          <a href="https://google.com">View all updates</a>
        </StyledButton>
      </TextWrapper>

      <ArticlesWrapper>
        {posts.map(function (post, index) {
          const image = getImage(post.frontmatter.featuredImage)
          return (
            <ArticleCard>
              <GatsbyImage src={image} alt="An image" />
              <span>{post.frontmatter.category}</span>
              <h3>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </h3>
              <p>{post.frontmatter.description}</p>
            </ArticleCard>
          )
        })}
      </ArticlesWrapper>
    </SectionContainer>
  )
}

export default LatestUpdates

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
  display: flex;
  justify-content: space-between;
  grid-gap: 5rem;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    flex-direction: column;
  }
`

const ArticleCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    height: 500px;
    width: auto;
    background: red;
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
