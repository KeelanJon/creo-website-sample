import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

function TopBar() {
  return (
    <Container>
      <ContentWrapper>
        <TextWrapper>
          <p>
            Text size
            <span> A</span>
            <span>A</span>
            <span>A</span>
          </p>
        </TextWrapper>
        <div></div>
        <TextWrapper>
          <InfoLink>
            <StaticImage
              src="../assets/icons/search.svg"
              alt="A search icon"
              placeholder="blurred"
            />
            <p>Search</p>
          </InfoLink>
          <InfoLink>
            <StaticImage
              src="../assets/icons/phone.svg"
              alt="A search icon"
              placeholder="blurred"
            />
            <p>02345 67890</p>
          </InfoLink>
          <InfoLink>
            <StaticImage
              src="../assets/icons/email.svg"
              alt="A search icon"
              placeholder="blurred"
            />
            <p>admin@email.com</p>
          </InfoLink>
        </TextWrapper>
      </ContentWrapper>
    </Container>
  )
}

export default TopBar

const Container = styled.div`
  padding: 1rem 5vw;
  width: 100%;

  width: 100%;
  background: ${props => props.theme.main.blue};
  color: ${props => props.theme.main.white};
  font-size: ${props => props.theme.fontSizes.small};

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    display: none;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: ${props => props.theme.screenDimensions.desktop};
  margin: auto auto;
`

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    letter-spacing: 2px;
  }

  span:nth-of-type(1) {
    font-size: 0.5rem;
  }
  span:nth-of-type(2) {
    font-size: 1rem;
    font-weight: 700;
  }
  span:nth-of-type(3) {
    font-size: 1.2rem;
    font-weight: 700;
  }
`

const InfoLink = styled.div`
  display: flex;
  align-items: center;

  transition: 0.3s ease 0s;

  p {
    padding: 0 1rem;
    display: inline-block;
  }

  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`
