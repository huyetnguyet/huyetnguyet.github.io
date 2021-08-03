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
"timestamp": '14/06/2021 09:19 AM',
"title": 'Cởi áo ngực ngay trên sóng, nữ streamer xinh đẹp vô tình gây sốc khi vô tình hớ hênh "nhũ hoa" trước hàng ngàn người xem',
"description": 'Hành động của cô nàng streamer này khiến rất nhiều người phải bất ngờ.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/',
"alt": 'Gai Xinh, Streamer, Hot Girl, Nu Streamer, Kim Min Young, Hearthstone, ',
"category": 'images',
"date": '14/06/2021',
"time": '09:19 AM',
"link": '/coi-ao-nguc-ngay-tren-song-nu-streamer-xinh-dep-vo-tinh-gay-soc-khi-vo-tinh-ho-henh-nhu-hoa-truoc-hang-ngan-nguoi-xem',
"zcomponent": 'page_20210614091903',
"filepath": './20210614091903-coi-ao-nguc-ngay-tren-song-nu-streamer-xinh-dep-vo-tinh-gay-soc-khi-vo-tinh-ho-henh-nhu-hoa-truoc-hang-ngan-nguoi-xem.js'
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
  'Cởi áo ngực ngay trên sóng, nữ streamer xinh đẹp vô tình gây sốc khi vô tình hớ hênh "nhũ hoa" trước hàng ngàn người xem';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "14/06/2021 09:19 AM";
const description =
  "Hành động của cô nàng streamer này khiến rất nhiều người phải bất ngờ.";
const link =
  "coi-ao-nguc-ngay-tren-song-nu-streamer-xinh-dep-vo-tinh-gay-soc-khi-vo-tinh-ho-henh-nhu-hoa-truoc-hang-ngan-nguoi-xem";
const tagparam = [
  "gai-xinh",
  "streamer",
  "hot-girl",
  "nu-streamer",
  "kim-min-young",
  "hearthstone",
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

export default function page_20210614091903() {
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
                      Thông thường, khi nhắc tới các sự cố, tai nạn hớ hênh để
                      lộ điểm nhạy cảm, đa phần chúng ta đều sẽ nghĩ ngay tới
                      những nữ <strong>streamer</strong> thuộc thế hệ mới -
                      những người thường xuyên lên sóng không phải để chơi game
                      mà đơn thuần là khoe ngực, vóc dáng gợi cảm hay những màn
                      vũ đạo nóng bỏng. Tuy nhiên, nếu thật sự là tai nạn chứ
                      không phải chiêu trò thì chẳng chừa một ai. Điển hình như
                      mới đây thôi, Kim Min-young, một nữ game thủ có tiếng và
                      đồng thời là một nữ streamer, YouTuber, người mẫu ảnh vừa
                      gặp phải sự cố khá nhạy cảm ngay trên sóng.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614091903--10-625482.png")
                          .default
                      }
                      alt="Gai Xinh, Streamer, Hot Girl, Nu Streamer, Kim Min Young, Hearthstone, "
                      note="Kim Min-young - cô nàng streamer xinh xắn trong câu chuyện"
                    />
                    <p>
                      Cụ thể, trong một phiên livestream gần đây, cũng như mọi
                      khi, cô nàng <strong>streamer</strong> họ Kim lên sóng và
                      chơi game, tương tác cùng người xem. Có một điểm đặc biệt
                      chính là tựa game mà cô nàng thường xuyên phát sóng lại là{" "}
                      <strong>Hearthstone</strong> - một trò chơi thẻ bài yêu
                      cầu suy nghĩ, tư duy và tính toán cực cao. Và với nhan sắc
                      xinh đẹp của mình, Kim Min-young thậm chí còn được mệnh
                      danh là nữ thần Hearthstone tại Hàn Quốc nữa. Tuy nhiên,
                      hình ảnh nữ thần ấy vừa bị ảnh hưởng nặng nề, khi chẳng
                      hiểu vì lý do gì mà cô nàng streamer lại bất ngờ tự cởi
                      nội y ngay trong lúc đang phát sóng trước hàng ngàn người
                      xem.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614091903--11-619041.gif")
                          .default
                      }
                      alt="Gai Xinh, Streamer, Hot Girl, Nu Streamer, Kim Min Young, Hearthstone, "
                      note="Khoảnh khắc cực kỳ khó hiểu nhưng lại đầy nóng bỏng của Kim Min-young"
                    />
                    <p>
                      Dường như cảm thấy bức bối không cần thiết nên nữ{" "}
                      <strong>streamer</strong> mới quyết định trút bỏ bra thì
                      phải. Tuy nhiên, điều đáng nói là trong quá trình thực
                      hiện thao tác này, Kim Min-young bất ngờ lại vô tình hớ
                      hênh vòng một của mình, thậm chí để lộ cả điểm nhạy cảm.
                      Đương nhiên, trước hàng ngàn người đang theo dõi thì
                      khoảnh khắc này khó lòng bị bỏ qua được và rất nhanh, đoạn
                      clip đã lan truyền trên mạng với tốc độ chóng mặt.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614091903--12-231340.png")
                          .default
                      }
                      alt="Gai Xinh, Streamer, Hot Girl, Nu Streamer, Kim Min Young, Hearthstone, "
                      note="Đây cũng là lý do khiến cho cái tên Kim Min-young được nhắc tới rất nhiều trong thời gian vừa qua"
                    />
                    <p>
                      Nếu như là một nhân vật khác, chắc hẳn sẽ bị lên án mạnh
                      mẽ bởi thói chiêu trò nhưng với Kim Min-young thì câu
                      chuyện không như vậy. Thực tế, cô nàng được các fan coi là
                      một game thủ, <strong>streamer</strong> chân chính và tất
                      nhiên cũng chẳng bao giờ hoài nghi về việc cô nàng cần
                      dùng chiêu trò để nổi tiếng. Nếu muốn nổi nhanh, nữ
                      streamer này đã chẳng lựa chọn chơi{" "}
                      <strong>Hearthstone</strong>. Thế nên, đa số đều cho rằng
                      đây có lẽ là một khoảnh khắc tai nạn và là bài học đáng
                      nhớ dành cho nữ streamer họ Kim mà thôi.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614091903--13-647518.png")
                          .default
                      }
                      alt="Gai Xinh, Streamer, Hot Girl, Nu Streamer, Kim Min Young, Hearthstone, "
                      note="Đây có lẽ cũng là một bài học đáng nhớ dành cho cô nàng streamer xinh đẹp"
                    />
                    <p>
                      Hiện tại, bên cạnh công việc là một{" "}
                      <strong>streamer</strong>, YouTuber, Kim Min-young còn
                      đang sở hữu một trang cá nhân với gần nửa triệu lượt
                      follow. Cô nàng cũng đồng thời là người mẫu ảnh nổi tiếng
                      và là gương mặt đại diện của nhiều nhãn hàng về sắc đẹp.
                    </p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
