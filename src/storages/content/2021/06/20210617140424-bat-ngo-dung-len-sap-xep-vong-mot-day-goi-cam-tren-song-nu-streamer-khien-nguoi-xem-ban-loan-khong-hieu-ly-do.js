import React from "react";
import "components/page.css";
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
"timestamp": '17/06/2021 02:04 PM',
"title": 'Bất ngờ đứng lên "sắp xếp" vòng một đầy gợi cảm trên sóng, nữ streamer khiến người xem bấn loạn, không hiểu lý do',
"description": 'Rất nhiều người cảm thấy tò mò, khó hiểu động cơ của cô nàng streamer khi làm vậy.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/',
"alt": 'Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Ah Young, ',
"category": 'images',
"date": '17/06/2021',
"time": '02:04 PM',
"link": '/bat-ngo-dung-len-sap-xep-vong-mot-day-goi-cam-tren-song-nu-streamer-khien-nguoi-xem-ban-loan-khong-hieu-ly-do',
"zcomponent": 'page_20210617140424',
"filepath": './20210617140424-bat-ngo-dung-len-sap-xep-vong-mot-day-goi-cam-tren-song-nu-streamer-khien-nguoi-xem-ban-loan-khong-hieu-ly-do.js'
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
  'Bất ngờ đứng lên "sắp xếp" vòng một đầy gợi cảm trên sóng, nữ streamer khiến người xem bấn loạn, không hiểu lý do';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "17/06/2021 02:04 PM";
const description =
  "Rất nhiều người cảm thấy tò mò, khó hiểu động cơ của cô nàng streamer khi làm vậy.";
const link =
  "bat-ngo-dung-len-sap-xep-vong-mot-day-goi-cam-tren-song-nu-streamer-khien-nguoi-xem-ban-loan-khong-hieu-ly-do";
const tagparam = [
  "gai-xinh",
  "hot-girl",
  "streamer",
  "nu-streamer",
  "cong-dong-mang",
  "ah-young",
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

export default function page_20210617140424() {
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
              >
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <p>
                    Nhân vật chính trong câu chuyện lần này là Ah-young, một nữ{" "}
                    <strong>streamer</strong> tuy mới chỉ theo đuổi công việc
                    này chưa bao lâu nhưng cũng đã dần dần tạo dựng được danh
                    tiếng của mình. Mặc dù không theo đuổi việc chơi game như
                    phong cách truyền thống, thế nhưng Ah-young lại nổi tiếng là
                    một nữ streamer siêu gợi cảm, và đặc biệt, nổi bật với những
                    màn vũ đạo điêu luyện của mình. Tới mức mà các fan hâm mộ
                    còn cho rằng cô nàng có thể "tiêu hóa" hết mọi điệu nhảy một
                    cách dễ dàng.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140424--10-706329.jpg")
                        .default
                    }
                    alt="1Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Ah Young, "
                    note="Ah-young - cô nàng streamer xinh đẹp và gợi cảm"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140424--11-411251.gif")
                        .default
                    }
                    alt="2Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Ah Young, "
                    note="Đồng thời cũng cực kỳ nổi tiếng với các nội dung liên quan tới vũ đạo của mình"
                  />
                  <p>
                    Chưa kể, cô nàng còn rất biết cách tạo ra điểm nhấn trên các
                    phiên livestream của mình. Từ việc thường xuyên cosplay
                    những trang phục nóng bỏng như y tá, nữ cảnh sát trên sóng,
                    Ah-young còn có nguyên một hội bạn thân, cũng gồm toàn những
                    nữ <strong>streamer</strong> nổi tiếng và thường xuyên tụ
                    tập để phát sóng chung, chơi những tựa game "nóng bỏng". Tuy
                    nhiên, bên cạnh những điều tích cực, Ah-young còn được nhiều
                    người gọi là nữ hoàng quái chiêu của làng streamer bởi những
                    chiêu trò của mình.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140424--12-246290.gif")
                        .default
                    }
                    alt="3Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Ah Young, "
                    note="Một phân cảnh đang rất gây tranh cãi trên sóng livestream của Ah-young"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140424--13-068830.gif")
                        .default
                    }
                    alt="4Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Ah Young, "
                    note="Đồng thời cũng khiến cô nàng gặp phải vô số những phản ứng trái chiều"
                  />
                  <p>
                    Theo đó, trong lần lên sóng gần đây, không hiểu vì lý do gì
                    mà khi áp sát và nhìn vào camera, nữ{" "}
                    <strong>streamer</strong> bất ngờ thể hiện sự ngỡ ngàng.
                    Nhưng hành động tiếp theo thì lại khiến cho không ít fan
                    phải kinh ngạc, khi mà cô nàng hồn nhiên cho tay vào căn
                    chỉnh vòng một theo cái cách rất nhạy cảm, ít người dám nghĩ
                    tới. Hành động rất nóng bỏng nhưng có phần quá táo bạo này
                    của Ah-young nhanh chóng nhận phải vô số những phản ứng trái
                    chiều từ phía cộng đồng mạng. Tất nhiên, đa số là những ý
                    kiến có phần tiêu cực.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140424--14-175182.jpg")
                        .default
                    }
                    alt="5Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Ah Young, "
                    note="Cô nàng streamer đang phải hứng chịu vô số những chỉ trích sau màn lên sóng vừa rồi"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140424--15-003614.jpg")
                        .default
                    }
                    alt="6Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Ah Young, "
                    note="Nhưng có lẽ điều này cũng chẳng làm Ah-young quá bận tâm"
                  />
                  <p>
                    Tuy nhiên, với việc kiên định khi theo đuổi phong cách gợi
                    cảm mọi lúc mọi nơi, Ah-young dường như chẳng mấy bận tâm
                    tới những lời chỉ trích từ phía cộng đồng mạng. Thay vào đó,
                    cô nàng vẫn đều đặn lên sóng, mua vui cho người xem với
                    những điệu nhảy gợi cảm. Hiện tại, kênh livestream của nữ{" "}
                    <strong>streamer</strong> này đã thu hút tới hơn 50.000 lượt
                    subs, một con số không tệ cho tân binh như Ah-young. Tất
                    nhiên, đa số các fan của nàng streamer nóng bỏng này đều là
                    các đấng mày râu đam mê cái đẹp rồi.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140424--16-518010.jpg")
                        .default
                    }
                    alt="7Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Ah Young, "
                    note="Cô nàng streamer cũng đang sở hữu lượng subs đáng nể trên kênh livestream"
                  />
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
