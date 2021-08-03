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
"timestamp": '14/06/2021 09:25 AM',
"title": 'Đam mê “thả rông” vòng một, khoe thềm ngực quyến rũ, các hot girl làng game được và mất những gì?',
"description": 'Với thế mạnh sở hữu vòng một gợi cảm, các hot streamer thu hút sự chú ý của cộng đồng fan.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210614092507--10-65347.jpeg',
"alt": 'Streamer, Vong Mot, Tha Rong, Chieu Tro, ',
"category": 'images',
"date": '14/06/2021',
"time": '09:25 AM',
"link": '/dam-me-tha-rong-vong-mot-khoe-them-nguc-quyen-ru-cac-hot-girl-lang-game-duoc-va-mat-nhung-gi',
"zcomponent": 'page_20210614092507',
"filepath": './20210614092507-dam-me-tha-rong-vong-mot-khoe-them-nguc-quyen-ru-cac-hot-girl-lang-game-duoc-va-mat-nhung-gi.js'
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
  "Đam mê “thả rông” vòng một, khoe thềm ngực quyến rũ, các hot girl làng game được và mất những gì?";
const author = "Kayle";
const source = "Trí Thức Trẻ";
const timestamp = "14/06/2021 09:25 AM";
const description =
  "Với thế mạnh sở hữu vòng một gợi cảm, các hot streamer thu hút sự chú ý của cộng đồng fan.";
const link =
  "dam-me-tha-rong-vong-mot-khoe-them-nguc-quyen-ru-cac-hot-girl-lang-game-duoc-va-mat-nhung-gi";
const tagparam = ["streamer", "vong-mot", "tha-rong", "chieu-tro"];
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

export default function page_20210614092507() {
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
                      Hiện nay, <strong>streamer</strong> là ngành nghề mới được
                      giới trẻ vô cùng yêu thích, đặc biệt đối với những hot
                      girl mạng xã hội. Việc thử sức với công việc này là một
                      cách để những cô nàng duy trì, thậm chí để tăng độ nổi
                      tiếng cho tên tuổi. Để thêm phần tự "đánh bóng" cho danh
                      tiếng của mình, nhiều streamer không ngại ăn mặc sexy,
                      thậm chí nghiện “thả rông” vòng một, chụp ảnh và đăng tải
                      trên các nền tảng mạng xã hội để thu hút sự chú ý.
                    </p>{" "}
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614092507--10-65347.jpeg")
                          .default
                      }
                      alt="Streamer, Vong Mot, Tha Rong, Chieu Tro, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614092507--11-52556.jpeg")
                          .default
                      }
                      alt="Streamer, Vong Mot, Tha Rong, Chieu Tro, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614092507--12-03357.jpeg")
                          .default
                      }
                      alt="Streamer, Vong Mot, Tha Rong, Chieu Tro, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614092507--13-75750.jpeg")
                          .default
                      }
                      alt="Streamer, Vong Mot, Tha Rong, Chieu Tro, "
                      note="Nàng mẫu gợi cảm Thiên Thy."
                    />
                    <p>
                      Quả thực, khi liên tục khoe vóc dáng trên mạng xã hội, tuy
                      cũng có vấp phải lời chỉ trích khá nặng nề từ khán giả
                      nhưng chủ nhân của những bức hình khoe body đẹp mê mẩn này
                      cũng khiến đa số dân tình "đổ gục" bởi vóc dáng không thua
                      kém bất cứ cô người mẫu nào.
                    </p>
                    <p>
                      Mạnh dạn chọn thiết kế áo hai dây khoe tấm lưng trần quyến
                      rũ, trang phục trễ nải, gợi cảm cùng làn da mịn màng không
                      tì vết, phong cách thời trang cực táo bạo này khiến các nữ{" "}
                      <strong>streamer</strong> dần có lượng fan đông đảo.
                    </p>
                    <p>
                      <ContentImage
                        src={
                          require("storages/images/content/2021/20210614092507--14-84975.jpeg")
                            .default
                        }
                        alt="Streamer, Vong Mot, Tha Rong, Chieu Tro, "
                        note=""
                      />
                      <ContentImage
                        src={
                          require("storages/images/content/2021/20210614092507--15-51786.jpeg")
                            .default
                        }
                        alt="Streamer, Vong Mot, Tha Rong, Chieu Tro, "
                        note=" Streamer Linh Chichan"
                      />
                      .
                    </p>
                    <p>
                      Theo quy định, việc khoe thân quá đà khi livestream là vi
                      phạm nội quy, quy định của truyền thông. Có những{" "}
                      <strong>streamer</strong> may mắn chỉ bị nhắc nhở nhưng
                      cũng có những streamer đã bị khóa kênh vĩnh viễn vì vi
                      phạm quy định này. Không muốn bị phạt nhưng vẫn khoe được
                      dáng sexy trước người hâm mộ, các streamer "lách luật"
                      bằng cách diện trang phục mà không cần nội y.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Phong cách thời trang này khiến vòng một của các cô gái
                      như muốn “rơi” ra ngoài. Chiêu trò này không mới nhưng vẫn
                      giúp các cô gái thu hút rất nhiều lượt tương tác trong mỗi
                      bài đăng, tên tuổi của nữ <strong>streamer</strong> cũng
                      nhờ đó mà ngày càng được nhiều người biết đến.{" "}
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614092507--16-59276.jpeg")
                          .default
                      }
                      alt="Streamer, Vong Mot, Tha Rong, Chieu Tro, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614092507--17-65153.jpeg")
                          .default
                      }
                      alt="Streamer, Vong Mot, Tha Rong, Chieu Tro, "
                      note=""
                    />
                    <p>
                      Theo đuổi phong cách gợi cảm cả trong công việc lẫn cuộc
                      sống đời thường, trang cá nhân của ArBy thường xuyên khiến
                      các fan phải bỏng mắt với những hình ảnh cực kỳ nóng bỏng.
                    </p>
                    <p>
                      <ContentImage
                        src={
                          require("storages/images/content/2021/20210614092507--18-306185.png")
                            .default
                        }
                        alt="Streamer, Vong Mot, Tha Rong, Chieu Tro, "
                        note=""
                      />
                      <ContentImage
                        src={
                          require("storages/images/content/2021/20210614092507--19-411029.png")
                            .default
                        }
                        alt="Streamer, Vong Mot, Tha Rong, Chieu Tro, "
                        note=""
                      />
                      <ContentImage
                        src={
                          require("storages/images/content/2021/20210614092507--20-027573.png")
                            .default
                        }
                        alt="Streamer, Vong Mot, Tha Rong, Chieu Tro, "
                        note="
                    Với khoảnh khắc táo bạo này, nữ MC Mai Dora muốn khẳng định
                    phong cách và cá tính của mình."
                      />
                    </p>
                    <p>
                      Tuy nhiên, suy cho cùng, “thả rông” vòng 1 vẫn không thể
                      coi là bí quyết mà các cô nàng nên học hỏi, bởi hơn hết,
                      việc không mặc nội y sẽ dễ biến phong cách của cô nàng trở
                      nên phô trương, kém duyên thay vì gợi cảm, quyến rũ.
                    </p>
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
