import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../../components/layout"
import Header from "../../components/header"
import Blog from "../../components/Blog"

const CBD = () => (
  <StaticQuery
    query={postQuery}
    render={data => {
      return (
        <Blog
          title={data.content.childMarkdownRemark.frontmatter.title}
          subtitle={data.content.childMarkdownRemark.frontmatter.subtitle}
          image={data.content.childMarkdownRemark.frontmatter.image}
          keywords={data.content.childMarkdownRemark.frontmatter.keywords}
          publishedIn={data.content.childMarkdownRemark.frontmatter.publishedIn}
          publishedURL={data.content.childMarkdownRemark.frontmatter.publishedURL}
        >
          {data.content.childMarkdownRemark.html}
        </Blog>
      )
    }
    }
  />
)


const postQuery = graphql`
        {
            content: file(name: {eq: "CBD"}) {
              childMarkdownRemark {
                frontmatter {
                  title
                  path
                  date
                  subtitle
                  image
                  keywords
                  publishedIn
                  publishedURL
                  }
                html
                }
            }
        }`

export default CBD
