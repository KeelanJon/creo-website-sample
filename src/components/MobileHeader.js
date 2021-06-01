import React from "react"
import styled from "styled-components"
import { useState } from "react"
import Logo from "./Logo"
import StyledButton from "./StyledButton"
import { StaticImage } from "gatsby-plugin-image"

import searchIcon from "../assets/icons/mobile_search.svg"
import closeIcon from "../assets/icons/close_menu.svg"
import menuIcon from "../assets/icons/mobile_menu.svg"
import MobileNav from "./MobileNav"

function MobileHeader(props) {
  const [menuState, updateMenuState] = useState(false)

  function toggleMenu() {
    updateMenuState(!menuState)
  }

  return (
    <Container>
      <MobileNav state={menuState} toggleMenu={toggleMenu} />

      <div>
        <Logo />
      </div>
      <ContentWrapper>
        <StyledButton
          primary={true}
          buttonColor={props => props.theme.main.pink}
          textColor={props => props.theme.main.white}
          style={mobileButtonStyles}
        >
          <a href="https://google.com">Urgent Help</a>
        </StyledButton>
        <img src={searchIcon} className="menu-icon" id="searchIcon" />
        <img
          src={menuIcon}
          className="menu-icon"
          id="menuIcon"
          onClick={function () {
            toggleMenu()
          }}
        />
      </ContentWrapper>
    </Container>
  )
}

export default MobileHeader

const mobileButtonStyles = {
  fontSize: ".8rem",
  padding: ".8rem 1rem",
  margin: "0 0",
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${props => props.theme.main.white};
  padding: 1rem 5vw;

  @media screen and (min-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    display: none;
  }
`
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${props => props.theme.fonts.regular};

  .menu-icon {
    width: 20px;
    height: 20px;

    margin-left: 1.2rem;
    cursor: pointer;
  }
`
