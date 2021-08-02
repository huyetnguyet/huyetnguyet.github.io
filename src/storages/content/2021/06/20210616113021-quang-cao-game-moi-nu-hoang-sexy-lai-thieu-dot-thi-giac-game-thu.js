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
"timestamp": '16/06/2021 11:30 AM',
"title": 'Quảng cáo game mới, “nữ hoàng” sexy lại “thiêu đốt” thị giác game thủ',
"description": 'Không hổ danh là nữ streamer nóng bỏng nhất làng game, Kim Chi khiến người hâm mộ phải thốt lên: “Ối dồi ôi”!',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210616113021--11-197716.jpg',
"alt": 'Streamer, Sexy, Kim Chi, Hot Girl, Cong Dong Mang, ',
"category": 'images',
"date": '16/06/2021',
"time": '11:30 AM',
"link": '/quang-cao-game-moi-nu-hoang-sexy-lai-thieu-dot-thi-giac-game-thu',
"zcomponent": 'page_20210616113021',
"filepath": './20210616113021-quang-cao-game-moi-nu-hoang-sexy-lai-thieu-dot-thi-giac-game-thu.js'
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
  "Quảng cáo game mới, “nữ hoàng” sexy lại “thiêu đốt” thị giác game thủ";
const author = "Kayle";
const source = "Pháp luật và bạn đọc";
const timestamp = "16/06/2021 11:30 AM";
const description =
  "Không hổ danh là nữ streamer nóng bỏng nhất làng game, Kim Chi khiến người hâm mộ phải thốt lên: “Ối dồi ôi”!";
const link = "quang-cao-game-moi-nu-hoang-sexy-lai-thieu-dot-thi-giac-game-thu";
const tagparam = ["streamer", "sexy", "kim-chi", "hot-girl", "cong-dong-mang"];
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

export default function page_20210616113021() {
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
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Vũ Ngọc <strong>Kim Chi</strong> nổi lên từ đầu năm 2019 với
                    vai trò là <strong>streamer</strong> của tựa game Liên Minh
                    Huyền Thoại được Dũng CT động viên và giúp đỡ. Đến nay, sau
                    hai năm nỗ lực, cô nàng đã chứng minh được khả năng của mình
                    cũng như có được vị trí nhất định. Đặc biệt, Chi được người
                    hâm mộ cho là bóng hồng <strong>sexy</strong> nhất làng
                    game.
                  </p>
                  <p>
                    Không chỉ phát huy được “nội tại” ở lĩnh vực{" "}
                    <strong>streamer</strong>, <strong>hot girl</strong> sinh
                    năm 1999 này còn là mẫu ảnh, KOL có tiếng. Dù trong mùa
                    dịch, cô nàng vẫn nhận được nhiều hợp đồng quảng cáo. Và với
                    phong cách <strong>sexy</strong> của mình, “bóng hồng” đến
                    từ Hải Phòng này lại một lần nữa “đốt mắt” anh em game thủ
                    với bản hợp đồng gần nhất.
                  </p>
                  <p>
                    Theo đó, <strong>Kim Chi</strong> làm hình ảnh truyền thông
                    cho một game mới. Tại đó, cô nàng diện một bộ trang phục vô
                    cùng <strong>sexy</strong> trong game, khoe trọn vẹn những
                    điểm mạnh và đường cong cơ thể. Kết hợp với hiệu ứng màu
                    sắc, nữ <strong>streamer</strong> xuất hiện cực nóng bỏng,
                    khiến cho người hâm mộ “đứng ngồi không yên”, bàn tán sôi
                    nổi. Thậm chí có người còn khẳng định, sẽ chơi game này với
                    hy vọng có thể gặp được cô nàng trong game.{" "}
                  </p>
                  <p></p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113021--10-498000.jpg")
                        .default
                    }
                    alt="1Streamer, Sexy, Kim Chi, Hot Girl, Cong Dong Mang, "
                    note="Fan phấn khích với diện mạo mới của Kim Chi."
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Cách đây không lâu, nữ <strong>streamer</strong>{" "}
                    <strong>sexy</strong> này cũng khiến fan mắt chữ A miệng chữ
                    O khi quảng cáo cho một dòng loa không dây. Ở đó,{" "}
                    <strong>Kim Chi</strong> táo bạo không mặc áo, sử dụng loa
                    che khuất khuôn ngực đang lấp ló phía sau.{" "}
                  </p>
                  <p>
                    Việc đi theo phong cách <strong>sexy</strong>, xây dựng hình
                    ảnh quyến rũ này, <strong>Kim Chi</strong> cũng thừa nhận
                    mình đã từng bị không ít bình luận tiêu cực hay sự gạ gẫm
                    thô thiển. Song với cô gái trẻ này, điều ấy chỉ là thứ yếu,
                    không đáng để bận tâm. Chưa kể, ở chiều hướng ngược lại, Kim
                    Chi cũng có thêm rất nhiều bạn tốt.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113021--11-197716.jpg")
                        .default
                    }
                    alt="2Streamer, Sexy, Kim Chi, Hot Girl, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113021--12-165821.jpg")
                        .default
                    }
                    alt="3Streamer, Sexy, Kim Chi, Hot Girl, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113021--13-640458.jpg")
                        .default
                    }
                    alt="4Streamer, Sexy, Kim Chi, Hot Girl, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113021--14-567153.png")
                        .default
                    }
                    alt="5Streamer, Sexy, Kim Chi, Hot Girl, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113021--15-549539.png")
                        .default
                    }
                    alt="6Streamer, Sexy, Kim Chi, Hot Girl, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113021--16-680143.jpg")
                        .default
                    }
                    alt="7Streamer, Sexy, Kim Chi, Hot Girl, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113021--17-707176.jpg")
                        .default
                    }
                    alt="8Streamer, Sexy, Kim Chi, Hot Girl, Cong Dong Mang, "
                    note=""
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
