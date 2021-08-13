import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '11/08/2021 10:51 AM',
"title": 'Trốn Sài Gòn, vợ chồng về quê Phú Yên xây nhà style Địa Trung Hải, dành hẳn 40m2 làm hồ bơi cho con',
"description": 'Ngôi nhà gây ấn tượng với khoảng sân rộng thênh thang, hồ bơi mát lạnh cùng đất trồng hoa và rau trái xung quanh.',
"src": 'https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/9/21376005811750267596689093140582484154896113n-16284837570881616624042.jpeg',
"alt": 'khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,',
"category": 'life',
"date": '11/08/2021',
"time": '10:51 AM',
"link": '/tron-sai-gon-vo-chong-ve-que-phu-yen-xay-nha-style-dia-trung-hai-danh-han-40m2-lam-ho-boi-cho-con',
"zcomponent": 'page_20210811105154',
"filepath": './20210811105154-tron-sai-gon-vo-chong-ve-que-phu-yen-xay-nha-style-dia-trung-hai-danh-han-40m2-lam-ho-boi-cho-con.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title =
  "Trốn Sài Gòn, vợ chồng về quê Phú Yên xây nhà style Địa Trung Hải, dành hẳn 40m2 làm hồ bơi cho con";
const author = "CHÂU TRẦN,";
const source = "Trí Thức Trẻ";
const timestamp = "11/08/2021 10:51 AM";
const description =
  "Ngôi nhà gây ấn tượng với khoảng sân rộng thênh thang, hồ bơi mát lạnh cùng đất trồng hoa và rau trái xung quanh.";
const link =
  "tron-sai-gon-vo-chong-ve-que-phu-yen-xay-nha-style-dia-trung-hai-danh-han-40m2-lam-ho-boi-cho-con";
