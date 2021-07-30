import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 06:39 PM",
"title": Cầu thủ Indonesia chắp tay xin lỗi Tuấn Anh trong đường hầm vì phạm lỗi nguy hiểm",
"description": Nguyễn Tuấn Anh bị Pratama Arhan Alif phạm lỗi nguy hiểm là tình huống đáng chú ý nhất hiệp 1 trận tuyển Việt Nam gặp Indonesia vào tối 7/6.",
"src": ",
"alt": Cau Thu Indonesia, Tuan Anh, Vong Loai World Cup, Tuyen Viet Nam, Uae, Viet Nam Thang Indonesia, ",
"category": news",
"date": 07/06/2021",
"time": 06:39 PM",
"link": "/cau-thu-indonesia-chap-tay-xin-loi-tuan-anh-trong-duong-ham-vi-pham-loi-nguy-hiem",
"zcomponent": page_20210607183906",
"filepath": ./20210607183906-cau-thu-indonesia-chap-tay-xin-loi-tuan-anh-trong-duong-ham-vi-pham-loi-nguy-hiem.js"
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  "Cầu thủ Indonesia chắp tay xin lỗi Tuấn Anh trong đường hầm vì phạm lỗi nguy hiểm";
const author = "HIẾU LƯƠNG (TỪ DUBAI, UAE),";
const source = "Nhịp Sống Việt";
const timestamp = "07/06/2021 06:39 PM";
const description =
  "Nguyễn Tuấn Anh bị Pratama Arhan Alif phạm lỗi nguy hiểm là tình huống đáng chú ý nhất hiệp 1 trận tuyển Việt Nam gặp Indonesia vào tối 7/6.";
const link =
  "cau-thu-indonesia-chap-tay-xin-loi-tuan-anh-trong-duong-ham-vi-pham-loi-nguy-hiem";
const tagparam = [
  "cau-thu-indonesia",
  "tuan-anh",
  "vong-loai-world-cup",
  "tuyen-viet-nam",
  "uae",
  "viet-nam-thang-indonesia",
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

export default function page_20210607183906() {
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
                    Cú xoạc của Pratama khiến Tuấn Anh bị hất tung lên không
                    trung và gặp vấn đề ở chân phải. Tiền vệ sinh năm 1995 vẫn
                    cố thi đấu nhưng cuối cùng phải rời sân sớm ở phút 35 nhường
                    chỗ cho Lương Xuân Trường.
                  </p>
                  <p>
                    Theo chia sẻ của một thành viên đội tuyển Việt Nam, sau khi
                    trận đấu kết thúc, Pratama đã chủ động xin lỗi Tuấn Anh ở
                    trong đường hầm SVĐ Al Maktoum. Người này cho biết Pratama
                    chắp tay xin lỗi chân thành đúng với văn hoá của người
                    Indonesia.
                  </p>
                  <ContentImage
                    src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/6/8/2021-6-7-doi-tuyen-viet-nam-doi-tuyen-indonesia-hieu-luong-20-1623109627973774307482.jpg"
                    alt="Cau Thu Indonesia, Tuan Anh, Vong Loai World Cup, Tuyen Viet Nam, Uae, Viet Nam Thang Indonesia, "
                    note="Tình huống đạp trúng chân Tuấn Anh của Pratama (Ảnh: Hiếu Lương)"
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/6/8/2021-6-7-doi-tuyen-viet-nam-doi-tuyen-indonesia-hieu-luong-21-1623109628124627525171.jpg"
                    alt="Cau Thu Indonesia, Tuan Anh, Vong Loai World Cup, Tuyen Viet Nam, Uae, Viet Nam Thang Indonesia, "
                    note="Tiền vệ tuyển Việt Nam lộn nhào trên không trung sau pha bóng (Ảnh: Hiếu Lương)"
                  />
                  <p>
                    Ở cuộc họp báo sau trận, HLV Park Hang-seo chia sẻ về tình
                    trạng của Tuấn Anh: "Cậu ấy va chạm với cầu thủ đội bạn, sau
                    đó ra dấu thay người nên tôi đưa Xuân Trường vào. Tình trạng
                    thì sáng mai mới xác định chính xác được".
                  </p>
                  <p>
                    Tuấn Anh rời sân với những bước đi tập tễnh. Anh sẽ được đưa
                    đến bệnh viện kiểm tra vào sáng 8/6. Ngoài Tuấn Anh, nhiều
                    khả năng Văn Toàn cũng phải đi kiểm tra ở bệnh viện sau khi
                    phải rời sân trước khi hiệp 2 bắt đầu.
                  </p>
                  <p>
                    Trong trận đấu, hậu vệ Pratama có nhiều tình huống vào bóng
                    quyết liệt. Đây là tinh thần chung của các cầu thủ Indonesia
                    xuyên suốt trận.
                  </p>
                  <p>
                    HLV Shin Tae-yong cho biết ông không chủ trương đá quyết
                    liệt như vậy mà tự bản thân các cầu thủ muốn vậy. Ông cho
                    rằng hai trận thua ở SEA Games 2019 khiến các cầu thủ
                    Indonesia quyết tâm thi đấu với đội tuyển Việt Nam như vậy.
                  </p>
                  <p>
                    Thầy trò HLV Park Hang-seo giành chiến thắng chung cuộc với
                    tỷ số 4-0 nhờ công Tiến Linh, Quang Hải, Công Phượng và Văn
                    Thanh. Với 3 điểm, đội tuyển Việt Nam củng cố ngôi đầu bảng
                    với 14 điểm sau 6 trận, hơn đội nhì bảng{" "}
                    <strong>UAE</strong> 2 điểm.
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
