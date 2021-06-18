import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '18/06/2021 01:04 PM',
"title": 'Nghẹt thở với bộ ảnh sinh nhật của Cúc Tịnh Y: Visual kinh diễm tới từng milimet, vòng 1 đẫy đà như muốn chực trào ra ngoài',
"description": 'Ngày hôm nay, netizen xứ Trung gửi rất nhiều lời chúc mừng sinh nhật dành tặng cho "Mỹ nhân 4000 năm" Cúc Tịnh Y.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210618130438--15-429117.jpg',
"alt": '',
"category": 'images',
"date": '18/06/2021',
"time": '01:04 PM',
"link": '/nghet-tho-voi-bo-anh-sinh-nhat-cua-cuc-tinh-y-visual-kinh-diem-toi-tung-milimet-vong-1-day-da-nhu-muon-truc-trao-ra-ngoai',
"zcomponent": 'page_20210618130438',
"filepath": './20210618130438-nghet-tho-voi-bo-anh-sinh-nhat-cua-cuc-tinh-y-visual-kinh-diem-toi-tung-milimet-vong-1-day-da-nhu-muon-truc-trao-ra-ngoai.js'
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
  "Nghẹt thở với bộ ảnh sinh nhật của Cúc Tịnh Y: Visual kinh diễm tới từng milimet, vòng 1 đẫy đà như muốn chực trào ra ngoài";
const author = "NHÃ AN,";
const source = "Trí Thức Trẻ";
const timestamp = "18/06/2021 01:04 PM";
const description =
  'Ngày hôm nay, netizen xứ Trung gửi rất nhiều lời chúc mừng sinh nhật dành tặng cho "Mỹ nhân 4000 năm" Cúc Tịnh Y.';
const link =
  "nghet-tho-voi-bo-anh-sinh-nhat-cua-cuc-tinh-y-visual-kinh-diem-toi-tung-milimet-vong-1-day-da-nhu-muon-truc-trao-ra-ngoai";
const tagparam = [];
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

export default function page_20210618130438() {
  return (
    <>
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
                <div className="contentBody">
                  <p>
                    18/6 là một ngày vô cùng đặc biệt với fandom của Cúc Tịnh Y,
                    bởi hôm nay chính là ngày sinh nhật tuổi 27 của cô nàng "Mỹ
                    nhân 4000 năm". Nhân dịp này, studio của nữ diễn viên khiến
                    cả Weibo bùng nổ với 2 bộ ảnh lột tả nét đẹp kiều diễm, nhan
                    sắc và thần thái đỉnh cao từ Cúc Tịnh Y. Đây cũng là bộ ảnh
                    mà cô nàng "bùng nổ visual", khoe vòng 1 sexy căng đầy như
                    muốn trực trào ra ngoài.
                  </p>
                  <p>
                    Có lẽ netizen đều đang xôn xao trước bộ hình Cúc Tịnh Y diện
                    đầm công chúa cùng vương miện kiêu sa. Có thể nói, cô nàng
                    cực kỳ hợp với tạo hình sang chảnh tựa nữ thần bước ra từ
                    truyện cổ tích.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130438--10-738825.jpg")
                        .default
                    }
                    alt="1, "
                    note="Cúc Tịnh Y khiến dân tình xuýt xoa trầm trồ vì bộ ảnh mừng tuổi mới đẹp tới từng milimet"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130438--11-806884.jpg")
                        .default
                    }
                    alt="2, "
                    note="Bên cạnh nét đẹp kiêu sa, sang chảnh ngút ngàn"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130438--12-646157.jpg")
                        .default
                    }
                    alt="3, "
                    note="... thì dân tình lại đổ dồn sự quan tâm vào vòng 1 bốc lửa của Cúc Tịnh Y"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130438--13-482070.jpg")
                        .default
                    }
                    alt="4, "
                    note="Cúc Tịnh Y chọn chiếc đầm để lộ vòng 1"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130438--14-018361.jpg")
                        .default
                    }
                    alt="5, "
                    note="Góc nghiêng khoe sống mũi cao cùng visual đẳng cấp của nàng mỹ nhân 27 tuổi"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130438--16-076805.jpg")
                        .default
                    }
                    alt="6, "
                    note="Cúc Tịnh Y cực kỳ hợp với những bộ đầm hở vai, khoe vóc dáng mảnh mai cùng xương quai xanh gợi cảm"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130438--15-429117.jpg")
                        .default
                    }
                    alt="7, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130438--17-679219.jpg")
                        .default
                    }
                    alt="8, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130438--18-417318.jpg")
                        .default
                    }
                    alt="9, "
                    note=""
                  />
                  <p>
                    Không dừng lại ở đó, Cúc Tịnh Y còn có bộ ảnh thứ 2 siêu
                    xinh chụp cùng bánh gato sinh nhật. Có lẽ, đây chính là 2 bộ
                    ảnh khẳng định được visual đỉnh cao, xứng đáng nằm trong top
                    nữ thần 9X Cbiz của Cúc Tịnh Y.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130438--19-304537.jpg")
                        .default
                    }
                    alt="10, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130438--20-214738.jpg")
                        .default
                    }
                    alt="11, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130438--21-879618.jpg")
                        .default
                    }
                    alt="12, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130438--22-444601.jpg")
                        .default
                    }
                    alt="13, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130438--23-252896.jpg")
                        .default
                    }
                    alt="14, "
                    note=""
                  />
                  <p>Nguồn: Weibo</p>
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
