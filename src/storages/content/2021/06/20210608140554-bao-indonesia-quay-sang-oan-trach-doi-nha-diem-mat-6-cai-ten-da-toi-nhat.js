import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 08/06/2021 02:05 PM",
"title": Báo Indonesia quay sang oán trách đội nhà, điểm mặt 6 cái tên đá tồi nhất",
"description": Tờ Bola chỉ mặt điểm tên 6 cầu thủ chơi dưới kỳ vọng trong trận Indonesia thua Việt Nam 0-4.",
"src": https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/9/photo-5-16231748625421736336327.png",
"alt": Indonesia, Viet Nam, Dt Viet Nam, Vong Loai World Cup 2022, ",
"category": news",
"date": 08/06/2021",
"time": 02:05 PM",
"link": "/bao-indonesia-quay-sang-oan-trach-doi-nha-diem-mat-6-cai-ten-da-toi-nhat",
"zcomponent": page_20210608140554",
"filepath": ./20210608140554-bao-indonesia-quay-sang-oan-trach-doi-nha-diem-mat-6-cai-ten-da-toi-nhat.js"
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
  "Báo Indonesia quay sang oán trách đội nhà, điểm mặt 6 cái tên đá tồi nhất";
const author = "HOÀNG ANH,";
const source = "Trí thức trẻ";
const timestamp = "08/06/2021 02:05 PM";
const description =
  "Tờ Bola chỉ mặt điểm tên 6 cầu thủ chơi dưới kỳ vọng trong trận Indonesia thua Việt Nam 0-4.";
const link =
  "bao-indonesia-quay-sang-oan-trach-doi-nha-diem-mat-6-cai-ten-da-toi-nhat";
