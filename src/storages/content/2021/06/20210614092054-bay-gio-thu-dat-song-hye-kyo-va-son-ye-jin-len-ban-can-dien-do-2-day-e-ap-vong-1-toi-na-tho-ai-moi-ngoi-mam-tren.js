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
"timestamp": '14/06/2021 09:20 AM',
"title": 'Bây giờ thử đặt Song Hye Kyo và Son Ye Jin lên bàn cân: Diện đồ 2 dây e ấp vòng 1 tới "ná thở", ai mới ngồi "mâm trên"?',
"description": 'Không phải ai cũng từng thấy những hình ảnh nóng bỏng tới mức này của Song Hye Kyo và Son Ye Jin đâu!',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210614092054--10-578120.jpg',
"alt": 'Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, ',
"category": 'images',
"date": '14/06/2021',
"time": '09:20 AM',
"link": '/bay-gio-thu-dat-song-hye-kyo-va-son-ye-jin-len-ban-can-dien-do-2-day-e-ap-vong-1-toi-na-tho-ai-moi-ngoi-mam-tren',
"zcomponent": 'page_20210614092054',
"filepath": './20210614092054-bay-gio-thu-dat-song-hye-kyo-va-son-ye-jin-len-ban-can-dien-do-2-day-e-ap-vong-1-toi-na-tho-ai-moi-ngoi-mam-tren.js'
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
  'Bây giờ thử đặt Song Hye Kyo và Son Ye Jin lên bàn cân: Diện đồ 2 dây e ấp vòng 1 tới "ná thở", ai mới ngồi "mâm trên"?';
const author = "PHOEBE,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "14/06/2021 09:20 AM";
const description =
  "Không phải ai cũng từng thấy những hình ảnh nóng bỏng tới mức này của Song Hye Kyo và Son Ye Jin đâu!";
const link =
  "bay-gio-thu-dat-song-hye-kyo-va-son-ye-jin-len-ban-can-dien-do-2-day-e-ap-vong-1-toi-na-tho-ai-moi-ngoi-mam-tren";
const tagparam = [
  "song-hye-kyo",
  "son-ye-jin",
  "sao-han",
  "kbiz",
  "ngoc-nu",
  "sexy",
  "goi-cam",
  "vong-mot",
  "quyen-ru",
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

export default function page_20210614092054() {
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
                <div className="contentBody">
                  <p>
                    Cùng có quan hệ tình ái với tài tử đình đám Hyun Bin, thế
                    nên chắc chắn <strong>Song Hye Kyo</strong> và{" "}
                    <strong>Son Ye Jin</strong> không thể tránh khỏi việc bị so
                    sánh. Xét về nhan sắc, hai nàng ngọc nữ hàng đầu{" "}
                    <strong>Kbiz</strong> là "một chín một mười". Thế còn về vóc
                    dáng thì sao? Liệu ai sẽ là người thắng thế khi đọ dáng
                    trong những trang phục khoe vòng 1 <strong>sexy</strong>?
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092054--10-578120.jpg")
                        .default
                    }
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092054--12-558930.jpg")
                        .default
                    }
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092054--13-392568.jpg")
                        .default
                    }
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092054--14-780125.jpg")
                        .default
                    }
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092054--15-123769.jpg")
                        .default
                    }
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092054--16-830608.jpg")
                        .default
                    }
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092054--17-126837.jpg")
                        .default
                    }
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/13/a1-16143395853281024288845-16235592087301930534400.jpg"
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <p>
                    Không đợi đến hậu ly hôn, <strong>Song Hye Kyo</strong> cũng
                    từng có nhiều khoảnh khắc khoe vòng 1 cuốn hút trong quá
                    khứ. Điểm khác biệt duy nhất là dạo gần đây, cô chú trọng
                    thêm khoản makeup như kẻ eyeliner đậm, dùng son đỏ nên diện
                    mạo "khác bọt" hẳn. Váy hai dây xẻ cổ chữ V sâu hoắm hay áo
                    dây đen ôm sát đều giúp nữ diễn viên phô bày vòng 1 một cách
                    tinh tế.
                  </p>

                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092054--18-396742.png")
                        .default
                    }
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092054--19-191776.jpg")
                        .default
                    }
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <p>
                    Trang phục hai dây rất hay góp mặt trong tủ đồ du lịch của{" "}
                    <strong>Song Hye Kyo</strong>. Điều đáng nói sự{" "}
                    <strong>sexy</strong>, cuốn hút không hẳn xuất phát từ vòng
                    một của nữ diễn viên mà còn nằm ở thần thái của cô. Vì vậy
                    dù vòng 1 không thuộc "hàng khủng", Song Hye Kyo vẫn mang
                    lại cảm giác thu hút khó rời.
                  </p>
                  <p></p>
                  <p>
                    Về phía <strong>Son Ye Jin</strong>, người đẹp thoải mái hơn
                    hẳn khi không ngại diện những bộ cánh khoe vòng 1 quyến rũ
                    lên thảm đỏ hay sự kiện. Không chỉ có váy dây mà váy quây
                    ngang cũng thường xuyên được nữ diễn viên ưu ái nhờ khả năng
                    tôn vòng 1 cực tốt. Tuy vậy, cô vẫn biết tiết chế độ hở nên
                    chưa rơi vào trường hợp đáng báo động nào.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092054--11-643689.jpg")
                        .default
                    }
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092054--20-952891.jpg")
                        .default
                    }
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092054--21-309878.jpg")
                        .default
                    }
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092054--22-759595.jpg")
                        .default
                    }
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092054--23-912309.jpg")
                        .default
                    }
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092054--25-553491.jpg")
                        .default
                    }
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092054--26-969470.jpg")
                        .default
                    }
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092054--27-198803.jpg")
                        .default
                    }
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/13/nhan-sac-khong-tuoi-cua-son-ye-jin-khien-hyun-bin-me-man-hinh-9-1623559209309514463434.jpg"
                    alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                    note=""
                  />
                </div>
                <p>
                  Nếu bạn nghĩ <strong>Son Ye Jin</strong> chỉ khoe tới đó là
                  cùng thì bạn nhầm to rồi nhé! Ngoài đời thường, nàng diễn viên
                  này còn năng diện những trang phục hở bạo hơn rất nhiều. Nóng
                  bỏng nhất hẳn là hình ảnh cô nàng diện bikini, khoe vòng một
                  căng đầy, trễ nải, khiến dân tình có cái nhìn khác hẳn với
                  hình tượng thanh thuần thường thấy.
                </p>

                <ContentImage
                  src={
                    require("storages/images/content/2021/20210614092054--24-432661.jpg")
                      .default
                  }
                  alt="Song Hye Kyo, Son Ye Jin, Sao Han, Kbiz, Ngoc Nu, Sexy, Goi Cam, Vong Mot, Quyen Ru, "
                  note=""
                />
                <p>
                  Không chỉ vòng 1 mà vóc dáng của hai nữ thần cũng được đặt lên
                  bàn cân. Trong khi <strong>Song Hye Kyo</strong> gây bất ngờ
                  với thân hình nuột nà khi diện váy bodycon thì{" "}
                  <strong>Son Ye Jin</strong> lại toát lên vẻ hoang dại và nóng
                  bỏng với bikini.
                </p>
                <p></p>
                <p>Ảnh: Sưu tầm</p>
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
