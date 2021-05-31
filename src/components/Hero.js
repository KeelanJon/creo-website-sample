import React from "react"
import styled from "styled-components"
import { Jumbotron, Button } from "react-bootstrap"

const Styles = styled.div`
  height: 80vh;
  background: red;
`

function Hero() {
  return (
    <Styles>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </Styles>
  )
}

export default Hero
