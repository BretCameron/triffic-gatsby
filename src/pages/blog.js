import React from "react"
import { graphql } from "gatsby"
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

              <p>Nec dui nunc mattis enim ut tellus elementum. Lacinia quis vel eros donec ac odio tempor orci dapibus. Gravida dictum fusce ut placerat orci nulla. Curabitur gravida arcu ac tortor. Fermentum iaculis eu non diam. Egestas pretium aenean pharetra magna ac. Vitae tempus quam pellentesque nec nam aliquam. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Porttitor lacus luctus accumsan tortor. Ut lectus arcu bibendum at varius vel. Diam quam nulla porttitor massa id. Cursus risus at ultrices mi tempus imperdiet.</p>

              <p>Sollicitudin ac orci phasellus egestas. Eget arcu dictum varius duis at consectetur. Dui nunc mattis enim ut tellus elementum sagittis. Turpis tincidunt id aliquet risus feugiat. Fermentum posuere urna nec tincidunt praesent semper feugiat. Odio tempor orci dapibus ultrices in iaculis. Amet consectetur adipiscing elit duis tristique. Viverra nibh cras pulvinar mattis nunc sed. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Sed arcu non odio euismod. Nulla pharetra diam sit amet nisl. Sodales neque sodales ut etiam sit amet. Nec dui nunc mattis enim ut tellus elementum.</p>

              <p>Consectetur libero id faucibus nisl tincidunt eget nullam non. Tortor consequat id porta nibh venenatis. Imperdiet massa tincidunt nunc pulvinar sapien et. Nulla facilisi cras fermentum odio eu. Neque aliquam vestibulum morbi blandit cursus. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Nunc id cursus metus aliquam. Erat velit scelerisque in dictum non consectetur a erat nam. Malesuada fames ac turpis egestas maecenas. At elementum eu facilisis sed. Semper auctor neque vitae tempus. Vitae tortor condimentum lacinia quis vel eros donec ac. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Sed vulputate mi sit amet. Id semper risus in hendrerit gravida rutrum. Elementum integer enim neque volutpat ac tincidunt vitae semper.</p>

              <p>Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Est placerat in egestas erat imperdiet sed euismod nisi. Condimentum id venenatis a condimentum vitae sapien pellentesque. At imperdiet dui accumsan sit amet nulla facilisi morbi. Nibh nisl condimentum id venenatis a. Turpis in eu mi bibendum neque egestas congue quisque egestas. Imperdiet sed euismod nisi porta. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Pharetra sit amet aliquam id diam maecenas. Massa enim nec dui nunc mattis. Duis ut diam quam nulla porttitor massa id neque aliquam. Dui vivamus arcu felis bibendum ut tristique. Enim tortor at auctor urna nunc id cursus metus. Mattis enim ut tellus elementum sagittis vitae et leo. Eget est lorem ipsum dolor sit. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Quis viverra nibh cras pulvinar. Massa enim nec dui nunc mattis enim ut tellus.</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}


