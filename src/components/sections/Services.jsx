import React from "react"
import styled from "styled-components"
import StyledButton from "../StyledButton"
import SectionContainer from "../sections/SectionContainer"

//Array is used to store the services data
//This is then mapped through in the services component
//to output the 6 service cards
const services = [
  {
    title: "Counselling",
    description:
      "Whether it be a one time donation or setting up a repeat donation. Every donation helps us fight for mental health.",
    callToAction: "Make a donation to Newport Mind",
    bgColor: "#1300C1",
    textColor: "#ffffff",
  },
  {
    title: "Activity Groups",
    description:
      "Whether it be a one time donation or setting up a repeat donation. Every donation helps us fight for mental health.",
    callToAction: "Discover the ways we can help",
    bgColor: "#71F5C4",
    textColor: "#1300C1",
  },
  {
    title: "Mental Health Training",
    description:
      "Whether it be a one time donation or setting up a repeat donation. Every donation helps us fight for mental health.",
    callToAction: "Discover how to get involved",
    bgColor: "#8149FF",
    textColor: "#ffffff",
  },
  {
    title: "Supported Housing",
    description:
      "Whether it be a one time donation or setting up a repeat donation. Every donation helps us fight for mental health.",
    callToAction: "Discover how we can teach",
    bgColor: "#FF0071",
    textColor: "#ffffff",
  },
  {
    title: "Young People's Services",
    description:
      "Whether it be a one time donation or setting up a repeat donation. Every donation helps us fight for mental health.",
    callToAction: "Discover who we are and what we do",
    bgColor: "#9DA8FF",
    textColor: "#1300C1",
  },
  {
    title: "Contact us",
    description:
      "Whether it be a one time donation or setting up a repeat donation. Every donation helps us fight for mental health.",
    callToAction: "Get in touch with us",
    bgColor: "#FFCDD9",
    textColor: "#1300C1",
  },
]

//Container used to create grid layout
const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    grid-template-columns: 1fr;
  }
`

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 280px;

  padding: 2rem;
  background: ${props => props.bgColor};
  color: ${props => props.color};

  transition: 0.3s ease 0s;
  cursor: pointer;

  &:hover {
    opacity: 0.3;
  }

  h3 {
    font-family: ${props => props.theme.fonts.bold};
    font-size: 2rem;
    padding-right: 5rem;
    padding-bottom: 0.5rem;
  }

  p {
    font-size: ${props => props.theme.fontSizes.small};
    padding-right: 2rem;
  }

  a {
    border: none;
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.color};
  }
`

const TextWrapper = styled.div`
  padding: 2rem 0;
  text-align: center;

  h2 {
    text-align: center;
    padding: 2rem 1rem;
    color: ${props => props.theme.main.blue};

    span {
      color: #8149ff;
    }
  }
`

//Service component here
function Services() {
  return (
    <SectionContainer>
      <TextWrapper>
        <h2>
          How can we help<span>?</span>
        </h2>
      </TextWrapper>

      <ServicesContainer>
        {services.map(function (item, index) {
          return (
            <ServiceCard bgColor={item.bgColor} color={item.textColor}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <a href="https://google.com">{item.callToAction}</a>
            </ServiceCard>
          )
        })}
      </ServicesContainer>
      <TextWrapper>
        <StyledButton>
          <a href="https://google.com">Explore all services</a>
        </StyledButton>
      </TextWrapper>
    </SectionContainer>
  )
}

export default Services
