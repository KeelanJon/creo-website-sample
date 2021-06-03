import React from "react"
import styled from "styled-components"
import SectionContainer from "./sections/SectionContainer"
import StyledButton from "./StyledButton"

//icon imports
import facebookIcon from "../assets/icons/facebook.svg"
import twitterIcon from "../assets/icons/twitter.svg"
import instagramIcon from "../assets/icons/instagram.svg"
import tiktokIcon from "../assets/icons/tiktok.svg"
import creoLogo from "../assets/icons/creo_logo.svg"

function Footer(props) {
  return (
    <SectionContainer bgColor={props => props.theme.main.blue}>
      <ColumnWrapper>
        <LinkColumn>
          <InnerColumn style={{ paddingLeft: "0", borderLeft: "none" }}>
            <Logo>LOGO</Logo>
          </InnerColumn>

          <StyledButton
            primary={true}
            textColor={props => props.theme.main.white}
            buttonColor={props => props.theme.main.pink}
            style={{ display: "block", margin: "1rem 0" }}
          >
            Need Urgent Help?
          </StyledButton>
          <StyledButton
            primary={true}
            textColor={props => props.theme.main.white}
            buttonColor={props => props.theme.main.violet}
            style={{ display: "block", margin: "1rem 0" }}
          >
            Donate
          </StyledButton>
        </LinkColumn>
        <LinkColumn>
          <InnerColumn style={{ borderLeft: "none" }}>
            <h5>Legal Information</h5>
            <a href="https://google.com">Privacy Policy</a>
            <a href="https://google.com">Terms And Conditions</a>
          </InnerColumn>
        </LinkColumn>
        <LinkColumn>
          <InnerColumn>
            <h5>Contact Us</h5>
            <a href="https://google.com">Tel: 01234 56789</a>
            <a href="https://google.com">Fax: 01234 567890</a>
            <a href="https://google.com">Email: admin:email.com</a>
          </InnerColumn>
        </LinkColumn>
        <LinkColumn>
          <InnerColumn>
            <h5>Connect With Us</h5>
            <IconContainer>
              <a href="https://google.com">
                <Icon src={facebookIcon} />
              </a>
              <a href="https://google.com">
                <Icon src={twitterIcon} />
              </a>
              <a href="https://google.com">
                <Icon src={instagramIcon} />
              </a>
              <a href="https://google.com">
                <Icon src={tiktokIcon} />
              </a>
            </IconContainer>
          </InnerColumn>
        </LinkColumn>
        <LinkColumn>
          <InnerColumn>
            <h5>Shop</h5>
          </InnerColumn>
        </LinkColumn>
      </ColumnWrapper>

      <Credits>
        <p>
          {new Date().getFullYear()} © Copyright | Registered With The Charity
          Commission, Number 111111
        </p>
        <p>
          Design & Build by
          <a href="https://google.com">
            <img src={creoLogo} />
          </a>
        </p>
      </Credits>
    </SectionContainer>
  )
}

export default Footer

//Icon Styles
const IconContainer = styled.div`
  a {
    display: inline;
  }
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 1rem;

  &:hover {
    opacity: 0.5;
  }
`

//Component Styles here
const ColumnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 0;

  color: ${props => props.theme.main.white};
  font-size: ${props => props.theme.fontSizes.small};

  h5 {
    font-size: ${props => props.theme.fontSizes.small};
    font-family: ${props => props.theme.fonts.bold};
    padding: 0 0 1.5rem 0;
  }

  a {
    color: ${props => props.theme.main.white};
    font-family: ${props => props.theme.fonts.regular};
    font-size: 0.8rem;
    display: inline-block;
    padding: 0.5rem 0;
  }

  div {
    flex: 1;

    &:nth-of-type(1) {
      flex: 2;
    }
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    flex-direction: column;

    div {
      flex: 1;
    }
  }
`

const LinkColumn = styled.div`
  height: 100%;
  flex: 1;

  &:nth-of-type(1) {
    @media screen and (max-width: ${props =>
        props.theme.screenDimensions.tablet}) {
      display: flex;
      flex-direction: column;
    }
  }
`

const InnerColumn = styled.div`
  height: 200px;
  padding: 1rem 2rem;
  border-left: 1px solid ${props => props.theme.main.violet};

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    border: none;
    border-top: 1px solid ${props => props.theme.main.violet};
    padding: 2rem 0;
  }
`

const Credits = styled.div`
  display: flex;
  align-items: center;W
  justify-content: space-between;

  padding: 2rem 0;
  color: ${props => props.theme.main.white};
  border-top: 1px solid ${props => props.theme.main.violet};
  font-size: 0.8rem;

  img {
    width: 50px;
    margin-left: 0.3rem;
  }

  @media screen and (max-width: ${props =>
    props.theme.screenDimensions.tablet}) {
    flex-direction: column;
    text-align: center;

    p:nth-of-type(2) {
      padding-top: 2rem;
    }
  }
`

const Logo = styled.div`
  height: 100px;
  width: 200px;
  padding: 1rem;
  background: #ffffff;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    width: 80%;
    margin: auto auto;
  }
`
