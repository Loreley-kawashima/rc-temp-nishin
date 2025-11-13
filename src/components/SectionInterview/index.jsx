import React from "react"
import { Link } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from "@mui/material";

const Component = ({ interviewDescription, interviews }) => {

  const settings = {
    slidesToScroll: 1,
    slideToShow: 2,
    dots: true,
    autoplay: true,
    arrows: true,
    centerMode: true,
    variableWidth: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <section className="interviewSec">
      <div className="content">
        <div className="comTtlBox">
          <h2 className="headLine04 fadeInUp"><span className="en">INTERVIEW</span><span className="jp">インタビュー</span></h2>
          {interviewDescription !== "コメントアウト" && (
            <p className="title fadeInUp" dangerouslySetInnerHTML={{ __html: interviewDescription }} />
          )}
        </div>
      </div>


      {interviews[1] ?
        // 従業員インタビューが2つ以上ある場合はこのコードが出る（windowサイズ897px以上）
        <ul className="listUl clearfix fadeInUp pc">
          <Slider {...settings}>

            {interviews
              .filter(interview => interview.interviewee) // 名前が存在するものだけ
              .filter((interview, index, self) =>
                index === self.findIndex(i => i.interviewee === interview.interviewee)
              )
              .map((interview, index) => (
                <div key={index}>
                  <li>
                    <Link to={`/${interview.slug}`}>
                      <span className="pho">
                        <span className="infoPho">
                          <img
                            src={interview.media.url}
                            style={{
                              objectFit: "cover",
                            }}
                            alt=""
                          />
                        </span>
                        <span className="txtBox">
                          <span className="info">
                            <span className="name">
                              {interview.interviewee}
                            </span>
                            {interview.career}
                          </span>
                        </span>
                      </span>
                      <span className="hover">詳細を見る</span>
                    </Link>
                  </li>
                </div>
              ))}

          </Slider>
        </ul>
        :
        // 従業員インタビューが1つの場合はこのコードが出る（windowサイズ897px以上）
        <ul className="listUl pc clearfix fadeInUp">
          {interviews
            .filter(interview => interview.interviewee) // 名前が存在するものだけ
            .filter((interview, index, self) =>
              index === self.findIndex(i => i.interviewee === interview.interviewee)
            )
            .map((interview, index) => (
              <div key={index}>
                <li>
                  <Link to={`/${interview.slug}`}>
                    <span className="pho">
                      <span className="infoPho">
                        <img
                          src={interview.media.url}
                          style={{
                            objectFit: "cover",
                          }}
                          alt=""
                        />
                      </span>
                      <span className="txtBox">
                        <span className="info">
                          <span className="name">
                            {interview.interviewee}
                          </span>
                          {interview.career}
                        </span>
                      </span>
                    </span>
                    <span className="hover">詳細を見る</span>
                  </Link>
                </li>
              </div>
            ))}
        </ul>
      }

      {/* windowサイズ896px以下 */}
      <ul className="listUl sp clearfix fadeInUp">
        {interviews
          .filter(interview => interview.interviewee) // 名前が存在するものだけ
          .filter((interview, index, self) =>
            index === self.findIndex(i => i.interviewee === interview.interviewee)
          )
          .map((interview, index) => (
            <div key={index}>
              <li>
                <Link to={`/${interview.slug}`}>
                  <span className="pho">
                    <span className="infoPho">
                      <img
                        src={interview.media.url}
                        style={{
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    </span>
                    <span className="txtBox">
                      <span className="info">
                        <span className="name">
                          {interview.interviewee}
                        </span>
                        {interview.career}
                      </span>
                    </span>
                  </span>
                  <span className="hover">詳細を見る</span>
                </Link>
              </li>
            </div>
          ))}
      </ul>


    </section>
  )
}

export default Component
