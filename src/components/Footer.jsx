import React from "react"
import styled from "styled-components"
import SectionContainer from "./sections/SectionContainer"
import StyledButton from "./StyledButton"

function Footer(props) {
  return (
    <SectionContainer bgColor={props => props.theme.main.blue}>
      <ColumnWrapper>
        <div>
          LOGO
          <div>
            <StyledButton
              primary={true}
              textColor={props => props.theme.main.white}
              buttonColor={props => props.theme.main.pink}
            >
              Need Urgent Help?
            </StyledButton>
            <StyledButton
              primary={true}
              textColor={props => props.theme.main.white}
              buttonColor={props => props.theme.main.violet}
            >
              Donate
            </StyledButton>
          </div>
        </div>
        <LinkColumn>
          <h5>Legal Information</h5>
          <a href="https://google.com">Privacy Policy</a>
          <a href="https://google.com">Terms And Conditions</a>
        </LinkColumn>
        <LinkColumn>
          <h5>Contact Us</h5>
          <a href="https://google.com">Tel: 01234 56789</a>
          <a href="https://google.com">Fax: 01234 567890</a>
          <a href="https://google.com">Email: admin:email.com</a>
        </LinkColumn>
        <LinkColumn>
          <h5>Connect With Us</h5>
        </LinkColumn>
        <LinkColumn>
          <h5>Shop</h5>
        </LinkColumn>
      </ColumnWrapper>
      <ColumnWrapper></ColumnWrapper>
      <Credits>
        <p>
          {new Date().getFullYear()} © Copyright | Registered With The Charity
          Commission, Number 111111
        </p>
        <p>
          Design & Build by
          <a href="https://google.com"> CREO</a>
        </p>
      </Credits>
    </SectionContainer>
  )
}

export default Footer

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
      flex: 3;
    }
  }
`

const LinkColumn = styled.div`
  padding: 1rem 2rem;
  height: 200px;

  flex: 1;

  &:nth-of-type(3) {
    border: 1px solid ${props => props.theme.main.violet};
    border-width: 0 1px 0 1px;
  }

  &:nth-of-type(4) {
    border: 1px solid ${props => props.theme.main.violet};
    border-width: 0 1px 0 0px;
  }
`
const Credits = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  color: ${props => props.theme.main.white};
  border-top: 1px solid ${props => props.theme.main.violet};

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    flex-direction: column;
  }
`
