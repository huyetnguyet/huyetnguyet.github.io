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
"timestamp": '04/08/2021 06:57 PM',
"title": 'Ngắm nhan sắc nóng bỏng của các mỹ nhân 18+ trong "ngày khoe ngực"',
"description": 'Đến hẹn lại lên, các cư dân mạng lại được một phen trầm trồ và mãn nhãn trong ngày Oppai no Hi, hay còn được biết đến như ngày của ngực.',
"src": '',
"alt": 'YUA MIKAMI,IDOL,',
"category": 'images',
"date": '04/08/2021',
"time": '06:57 PM',
"link": '/ngam-nhan-sac-nong-bong-cua-cac-my-nhan-18-trong-ngay-khoe-nguc',
"zcomponent": 'page_20210804185749',
"filepath": './20210804185749-ngam-nhan-sac-nong-bong-cua-cac-my-nhan-18-trong-ngay-khoe-nguc.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  'Ngắm nhan sắc nóng bỏng của các mỹ nhân 18+ trong "ngày khoe ngực"';
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "04/08/2021 06:57 PM";
const description =
  "Đến hẹn lại lên, các cư dân mạng lại được một phen trầm trồ và mãn nhãn trong ngày Oppai no Hi, hay còn được biết đến như ngày của ngực.";
const link = "ngam-nhan-sac-nong-bong-cua-cac-my-nhan-18-trong-ngay-khoe-nguc";
const tagparam = ["YUA MIKAMI", "IDOL"];
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

export default function page_20210804185749() {
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
                      Tại Nhật Bản, bên cạnh các ngày lễ lớn, có rất nhiều ngày
                      lễ kỳ lạ. Thậm chí, có cả những ngày đặc biệt do cư dân
                      mạng tự nghĩ ra, tuy nhiên nó lại được mọi người ủng hộ
                      nhiệt tình vì quá hài hước thú vị. Mỗi ngày đều được đặt
                      ra dựa trên 1 lý nào đó, nhưng phần lớn những ngày đặc
                      biệt này được đặt ra dựa trên con số đặc biệt của ngày hôm
                      đó.
                    </p>
                    <p>
                      Với ngày 1/8, các cư dân mạng đã đặt ra tên gọi cho nó là
                      おっぱいの日 (Oppai no Hi), dịch ra có nghĩa là... ngày
                      của ngực. Trong ngày này, các cô gái xinh đẹp sẽ chúc mừng
                      vả kỷ niệm bằng cách khoe gò bồng đảo của mình lên mạng.
                      Dần dà, đây trở thành 1 ngày đặc biệt và vô cùng thú vị mà
                      cư dân mạng nào cũng ngóng chờ.
                    </p>
                    <p>
                      Cũng giống như các cô gái bình thường khác, các mỹ nhân
                      18+ cũng tranh thủ khoe nhan sắc và vòng 1 nóng bỏng của
                      mình trong ngày này. Hãy cùng chiêm ngưỡng những bức ảnh
                      đặc sắc và cuốn hút nhất qua chùm ảnh dưới đây.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/-1627970236034478794934.jpg"
                      alt="1, YUA MIKAMI,IDOL,"
                      note="Yua Mikami."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/-1627970437405500680618.jpg"
                      alt="2, YUA MIKAMI,IDOL,"
                      note="Aika Yumeno."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/-1627970777740492906530.jpg"
                      alt="3, YUA MIKAMI,IDOL,"
                      note="Eimi Fukada."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/-16279705280721163948198.jpg"
                      alt="4, YUA MIKAMI,IDOL,"
                      note="Kana Momonogi."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/-16279705831221020209143.jpg"
                      alt="5, YUA MIKAMI,IDOL,"
                      note="Minami Aizawa."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/-16279706163861173049703.jpg"
                      alt="6, YUA MIKAMI,IDOL,"
                      note="Sakura Mana."
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/-16279706453921724895434.jpg"
                      alt="7, YUA MIKAMI,IDOL,"
                      note="Remu Suzumori."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/-16279706814861919835156.jpg"
                      alt="8, YUA MIKAMI,IDOL,"
                      note="Asuna Kawai."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/-16279707014341626934241.jpg"
                      alt="9, YUA MIKAMI,IDOL,"
                      note="Yume Nikaidou."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/-16279707338131199095789.jpg"
                      alt="10, YUA MIKAMI,IDOL,"
                      note="Rikka Ono."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/-16279708413582142225471.jpg"
                      alt="11, YUA MIKAMI,IDOL,"
                      note="Yuna Ogura."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/-1627970860787628066476.jpg"
                      alt="12, YUA MIKAMI,IDOL,"
                      note="Mahina Amane."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/-16279702941711333770007.jpg"
                      alt="13, YUA MIKAMI,IDOL,"
                      note="Riri Nanatsumori."
                    />
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
