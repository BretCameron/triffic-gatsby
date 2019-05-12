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
              <p style={{ fontSize: `0.9rem` }}><i>{Math.ceil(this.state.wordCount / 200)} minute read</i></p>
              <hr />
              <Tags keywords="CBD, cannabis, cannabidol, medicine, health, wellness" />
              <hr />
            </div>
          </div>
        </div>

        <img
          style={{
            width: `100%`,
            maxHeight: `50vh`,
            objectFit: `cover`,
            objectPosition: `center`,
            margin: 0,
            padding: 0,
          }}
          src={this.props.image} alt="test"
        />

        <div style={blogContainerStyle}>
          <div ref={this.blogContentRef} className="blog-content" dangerouslySetInnerHTML={{ __html: this.props.children }}>
          </div>
        </div>

        <Footer />

      </>
    )
  }
}