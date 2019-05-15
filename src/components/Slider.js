import React from "react"
import { graphql, StaticQuery } from 'gatsby'
// import PropTypes from "prop-types"
// import BackgroundImage from "gatsby-background-image"

import Slide from "../components/Slide"

// const containerStyle = {
//   maxWidth: `1000px`,
//   margin: `0 auto`,
//   padding: `30px 30px 15px 30px`,
// }

// To do: recalculate height of slider on re-size

const sliderData = {
  slide1: {
    fluid: "typewriter",
    align: "left",
    // The following entry must follow 6-digit hexadecimal notation
    color: `#FFFFFF`,
    backgroundColor: "#040e18",
    description: "Companies that published 16+ blog posts per month got almost 3.5 times more traffic than companies that published zero to four monthly posts.",
    sourceName: "HubSpot",
    sourceURL: "https://www.hubspot.com/marketing-statistics",
  },
  slide2: {
    fluid: "desk",
    align: "left",
    // The following entry must follow 6-digit hexadecimal notation
    color: `#000000`,
    backgroundColor: "#040e18",
    description: "B2B companies that blogged 11+ times per month had almost three times more traffic than those blogging 0-1 times per month.",
    sourceName: "HubSpot",
    sourceURL: "https://www.hubspot.com/marketing-statistics",
  },
  slide3: {
    fluid: "typewriter2",
    align: "center",
    // The following entry must follow 6-digit hexadecimal notation
    color: `#FFFFFF`,
    backgroundColor: "#040e18",
    description: "One in ten blog posts are compounding, meaning organic search increases their traffic over time.",
    sourceName: "HubSpot",
    sourceURL: "https://www.hubspot.com/marketing-statistics",
  },
};

const slides = Object.values(sliderData);

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0,
      sliderHeight: 500,
      numberOfSlides: slides.length,
    };
    this.handleNextSlide = this.handleNextSlide.bind(this);
    this.handlePreviousSlide = this.handlePreviousSlide.bind(this);
    this.goToDirectSlide = this.goToDirectSlide.bind(this);
    this.populateSlides = this.populateSlides.bind(this);
    this.sliderProgress = this.sliderProgress.bind(this);
    this.sliderHeightRef = React.createRef();
  }

  componentDidMount() {
    const newState = this.state;
    newState.sliderHeight = this.sliderHeightRef.clientHeight;
    newState.numberOfSlides = slides.length;
    this.setState(newState);
  }

  handleNextSlide() {
    const newState = this.state;
    if (this.state.slide < this.state.numberOfSlides - 1) {
      newState.slide += 1;
    } else {
      newState.slide = 0;
    }
    this.setState(newState);
  }

  handlePreviousSlide() {
    const newState = this.state;
    if (this.state.slide > 0) {
      newState.slide -= 1;
    } else {
      newState.slide = this.state.numberOfSlides - 1;
    }
    this.setState(newState);
  }

  goToDirectSlide(e) {
    const goToSlide = Number(e.target.id.replace("circle-", ""));
    const newState = this.state;
    if (goToSlide !== this.state.slide) {
      newState.slide = goToSlide;
    };
    this.setState(newState);
  }

  populateSlides(slides) {
    return slides.map((slide, index) => {
      // return 1;
      return (
        <Slide
        key={index}
          fluid={slide.fluid}
          color={slide.color}
          align={slide.align}
          backgroundColor={slide.backgroundColor}
          description={slide.description}
          sourceName={slide.sourceName}
          sourceURL={slide.sourceURL}
          translateX={index * 100 + "%"}
        />
      )
    });
  }

  sliderProgress() {
    return slides.map((el, index) => {
      return <li id={`circle-${index}`} key={`circle-${index}`} onClick={this.goToDirectSlide} style={{ pointerEvents: `all`, cursor: `pointer`, display: `inline-block`, padding: `5px`, opacity: `${index === this.state.slide ? 1 : 0.5}`, color: `${slides[this.state.slide].color}`, userSelect: `none` }}>•</li>
    });
  }

  render() {
    return (
      <StaticQuery query={graphql`
      query {
        typewriter: file(relativePath: { eq: "typewriter.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
      }
}
}
rightarrow: file(relativePath: { eq: "right-arrow.svg" }) {
  relativePath
  absolutePath
  publicURL
}
leftarrow: file(relativePath: { eq: "left-arrow.svg" }) {
  relativePath
  absolutePath
  publicURL
}
      }
`}
        render={data => {
          return (
            <>
              <section ref={el => this.sliderHeightRef = el} style={{
                display: `block`,
                position: `static`,
                height: `500px`,
                background: `black`,
                padding: `0`,
                whiteSpace: `nowrap`,
                transform: `translateX(${-this.state.slide * 100}%)`,
                transition: `200ms ease-out`
              }}>


                {this.populateSlides(slides)}

                {/* <Slide
                  fluid={data.typewriter.childImageSharp.fluid}
                  backgroundColor={`#040e18`}
                  description="Original"
                  sourceName="HubSpot"
                  sourceURL="https://www.hubspot.com/marketing-statistics"
                >
                </Slide> */}
              </section>

              <div style={{
                width: `100% `,
                position: `absolute`,
                display: `flex`,
                justifyContent: `space-between`,
                alignItems: `center`,
                pointerEvents: `none`,
                zIndex: `2`,
                height: `${this.state.sliderHeight}px`,
                marginTop: `${-this.state.sliderHeight}px`
              }}>
                <div className="arrow-container-left"
                  onClick={this.handlePreviousSlide}>
                  <img src={data.leftarrow.publicURL} alt="Next Slide" />
                </div>
                <ul className="slider-progress">
                  {this.sliderProgress()}
                </ul>
                <div className="arrow-container-right"
                  onClick={this.handleNextSlide}>
                  <img src={data.rightarrow.publicURL} alt="Next Slide" />
                </div>
              </div>
            </>
          )
        }
        }
      />
    )
  }
}


export default Slider
