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
"timestamp": '14/06/2021 09:30 AM',
"title": 'Nóng bức, hot girl con lai Việt - Trung mặc áo dây trễ nải, thu hút sự chú ý của cộng đồng',
"description": 'Gương mặt thanh tú cùng vòng một nuột nà, hot girl 2002 liên tục được cư dân mạng “thả tim”.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210614093056--10-550813.jpg',
"alt": 'Hot Girl, Gai Xinh, 10x, Sexy, ',
"category": 'images',
"date": '14/06/2021',
"time": '09:30 AM',
"link": '/nong-buc-hot-girl-con-lai-viet-trung-mac-ao-day-tre-nai-thu-hut-su-chu-y-cua-cong-dong',
"zcomponent": 'page_20210614093056',
"filepath": './20210614093056-nong-buc-hot-girl-con-lai-viet-trung-mac-ao-day-tre-nai-thu-hut-su-chu-y-cua-cong-dong.js'
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
  "Nóng bức, hot girl con lai Việt - Trung mặc áo dây trễ nải, thu hút sự chú ý của cộng đồng";
const author = "Kayle";
const source = "Pháp luật và bạn đọc";
const timestamp = "14/06/2021 09:30 AM";
const description =
  "Gương mặt thanh tú cùng vòng một nuột nà, hot girl 2002 liên tục được cư dân mạng “thả tim”.";
const link =
  "nong-buc-hot-girl-con-lai-viet-trung-mac-ao-day-tre-nai-thu-hut-su-chu-y-cua-cong-dong";
const tagparam = ["hot-girl", "gai-xinh", "10x", "sexy"];
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

export default function page_20210614093056() {
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
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <p>
                      Đinh Triệu Đoan Nghi, sinh năm 2002, đến từ đồng Tháp nổi
                      lên với khoảnh khắc đẹp như thiên thần khi cô nàng đi cổ
                      vũ cho đội tuyển U23 Việt Nam cách đây 3 năm. Có hai dòng
                      máu Việt từ bố và Trung từ mẹ, <strong>hot girl</strong>{" "}
                      <strong>10X</strong> này sở hữu gương mặt sắc nét, vừa đẹp
                      nhẹ nhàng nhưng không kém phần quyến rũ.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614093056--10-550813.jpg")
                          .default
                      }
                      alt="Hot Girl, Gai Xinh, 10x, Sexy, "
                      note=""
                    />
                    <p>
                      Khác với khi 16 tuổi, giờ đây, <strong>hot girl</strong>{" "}
                      con lai này đã thay đổi nhiều phần. Vẫn với gương mặt
                      trong sáng, nhẹ nhàng “nàng thơ” ấy nhưng ngoại hình phổng
                      phao hơn. Đặc biệt, với vòng một nở nang và làn da trắng
                      nõn, cô nàng khiến người yêu mến không ngớt lời khen trong
                      những tấm hình trên trang cá nhân của mình. Dù chỉ "phơi
                      nắng" nhẹ nhưng nữ sinh Đồng Tháp cũng được cư dân mạng
                      "thả tim" rần rần.
                    </p>

                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614093056--11-844737.jpg")
                          .default
                      }
                      alt="Hot Girl, Gai Xinh, 10x, Sexy, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614093056--12-281692.jpg")
                          .default
                      }
                      alt="Hot Girl, Gai Xinh, 10x, Sexy, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614093056--13-322800.jpg")
                          .default
                      }
                      alt="Hot Girl, Gai Xinh, 10x, Sexy, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614093056--14-801937.jpg")
                          .default
                      }
                      alt="Hot Girl, Gai Xinh, 10x, Sexy, "
                      note=""
                    />
                    <p>
                      Theo dõi Facebook của Đoan Nghi, người hâm mộ được thường
                      xuyên cập nhật những hình ảnh trong cuộc sống của cô nàng:
                      những chuyến du lịch “chanh sả” hay những ngày bận rộn với
                      việc làm mẫu ảnh cho các shop thời trang đều được chủ nhân
                      công khai.
                    </p>

                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614093056--15-303653.png")
                          .default
                      }
                      alt="Hot Girl, Gai Xinh, 10x, Sexy, "
                      note=""
                    />
                    <p>
                      Từng được hỏi quan điểm của mình về phẫu thuật thẩm mỹ,
                      Đoan Nghi thẳng thắn bày tỏ: “Ai cũng mong muốn được hoàn
                      thiện nhan sắc để trở nên xinh đẹp hơn. Quan trọng là mọi
                      thứ cần trong chừng mực, nếu lạm dụng dao kéo sẽ dẫn đến
                      những hệ quả đáng tiếc”.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Bên cạnh đó, nữ sinh khẳng định mình sẽ không “đụng chạm
                      dao kéo” vì cô đã cảm thấy may mắn khi được sinh ra với
                      ngoại hình trời cho. Đồng thời, cô nàng bật mí bí kíp để
                      có được vóc dáng nuột nà của mình là uống nhiều nước, ăn
                      rau xanh, hoa quả và sinh hoạt khoa học, ngủ nghỉ đúng
                      giờ.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614093056--16-222721.jpg")
                          .default
                      }
                      alt="Hot Girl, Gai Xinh, 10x, Sexy, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614093056--17-514970.jpg")
                          .default
                      }
                      alt="Hot Girl, Gai Xinh, 10x, Sexy, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614093056--18-202069.jpg")
                          .default
                      }
                      alt="Hot Girl, Gai Xinh, 10x, Sexy, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614093056--19-184231.jpg")
                          .default
                      }
                      alt="Hot Girl, Gai Xinh, 10x, Sexy, "
                      note=""
                    />
                    <p>
                      Hình tượng phụ nữ mà Đoan Nghi hướng đến chính là xinh
                      đẹp, độc lập, tự chủ về mọi mặt trong cuộc sống. Với cô,
                      một người phụ nữ hiện đại đẹp thôi chưa đủ mà cần biết
                      cách trau dồi, bồi dưỡng thêm vốn hiểu biết và cư xử có
                      chừng mực với những người xung quanh.
                    </p>
                    <p></p>

                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614093056--20-847656.jpg")
                          .default
                      }
                      alt="Hot Girl, Gai Xinh, 10x, Sexy, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614093056--21-178705.jpg")
                          .default
                      }
                      alt="Hot Girl, Gai Xinh, 10x, Sexy, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614093056--22-105757.jpg")
                          .default
                      }
                      alt="Hot Girl, Gai Xinh, 10x, Sexy, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614093056--23-683784.jpg")
                          .default
                      }
                      alt="Hot Girl, Gai Xinh, 10x, Sexy, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614093056--24-320729.jpg")
                          .default
                      }
                      alt="Hot Girl, Gai Xinh, 10x, Sexy, "
                      note=""
                    />
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
