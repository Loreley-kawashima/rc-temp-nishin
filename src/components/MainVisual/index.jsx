import React from "react"

const Component = ({ siteTitle, media }) => {
  return (
    <div className="mainVisual">
      <div className="topBox">
        <div className="mainImg">
          {media.type === 1 ? (
            // 管理画面に画像を入れた場合はこちらのコードが出る
            <img
              src={media.url}
              style={{
                objectFit: "cover",
              }}
              alt=""
            />
          ) : (
            // 管理画面に動画を入れた場合はこちらのコードが出る
            <video
              src={media.url}
              muted={true}
              autoPlay={true}
              loop={true}
              playsInline={true}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Component