const tagparam = [
  "khoe nhà đẹp",
  "house n home",
  "phong cách địa trung hải",
  "thiết kế nhà",
  "xây nhà",
  "làm nhà",
  "kiến trúc sư",
  "Phú Yên",
];
const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tagparam.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function page_20210811105154() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              {">"}
            </div>
            <a href={categoryLink} className="pathName">
              {category}
            </a>
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="info">
            <p>
              <div className="author">{author}</div> - Theo {source} |{" "}
              {timestamp}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <p>
                      Ngôi nhà rộng 115m2 được xây dựng trên mảnh đất hình chữ
                      nhật rộng 420 m2. Mất 3 tháng với tổng chi phí đầu tư xây
                      dựng 550 triệu đồng, căn nhà hoàn thành theo{" "}
                      <strong>phong cách Địa Trung Hải</strong> có đủ không gian
                      nghỉ ngơi, sinh hoạt, sân vườn, hồ bơi, đất trồng hoa và
                      rau trái.
                    </p>
                    <p>
                      Vừa mới hoàn thành trong năm nay, ngôi nhà như một điểm
                      tựa tinh thần để gia đình trẻ có thể tạm lánh Sài Gòn về
                      với không gian miền quê trong lành. Điều mà ai cũng đang
                      ao ước nhất bấy giờ!
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/9/21650049011750253730023817148015793678737187n-16284837571841347005263.jpeg"
                      alt="6, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note="Khoảng sân chung sau khi bước vào từ cửa chính"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/9/21118222111750261263356399054387341758039918n-16284837564881158890334.jpeg"
                      alt="7, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note="Mục đích là có nhiều không gian để con cái vui đùa..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/9/21076089411750257963356721504396407940487894n-16284837564381902507432.jpeg"
                      alt="8, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note="... hay chơi những trò chơi gắn liền với tuổi thơ"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/9/21164263111750257196690137361190056476819118n-16284837565752101513783.jpeg"
                      alt="9, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note="Phía sau những ô cửa vòm cong theo kiến trúc Địa Trung Hải là chiếc hồ bơi mát lạnh cho mùa hè rực lửa"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/9/20359818211750266030022582477760370540891438n-16284837558452085053065.jpeg"
                      alt="10, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note="Một góc nhỏ để thiền thư giãn dưới tán cây bồ đề"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/9/17462897511750274163355102428508374021690109n-1628483755790151557253.jpeg"
                      alt="11, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note="Có hẳn cầu thang để đứng hái mận trên cao"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/9/20530852711750272796688572895539480249354515n-16284837561911385992294.jpeg"
                      alt="12, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note="Chưa bao giờ thấy hoa sứ thi vị đến vậy!"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/9/20428893111750260363356484917215244385789840n-1628483755921254744241.jpeg"
                      alt="13, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note="Cạnh đó là hồ bơi kéo dài từ phòng khách xuống đến phòng bếp"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/500/203336854389633024/2021/8/9/2045204501175026169668968219174831181056191n-16284837561441717276781.jpeg"
                      alt="14, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note="Sát phòng khách là khu vực thờ cúng"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/500/203336854389633024/2021/8/9/2038458901175027343002184310118957252341154n-162848375587170204511.jpeg"
                      alt="15, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note="Tiếp đến là phòng ăn và phòng bếp"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/500/203336854389633024/2021/8/9/20541536511750269463355577921969711894211857n-1628483756195975592256.jpeg"
                      alt="16, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note="Những buổi chiều êm ả ở miền quê như thế này..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/500/203336854389633024/2021/8/9/21183028811750268663355652445304682344742944n-16284837567981843049410.jpeg"
                      alt="17, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note="... là niềm mơ ước hiện tại của rất nhiều người!"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/21288526511750269030022288276978689211161460n-16284837568361504111552.jpeg"
                      alt="18, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note="Khối sinh hoạt chung đặt xéo so với khối phòng ngủ mục đích xoay khối mở không gian chào đón khi vào nhà"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/20476747411750274896688365620801971592416528n-16284837561801679435310.jpeg"
                      alt="19, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note="Bản vẽ công trình"
                    />
                    <ContentImage
                      src=""
                      alt="20, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note="Bản vẽ công trình"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/9/21376005811750267596689093140582484154896113n-16284837570881616624042.jpeg"
                      alt="21, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/9/20494112411750267996689052287761495025720880n-16284837561861462917004.jpeg"
                      alt="22, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/10/2077420051175026643002254262090190305520269n-1628590766771614532387.jpeg"
                      alt="23, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/21099033711750274496688405455513127010421898n-16284837564761656669300.jpeg"
                      alt="24, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/2117434481175028636335388670260262046102328n-1628483756697815831998.jpeg"
                      alt="25, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/21365593411750286530020535696589685751379740n-16284837569401204677044.jpeg"
                      alt="26, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/21367090311750283630020825020902264852187859n-1628483756994229880870.jpeg"
                      alt="27, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/2118117331175028419668743887336582395696459n-1628483756781916983598.jpeg"
                      alt="28, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/21711695611750284696687384153690000210676091n-1628483757228932674482.jpeg"
                      alt="29, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/9/21560631211750290396686817701698419781702558n-1628483757144920493601.jpeg"
                      alt="30, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/9/21166599911750290763353446021154892460778311n-16284837566582103108924.jpeg"
                      alt="31, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/9/21080097211750256696690186118915574069361076n-16284837564692131637337.jpeg"
                      alt="32, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/9/70-16284837556941320286687.jpeg"
                      alt="33, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/9/71-16284837557851290995769.jpeg"
                      alt="34, khoe nhà đẹp,house n home,phong cách địa trung hải,thiết kế nhà,xây nhà,làm nhà,kiến trúc sư,Phú Yên,"
                      note=""
                    />
                    <p>Ảnh: MinqBui Photography Thiết kế: Story Architecture</p>
                  </div>
                  <AdsHorizontal />
                </div>
              </div>

              <RandomFeature />

              <div className="source">Source: {source}</div>

              <FacebookShareButton link={facebookLinkShare} />

              <div className="tags">Tags: {updatedTags}</div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
