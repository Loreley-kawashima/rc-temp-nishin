import React from "react"
import Map from "/src/components/Map"

const Component = ({ companyProfile, id }) => {

  const items = [...companyProfile.items];
  const addressIndex = items.findIndex(item => item.title === "住所");

  if (addressIndex > -1) {
    const [addressItem] = items.splice(addressIndex, 1); // 住所の行を取り出す
    items.splice(1, 0, addressItem); // 2番目に挿入
  }

  return (

    <section className="comCompany" id={id}>

      {/* 会社概要 */}
      <div className="content">
        <div className="mapInner clearfix">

          <div className="textBox">
            <div className="inner">

              <h2 className="headLine04 fadeInUp"><span className="en">COMPANY</span><span className="jp">会社概要</span></h2>

              <div className="tabBox fadeInUp">
                <table>
                  <tbody>
                    <>
                      {items.map((item, index) => (
                        <tr key={index}>
                          <th>{item.title}</th>
                          <td dangerouslySetInnerHTML={{ __html: item.content }} />
                        </tr>
                      ))}
                    </>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Google map */}
          <div className="mapBox fadeInUp">
            <Map />
          </div>
        </div>
      </div>

    </section>

  )
}

export default Component
