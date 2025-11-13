import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import { Link as Scroll } from 'react-scroll'
import json from "/src/siteData.json"
import emailIcon from "/src/images/common/mail.png"
import HamburgerMenu from "/src/components/HamburgerMenu"

import logo from "/src/images/common/logo.png"

const siteMetaData = json.siteMetadata
const logoUri = json.header.logoUri

const Component = () => {

  const location = useLocation();
  const isRecruitPage = location.pathname.includes("/recruit/");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <>
      <header id="gHeader" className={`${scrolled ? "on" : ""}`}>
        <h1 className="logo">
          <Link to="/">
            <img
              src={logo}
              alt={siteMetaData.title}
            />
          </Link>
        </h1>
        <div className="rBox">
          <div className="btn">
            {isRecruitPage ?
              <Scroll to="form" smooth={true} duration={600} offset={-0}>
                <span className="info">
                  <span className="img">
                    <img
                      src={emailIcon}
                      alt="応募する"
                    />
                  </span>
                  応募する
                </span>
              </Scroll>
              :
              <Link to="https://www.nishinkougyou0401.com/" target="_blank">
                <span className="info">
                  公式サイト
                </span>
              </Link>
            }
          </div>
          <div
            className={`menu ${menuIsOpen ? "on" : ""}`}
            menuIsOpen={menuIsOpen}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <HamburgerMenu menuIsOpen={menuIsOpen} />
    </>
  )
}

export default Component
