import React from "react"

const titleStyle2 = {
  fontSize: `2.5rem`,
}

const subtitleStyle2 = {
  fontSize: `1.2rem`,
  padding: `0 0 10px 0`,
  fontWeight: `100`,
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

const tealBlock = {
  background: `teal`,
  color: `white`,
  width: `100%`,
  padding: `50px 0`
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

export default class ContactUs extends React.Component {

  render() {
    return (
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
            className="contact-form">
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
              <input type="submit" className="button" style={buttonStyle} value="Submit Form" />
            </div>
          </form>
        </div>
      </section>
    )
  }
}