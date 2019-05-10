import React from "react"
import { Link, graphql, StaticQuery } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery query={graphql`
      query {
        background: file(relativePath: {eq: "triffic_background03.svg"}) {
          publicURL
          relativePath
        }
      }
    `}
    render={data => {

      const heroStyle = {
        backgroundImage: `url(${data.background.publicURL})`,
        backgroundPosition: `center bottom`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        color: `white`,
        width: `100%`,
        height: `600px`,
      }

      const containerStyle = {
        maxWidth: `800px`,
        margin: `0 auto`,
        padding: `30px`,
      }

      const buttonStyle = {
        backgroundColor: `#00b99b`,
        border: `none`,
        color: `white`,
        padding: `10px 15px`,
        borderRadius: `5px`,
        boxShadow: `5px 5px 10px rgba(0,0,0,0.3)`,
        fontWeight: `600`,
      }

      const processBlockStyle = {
        borderTop: `1px solid teal`,
        borderBottom: `1px solid teal`,
        padding: `20px 0 0 0`
      }

      const h3ProcessStyle = {
        minHeight: `3rem`,
      }

      const tealBlock = {
        backgroundColor: `teal`,
        color: `white`,
        width: `100%`,
      }

      const footerStyle = {
        backgroundColor: `black`,
        color: `white`,
        width: `100%`,
      }

      return (
        <Layout>
          <section style={heroStyle}>
            <div style={containerStyle}>
              <div style={{ maxWidth: `600px`, padding: `60px 0` }}>
                <h1>Business Blogging Made Easy</h1>
                <p>Drive 97% more traffic to your website with high-quality, SEO-optimised blog posts.</p>
                <a href="#contact-us"><button type="button" style={buttonStyle}>Arrange a Trial</button></a>
              </div>
            </div>
          </section>

          <section style={{ margin: `-80px 0 20px 0` }}>
            <div style={containerStyle}>
              <div style={{ textAlign: `right` }}>
                <h1>Our Process</h1>
                <p>Our 3-step formula for blogging success.</p>
              </div>
              <div style={{
                display: `grid`,
                gridTemplateColumns: `1fr 1fr 1fr`,
                gridGap: `20px`,
              }}>
                <div style={processBlockStyle}>
                  <h2>1.</h2>
                  <h3 style={h3ProcessStyle}>Define your goals</h3>
                  <p>We’ll start by establishing your core goals, the keywords you want to rank for, and your brand voice.</p>
                </div>
                <div style={processBlockStyle}>
                  <h2>2.</h2>
                  <h3 style={h3ProcessStyle}>Create your blueprint</h3>
                  <p>Together, we’ll fine-tune a content plan – usually covering the next 3-6 months – based on your specific goals.</p>
                </div>
                <div style={processBlockStyle}>
                  <h2>3.</h2>
                  <h3 style={h3ProcessStyle}>Hit publish</h3>
                  <p>We’ll send you your content on a regular schedule, and – after any feedback – all you have to do is press publish!</p>
                </div>
              </div>
            </div>
          </section>

          <section style={tealBlock}>
            <div style={containerStyle}>
              <h1>Sample Writing</h1>
              <p>A few samples of our work. If you’d like to see more, or you’re looking for a specific vertical, get in touch.</p>
              <div>
                <h2>Finance</h2>
                <p>What we can learn from the commodity dip</p>
              </div>
              <div>
                <h2>Software as a Service</h2>
                <p>Boost your productivity with machine learning</p>
              </div>
              <div>
                <h2>Social Media</h2>
                <p>What can marketers learn from the rise of TikTok?</p>
              </div>
              <div>
                <h2>Recruitment</h2>
                <p>20 steps to landing your Dream Job</p>
              </div>
              <div>
                <h2>Property</h2>
                <p>How to stay ahead in property in 2019</p>
              </div>
              <div>
                <h2>CBD</h2>
                <p>How can you spot the real CBD from the fakes?</p>
              </div>
            </div>
          </section>

          <section>
            <div style={containerStyle}>
              <h1>About Us</h1>
              <p>Our founders came from a copywriting and marketing background.</p>
              <p>Together, they have 3 humanities degrees from the University of Cambridge, and they have worked on campaigns for clients including Facebook, EY, Universal Music and Deliveroo.</p>
            </div>
          </section>

          <section style={tealBlock} id="contact-us">
            <div style={containerStyle}>
              <h1>Contact Us</h1>
              <p>If you want to find out more or arrange a trial, simply fill in the form below.</p>
              <form>
                <label htmlFor="name">
                  Name*:{' '}
                  <input type="text" />
                </label>
                <label htmlFor="email">
                  Email*:{' '}
                  <input type="text" />
                </label>
                <label htmlFor="website">
                  Company Website*:{' '}
                  <input type="text" />
                </label>
                <label htmlFor="message">
                  Message:{' '}
                  <textarea />
                </label>
                <input type="submit" style={buttonStyle} value="Submit Form" />
              </form>
            </div>
          </section>

          <div style={footerStyle}>
            <div style={containerStyle}>
              <hr />
              <ul>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
              <img alt="Logo" />
              <p>© triffic 2019</p>
              <p>Website by Bret Cameron</p>
            </div>
          </div>
        </Layout>
      )
    }
    }
  />
)

export default IndexPage
