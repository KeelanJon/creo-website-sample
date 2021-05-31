import React from "react"
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"
import styled from "styled-components"
import StyledButton from "./StyledButton"

const StyledNav = styled(Navbar)`

  padding: 1.5rem; 0;


  .nav-link{
    
    background: red;

  }

`

const NavBanner = styled(Navbar)`
  background: ${props => props.theme.main.primaryColor};
`

function Header() {
  return (
    <div>
      {/*Upper Nav bar */}
      <NavBanner>
        <Navbar.Brand href="#home">Text side AAA</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form inline>
            <span>Icon</span>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <Navbar.Text>
            Search<a href="#login">Mark Otto</a>
          </Navbar.Text>
          <Navbar.Text>
            Search<a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </NavBanner>

      {/*Primary Navbar */}
      <StyledNav bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ml-auto">
            <NavDropdown title="Find Help">
              <NavDropdown.Item href="https://google.com">
                Our Servicecs
              </NavDropdown.Item>
              <NavDropdown.Item href="https://google.com">
                How we can help
              </NavDropdown.Item>
              <NavDropdown.Item href="https://google.com">
                Referrals
              </NavDropdown.Item>
              <NavDropdown.Item href="https://google.com">
                Do you require urgent help?
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <StyledButton className=".me-3">Donate</StyledButton>
          <Button variant="outline-success">Search</Button>
        </Navbar.Collapse>
      </StyledNav>
    </div>
  )
}

export default Header
