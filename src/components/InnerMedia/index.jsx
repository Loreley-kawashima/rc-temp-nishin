import React from "react"

const Component = ({ media }) => {
  return (
    <>
      {media.type === 1 ? (
        <>
          <img
            src={media.url}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            alt=""
          />
        </>
      ) : (
        <>
          <video
            src={media.url}
            muted={true}
            autoPlay={true}
            loop={true}
            playsinline={true}
          />
        </>
      )}
    </>
  )
}

export default Component
