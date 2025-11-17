import React from "react"
import { Link } from "gatsby"
import json from "/src/siteData.json"

const header = json.header
const articlesPage = json.pageConstruct.find(page => page.type === 103)
const article = json.articles.content

const Component = ({ menuIsOpen }) => {
  return (
    <div
      className="menuBox"
      style={{
        display: "block",
        transition: `max-height 0.5s ease, padding 0.3s ease`,
        maxHeight: `${menuIsOpen ? 100 : 0}%`,
      }}
    >
      <ul className="naviUl">
        <li>
          <Link to="/">トップ</Link>
        </li>
        {header.jobs.map((job, index) => (
          <li key={index}>
            <Link title={job.title} to={`/${job.slug}`}>{job.title}</Link>
          </li>
        ))}
        {(articlesPage && article.length) ? (
          <li>
            <Link to={`/${articlesPage.slug}/p/1`}>記事一覧</Link>
          </li>
        ) : null}
        <li className="blank">
          <a href="https://www.nishinkougyou0401.com/" target="_blank">
            企業公式サイト
          </a>
        </li>
        <li>
          <Link to="/privacy">プライバシーポリシー</Link>
        </li>
      </ul>
    </div>
  )
}

export default Component
