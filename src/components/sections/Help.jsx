import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

function Help() {
  return (
    <Container>
      <Row>
        <h2>How you can help</h2>
        <a>See how you can help</a>
      </Row>
      <Row>
        <Col>
          <h3>Become a volunteer</h3>
          <p>
            Volunteering at Mind can be a really rewarding and useful experience
            - and there's probably more ways of doing it than you ight think.
          </p>
          <a href="https://google.com">View details</a>
        </Col>
        <Col>
          <h3>Become a volunteer</h3>
          <p>
            Volunteering at Mind can be a really rewarding and useful experience
            - and there's probably more ways of doing it than you ight think.
          </p>
          <a href="https://google.com">View details</a>
        </Col>
        <Col>
          <h3>Become a volunteer</h3>
          <p>
            Volunteering at Mind can be a really rewarding and useful experience
            - and there's probably more ways of doing it than you ight think.
          </p>
          <a href="https://google.com">View details</a>
        </Col>
      </Row>
    </Container>
  )
}

export default Help

const StyledCard = styled.div`
  padding: 1rem;
  background: blue;
`
