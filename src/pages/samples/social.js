import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Blog from "../../components/Blog"

const social = () => (
  <StaticQuery
    query={postQuery}
    render={data => {
      return (
        <Blog
          title={data.content.childMarkdownRemark.frontmatter.title}
          subtitle={data.content.childMarkdownRemark.frontmatter.subtitle}
          image={data.image.childImageSharp.fluid}
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
            content: file(name: {eq: "SocialMedia"}) {
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
                image: file(relativePath: {eq: "post-images/social.jpg"}) {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
        }`

export default social
