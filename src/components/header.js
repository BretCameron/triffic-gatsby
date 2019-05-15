import React from "react"
import { Link, graphql, StaticQuery } from 'gatsby'
// import PropTypes from "prop-types"
import ReactResizeDetector from 'react-resize-detector'

const containerStyle = {
  maxWidth: `1000px`,
  margin: `0 auto`,
  padding: `30px 15px 15px 15px`,
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mobileNavOpen: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleBackground = this.handleBackground.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  handleClick() {
    const newState = this.state;
    newState.mobileNavOpen = !this.state.mobileNavOpen;
    this.setState(newState);
  }
  
  closeNav() {
    const newState = this.state;
    newState.mobileNavOpen = false;
    this.setState(newState);
  }

  handleBackground() {
    if (!this.props.background && !this.state.mobileNavOpen) {
      return "linear-gradient(30deg, #005980, #008080, #00d99d)";
    };
    if (this.props.background && !this.state.mobileNavOpen) {
      return this.props.background;
    };
    if (this.props.background === "none" && this.state.mobileNavOpen) {
      return "linear-gradient(30deg, #11111144, #22222244)";
    };
  }

  render() {
    return (
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
        bars: file(relativePath: {eq: "bars.svg"}) {
          publicURL
          relativePath
        }
      }
    `}
        render={data => {
          return (
            <>
             <ReactResizeDetector handleWidth onResize={this.closeNav} />
            <header style={{ background: `${this.handleBackground()}` }}>
              <div style={containerStyle}>
                <div style={{ display: `flex`, justifyContent: `space-between`, alignItems: `start` }}>
                  <div style={{ flexShrink: 0 }}>
                    <Link to="/">
                      <img src={data.logoWhite.publicURL} alt="Logo" width="120" style={{ margin: 0, padding: 0 }} />
                    </Link>
                  </div>
                  <div style={{ padding: `20px 0 0 0`, flexShrink: 0 }}>
                    <ul style={{ listStyle: `none` }}>
                      <li
                        className="triple-bar"
                      ><button type="button" style={{ background: `none`, border: `none`, padding: `10px 10px 6px 10px`, margin: `0 0 -10px 0`, transform: `translateY(-5px)`, cursor: `pointer` }} onClick={this.handleClick}>
                          <img src={data.bars.publicURL} alt="View Navigation" style={{
                            width: `2rem`,
                          }} />
                        </button>
                      </li>
                      <Link style={{ color: `white`, }} to="/#our-process"><li className="nav-link">Our Process</li></Link>
                      <Link style={{ color: `white`, }} to="/#sample-writing"><li className="nav-link">Sample Writing</li></Link>
                      <Link style={{ color: `white`, }} to="/#our-team"><li className="nav-link">Our Team</li></Link>
                      <Link style={{ color: `white`, }} to="/#contact-us"><li className="nav-link">Contact Us</li></Link>
                    </ul>
                  </div>
                </div>
              </div>
              <ul style={{ listStyle: `none`, margin: `0 0 20px 0`, textAlign: `center` }}>
                <Link onClick={this.closeNav} style={{ color: `white`, }} to="/#our-process" className={this.state.mobileNavOpen ? 'nav-link-mobile' : 'nav-link-hidden'}><li>Our Process</li></Link>
                <Link onClick={this.closeNav} style={{ color: `white`, }} to="/#sample-writing" className={this.state.mobileNavOpen ? 'nav-link-mobile' : 'nav-link-hidden'}><li>Sample Writing</li></Link>
                <Link onClick={this.closeNav} style={{ color: `white`, }} to="/#our-team" className={this.state.mobileNavOpen ? 'nav-link-mobile' : 'nav-link-hidden'}><li>Our Team</li></Link>
                <Link onClick={this.closeNav} style={{ color: `white`, }} to="/#contact-us" className={this.state.mobileNavOpen ? 'nav-link-mobile' : 'nav-link-hidden'}><li>Contact Us</li></Link>
              </ul>
            </header>
            </>
          )
        }
        }
      />
    )
  }
}

export default Header
