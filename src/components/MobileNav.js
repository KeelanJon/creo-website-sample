import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import NavLinks from "../data/navlinks"
import StyledButton from "./StyledButton"

import closeIcon from "../assets/icons/close_menu.svg"

function MobileNav(props) {
  let menuState = props.state

  return (
    <Container state={menuState}>
      <OverFlowContainer state={menuState}>
        <ButtonBar>
          <div></div>
          <CloseButton
            src={closeIcon}
            onClick={function () {
              props.toggleMenu()
            }}
          />
        </ButtonBar>
        <NavContainer>
          <StyledNav>
            {NavLinks.map(function (item, index) {
              return (
                <Link to={item.link} key={index}>
                  {item.name}
                </Link>
              )
            })}
          </StyledNav>
          <StyledButton
            primary={true}
            buttonColor={props => props.theme.main.violet}
            textColor={props => props.theme.main.white}
          >
            Donate
          </StyledButton>
        </NavContainer>
      </OverFlowContainer>
    </Container>
  )
}

export default MobileNav

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.main.white};
  z-index: 999;
  display: ${props => (props.state ? "inline" : "none")};
`

const OverFlowContainer = styled.div`
  overflow: hidden;
  height: 100%;
  transition: 0.6s ease 0s;

  transform: translateX(${props => (props.state ? "0" : "100%")});
`

const ButtonBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1rem 1rem;

  border-bottom: 1px solid blue;
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding: 3rem 1.5rem;
`

const StyledNav = styled.nav`
  a {
    font-family: ${props => props.theme.fonts.regular};
    font-size: 2rem;
    color: ${props => props.theme.main.blue};
    width: 100%;
    display: inline-block;

    padding: 0.5rem 0;

    transition: 0.3s ease 0s;

    &:hover {
      padding-left: 1rem;
    }
  }
`

const CloseButton = styled.img`
  background: ${props => props.theme.main.pink};
  width: 2rem;
  padding: 0.5rem;
  border-radius: 4px;

  cursor: pointer;

  transition: 0.3s ease 0s;

  &:hover {
    transform: scale(1.1);
  }
`
