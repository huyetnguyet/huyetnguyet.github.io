import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 06:38 PM",
"title": Đây đích thị là bộ váy kém duyên nhất Cbiz hôm qua, lại còn 'tòng teng' 1 vật ở ngay chỗ nhạy cảm!",
"description": Lẽ nào nữ nhi này đã mất nhận thức về không gian, thời gian để ăn vận cho phù hợp?",
"src": https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-1623079166395367192097.jpg",
"alt": Sao Do Thoi Trang, Tham Hoa Thoi Trang, Loi Trang Phuc, Mac Xau, Sao Xau, Sao Mac Xau, Loi An Mac, ",
"category": images",
"date": 07/06/2021",
"time": 06:38 PM",
"link": "/day-dich-thi-la-bo-vay-kem-duyen-nhat-cbiz-hom-qua-lai-con-tong-teng-1-vat-o-ngay-cho-nhay-cam",
"zcomponent": page_20210607183825",
"filepath": ./20210607183825-day-dich-thi-la-bo-vay-kem-duyen-nhat-cbiz-hom-qua-lai-con-tong-teng-1-vat-o-ngay-cho-nhay-cam.js"
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
  "Đây đích thị là bộ váy kém duyên nhất Cbiz hôm qua, lại còn 'tòng teng' 1 vật ở ngay chỗ nhạy cảm!";
const author = "LÝ THẨM,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "07/06/2021 06:38 PM";
const description =
  "Lẽ nào nữ nhi này đã mất nhận thức về không gian, thời gian để ăn vận cho phù hợp?";
const link =
  "day-dich-thi-la-bo-vay-kem-duyen-nhat-cbiz-hom-qua-lai-con-tong-teng-1-vat-o-ngay-cho-nhay-cam";
const tagparam = [
  "sao-do-thoi-trang",
  "tham-hoa-thoi-trang",
  "loi-trang-phuc",
  "mac-xau",
  "sao-xau",
  "sao-mac-xau",
  "loi-an-mac",
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

export default function page_20210607183825() {
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
                <div className="contentBody">
                  <p>
                    Tại sự kiện Thập Quang Thịnh Điển ngày hôm qua, bên cạnh
                    những cái tên gạo cội, những gương mặt nghệ sĩ ưu tú, có 1
                    nhân vật bỗng nổi lên sau 1 đêm theo cái cách mà bất cứ
                    những con người thiếu tài năng, thừa chiêu trò nào cũng chọn
                    đầu tiên: ăn mặc phản cảm để gây sốc.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-1623079166395367192097.jpg"
                    alt="Sao Do Thoi Trang, Tham Hoa Thoi Trang, Loi Trang Phuc, Mac Xau, Sao Xau, Sao Mac Xau, Loi An Mac, "
                    note="Nhân vật này có cái tên mỹ miều: Hồ Băng Khanh."
                  />
                  <p></p>
                  <p>
                    Makeup và làm tóc đơn giản, Hồ Băng Khanh dường như muốn lôi
                    kéo sự chú ý vào chiếc váy xẻ "tít mù tắp" lên quá vòng 3
                    cùng phần cúp ngực nhọn hoắt như kim tự tháp.{" "}
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230791682771437325002.jpg"
                    alt="Sao Do Thoi Trang, Tham Hoa Thoi Trang, Loi Trang Phuc, Mac Xau, Sao Xau, Sao Mac Xau, Loi An Mac, "
                    note=""
                  />
                  <p>
                    Chất liệu vải của mẫu thiết kế này quá sức bình thường, nếu
                    không nói là kém chất lượng và khiến cho phom đầm xộc xệch,
                    rẻ tiền. Phần tà váy cứ co rút dần theo từng bước đi của
                    người đẹp, khiến 1 bên đầm của cô chẳng mấy chốc mà giống
                    chiếc quần đùi của 1 cậu nam sinh tiểu học nào đó.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-4-16230791683411687182919.jpg"
                    alt="Sao Do Thoi Trang, Tham Hoa Thoi Trang, Loi Trang Phuc, Mac Xau, Sao Xau, Sao Mac Xau, Loi An Mac, "
                    note=""
                  />
                  <p>
                    Và cũng vì cái sự kiệm vải quá đáng đó mà "bàn toạ" của nhân
                    vật này chiếm trọn khung hình.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-5-1623079169046296676128.jpg"
                    alt="Sao Do Thoi Trang, Tham Hoa Thoi Trang, Loi Trang Phuc, Mac Xau, Sao Xau, Sao Mac Xau, Loi An Mac, "
                    note="Body của nữ nhân này dần dần được trưng trổ 1 cách thô lỗ
                    trước mắt công chúng."
                  />
                  <p></p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-6-1623079168386493902697.jpg"
                    alt="Sao Do Thoi Trang, Tham Hoa Thoi Trang, Loi Trang Phuc, Mac Xau, Sao Xau, Sao Mac Xau, Loi An Mac, "
                    note=""
                  />
                  <p>
                    Điều tệ nhất là ở ngay vị trí "ứ ừ" kia, 1 dị vật trông
                    giống như mẩu vải thừa treo "tòng teng" chính giữa, đập cả
                    vào mắt người xem truyền hình. Thật không ngoa khi cho rằng
                    đây là 1 trong những tội ác đối với sự phát triển của ngành
                    công nghiệp thời trang. Thật tồi tệ...
                  </p>
                  <p>
                    Không giơ cao đánh khẽ, không viết bản kiểm điểm gì cả! Sao
                    Đỏ Thời Trang nghĩ rằng những nhân vật thế này cần được lược
                    bỏ khỏi giới giải trí. Một người làm giải trí mà có sắc
                    nhưng kém tài thì cũng giống như bông hoa dâm bụt có đỏ mà
                    không có thơm, chẳng làm nên cơm cháo gì. Nếu khán giả khắt
                    khe hơn, showbiz sẽ vắng bóng dần những kẻ chỉ biết makeup
                    tên tuổi bằng chiêu trò phản cảm thế này.
                  </p>
                  <p>Ảnh: Sưu tầm</p>
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
