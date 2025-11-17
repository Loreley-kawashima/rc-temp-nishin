import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import json from "/src/siteData.json"
import { Link as Scroll } from 'react-scroll'

import instagram from "/src/images/icon/instagram.png"
import X from "/src/images/icon/x.png"
import LINE from "/src/images/icon/LINE.png"
import facebook from "/src/images/icon/facebook.png"


const Component = () => {
  return (
    <footer id="gFooter">
      <div className="pageTop">
        <Scroll to="container" smooth={true} duration={600} offset={-60}>
          <StaticImage
            src="../../images/common/page_top.png"
            alt="トップに戻る"
            width={95}
          />
        </Scroll>
      </div>

      <div className="footerBar">
        <ul>
          {json.footer.instagramUrl &&
            <li>
              <Link to={json.footer.instagramUrl}><img src={instagram} alt="instagram" /></Link>
            </li>
          }
          {json.footer.xUrl &&
            <li>
              <Link to={json.footer.xUrl}><img src={X} alt="X" /></Link>
            </li>
          }
          {json.footer.lineUrl &&
            <li>
              <Link to={json.footer.lineUrl}><img src={LINE} alt="LINE" /></Link>
            </li>
          }
          {json.footer.facebookUrl &&
            <li>
              <Link to={json.footer.facebookUrl}><img src={facebook} alt="facebook" /></Link>
            </li>
          }
        </ul>
        <address>&copy;{json.footer.copyright}</address>
      </div>

    </footer>
  )
}

export default Component
