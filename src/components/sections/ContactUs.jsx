import React from "react"
import styled from "styled-components"
import SectionContainer from "./SectionContainer"

//icon imports
import facebookIcon from "../../assets/icons/facebook.svg"
import linkedinIcon from "../../assets/icons/linkedin-icon.svg"
import twitterIcon from "../../assets/icons/twitter.svg"

function ContactUs() {
  return (
    <SectionContainer>
      <GridContainer>
        <TextWrapper>
          <div>
            <h2>We're here to help</h2>
            <p>
              If you'd like to contact us, please complete our form with details
              of your query and a relevant member of the team will be in touch.
            </p>
          </div>
          <div>
            <h3>Has your question been answered?</h3>
            <a href="https://google.com">Check out our FAQ's page</a>
          </div>
          <div>
            <h3>Follow us on social media</h3>
            <a href="https://google.com">
              <TwitterIcon src={twitterIcon} />
            </a>
            <a href="https://google.com">
              <LinkedinIcon src={linkedinIcon} />
            </a>
            <a href="https://google.com">
              <FacecbookIcon src={facebookIcon} />
            </a>
          </div>
        </TextWrapper>
        <div>
          <StyledForm action="https://google.com">
            <label for="reason">Your reason for contacting us today?*</label>
            <select name="reason" required>
              <option value="Reason">Reason 1</option>
              <option value="Reason">Reason 2</option>
              <option value="Reason">Reason 3</option>
              <option value="Reason">Reason 4</option>
            </select>
            <InputWrapper>
              <div>
                <label for="fname">First Name*</label>
                <input type="text" name="fname" />
              </div>
              <div>
                <label for="sname">Surname*</label>
                <input type="text" name="sname" />
              </div>
            </InputWrapper>

            <label for="email">Email Address*</label>
            <input type="email" name="email" required />
            <label for="message">Your Message*</label>
            <textarea name="message" required />
            <input type="Submit" value="Submit"></input>
          </StyledForm>
        </div>
      </GridContainer>
    </SectionContainer>
  )
}

export default ContactUs

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    grid-template-columns: 1fr;
  }
`

const TextWrapper = styled.div`
  h2,
  h3 {
    color: ${props => props.theme.main.blue};
    font-family: ${props => props.theme.fonts.bold};
    font-size: 1.2rem;
  }

  h2 {
    font-size: ${props => props.theme.fontSizes.medium};
  }

  h3 {
    padding: 2rem 0 1rem 0;
  }

  p {
    padding: 2rem 0;
    max-width: 600px;
  }

  a {
    font-family: ${props => props.theme.fonts.regular};
    text-decoration: underline !important;
  }
`

//Social Icon styles
const Icon = styled.img`
  height: 25px;
  width: 25px;
  padding: 2px;
  background: ${props => props.theme.main.blue};
  border-radius: 50%;
  fill: red !important;
`

const FacecbookIcon = styled(Icon)``
const LinkedinIcon = styled(Icon)``
const TwitterIcon = styled(Icon)``

const StyledForm = styled.form`
  width: 90%;
  margin-left: auto;

  input,
  select,
  textarea {
    border-radius: 4px;
    border: 2px solid #d8d8d8;
    background: ${props => props.theme.main.white};
    margin: 1rem 0;
    padding: 1rem;
  }

  input[type="text"] {
    display: inline-block;
    width: 100%;
  }

  input[type="email"] {
    width: 100%;
  }

  textarea[name="message"] {
    width: 100%;
    height: 150px;
  }

  input[type="submit"] {
    background: ${props => props.theme.main.blue};
    color: ${props => props.theme.main.white};
    border: none;
    padding: 1rem 2rem;
    font-family: ${props => props.theme.fonts.bold};
  }

  input:focus {
  }

  select {
    width: 100%;
  }

  label {
    padding-top: 2rem;
    width: 100%;
    color: ${props => props.theme.main.blue};
    font-family: ${props => props.theme.fonts.bold};

    @media screen and (max-width: ${props =>
        props.theme.screenDimensions.mobile}) {
      padding-top: 1rem;
    }
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    width: 100%;
    margin: auto auto;
  }
`

const InputWrapper = styled.div`
  display: flex;
  grid-gap: 1rem;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    flex-direction: column;
    grid-gap: 0;
  }

  div {
    width: 100%;
  }
`
