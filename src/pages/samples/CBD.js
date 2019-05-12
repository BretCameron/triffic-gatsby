import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../../components/layout"
import Header from "../../components/header"
import Blog from "../../components/Blog"

const CBD = () => (
  <StaticQuery
    query={graphql`
        {
            content: file(name: {eq: "CBD"}) {
              childMarkdownRemark {
                frontmatter {
                  title
                  path
                  date
                  subtitle
                  image
                  }
                html
                }
            }
        }`
    }
    render={data => {

      console.log(data.content.childMarkdownRemark.html);

      return (
        <Blog
          title={data.content.childMarkdownRemark.frontmatter.title}
          subtitle={data.content.childMarkdownRemark.frontmatter.subtitle}
          image={data.content.childMarkdownRemark.frontmatter.image}
        >
          {data.content.childMarkdownRemark.html}
        </Blog>
      )
    }
    }
  />
)

export default CBD
