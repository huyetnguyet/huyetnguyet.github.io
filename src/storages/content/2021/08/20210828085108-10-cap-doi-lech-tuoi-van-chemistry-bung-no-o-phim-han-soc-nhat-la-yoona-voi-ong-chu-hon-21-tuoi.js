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
"timestamp": '28/08/2021 08:51 AM',
"title": '10 cặp đôi lệch tuổi vẫn chemistry bùng nổ ở phim Hàn: Sốc nhất là Yoona với "ông chú" hơn 21 tuổi',
"description": 'Chênh lệch 10 - 12 tuổi đã là gì, một số cặp đôi phim Hàn còn lệch nhau tận 20 tuổi luôn.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-1630141592063467129612.jpg',
"alt": 'kang ha neul,Kim Go Eun,ji chang wook,song seung hun,kim yoo jung,lee sun kyun,nam goong min,lee byung hun,Uhm Jung Hwa,Phim Hàn Quốc,',
"category": 'stars',
"date": '28/08/2021',
"time": '08:51 AM',
"link": '/10-cap-doi-lech-tuoi-van-chemistry-bung-no-o-phim-han-soc-nhat-la-yoona-voi-ong-chu-hon-21-tuoi',
"zcomponent": 'page_20210828085108',
"filepath": './20210828085108-10-cap-doi-lech-tuoi-van-chemistry-bung-no-o-phim-han-soc-nhat-la-yoona-voi-ong-chu-hon-21-tuoi.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  '10 cặp đôi lệch tuổi vẫn chemistry bùng nổ ở phim Hàn: Sốc nhất là Yoona với "ông chú" hơn 21 tuổi';
const author = "LỆ,";
const source = "Trí Thức Trẻ";
const timestamp = "28/08/2021 08:51 AM";
const description =
  "Chênh lệch 10 - 12 tuổi đã là gì, một số cặp đôi phim Hàn còn lệch nhau tận 20 tuổi luôn.";
const link =
  "10-cap-doi-lech-tuoi-van-chemistry-bung-no-o-phim-han-soc-nhat-la-yoona-voi-ong-chu-hon-21-tuoi";
