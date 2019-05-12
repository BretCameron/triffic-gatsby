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
  padding: `30px 30px 15px 30px`,
}

const footerStyle = {
  background: `linear-gradient(30deg, #111, #005980, #008080)`,
  color: `white`,
  width: `100%`,
  margin: `100px 0 0 0`
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
        <footer style={footerStyle}>
          <div style={containerStyle}>
            <div style={{ textAlign: `center` }}>
              <ul style={{
                listStyle: `none`,
                padding: `0 0 20px 0`,
                margin: `0`
              }}>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
              <Link to="/"><img src={data.logoWhite.publicURL} alt="Logo" width="100" /></Link>
              <p style={{ fontSize: `0.9rem`, fontWeight: `100` }}>© {new Date().getFullYear()} triffic<br />Website by Bret Cameron</p>
            </div>
          </div>
        </footer>
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
