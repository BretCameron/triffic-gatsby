import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from "gatsby-background-image"

const containerStyle = {
  maxWidth: `1000px`,
  margin: `0 auto`,
  padding: `30px 30px 15px 30px`,
}

export default class Slide extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <StaticQuery query={graphql`
      query {
  typewriter: file(relativePath: {eq: "typewriter.jpg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  typewriter2: file(relativePath: {eq: "typewriter2.jpg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  desk: file(relativePath: {eq: "desk.jpg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  rightarrow: file(relativePath: {eq: "right-arrow.svg"}) {
    relativePath
    absolutePath
    publicURL
  }
  leftarrow: file(relativePath: {eq: "left-arrow.svg"}) {
    relativePath
    absolutePath
    publicURL
  }
      }
    `}
        render={data => {
          return (
      <>
        <BackgroundImage Tag="div"
          style={{ minHeight: `500px`, width: `100%`, display: `inline-block`, }}
          fluid={data[this.props.fluid].childImageSharp.fluid}
          backgroundColor={this.props.backgroundColor}
        >
          <div style={containerStyle}>
            <div style={{ padding: `0`, color: `${this.props.color}`, whiteSpace: `normal`, display: `flex`, justifyContent: `${this.props.align === "right" ? 'flex-end' : this.props.align === "center" ? 'center' : 'flex-start'}`, textAlign: `center` }}>
            <div style={{maxWidth: `500px`}}>
              <h1 style={{ color: `${this.props.color}99`, fontFamily: `serif`, fontSize: `10rem`, margin: `0 0 -60px 0`, padding: 0 }}>“</h1>
              <h2>
                {this.props.description}
              </h2>
              <p style={{ fontSize: `0.9rem` }}>Source: <a href={this.props.sourceURL} style={{ color: `${this.props.color}`, }}>{this.props.sourceName}</a></p>
              </div>
            </div>
          </div>
          {this.props.children}
        </BackgroundImage>
      </>
    )
  }
}
/>
    )
}
}