import React from "react"
import Layout from "/src/components/Layout"
import Seo from "/src/components/Seo"
import PagePath from "/src/components/PagePath"
import Map from "/src/components/Map"
import InnerMedia from "/src/components/InnerMedia"
import PointIcon from "/src/images/common/icon_point.png"
import ContactForm from "/src/components/ContactForm"
import { Link as Scroll } from 'react-scroll'

import interviewPhoto from "/src/images/recruit/interview.jpg"
import interviewMovie from "/src/images/recruit/interview.mp4"

const Page = ({ location, pageContext }) => {
  return (
    <Layout>

      <div className="recruitPage">

        {/* KV */}
        {pageContext.topMedia.type === 1 ? (
          // 管理画面にてKVが画像の場合はこのコードが出る
          <section
            className="comVisual"
            style={{
              backgroundImage: `url(${pageContext.topMedia.url})`,
            }}
          >
            <h2 className="headLine05">{pageContext.title}</h2>
          </section>
        ) : (
          // 管理画面にてKVが動画の場合はこのコードが出る
          <section className="comVisual">
            <video src={pageContext.topMedia.url} autoPlay loop muted playsInline></video>
          </section>
        )}

        {/* パンくずリスト */}
        <PagePath currentPageName={pageContext.title} />


        <div className="topSec">
          <div className="inner">

            {/* ディスクリプションテキスト */}
            <div className="topText fadeInUp">
              <p dangerouslySetInnerHTML={{ __html: pageContext.explanation }} />
            </div>
          </div>

          <div className="content">
            {/* ページ内リンク */}
            <ul className="linkList flex fadeInUp">
              <li>
                <Scroll to="a01" smooth={true} duration={600} offset={-0}>募集要項</Scroll>
              </li>
              <li>
                <Scroll to="a02" smooth={true} duration={600} offset={-0}>インタビュー</Scroll>
              </li>
              <li>
                <Scroll to="business" smooth={true} duration={600} offset={-0}>業務内容</Scroll>
              </li>
              <li>
                <Scroll to="a03" smooth={true} duration={600} offset={-100}>{pageContext.businessContents.title}</Scroll>
              </li>
              <li>
                <Scroll to="a04" smooth={true} duration={600} offset={-0}>会社概要</Scroll>
              </li>
            </ul>
          </div>
        </div>

        {/* 募集要項 */}
        <section id="a01" className="recruitSec">
          <div className="content">
            <h3 className="headLine06 fadeInUp">募集要項</h3>
          </div>
          <div className="innerBox clearfix">
            <div className="photoBox fadeInUp">
              {pageContext.recruitment.medias.map((media, index) =>
                <img src={media.url} alt="募集要項画像" />
              )}
            </div>
            <div className="textBox fadeInUp">
              <div className="infoBox">
                <table>
                  <tbody>
                    {pageContext.recruitment.recruits.map((recruit, index) =>
                      recruit.hidden === "0" ? (
                        <tr key={index}>
                          <th>{recruit.title}</th>
                          <td dangerouslySetInnerHTML={{ __html: recruit.content }} />
                        </tr>
                      ) : null
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* ポイント */}
        <section id="point" className="pointSec">
          <div className="content">
            <h3 className="headLine06 fadeInUp">ポイント</h3>
            {pageContext.points.map((point, index) => (
              <div className="pointBox fadeInUp" key={index}>
                <h4>POINT 0{index + 1}</h4>
                <dl>
                  <dt>{point.title}</dt>
                  <dd dangerouslySetInnerHTML={{ __html: point.content }} />
                </dl>
              </div>
            ))}
          </div>
        </section>

        {/* 応募する */}
        <div className="comBox fadeInUp">
          <div className="comLink">
            <Scroll to="form" smooth={true} duration={600} offset={-60}>
              <span className="info">応募する</span>
            </Scroll>
          </div>
        </div>

        {/* インタビュー */}
        <section id="a02" className="interviewSec">
          <div className="content">
            <h3 className="headLine06 fadeInUp">インタビュー</h3>
            <p className="topTxt fadeInUp">
              {pageContext.interview.headers.text}
            </p>

            {/* 代表者インタビュー */}
            <div className="video fadeInUp">
              <div className="infoVideo">

                {/* 画像の場合はこちらのコードを使用 */}
                <img src={interviewPhoto} alt="代表インタビュー" />

                {/* 動画の場合はこちらのコードを使用 */}
                {/* <video src={interviewMovie} controls></video> */}

              </div>
              <p className="name"><span className="small">代表取締役</span>名字 名前</p>
            </div>

            {/* 従業員インタビュー */}
            {pageContext.interview.answers
              .filter((answer) => answer.interviewee) // 回答者の名前に記載があるものだけ表示
              .map((answer, index) => (
                <div
                  key={index}
                  className={index % 2 !== 0 ? "comImgBox comImgBox01" : "comImgBox"}
                >
                  <div className="photoBox fadeInUp">
                    <InnerMedia media={answer.media} />
                    <span className="nameSpan">
                      <span className="small">{answer.career}</span>
                      {answer.interviewee}
                    </span>
                  </div>
                  <div className="textBox fadeInUp">
                    {answer.questionAndAnswer &&
                      answer.questionAndAnswer.map((qa, qaIndex) => (
                        <div className="subBox" key={qaIndex}>
                          <h4>{qa.question}</h4>
                          <p dangerouslySetInnerHTML={{ __html: qa.answer }} />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* 業務内容 */}
        <section id="business" className="businessSec">
          <div className="content">
            <h3 className="headLine06 fadeInUp">業務内容</h3>
            <div className="business-wrap">

              <figure className="fadeInUp">
                <img src={pageContext.work.medias[0].url} alt="業務内容" />
                {pageContext.work.medias[1] &&
                  <img src={pageContext.work.medias[1].url} alt="業務内容" />
                }
              </figure>
              <div className="businessBox">
                {pageContext.work.contents.map((content, index) => (
                  <>
                    {(content.title || content.content) && ( // dt、ddともに記載があればdlを表示
                      <dl className="title fadeInUp" key={index}>
                        {content.title && <dt>{content.title}</dt>}
                        {content.content && <dd dangerouslySetInnerHTML={{ __html: content.content }} />}
                      </dl>
                    )
                    }
                  </>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* 福利厚生 */}
        <section id="welfare" className="welfareSec">
          <div className="content">
            <h3 className="headLine06 fadeInUp">福利厚生</h3>
            <ul>
              {pageContext.welfares.map((welfare, index) => (
                <li className="fadeInUp" key={index}>
                  <figure>
                    <img src={welfare.iconMedia.url} alt="福利厚生" />
                    <figcaption>{welfare.title}</figcaption>
                  </figure>
                  <p dangerouslySetInnerHTML={{ __html: welfare.content }} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 一日のスケジュール */}
        {/* 1つ目のスケジュールの項目名に記載がなければ、このセクションは表示されない */}
        {pageContext.oneDaySchedule && pageContext.oneDaySchedule.filter(schedule => schedule.title).length > 0 && (
          <section className="oneDay">
            <div className="content">
              <h3 className="fadeInUp"><span className="info">1日のスケジュール</span></h3>
              <div className="listBox clearfix">
                {pageContext.oneDaySchedule.map((schedule, index) => (
                  <div
                    className={
                      index % 2 !== 0
                        ? "timeBox fadeInUp"
                        : "timeBox fadeInUp timeBox01"
                    }
                  >
                    <p className="time">{schedule.time !== "00:00" && (schedule.time)}</p>
                    <div className="txtInner">
                      <p className="ttl" dangerouslySetInnerHTML={{ __html: schedule.title }} />
                      {schedule.content &&
                        <p className="txt" dangerouslySetInnerHTML={{ __html: schedule.content }} />
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 応募する */}
        <div className="comBox fadeInUp">
          <div className="comLink">
            <Scroll to="form" smooth={true} duration={600} offset={-60}>
              <span className="info">応募する</span>
            </Scroll>
          </div>
        </div>

        <section className="companySec">
          <div className="content">

            {/* 会社について */}
            <div className="comImgBox comImgBox01">
              <div className="textBox fadeInUp">
                <div className="subBox">
                  <h3>{pageContext.aboutUs.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: pageContext.aboutUs.content }} />
                </div>
              </div>
              <div className="photoBox fadeInUp">
                <img src={pageContext.aboutUs.media.url} alt={pageContext.aboutUs.title} />
              </div>
            </div>

            {/* 事業紹介 */}
            <div className="comImgBox" id="a03">
              <div className="textBox fadeInUp">
                <div className="subBox">
                  <h3>{pageContext.businessContents.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: pageContext.businessContents.content }} />
                </div>
              </div>
              <div className="photoBox comIcon fadeInUp">
                <img src={pageContext.businessContents.media.url} alt={pageContext.businessContents.title} />
              </div>
            </div>

          </div>

        </section>

        {/* 会社概要 */}
        <section id="a04" className="comCompany">

          <div className="mapInner cleafix">
            <div className="textBox">
              <div className="inner">
                <h2 className="headLine06 pc fadeInUp"><span>会社概要</span></h2>
                <h2 className="headLine04 sp fadeInUp"><span className="en">COMPANY</span><span className="jp">会社概要</span></h2>
                <div className="tabBox fadeInUp">
                  <table>
                    <tbody>
                      {(() => {
                        const items = [...pageContext.companyProfile.items];

                        const addressIndex = items.findIndex(item => item.title === "住所");
                        const [addressItem] = items.splice(addressIndex, 1);

                        // 2番目に住所を挿入
                        items.splice(1, 0, addressItem);

                        return items.map((item, index) => (
                          <tr key={index}>
                            <th>{item.title}</th>
                            <td dangerouslySetInnerHTML={{ __html: item.content }} />
                          </tr>
                        ));
                      })()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Google Map */}
            <div className="mapBox clearfix">
              <Map />
            </div>
          </div>

        </section>

        {/* エントリーフォーム */}
        <section id="form" className="FormSec contactPage">
          <div className="content">
            <h3 className="headLine06 fadeInUp on"><span className="info">エントリーフォーム</span></h3>
            <ContactForm pageContext={pageContext} />
          </div>
        </section>

      </div>
    </Layout>
  )
}

export default Page

export const Head = ({ pageContext }) => {
  return <Seo pageContext={pageContext} />
}
