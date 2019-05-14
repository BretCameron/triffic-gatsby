import React from "react"
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from "prop-types"

const navlinkStyle = {
  display: `inline-block`,
  padding: `0 15px`,
  cursor: `pointer`
}

const containerStyle = {
  maxWidth: `1000px`,
  margin: `0 auto`,
  padding: `30px 15px 15px 15px`,
}

const Header = ({ siteTitle }) => (
  <StaticQuery query={graphql`
      query {
        logoWhite: file(relativePath: {eq: "white_logo.svg"}) {
          publicURL
          relativePath
        }
        logoColour: file(relativePath: {eq: "colour_logo.svg"}) {
          publicURL
          relativePath
        }
      }
    `}
    render={data => {
      return (
        <header style={{ background: `linear-gradient(30deg, #005980, #008080, #00d99d)` }}>
          <div style={containerStyle}>
            <div style={{ display: `flex`, justifyContent: `space-between`, alignItems: `start` }}>
              <div>
                <Link to="/">
                  <img src={data.logoWhite.publicURL} alt="Logo" width="120" style={{ margin: 0, padding: 0 }} />
                </Link>
              </div>
              <div style={{ padding: `20px 0 0 0`, margin: `0 0 0 0` }}>
                <ul style={{ listStyle: `none` }}>
                  <Link style={{ color: `white`, }} to="/#our-process"><li style={navlinkStyle}>Our Process</li></Link>
                  <Link style={{ color: `white`, }} to="/#sample-writing"><li style={navlinkStyle}>Sample Writing</li></Link>
                  <Link style={{ color: `white`, }} to="/#our-team"><li style={navlinkStyle}>Our Team</li></Link>
                  <Link style={{ color: `white`, }} to="/#contact-us"><li style={navlinkStyle}>Contact Us</li></Link>
                </ul>
              </div>
            </div>
          </div>
        </header>
      )
    }
    }
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
