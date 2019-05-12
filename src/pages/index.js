import React from "react"
import { Link, graphql, StaticQuery } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

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
        height: `700px`,
      }

      const navlinkStyle = {
        display: `inline-block`,
        padding: `0 15px`,
        cursor: `pointer`
      }

      const titleStyle = {
        fontSize: `3.2rem`,
      }

      const titleStyle2 = {
        fontSize: `2.5rem`,
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
        padding: `30px`,
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

      const processBlockStyle = {
        borderTop: `2px solid teal`,
        borderBottom: `2px solid teal`,
        padding: `20px 0 0 0`,
        // borderRadius: `5px`,
      }

      const h3ProcessStyle = {
        minHeight: `3rem`,
      }

      const tealBlock = {
        background: `teal`,
        color: `white`,
        width: `100%`,
        padding: `50px 0`
      }

      const gradientBlock = {
        background: `linear-gradient(-90deg, teal, #005980)`,
        color: `white`,
        width: `100%`,
        padding: `50px 0`
      }

      const sampleStyle = {
        border: `1px solid white`,
        padding: `20px`,
        borderRadius: `5px`,
        background: `rgba(255, 255, 255, 0.05)`,
      }

      const labelStyle = {
        padding: `0 0 10px 0`,
        fontWeight: `100`,
      }

      const inputStyle = {
        width: `100%`,
        background: `rgba(255,255,255,0.3)`, border: `none`,
        fontSize: `1rem`,
        fontWeight: `100`,
        minHeight: `2.4rem`,
        padding: `5px`,
        color: `white`,
        borderRadius: `4px`,
      }

      const textareaStyle = {
        fontSize: `1rem`,
        fontWeight: `100`,
        width: `100%`,
        background: `rgba(255,255,255,0.3)`, border: `none`,
        minHeight: `6.6rem`,
        maxHeight: `19.8rem`,
        padding: `5px`,
        color: `white`,
        borderRadius: `4px`,
        resize: `vertical`,
      }

      const footerStyle = {
        background: `linear-gradient(#001111, black)`,
        color: `white`,
        width: `100%`,
        margin: `-20px 0 0 0`
      }

      return (
        <Layout>
          <section style={heroStyle}>
            {/* <Header /> */}
            <div style={containerStyle}>
              <div style={{ display: `flex`, justifyContent: `space-between`, alignItems: `start` }}>
                <div><img src={data.logoWhite.publicURL} alt="Logo" width="120" /></div>
                <div style={{ padding: `20px 0`, margin: `0 0 0 0` }}>
                  <ul style={{ listStyle: `none` }}>
                    <a style={{ color: `white`, }} href="#our-process"><li style={navlinkStyle}>Our Process</li></a>
                    <a style={{ color: `white`, }} href="#sample-writing"><li style={navlinkStyle}>Sample Writing</li></a>
                    <a style={{ color: `white`, }} href="#our-team"><li style={navlinkStyle}>Our Team</li></a>
                    <a style={{ color: `white`, }} href="#contact-us"><li style={navlinkStyle}>Contact Us</li></a>
                  </ul>
                </div>
              </div>
              <div style={{ maxWidth: `500px`, padding: `5px 0` }}>
                <h1 style={titleStyle}>Business Blogging Made Easy</h1>
                <p style={subtitleStyle}>Drive 97% more traffic to your website with high-quality, SEO-optimised blog posts.</p>
                <a href="#contact-us"><button type="button" style={buttonStyle}>Arrange a Trial</button></a>
              </div>
            </div>
          </section>

          <section style={{ margin: `-100px 0 20px 0` }} id="our-process">
            <div style={containerStyle}>
              <div style={{ textAlign: `right` }}>
                <h1 style={titleStyle2}>Our Process</h1>
                <p style={subtitleStyle2}>Our 3-step formula for blogging success.</p>
              </div>
              <div style={{
                display: `grid`,
                gridTemplateColumns: `1fr 1fr 1fr`,
                gridGap: `20px`,
              }}>
                <div style={processBlockStyle}>
                  <h2 style={numberStyle}>1.</h2>
                  <h3 style={h3ProcessStyle}>Define your goals</h3>
                  <p>We’ll start by establishing your core goals, the keywords you want to rank for, and your brand voice.</p>
                </div>
                <div style={processBlockStyle}>
                  <h2 style={numberStyle}>2.</h2>
                  <h3 style={h3ProcessStyle}>Create your blueprint</h3>
                  <p>Together, we’ll fine-tune a content plan – usually covering the next 3-6 months – based on your specific goals.</p>
                </div>
                <div style={processBlockStyle}>
                  <h2 style={numberStyle}>3.</h2>
                  <h3 style={h3ProcessStyle}>Hit publish</h3>
                  <p>We’ll send you your content on a regular schedule, and – after any feedback – all you have to do is press publish!</p>
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
                  <h1 style={titleStyle2}>Sample Writing</h1>
                  <p style={subtitleStyle2}>A few samples of our work. If you’d like to see more, or you’re looking for a specific vertical, feel free to <a href="#contact-us" style={{ color: `white` }}>get in touch</a>.</p>
                </div>
              </div>
              <div style={{
                display: `grid`,
                gridTemplateColumns: `1fr 1fr 1fr`,
                gridTemplateRows: `1fr 1fr`,
                textAlign: `center`,
                gridGap: `20px`,
                padding: `0 0 20px 0`
              }}>
                <div style={sampleStyle}>
                  <h2>Finance</h2>
                  <p>What we can learn from the commodity dip</p>
                </div>
                <div style={sampleStyle}>
                  <h2>SaaS</h2>
                  <p>Boost your productivity with machine learning</p>
                </div>
                <div style={sampleStyle}>
                  <h2>Social Media</h2>
                  <p>What can marketers learn from the rise of TikTok?</p>
                </div>
                <div style={sampleStyle}>
                  <h2>Recruitment</h2>
                  <p>20 steps to landing your dream job</p>
                </div>
                <div style={sampleStyle}>
                  <h2>Property</h2>
                  <p>How to stay ahead in property in 2019</p>
                </div>
                <div style={sampleStyle}>
                  <h2>CBD</h2>
                  <p>How can you spot the real CBD from the fakes?</p>
                </div>
              </div>
            </div>
          </section>

          <section style={{
            padding: `50px 0`,
            textAlign: `center`
          }} id="our-team">
            <div style={containerStyle}>
              <div style={subContainerStyle}>
                <h1 style={titleStyle2}>Our Team</h1>
                <p style={subtitleStyle2}>Our team have backgrounds in both copywriting and marketing (particularly SEO).</p><p style={subtitleStyle2}>Together, our founders have 3 humanities degrees from the University of Cambridge, and they have worked on campaigns for clients including <b>Facebook</b>, <b>EY</b>, <b>Universal Music</b> and <b>Deliveroo</b>.</p>
              </div>
            </div>
          </section>

          <section style={tealBlock} id="contact-us">
            <div style={containerStyle}>
              <div style={subContainerStyle}>
                <div style={{ textAlign: `center` }}>
                  <h1 style={titleStyle2}>Contact Us</h1>
                  <p style={subtitleStyle2}>If you want to find out more or arrange a trial, simply fill in the form below.</p>
                </div>
              </div>
              <form
                name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" id="contact"
                style={{
                  boxSizing: `border-box`,
                  display: `grid`,
                  gridTemplateColumns: `1fr 1fr 1fr`,
                  gridGap: `50px 20px`,
                }}>
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div>
                  <label htmlFor="name">
                    <span style={labelStyle}>Name*</span>
                    <br />
                    <input style={inputStyle} type="text" />
                  </label>
                </div>
                <div>
                  <label htmlFor="email">
                    <span style={labelStyle}>Email*</span>
                    <br />
                    <input style={inputStyle} type="text" />
                  </label>
                </div>
                <div>
                  <label htmlFor="website">
                    <span style={labelStyle}>Company Website*</span>
                    <br />
                    <input style={inputStyle} type="text" />
                  </label>
                </div>
                <div style={{ gridColumn: `1/4`, width: `100%`, }}>
                  <label htmlFor="message">
                    <span style={labelStyle}>Tell us more about what you're trying to achieve with your blog</span>                  <br />
                    <textarea style={textareaStyle} />
                  </label>
                </div>
                <div style={{ gridColumn: `1/4`, width: `100%`, textAlign: `center` }}>
                  <input type="submit" class="button" style={buttonStyle} value="Submit Form" />
                </div>
              </form>
            </div>
          </section>

          <footer style={footerStyle}>
            <div style={containerStyle}>
              <div style={{ textAlign: `center` }}>
                <ul style={{
                  listStyle: `none`,
                  padding: `0 0 20px 0`,
                  margin: `0`
                }}>
                  <li>Privacy Policy</li>
                  <li>Terms and Conditions</li>
                </ul>
                <img src={data.logoWhite.publicURL} alt="Logo" width="100" />
                <p style={{ fontSize: `0.9rem`, fontWeight: `100` }}>© {new Date().getFullYear()} triffic<br />Website by Bret Cameron</p>
              </div>
            </div>
          </footer>
        </Layout >
      )
    }
    }
  />
)

export default IndexPage
