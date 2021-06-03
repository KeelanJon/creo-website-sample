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
          <a href="https://google.com">View all</a>
        </StyledButton>
      </TextWrapper>
      <ArticlesWrapper>
        {posts.map(function (post, index) {
          const image = getImage(post.frontmatter.featuredImage)
          return (
            <ArticleCard
              key={index}
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="600"
            >
              {{ image } ? (
                <GatsbyImage
                  image={image}
                  alt="Blog post header image"
                  className="article-image"
                />
              ) : (
                <p>No image</p>
              )}

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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;

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

const ArticleCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .article-image {
    height: 225px;
    width: auto;
    margin-bottom: 2rem;

    @media screen and (max-width: ${props =>
        props.theme.screenDimensions.tablet}) {
      height: 400px;
    }
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
