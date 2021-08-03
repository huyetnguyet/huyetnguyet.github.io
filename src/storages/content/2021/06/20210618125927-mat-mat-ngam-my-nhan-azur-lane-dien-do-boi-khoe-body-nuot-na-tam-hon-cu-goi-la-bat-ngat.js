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
"timestamp": '18/06/2021 12:59 PM',
"title": 'Mát mắt ngắm mỹ nhân Azur Lane diện đồ bơi khoe body nuột nà, tâm hồn cứ gọi là bát ngát',
"description": 'Nắng như thế này thì làm sao để giải nhiệt cho tốt anh em nhỉ?',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210618125927--10-84410.jpeg',
"alt": 'COSPLAY,NGẮM GÁI,GÁI XINH,ẢNH GÁI ĐẸP,AZUR LANE,KASHINO,COSER,',
"category": 'images',
"date": '18/06/2021',
"time": '12:59 PM',
"link": '/mat-mat-ngam-my-nhan-azur-lane-dien-do-boi-khoe-body-nuot-na-tam-hon-cu-goi-la-bat-ngat',
"zcomponent": 'page_20210618125927',
"filepath": './20210618125927-mat-mat-ngam-my-nhan-azur-lane-dien-do-boi-khoe-body-nuot-na-tam-hon-cu-goi-la-bat-ngat.js'
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
  "Mát mắt ngắm mỹ nhân Azur Lane diện đồ bơi khoe body nuột nà, tâm hồn cứ gọi là bát ngát";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "18/06/2021 12:59 PM";
const description =
  "Nắng như thế này thì làm sao để giải nhiệt cho tốt anh em nhỉ?";
const link =
  "mat-mat-ngam-my-nhan-azur-lane-dien-do-boi-khoe-body-nuot-na-tam-hon-cu-goi-la-bat-ngat";
const tagparam = [
  "COSPLAY",
  "NGẮM GÁI",
  "GÁI XINH",
  "ẢNH GÁI ĐẸP",
  "AZUR LANE",
  "KASHINO",
  "COSER",
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

export default function page_20210618125927() {
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
                      <strong>Azur Lane</strong> là một trò chơi di động nổi
                      tiếng của Idea Factory International đã ra mắt vào năm
                      2017. Azure Lane là một game bắn súng side-scrolling của
                      Trung Quốc được tạo ra bởi Xiamen Yongshi và Shanghai
                      Manjuu với nhà phát hành Yostar đã phát hành phiên bản
                      tiếng Nhật và tiếng Anh cho Android. Điều này đã giúp trò
                      chơi di động này tiếp cận đến nhiều đối tượng hơn và nó đã
                      thực sự trở nên phổ biến.
                    </p>
                    <p>
                      Azure Lane diễn ra trong một thế giới nơi các thiết giáp
                      hạm được nhân cách hóa từ khắp nơi trên thế giới chiến đấu
                      với nhau để giành chiến thắng với tất cả sự tham gia của
                      những người giỏi nhất. Ở trong thế giới này, game thủ được
                      quyền điều khiển những hotgirl Anime trên màn hình và thổi
                      bay kẻ địch bởi những phát pháo cuồng bạo. Việc tự do điều
                      khiển nhân vật cho phép người chơi né được họng súng của
                      đối phương trong khi kích hoạt skill để tạo nên những
                      combo còn dữ dội hơn nữa. Trong các chiến hạm mỹ nhân của{" "}
                      <strong>Azur Lane</strong>, <strong>Kashino</strong> là
                      cái tên nhận được rất nhiều sự chú ý của game thủ vì sự
                      nóng bỏng quá đỗi của cô nàng.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Dưới đây mời các bạn cùng ngắm nàng{" "}
                      <strong>Kashino</strong> trong bộ đồ bơi trắng tinh khôi
                      qua màn thể hiện của nữ <strong>coser</strong> @SharkSAME
                      nhé!
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618125927--10-84410.jpeg")
                          .default
                      }
                      alt="1, COSPLAY,NGẮM GÁI,GÁI XINH,ẢNH GÁI ĐẸP,AZUR LANE,KASHINO,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618125927--11-45001.jpeg")
                          .default
                      }
                      alt="2, COSPLAY,NGẮM GÁI,GÁI XINH,ẢNH GÁI ĐẸP,AZUR LANE,KASHINO,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618125927--12-04963.jpeg")
                          .default
                      }
                      alt="3, COSPLAY,NGẮM GÁI,GÁI XINH,ẢNH GÁI ĐẸP,AZUR LANE,KASHINO,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618125927--13-12158.jpeg")
                          .default
                      }
                      alt="4, COSPLAY,NGẮM GÁI,GÁI XINH,ẢNH GÁI ĐẸP,AZUR LANE,KASHINO,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618125927--14-00306.jpeg")
                          .default
                      }
                      alt="5, COSPLAY,NGẮM GÁI,GÁI XINH,ẢNH GÁI ĐẸP,AZUR LANE,KASHINO,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618125927--15-33755.jpeg")
                          .default
                      }
                      alt="6, COSPLAY,NGẮM GÁI,GÁI XINH,ẢNH GÁI ĐẸP,AZUR LANE,KASHINO,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618125927--16-69236.jpeg")
                          .default
                      }
                      alt="7, COSPLAY,NGẮM GÁI,GÁI XINH,ẢNH GÁI ĐẸP,AZUR LANE,KASHINO,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618125927--17-63230.jpeg")
                          .default
                      }
                      alt="8, COSPLAY,NGẮM GÁI,GÁI XINH,ẢNH GÁI ĐẸP,AZUR LANE,KASHINO,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210618125927--18-642364.jpg")
                          .default
                      }
                      alt="9, COSPLAY,NGẮM GÁI,GÁI XINH,ẢNH GÁI ĐẸP,AZUR LANE,KASHINO,COSER,"
                      note=""
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
