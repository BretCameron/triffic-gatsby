import React from "react"

const Tags = (props) => {
  const { keywords } = props;
  return (
    <>
      {keywords.split(", ").map(keyword => {
        return (
          <div
            style={{
              display: `inline-block`,
              fontSize: `0.9rem`,
              background: `#666`,
              color: `white`,
              padding: `1px 5px`,
              margin: `0 5px 20px 5px`
            }}
          >
            {keyword}
          </div>
        )
      })}
    </>
  )
}

export default Tags;