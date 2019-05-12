import React from "react"
import Header from "../components/header"
import Tags from "../components/Tags"
import Footer from "../components/footer"

const containerStyle = {
  maxWidth: `1000px`,
  margin: `0 auto`,
  padding: `30px 30px 15px 30px`,
}

const blogContainerStyle = {
  maxWidth: `800px`,
  margin: `0 auto`,
  padding: `50px 15px 0 15px`,
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
    this.setState(newState);
  }

  render() {
    return (
      <>
        <Header />
        <div style={blogContainerStyle}>

          <div className="blog-post">
            <div style={{ textAlign: `center` }}>
              <h1>{this.props.title}</h1>
              <h2>{this.props.subtitle}</h2>
              <p>
                <span style={{ fontSize: `0.9rem`, textTransform: `uppercase` }}>{Math.ceil(this.state.wordCount / 200)} minute read</span>
                <div style={{ fontSize: `0.8rem`, fontStyle: `italic` }} dangerouslySetInnerHTML={{ __html: this.props.publishedIn ? `Originally published in <a href="${this.props.publishedURL}">${this.props.publishedIn}</a>.` : '' }}></div>
              </p>
              <hr />
              <Tags keywords={this.props.keywords} />
              <hr />
            </div>
          </div>
        </div>

        {this.props.image ? <img
          style={{
            width: `100%`,
            height: `50vh`,
            minHeight: `600px`,
            objectFit: `cover`,
            objectPosition: `center top`,
            margin: 0,
            padding: 0,
          }}
          src={this.props.image} alt={this.props.title}
        /> : ''}

        <div style={blogContainerStyle}>
          <div ref={this.blogContentRef} className="blog-content" dangerouslySetInnerHTML={{ __html: this.props.children }}>
          </div>
        </div>

        <Footer />

      </>
    )
  }
}