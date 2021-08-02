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
"timestamp": '29/06/2021 09:56 PM',
"title": 'Rơi camera ở vị trí hiểm hóc, nữ streamer xinh đẹp "vô tình" khoe trọn vẹn vòng một trước người xem',
"description": 'Tới cỡ này thì cũng chẳng biết đây là trường hợp vô tình hay cố ý của cô nàng streamer này nữa.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/',
"alt": 'hình ảnh nóng bỏng,thay đổi phong cách,khoe vòng một,streamer,game thủ,cao thủ,hot girl,nữ streamer,',
"category": 'images',
"date": '29/06/2021',
"time": '09:56 PM',
"link": '/roi-camera-o-vi-tri-hiem-hoc-nu-streamer-xinh-dep-vo-tinh-khoe-tron-ven-vong-mot-truoc-nguoi-xem',
"zcomponent": 'page_20210629215629',
"filepath": './20210629215629-roi-camera-o-vi-tri-hiem-hoc-nu-streamer-xinh-dep-vo-tinh-khoe-tron-ven-vong-mot-truoc-nguoi-xem.js'
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
  'Rơi camera ở vị trí hiểm hóc, nữ streamer xinh đẹp "vô tình" khoe trọn vẹn vòng một trước người xem';
const author = "MẶT TRỨNG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/06/2021 09:56 PM";
const description =
  "Tới cỡ này thì cũng chẳng biết đây là trường hợp vô tình hay cố ý của cô nàng streamer này nữa.";
const link =
  "roi-camera-o-vi-tri-hiem-hoc-nu-streamer-xinh-dep-vo-tinh-khoe-tron-ven-vong-mot-truoc-nguoi-xem";
const tagparam = [
  "hình ảnh nóng bỏng",
  "thay đổi phong cách",
  "khoe vòng một",
  "streamer",
  "game thủ",
  "cao thủ",
  "hot girl",
  "nữ streamer",
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

export default function page_20210629215629() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Thời gian gần đây, cô nàng Impression Ran, hay còn được biết
                    tới với tên gọi vắn tắt là Ran bất ngờ trở thành một trong
                    những nhân vật được tìm kiếm nhiều nhất tại Hàn Quốc. Vốn
                    dĩ, bản thân Ran đã là một nữ YouTuber,{" "}
                    <strong>streamer</strong> có tiếng nhờ vào gương mặt xinh
                    đẹp và trên hết là thân hình với vòng một siêu gợi cảm.
                  </p>
                  <p>
                    Tuy rằng cũng mang tới rất nhiều năng lượng tích cực trên
                    sóng livestream, thế nhưng đi kèm với đó, Ran cũng gặp phải
                    không ít những vấn đề, thậm chí là lùm xùm vì thân hình quá
                    nóng bỏng, đặc biệt là vòng một.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215629--10-265641.jpg")
                        .default
                    }
                    alt="1, hình ảnh nóng bỏng,thay đổi phong cách,khoe vòng một,streamer,game thủ,cao thủ,hot girl,nữ streamer,"
                    note="Ran - cô nàng streamer trong câu chuyện"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215629--11-556719.jpg")
                        .default
                    }
                    alt="2, hình ảnh nóng bỏng,thay đổi phong cách,khoe vòng một,streamer,game thủ,cao thủ,hot girl,nữ streamer,"
                    note="Chẳng những xinh đẹp, cô nàng còn sở hữu vòng một ngoại cỡ đầy nóng bỏng"
                  />
                  <p>
                    Vốn dĩ đã nổi tiếng với sự gợi cảm của mình, thế nhưng cô
                    nàng Ran còn rất biết cách khiến người xem phải dồn sự chú ý
                    vào bản thân mỗi khi lên sóng.
                  </p>
                  <p>
                    Cụ thể, trong lần livestream gần đây, chẳng hiểu vì lý do gì
                    mà camera của Ran bất ngờ được đặt ở những vị trí vô cùng
                    hiểm hóc, khiến cho người xem chẳng thể nhìn được rõ khuôn
                    mặt của nàng <strong>streamer</strong>. Tuy nhiên, đổi lại,
                    góc camera lại khiến họ chiêm ngưỡng được những điều cực kỳ
                    bỏng mắt.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215629--12-544503.jpg")
                        .default
                    }
                    alt="3, hình ảnh nóng bỏng,thay đổi phong cách,khoe vòng một,streamer,game thủ,cao thủ,hot girl,nữ streamer,"
                    note="Không hiểu vì lý do gì mà camera trong phiên livestream gần đây của cô nàng bất ngờ đặt ở vị trí khó hiểu"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215629--13-888282.jpg")
                        .default
                    }
                    alt="4, hình ảnh nóng bỏng,thay đổi phong cách,khoe vòng một,streamer,game thủ,cao thủ,hot girl,nữ streamer,"
                    note="Gần như tóm được trọn những khoảnh khắc nóng bỏng của cô nàng"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215629--14-980500.jpg")
                        .default
                    }
                    alt="5, hình ảnh nóng bỏng,thay đổi phong cách,khoe vòng một,streamer,game thủ,cao thủ,hot girl,nữ streamer,"
                    note="Đặc biệt là vòng một cực kỳ nóng bỏng"
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Theo ý kiến của nhiều người, có khả năng nàng{" "}
                    <strong>hot girl</strong> vô ý làm rơi camera xuống đất, sau
                    đó vội căn chỉnh mà không nhận ra một cách vô tình. Nhưng
                    thực tế thì dường như cũng không quá nhiều người tin vào giả
                    thuyết này và việc Ran vô tình, hay cố ý làm như vậy vẫn còn
                    là ẩn số.
                  </p>
                  <p>
                    Chỉ biết rằng, đây cũng không phải là lần đầu tiên mà cô
                    nàng mang tới những <strong>hình ảnh nóng bỏng</strong> tới
                    như vậy trên sóng. Cách đây không lâu, cô nàng còn khiến
                    không ít fan phải "lác mắt" với màn zoom camera vào tận vòng
                    một của mình, đồng thời phát sóng màn chạy bộ đầy ấn tượng.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215629--15-980500.jpg")
                        .default
                    }
                    alt="6, hình ảnh nóng bỏng,thay đổi phong cách,khoe vòng một,streamer,game thủ,cao thủ,hot girl,nữ streamer,"
                    note="Hình ảnh cô nàng livestream một buổi ra phố"
                  />
                  <p>
                    Tất nhiên, gợi cảm quá đà đôi khi cũng đẩy Ran vào những
                    tình thế tồi tệ. Điển hình như khi mà cô nàng bị quấy rối,
                    bình luận khiếm nhã về vòng một của mình trước hàng nghìn
                    người xem trên sóng tại một quán ăn.
                  </p>
                  <p>
                    Nhưng điều này suy cho cùng cũng chỉ làm dậy sóng các fan
                    một thời gian chứ chẳng thể nào{" "}
                    <strong>thay đổi phong cách</strong> quyến rũ đã được định
                    hình sẵn dành cho nàng <strong>streamer</strong> này.
                  </p>
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
