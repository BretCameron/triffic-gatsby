import React from "react"
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"

const navlinkStyle = {
  display: `inline-block`,
  padding: `0 15px`,
  cursor: `pointer`
}

const containerStyle = {
  maxWidth: `1000px`,
  margin: `0 auto`,
  padding: `30px 30px 15px 30px`,
}

const footerStyle = {
  // background: `linear-gradient(30deg, #111, #002030, #005980, #005980, #008080)`,
  // background: `linear-gradient(30deg, #111, #005980, #008080)`,
  background: `linear-gradient(30deg, #111, #222)`,
  color: `white`,
  width: `100%`,
  margin: `0 0 0 0`
}

const Slider = ({ siteTitle }) => (
  <StaticQuery query={graphql`
      query {
        typewriter: file (relativePath: {eq: "typewriter.jpg"}) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
      }
    }
  } 
      }
    `}
    render={data => {
      return (
        <>
          <div
          >
            <BackgroundImage Tag="section"
              style={{ height: `50vh`, minHeight: `500px` }}
              fluid={data.typewriter.childImageSharp.fluid}
              backgroundColor={`#040e18`}
            >
              <div style={containerStyle}>
                <div style={{ padding: `0`, color: `white`, width: `50vw`, maxWidth: `500px` }}>
                  <h1 style={{ color: `rgba(100,100,100,0.5)`, fontFamily: `serif`, fontSize: `10rem`, margin: `0 0 -60px 0`, padding: 0 }}>“</h1>
                  <h2>
                    Companies that published 16+ blog posts per month got almost 3.5 times more traffic than companies that published zero to four monthly posts.
                    </h2>
                  <p style={{ fontSize: `0.9rem` }}>Source:<br /><a href="https://www.hubspot.com/marketing-statistics" style={{ color: `white` }}>https://www.hubspot.com/marketing-statistics</a></p>
                </div>
              </div>
            </BackgroundImage>
          </div>
        </>
      )
    }
    }
  />
)

Slider.propTypes = {
  siteTitle: PropTypes.string,
}

Slider.defaultProps = {
  siteTitle: ``,
}

export default Slider
