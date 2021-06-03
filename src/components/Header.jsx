import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import StyledButton from "./StyledButton"
import Logo from "./Logo"

//Array used to store nav link data
//Note to self, perhaps you should store this in a seperate file...

const NavLinks = [
  {
    name: "Find Help",
    link: "https://google.com",
    subLinks: [
      {
        name: "Our Services",
        link: "/",
      },
    ],
  },
  {
    name: "Get Involved",
    link: "https://google.com",
  },
  {
    name: "Updates",
    link: "https://google.com",
  },
  {
    name: "Resources",
    link: "https://google.com",
  },
  {
    name: "About Us",
    link: "https://google.com",
  },
  {
    name: "Contact",
    link: "https://google.com",
  },
]

//Note Link component will output an error when linking to
//an external link. Ideally these are used only internally.

function Header(props) {
  return (
    <Container>
      <ContentWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <StyledNav>
          {NavLinks.map(function (item, index) {
            return <Link to={item.link}>{item.name}</Link>
          })}
        </StyledNav>
        <div>
          <a href="https://google.com">
            <StyledButton
              textColor={props => props.theme.main.white}
              primary={true}
              style={{ marginRight: "1rem" }}
            >
              Donate
            </StyledButton>
          </a>
          <a href="https://google.com">
            <StyledButton
              textColor={props => props.theme.main.white}
              buttonColor={props => props.theme.main.pink}
              primary={true}
            >
              Need Urgent Help?
            </StyledButton>
          </a>
        </div>
      </ContentWrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
  padding: 0rem 5vw;
  width: 100%;

  width: 100%;
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

const StyledNav = styled.nav`
  color: ${props => props.theme.main.blue};
  padding: 0 0rem;

  a {
    padding: 1rem 1rem;
    font-family: ${props => props.theme.fonts.regular};
    color: ${props => props.theme.main.blue};

    &:hover {
      color: ${props => props.theme.main.pink};
    }
  }
`

const StyledSubMenu = styled.div`
  background: ${props => props.theme.main.white};
`
