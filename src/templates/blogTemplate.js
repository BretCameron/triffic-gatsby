import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Header from "../components/header"
import "../components/layout.scss"
import "../components/blog-post.scss"

// const containerStyle = {
//   maxWidth: `1000px`,
//   margin: `0 auto`,
//   padding: `30px 30px 15px 30px`,
// }

const blogContainerStyle = {
  maxWidth: `600px`,
  margin: `0 auto`,
  padding: `50px 15px`,
}

export default class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const { markdownRemark } = data // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark
    return (
      <>
        <Header />
        <div style={blogContainerStyle}>
          <div className="blog-post">
            <div style={{ textAlign: `center` }}>
              <h1>{frontmatter.title}</h1>
              <h2>{frontmatter.subtitle}</h2>
              <p><hr /><i>X minute read</i></p><hr />
            </div>

            <div className="blog-content">
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
      }
    }
  }
`
