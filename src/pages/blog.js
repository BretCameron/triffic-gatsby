import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Header from "../components/header"

const containerStyle = {
  maxWidth: `1000px`,
  margin: `0 auto`,
  padding: `30px 30px 15px 30px`,
}

const blogContainerStyle = {
  maxWidth: `600px`,
  margin: `0 auto`,
  padding: `50px 15px`,
}

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.blogContentRef = React.createRef();
    this.state = { wordCount: 0 }
  }

  componentDidMount() {
    const newState = this.state;
    newState.wordCount = this.blogContentRef.current.innerHTML.split(' ').length;
    console.log(newState);
    this.setState(newState);
  }

  render() {
    return (
      <StaticQuery
        query={pageQuery}
        render={data => {
          console.log(data);
          return (
            <>
              <Header />
              <div style={blogContainerStyle}>

                <div className="blog-post">
                  <div style={{ textAlign: `center` }}>
                    <h1>What can marketers learn from the rise of TikTok?</h1>
                    <h2>Why TikTok is poised to become more influential than Snapchat</h2>
                    <hr />
                    <p><i>{Math.ceil(this.state.wordCount / 200)} minute read</i></p>
                    <hr />
                  </div>

                  <div ref={this.blogContentRef} className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra tellus in hac habitasse platea dictumst. Ut consequat semper viverra nam libero. Lectus urna duis convallis convallis. Elit pellentesque habitant morbi tristique. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Odio facilisis mauris sit amet massa vitae tortor condimentum. Lacus sed turpis tincidunt id aliquet risus feugiat. Diam sit amet nisl suscipit. Odio ut enim blandit volutpat maecenas. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Sagittis orci a scelerisque purus. Nisi scelerisque eu ultrices vitae auctor eu.</p>
                  </div>
                </div>
              </div>
            </>
          )
        }}
      />
    )
  }
}


const pageQuery = graphql`
        {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                   path
                    date
                    title
                    subtitle
                  }
                }
              }
            }
          }`
