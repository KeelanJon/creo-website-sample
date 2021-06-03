import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

//Component imports
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/Header"
import Slider from "../components/Slider"
import StyledButton from "../components/StyledButton"
import Hero from "../components/Hero"

//Page Section imports
import Services from "../components/sections/Services"
import Stories from "../components/sections/Stories"
import LatestUpdates from "../components/sections/LatestUpdates"
import Fundraise from "../components/sections/Fundraise"
import TopBar from "../components/TopBar"
import Volunteer from "../components/sections/Volunteer"
import GetInvolved from "../components/sections/GetInvolved"
import ContactUs from "../components/sections/ContactUs"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <Slider />
      <Services />
      <Stories />
      <GetInvolved />
      <Fundraise />
      <LatestUpdates postData={posts} />
      <Volunteer />
      <ContactUs />
    </Layout>
  )
}

export default BlogIndex

//Graphql query to retreive blog and site meta data
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
          featuredImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`
