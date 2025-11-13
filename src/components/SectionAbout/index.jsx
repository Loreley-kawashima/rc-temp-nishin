import React from "react"
import InnerMedia from "/src/components/InnerMedia"

const Component = ({ aboutUs, businessContents }) => {
  return (

    <section className="aboutSec">

      {/* 会社について */}
      <div className="aboutBox fadeInUp">
        <div className="textBox">
          <div className="inner">
            <h2 className="headLine04 fadeInUp"><span className="en">ABOUT US</span><span className="jp">{aboutUs.title}</span></h2>
            <p className="txt fadeInUp" dangerouslySetInnerHTML={{ __html: aboutUs.content }} />
          </div>
        </div>
        <div className="photoBox comIcon fadeInUp">
          <img src={aboutUs.media.url} alt={aboutUs.title} />
        </div>
      </div>

      {/* 事業紹介 */}
      <div className="aboutBox aboutBox01 fadeInUp">
        <div className="textBox">
          <div className="inner">
            <h2 className="headLine04 fadeInUp"><span className="en">BUSINESS</span><span className="jp">{businessContents.title}</span></h2>
            <p className="txt fadeInUp" dangerouslySetInnerHTML={{ __html: businessContents.content }} />
          </div>
        </div>
        <div className="photoBox">
          <img src={businessContents.media.url} alt={businessContents.title} />
        </div>
      </div>

    </section >

  )
}

export default Component
