import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 06:39 PM",
"title": Bố tiền vệ Tuấn Anh: Con tôi nhiều lần chấn thương rồi, nhìn Indonesia đá thế thấy sợ quá",
"description": Chỉ sau 35 phút thi đấu, Nguyễn Tuấn Anh đã phải rời sân. Trước đó, tiền vệ này liên tục phải chịu những pha vào bóng ác ý từ phía các cầu thủ Indonesia.",
"src": ",
"alt": Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Park Hang Seo, ",
"category": news",
"date": 07/06/2021",
"time": 06:39 PM",
"link": "/bo-tien-ve-tuan-anh-con-toi-nhieu-lan-chan-thuong-roi-nhin-indonesia-da-the-thay-so-qua",
"zcomponent": page_20210607183934",
"filepath": ./20210607183934-bo-tien-ve-tuan-anh-con-toi-nhieu-lan-chan-thuong-roi-nhin-indonesia-da-the-thay-so-qua.js"
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
  "Bố tiền vệ Tuấn Anh: Con tôi nhiều lần chấn thương rồi, nhìn Indonesia đá thế thấy sợ quá";
const author = "LINH ĐAN,";
const source = "PL&BĐ";
const timestamp = "07/06/2021 06:39 PM";
const description =
  "Chỉ sau 35 phút thi đấu, Nguyễn Tuấn Anh đã phải rời sân. Trước đó, tiền vệ này liên tục phải chịu những pha vào bóng ác ý từ phía các cầu thủ Indonesia.";
const link =
  "bo-tien-ve-tuan-anh-con-toi-nhieu-lan-chan-thuong-roi-nhin-indonesia-da-the-thay-so-qua";
const tagparam = [
  "tuyen-viet-nam-tham-du-vong-loai-world-cup-2022",
  "tuyen-viet-nam",
  "park-hang-seo",
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

export default function page_20210607183934() {
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
                <div className="contentBody">
                  <p>
                    HLV Park Hang-seo quyết định để Tuấn Anh ra sân ngay từ đầu
                    và đảm nhận nhiệm vụ cầm nhịp lối chơi của tuyển Việt Nam .
                  </p>
                  <p>
                    Tiền vệ thuộc biên chế HAGL đã có màn trình diễn khá tốt,
                    tuy nhiên anh cũng vấp phải lối đá quyết liệt của các cầu
                    thủ Indonesia . Không dưới một lần đội bóng áo trắng thực
                    hiện những pha vào bóng ác ý.
                  </p>
                  <p>
                    Đỉnh điểm chính là tình huống ở phút 24, khi một cầu thủ
                    Indonesia vừa vào bóng bằng gầm giày, đồng thời đạp thẳng
                    vào chân Tuấn Anh khiến ngôi sao HAGL bị đau. Quế Ngọc Hải
                    và đồng đội sau đó đã phản ứng dữ dội nhưng trọng tài không
                    rút ra thẻ phạt nào.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-16230977964252088751721.png"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Park Hang Seo, "
                    note="Thầy Park nổi nóng khi chứng kiến học trò bị phạm lỗi thô bạo. (Ảnh: Khánh An)"
                  />
                  <p>
                    "Tôi xem cũng thấy sợ, Indonesia họ đá rát quá", ông Nguyễn
                    Văn Dung - bố của tiền vệ Tuấn Anh trao đổi với chúng tôi
                    sau khi hiệp 1 khép lại.
                  </p>
                  <p>
                    "Tôi cũng lo lắm, không biết con có bị làm sao không. Giá
                    như đá ở gần thì sau trận đấu còn gọi điện ngay được cho con
                    để hỏi thăm, chứ xa thì đành chịu. Con mình đã nhiều lần
                    chấn thương rồi nên nhìn thấy tình huống như thế tôi thấy sợ
                    quá", ông Dung nói về tình huống Tuấn Anh bị phạm lỗi thô
                    bạo ở phút 24.
                  </p>
                  <p>
                    Về phía HLV Park Hang-seo, ông cũng quyết định cho Tuấn Anh
                    ra nghỉ sau 35 phút thi đấu. Có lẽ chiến lược gia người Hàn
                    Quốc muốn đảm bảo sự an toàn với một cầu thủ có tiền sử chấn
                    thương nhiều.
                  </p>
                  <p>
                    "Hi vọng Tuấn Anh sẽ ổn và có thể ra sân ở trận sau. Còn
                    trước tiên ở trận này, tôi mong tuyển Việt Nam sẽ thắng. Đội
                    đá hay hơn mà không ghi được bàn nên cũng thấy hơi tiếc",
                    ông Dung bày tỏ với chúng tôi.
                  </p>
                  <p>
                    Điều an ủi với Tuấn Anh là trong hiệp hai các đồng đội của
                    anh đã liên tục khoan thủng được mành lưới đối phương và đem
                    về những bàn thắng. Hi vọng rằng, Tuấn Anh sẽ không gặp vấn
                    đề nghiêm trọng và sẽ ra sân ở những trận đấu tiếp theo.
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
