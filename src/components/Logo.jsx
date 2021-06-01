import React from "react"
import styled from "styled-components"

//Hey there, welcome to the logo component.
//At the moment, the logo is a simple blue square.
//So I'd recommend updating this component with a logo image when
//the time comes ;)
function Logo() {
  return <StyledLogo></StyledLogo>
}

export default Logo

const StyledLogo = styled.div`
  width: 100px;
  background: ${props => props.theme.main.blue};
  padding: 1rem 2rem;
`