const tagparam = [
  "indonesia",
  "viet-nam",
  "dt-viet-nam",
  "vong-loai-world-cup-2022",
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

export default function page_20210608140554() {
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
                    ĐT <strong>Indonesia</strong> không thể lặp lại thành tích
                    ấn tượng khi cầm hòa Thái Lan với tỷ số 2-2. Đối đầu Việt
                    Nam, "Garuda" để thua 0-4 dù cầm hòa 0-0 sau hiệp một. Theo
                    Bola nhận định, phong độ kém cỏi của các cầu thủ Indo là
                    nguyên nhân chính dẫn đến trận thua. Tờ báo này chỉ mặt 6
                    cầu thủ chơi tệ nhất bằng 6 tấm hình.
                  </p>
                  <p>
                    Trong các bài viết trên Bola, họ hạn chế thừa nhận Việt Nam
                    ở đẳng cấp khác, thay vào đó họ xoáy sâu sự yếu kém của cầu
                    thủ <strong>Indonesia</strong>. Dưới đây là 6 cầu thủ chơi
                    tệ nhất ở trận thua 0-4, theo lựa chọn của tờ báo thể thao
                    lớn nhất xứ vạn đảo.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/9/photo-1-1623174860301919828362.png"
                    alt="Indonesia, Viet Nam, Dt Viet Nam, Vong Loai World Cup 2022, "
                    note="1. Thủ môn Nadeo Argawinata: Thủ môn 24 tuổi đang nổi như cồn sau 4 bàn thua vào lưới"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/9/photo-1-1623174861494511191397.jpeg"
                    alt="Indonesia, Viet Nam, Dt Viet Nam, Vong Loai World Cup 2022, "
                    note="2. Asnawi Mangkualam: Hậu vệ 21 tuổi được kỳ vọng có thể giúp ích cho hàng công nhờ khả năng bứt tốc của anh. Tuy nhiên, trước sức ép mãnh liệt của ĐT Việt Nam, Asnawi phải chôn chân ở phần sân nhà, không thể tạo ảnh hưởng lên mặt trận tấn công"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/9/photo-2-1623174862010620276796.jpeg"
                    alt="Indonesia, Viet Nam, Dt Viet Nam, Vong Loai World Cup 2022, "
                    note="3. Rachmat Irianto (trái): Tiền vệ 21 tuổi nắm vai trò chia cắt đội hình tuyển Việt Nam. Tuy nhiên, anh chàng này như người tàng hình vì sự khéo léo của đối thủ. Các học trò của HLV Park Hang-seo dễ dàng thoát khỏi vòng vây của Indonesia hoặc thực hiện những đường chuyền dài cho tiền đạo bứt tốc dứt điểm"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/9/photo-3-16231748615231504644577.jpeg"
                    alt="Indonesia, Viet Nam, Dt Viet Nam, Vong Loai World Cup 2022, "
                    note="4. Osvaldo Hay: Điểm mạnh của cầu thủ chạy cánh 23 tuổi là khả năng bứt tốc dọc sân và ghi bàn. Vì đói bóng, Osvaldo Hay không thể làm điều đó và anh cũng chẳng có lấy một đường chuyền thuận lợi cho tiền đạo"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/9/photo-4-1623174863031582454215.jpeg"
                    alt="Indonesia, Viet Nam, Dt Viet Nam, Vong Loai World Cup 2022, "
                    note="5. Yakob Sayuri: Tương tự Osvaldo Hay, cầu thủ chạy cánh Yakob Sayuri không thể trình diễn những phẩm chất tốt nhất của mình như tốc độ hay kỹ thuật cá nhân vì đói bóng"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/9/photo-5-16231748625421736336327.png"
                    alt="Indonesia, Viet Nam, Dt Viet Nam, Vong Loai World Cup 2022, "
                    note="6. Kushedya Yudo (phải): Không có nguồn cung bóng, Yudo mất dạng trên sân. Dù thỉnh thoảng vẫn di chuyển mở ra khoảng trống, không có đồng đội nào tiến về khoảng trống mà Yudo mở ra"
                  />
                  <p>
                    Một bài báo khác thì cho rằng Indo thất bại vì thể lực bị
                    tàn phá. Theo nhận định của Yudi Guntara, danh thủ bóng đá
                    xứ vạn đảo, nguyên nhân dẫn đến thất bại của ĐT{" "}
                    <strong>Indonesia</strong> là do cầu thủ không có đủ thời
                    gian hồi phục. Evan Dimas và đồng đội chỉ có 3 ngày nghỉ sau
                    trận đấu với Thái Lan hôm 3/6.
                  </p>
                  <p>
                    "Ngược lại với Việt Nam, thể trạng tươi tỉnh hơn vì đến 7/6
                    mới đá trận đầu. Đội tuyển <strong>Indonesia</strong> đã
                    thực hiện thay đổi cầu thủ trong trận. Tuy nhiên, tuyến dưới
                    vẫn là những nhân tố đấu Thái Lan", Yudi nhận xét.
                  </p>
                  <p>
                    Theo ông này, tuyến phòng ngự <strong>Indonesia</strong>{" "}
                    dường như mất tập trung trong hiệp hai. Sơ hở đã được Việt
                    Nam tận dụng rất tốt để ghi 4 bàn thắng. Yudi tuyên bố:
                    "Thực tế, cách chơi của Việt Nam không có gì quá đặc sắc.
                    Cầu thủ Indonesia thiếu thời gian hồi phục nên mất tập
                    trung. Khác với trận gặp Thái Lan, khi đó họ tập trung hơn".
                  </p>
                  <p>
                    Cựu cầu thủ của CLB Persib Bandung hy vọng ĐTQG{" "}
                    <strong>Indonesia</strong> sẽ không tan tác sau thất bại.
                    "Garuda Indonesia" phải tỉnh dậy và tập trung trở lại để
                    chuẩn bị cho trận đấu tiếp theo với UAE.
                  </p>
                  <p>
                    "Đối với tôi, trận thua trước Việt Nam là bài học quý giá
                    cho các tuyển thủ. Tôi kỳ vọng màn trình diễn tiếp theo của{" "}
                    <strong>Indonesia</strong> có thể còn tốt hơn trước. Vì tôi
                    tin đối thủ UAE khác với Việt Nam và Thái Lan".
                  </p>
                  <p>
                    "Tôi đã xem và cảm nhận điều đó, nhưng bây giờ tôi không
                    biết. Đội bóng đến từ Tây Á ưu tiên cầm bóng bằng lối chuyền
                    ngắn, không chơi bóng dài và phản công nhanh, họ ưu tiên
                    phối hợp đồng đội", Yudi nói.
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
