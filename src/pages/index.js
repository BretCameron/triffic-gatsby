import React from "react"
import { Link, graphql, StaticQuery } from 'gatsby'
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Header from "../components/header"
import Slider from "../components/Slider"
import ContactUs from "../components/ContactUs"
import Footer from "../components/footer"

// To do: make header mobile friendly, and at really small widths the slider covers up the section below

const IndexPage = () => (
  <StaticQuery query={graphql`
      query {
        background: file(relativePath: {eq: "triffic_background03.svg"}) {
          publicURL
          relativePath
        }
        logoWhite: file(relativePath: {eq: "white_logo.svg"}) {
          publicURL
          relativePath
        }
        logoColour: file(relativePath: {eq: "colour_logo.svg"}) {
          publicURL
          relativePath
        }
      }
    `}
    render={data => {

      const heroStyle = {
        backgroundImage: `url(${data.background.publicURL})`,
        backgroundPosition: `50% bottom`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        color: `white`,
        width: `100%`,
        height: `auto`,
        padding: `0 0 150px 0`
      }

      const subtitleStyle = {
        fontSize: `1.4rem`,
        lineHeight: `2rem`,
        fontWeight: `100`,
      }

      const subtitleStyle2 = {
        fontSize: `1.2rem`,
        padding: `0 0 10px 0`,
        fontWeight: `100`,
      }

      const numberStyle = {
        fontSize: `4rem`,
        color: `#DDD`,
        // textAlign: `right`,
        // margin: `0`
      }

      const containerStyle = {
        maxWidth: `1000px`,
        margin: `0 auto`,
        padding: `0 15px`,
      }

      const subContainerStyle = {
        maxWidth: `600px`,
        margin: `0 auto`,
      }

      const buttonStyle = {
        backgroundColor: `#00b99b`,
        border: `none`,
        color: `white`,
        padding: `10px 15px`,
        borderRadius: `5px`,
        boxShadow: `5px 5px 10px rgba(0,0,0,0.3)`,
        fontWeight: `500`,
        fontSize: `1.1rem`,
        cursor: `pointer`,
        minWidth: `180px`
      }

      const h3ProcessStyle = {
        minHeight: `3rem`,
      }

      const gradientBlock = {
        background: `linear-gradient(-90deg, teal, #005980)`,
        color: `white`,
        width: `100%`,
        padding: `50px 0`
      }

      // const sampleStyle = {
      //   border: `1px solid white`,
      //   padding: `20px`,
      //   borderRadius: `5px`,
      //   background: `rgba(255, 255, 255, 0.05)`,
      // }

      return (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Triffic</title>
            <link rel="canonical" href="https://triffic.io/" />
          </Helmet>

          <Layout>

            <section style={heroStyle}>
              <Header background="none" />
              <div style={containerStyle}>

                <div style={{ maxWidth: `500px`, padding: `5px 0` }}>
                  <h1 className="title">Business Blogging Made Easy</h1>
                  <p style={subtitleStyle}>Drive 97% more traffic to your website with high-quality, SEO-optimised blog posts.</p>
                  <a href="#contact-us"><button type="button" style={buttonStyle}>Arrange a Trial</button></a>
                </div>
              </div>
            </section>

            <section style={{ margin: `-100px 0 20px 0` }} id="our-process">
              <div style={containerStyle}>
                <div className="our-process-heading">
                  <h1 className="title2">Our Process</h1>
                  <p style={subtitleStyle2}>Our 3-step formula for blogging success.</p>
                </div>
                <div className="our-process-grid">
                  <div>
                    <h2 style={numberStyle}>1.</h2>
                    <h3 style={h3ProcessStyle}>Define your goals</h3>
                    <p style={subtitleStyle2}>We’ll start by establishing your core goals, the keywords you want to rank for    and your brand voice.</p>
                  </div>
                  <div>
                    <h2 style={numberStyle}>2.</h2>
                    <h3 style={h3ProcessStyle}>Create your blueprint</h3>
                    <p style={subtitleStyle2}>Together, we’ll fine-tune a content plan – usually covering the next 3-6 months – based on your specific goals.</p>
                  </div>
                  <div>
                    <h2 style={numberStyle}>3.</h2>
                    <h3 style={h3ProcessStyle}>Hit publish</h3>
                    <p style={subtitleStyle2}>We’ll send you your content on a regular schedule, and – after any feedback – all you have to do is press publish!</p>
                  </div>
                </div>
              </div>
            </section>

            <section style={gradientBlock} id="sample-writing">
              <div style={containerStyle}>
                <div style={subContainerStyle}>
                  <div style={{
                    textAlign: `center`,
                    padding: `0 0 50px 0`
                  }}>
                    <h1 className="title2">Sample Writing</h1>
                    <p style={subtitleStyle2}>A few samples of our work. If you’d like to see more, or you’re looking for a specific vertical, feel free to <a href="#contact-us" style={{ color: `white` }}>get in touch</a>.</p>
                  </div>
                </div>
                <div className="sample-grid">
                  {/* <div style={sampleStyle}>
                  <h2>Finance</h2>
                  <p style={subtitleStyle2}>What we can learn from the commodity dip</p>
                </div>
                <div style={sampleStyle}>
                  <h2>Blockchain</h2>
                  <p style={subtitleStyle2}>How blockchain technology can improve your supply chain</p>
                </div> */}
                  <Link to="/samples/social" style={{
                    color: `white`, textDecoration: `none`
                  }}><div className="sample">
                      <h2>Social Media</h2>
                      <p style={subtitleStyle2}>What do users really think about Snapchat’s redesign?</p>
                    </div></Link>
                  {/* <div style={sampleStyle}>
                  <h2>Recruitment</h2>
                  <p style={subtitleStyle2}>20 steps to landing your dream job</p>
                </div>
                <div style={sampleStyle}>
                  <h2>Property</h2>
                  <p style={subtitleStyle2}>How to stay ahead in property in 2019</p>
                </div> */}
                  <Link to="/samples/CBD" style={{ color: `white`, textDecoration: `none` }}><div className="sample">
                    <h2>CBD</h2>
                    <p style={subtitleStyle2}>With the CBD industry exploding, how do you spot fake oils?</p>
                  </div></Link>
                </div>
              </div>
            </section>

            <section>
              <div style={containerStyle}>
                <div style={{
                  padding: `50px 0 0 0`,
                  textAlign: `left`
                }} id="our-team">
                  {/* <div style={subContainerStyle}> */}
                  <h1 className="title2">Our Team</h1>
                  <p style={subtitleStyle2}>Our team have backgrounds in both copywriting and marketing (particularly SEO).</p><p style={subtitleStyle2}>Together, our founders have 3 humanities degrees from the University of Cambridge, and they have worked on campaigns for clients including <b>Facebook</b>, <b>EY</b>, <b>Universal Music</b> and <b>Deliveroo</b>.</p>
                  {/* </div> */}
                </div>

                <div className="our-team-grid">
                  <div style={{ height: `100%`, padding: `20px 0 0 0` }}>
                    <h3>Bret Cameron</h3>
                    <h4>Co-Founder, Head of SEO</h4>
                    <p style={{ fontWeight: `100`, fontSize: `1.05rem` }}>Bret's background is in marketing. He was Head of Marketing at social media startup, Fanbytes, and managed campaigns for companies including Warner Music, Unviersal Music and Deliveroo.</p>
                    <p style={{ fontWeight: `100`, fontSize: `1.05rem` }}>Bret has a Master's in Medieval Languages from Cambridge, and has written for <i>The Drum</i>, among other industry publications.</p>
                  </div>
                  <div style={{ height: `100%`, borderBottom: `1px solid lightgrey`, borderTop: `1px solid lightgrey`, padding: `20px 0 0 0` }}>
                    <h3>Charlotte Gifford</h3>
                    <h4>Co-Founder, Head of Copywriting</h4>
                    <p style={{ fontWeight: `100`, fontSize: `1.05rem` }}>Charlotte's background is in copywriting. She was a copywriter and creative at RD Content, where she worked on campaigns for Facebook, EY, Cirque du Soleil and more.</p>
                    <p style={{ fontWeight: `100`, fontSize: `1.05rem` }}>Charlotte has a first class degree in English from the University of Cambridge.</p>
                  </div>
                </div>
              </div>
            </section>

            <Slider />

            <ContactUs />

            <Footer />
          </Layout >
        </>
      )
    }
    }
  />
)

export default IndexPage