const tagparam = [
  "kang ha neul",
  "Kim Go Eun",
  "ji chang wook",
  "song seung hun",
  "kim yoo jung",
  "lee sun kyun",
  "nam goong min",
  "lee byung hun",
  "Uhm Jung Hwa",
  "Phim Hàn Quốc",
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

export default function page_20210828085108() {
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
                      Chênh lệch 10 - 12 tuổi đã là gì, một số cặp đôi phim Hàn
                      còn lệch nhau tận 20 tuổi luôn.
                    </p>
                    <p>
                      Do yêu cầu của kịch bản hoặc đơn giản chỉ vì hai diễn viên
                      quá phù hợp với nhau, một số ekip phim Hàn đã lựa chọn các
                      diễn viên hơn nhau nhiều tuổi để đóng một cặp. Và dù có
                      gây tranh cãi thì những màn kết hợp này vẫn vô cùng xuất
                      sắc khiến khán giả tin rằng khoảng cách tuổi tác, thế hệ
                      không ảnh hưởng gì tới chemistry giữa các diễn viên.
                    </p>
                    <p>
                      <strong>Kang Ha Neul</strong> kém "bạn gái" Gong Hyo Jin
                      tới 10 tuổi nhưng vẫn có chemistry cực ngọt ở Khi Hoa Trà
                      Nở
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-16301415166612050549182.jpg"
                      alt="1, kang ha neul,Kim Go Eun,ji chang wook,song seung hun,kim yoo jung,lee sun kyun,nam goong min,lee byung hun,Uhm Jung Hwa,Phim Hàn Quốc,"
                      note="Gong Yoo sinh năm 1979 trong khi Kim Go Eun sinh năm 1991, hơn nhau tới 12 tuổi. Họ tạo nên một chuyện tình chú - cháu vừa ngọt ngào vừa bi thương ở Goblin, thậm chí sau khi phim kết thúc, mối quan hệ ngoài đời của họ cũng cực kỳ tốt"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-16301422971581988214205.jpg"
                      alt="2, kang ha neul,Kim Go Eun,ji chang wook,song seung hun,kim yoo jung,lee sun kyun,nam goong min,lee byung hun,Uhm Jung Hwa,Phim Hàn Quốc,"
                      note="Nhìn cực kỳ xứng đôi vừa lứa ở Backstreet Rookie, có ai ngờ Ji Chang Wook hơn Kim Yoo Jung tới 12 tuổi"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-1630143120123509719887.jpg"
                      alt="3, kang ha neul,Kim Go Eun,ji chang wook,song seung hun,kim yoo jung,lee sun kyun,nam goong min,lee byung hun,Uhm Jung Hwa,Phim Hàn Quốc,"
                      note="Cặp đôi Beautiful Gong Shim là Nam Goong Min và Min Ah hơn nhau tới 15 tuổi nhưng nhìn hình bạn có thể thấy đấy, chemistry giữa họ rất bùng nổ"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-1630143387552250201468.jpg"
                      alt="4, kang ha neul,Kim Go Eun,ji chang wook,song seung hun,kim yoo jung,lee sun kyun,nam goong min,lee byung hun,Uhm Jung Hwa,Phim Hàn Quốc,"
                      note="Ji Sung và Hye Ri từng đóng chung trong bộ phim Entertainer, họ hơn nhau tới 17 tuổi"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-1630142387095151930732.jpg"
                      alt="5, kang ha neul,Kim Go Eun,ji chang wook,song seung hun,kim yoo jung,lee sun kyun,nam goong min,lee byung hun,Uhm Jung Hwa,Phim Hàn Quốc,"
                      note="Đúng như tên phim - Ông Chú Của Tôi, Lee Sun Kyun hơn IU tới 18 tuổi nhưng tuổi tác không cản trở được sự hòa hợp trong lối diễn xuất của họ"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-16301429932551948805829.jpg"
                      alt="6, kang ha neul,Kim Go Eun,ji chang wook,song seung hun,kim yoo jung,lee sun kyun,nam goong min,lee byung hun,Uhm Jung Hwa,Phim Hàn Quốc,"
                      note="19 tuổi là con số chênh lệch giữa Uhm Jung Hwa và đàn em Park Seo Joon. Dù lệch tuổi nhưng cặp đôi có vô số khoảnh khắc tình tứ đến độ gây tranh cãi ở A Witch’s Romance"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-1630142742149355014474.jpg"
                      alt="7, kang ha neul,Kim Go Eun,ji chang wook,song seung hun,kim yoo jung,lee sun kyun,nam goong min,lee byung hun,Uhm Jung Hwa,Phim Hàn Quốc,"
                      note="Trong Mr. Sunshine, Lee Byung Hun hơn Kim Tae Ri tới 20 tuổi"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-1630142854206400253898.jpg"
                      alt="8, kang ha neul,Kim Go Eun,ji chang wook,song seung hun,kim yoo jung,lee sun kyun,nam goong min,lee byung hun,Uhm Jung Hwa,Phim Hàn Quốc,"
                      note="Lee Bum Soo còn hơn Yoona tới 21 tuổi nhưng vẫn cực kỳ đẹp đôi ở Prime Minister and I"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-1630141592063467129612.jpg"
                      alt="9, kang ha neul,Kim Go Eun,ji chang wook,song seung hun,kim yoo jung,lee sun kyun,nam goong min,lee byung hun,Uhm Jung Hwa,Phim Hàn Quốc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-16301432551161558466769.jpg"
                      alt="10, kang ha neul,Kim Go Eun,ji chang wook,song seung hun,kim yoo jung,lee sun kyun,nam goong min,lee byung hun,Uhm Jung Hwa,Phim Hàn Quốc,"
                      note=""
                    />
                    <p>
                      14 là con số chênh lệch giữa "ông chú"{" "}
                      <strong>Song Seung Hun</strong> và Go Ara ở Black
                    </p>
                    <p>Nguồn: Tổng hợp</p>
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
