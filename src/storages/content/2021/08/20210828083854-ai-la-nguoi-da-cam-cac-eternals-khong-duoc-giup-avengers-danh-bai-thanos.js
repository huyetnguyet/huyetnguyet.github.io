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
"timestamp": '28/08/2021 08:38 AM',
"title": 'Ai là người đã cấm các Eternals không được giúp Avengers đánh bại Thanos?',
"description": 'Khi đến Trái Đất từ 7000 năm trước, Eternals đã được "bề trên" ra lệnh không được can thiệp vào những mâu thuẫn của nhân loại, trừ khi những mâu thuẫn đó có liên quan đến Deviants. Vậy ai đủ khả năng khiến cho các Eternal hùng mạnh phải nghe lời răm rắp như vậy?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-16297279484901831118499.jpg',
"alt": 'ETERNALS,THANOS,AVENGERS: INFINITY WAR,AVENGERS: ENDGAME,DEVIANTS,MARVEL,',
"category": 'news',
"date": '28/08/2021',
"time": '08:38 AM',
"link": '/ai-la-nguoi-da-cam-cac-eternals-khong-duoc-giup-avengers-danh-bai-thanos',
"zcomponent": 'page_20210828083854',
"filepath": './20210828083854-ai-la-nguoi-da-cam-cac-eternals-khong-duoc-giup-avengers-danh-bai-thanos.js'
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
  "Ai là người đã cấm các Eternals không được giúp Avengers đánh bại Thanos?";
const author = "DG";
const source = "Pháp luật bạn đọc";
const timestamp = "28/08/2021 08:38 AM";
const description =
  'Khi đến Trái Đất từ 7000 năm trước, Eternals đã được "bề trên" ra lệnh không được can thiệp vào những mâu thuẫn của nhân loại, trừ khi những mâu thuẫn đó có liên quan đến Deviants. Vậy ai đủ khả năng khiến cho các Eternal hùng mạnh phải nghe lời răm rắp như vậy?';
const link =
  "ai-la-nguoi-da-cam-cac-eternals-khong-duoc-giup-avengers-danh-bai-thanos";
const tagparam = [
  "ETERNALS",
  "THANOS",
  "AVENGERS: INFINITY WAR",
  "AVENGERS: ENDGAME",
  "DEVIANTS",
  "MARVEL",
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

export default function page_20210828083854() {
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
                      Trailer mới nhất của <strong>Eternals</strong> đã lý giải
                      lý do vì sao dàn siêu anh hùng với sức mạnh vượt trội của{" "}
                      <strong>Marvel</strong> lại đứng ngoài cuộc chiến với{" "}
                      <strong>Thanos</strong> trong{" "}
                      <strong>Avengers: Infinity War</strong> và{" "}
                      <strong>Avengers: Endgame</strong>. Đa số các Eternal đều
                      rất yêu mến Trái Đất và có thiện cảm với con người ngay từ
                      khi họ đặt chân đến hành tinh này vào 7000 năm trước. Tuy
                      nhiên, dù sở hữu nhiều siêu năng lực kinh hồn, họ bị “bề
                      trên” cấm không được phép can thiệp vào những xung đột của
                      con người, trừ khi những xung đột đó có sự tham gia của
                      Deviant - đối thủ truyền kiếp của họ.
                    </p>
                    <p>
                      Vậy rốt cuộc ai là người đã ban hành lệnh cấm này, khiến
                      các Eternal đành lực bất tòng tâm nhìn{" "}
                      <strong>Thanos</strong> “bón hành” cho Avengers? Để có
                      được câu trả lời chính xác nhất, chúng ta cần phải tìm
                      hiểu sâu hơn 1 chút về nguồn gốc xuất thân cũng như những
                      quy tắc hoạt động của dàn siêu anh hùng này.
                    </p>
                    <h5>
                      Ai đã tạo ra và nắm quyền kiểm soát các{" "}
                      <strong>Eternals</strong>?
                    </h5>
                    <p>
                      Cả <strong>Eternals</strong> và <strong>Deviants</strong>{" "}
                      đều là những "đứa con" của các Celestial - những thực thể
                      vũ trụ khổng lồ với sức mạnh khủng khiếp, thường đi thí
                      nghiệm sự sống ở nhiều hành tinh khác nhau.
                    </p>
                    <p>
                      Theo nguyên tác, <strong>Eternals</strong> được tạo ra bởi
                      các Celestials, những thực thể vũ trụ cổ đại với quyền
                      năng dồi dào cùng nhiều năng lực mang tầm cỡ thánh thần.
                      Họ nằm trong số những thực thể sống đầu tiên của vũ trụ,
                      có đóng góp không nhỏ trong việc hình thành nên đa vũ trụ
                      và sự tiến hóa của các sinh vật khác.
                    </p>
                    <p>
                      Từ hàng triệu năm trước, họ đã ghé thăm Trái Đất và bắt
                      đầu tiến hành đủ các loại thí nghiệm trên gene của con
                      người trong thời kỳ đồ đá, để rồi từ đó tạo ra 2 chủng
                      loài khác nhau: <strong>Eternals</strong> và{" "}
                      <strong>Deviants</strong>. Cả hai đều sở hữu sức mạnh vượt
                      trội, nhưng Eternal lại mang hình dáng giống con người và
                      dễ dàng hòa nhập với nhân loại hơn. Trong khi đó, Deviants
                      lại tồn tại dưới cơ thể của những loài quái vật gớm ghiếc,
                      thường có nước da màu tím và vô cùng hung hăng.
                    </p>
                    <p>
                      Celestials vốn đã xuất hiện trong MCU từ những dự án phim
                      trước đây, dù vai trò và tầm ảnh hưởng của họ chưa thực sự
                      được khai thác quá nhiều. Giống như truyện tranh, họ đã
                      tồn tại từ khi các dải ngân hà mới được hình thành.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-1629727949571150814663.jpg"
                      alt="1, ETERNALS,THANOS,AVENGERS: INFINITY WAR,AVENGERS: ENDGAME,DEVIANTS,MARVEL,"
                      note="Celestial đã xuất hiện trong MCU, thậm chí còn là phản diện chính của Guardians of the Galaxy Vol. 2, nhưng khán giả vẫn biết quá ít về những thực thể này."
                    />
                    <p>
                      Một vài Celestials thậm chí còn có liên quan mật thiết đến
                      những viên đá vô cực. Ví dụ như Eson từng sử dụng Power
                      Stone để phá hủy hoàn toàn 1 hành tinh; hay phần đầu bị
                      tổn thương nghiêm trọng của 1 Celestial đã biến thành hành
                      tinh Knowhere. Ego, cha ruột của “Star-Lord” Peter Quill,
                      cũng là 1 Celestial mạnh mẽ, ôm tham vọng kiến thiết lại
                      toàn bộ vũ trụ theo ý muốn của mình.
                    </p>
                    <p>
                      Celestials vẫn luôn là những thực thể vô cùng mạnh mẽ,
                      nhưng chưa được thể hiện rõ ràng trong MCU. Và{" "}
                      <strong>Eternals</strong> sẽ là cơ hội để{" "}
                      <strong>Marvel</strong> khai thác sâu hơn về những nhân
                      vật này.
                    </p>
                    <h5>
                      Vì sao các <strong>Eternals</strong> bị cấm can thiệp vào
                      những sự kiện trên Trái Đất?
                    </h5>
                    <RelationNewsInPage category={category} />
                    <p>
                      Đoạn trailer mới nhất đã xác nhận các{" "}
                      <strong>Eternals</strong> không được phép can thiệp vào
                      những xung đột của con người. Nhiệm vụ của họ là ngăn chặn
                      lũ Deviant, và cho dù Trái Đất có xảy ra bất kỳ sự kiện
                      tận thế khủng khiếp nào đi nữa, họ cũng bắt buộc phải đứng
                      ngoài cuộc.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-2-16297279500841942427327.jpg"
                      alt="2, ETERNALS,THANOS,AVENGERS: INFINITY WAR,AVENGERS: ENDGAME,DEVIANTS,MARVEL,"
                      note="Celestials đã cấm các Eternals can thiệp vào các sự kiện của nhân loại."
                    />
                    <p>
                      Trong nguyên tác truyện tranh, chính các Celestials đã ban
                      hành lệnh cấm này, ít nhất là cho đến khi họ trở lại Trái
                      Đất. Nên nhớ rằng, nhiệm vụ của các Celestials vẫn luôn là
                      nghiên cứu sự tiến hóa trong cuộc sống. Họ muốn con người
                      được phát triển 1 cách tự nhiên nhất có thể, phải trải qua
                      vòng tuần hoàn sinh trưởng - tiến hóa - diệt vong bằng
                      chính sức của mình, để có thể mang lại kết quả nghiên cứu
                      chính xác nhất.
                    </p>
                    <p>
                      Trở lại với đoạn trailer, <strong>Marvel</strong> đã hé lộ
                      hình ảnh của 1 Celestial cao to khổng lồ, nhiều khả năng
                      chính là người đã cấm các <strong>Eternals</strong> tham
                      dự vào các sự kiện quan trọng của loài người. Dù không nêu
                      đích danh nhưng dựa trên diện mạo bên ngoài, có lẽ đây là
                      Arishem the Judge, sản phẩm của huyền thoại Jack Kirby và
                      xuất hiện lần đầu tiên trong chương truyện Eternals #2
                      (1976). Arishem là 1 trong những Celestials có sức mạnh
                      khủng khiếp nhất, được mệnh danh là kẻ định đoạt số phận
                      của các hành tinh - người đưa ra quyết định liệu một hành
                      tinh có nên tồn tại trong dải ngân hà hay không.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-3-1629727950099317171696.jpg"
                      alt="3, ETERNALS,THANOS,AVENGERS: INFINITY WAR,AVENGERS: ENDGAME,DEVIANTS,MARVEL,"
                      note="Rất có thể đây chính Arishem the Judge phiên bản điện ảnh."
                    />
                    <p>
                      Xét về vai về, Arishem có thể coi là dưới 1 người (One
                      Above All) và trên cả vạn người. Nếu như One Above All rất
                      ít khi lộ diện, Arishem lại thường xuyên trực tiếp cầm
                      quân đi khắp vũ trụ để thử nghiệm sự sống ở mọi hành tinh
                      khác nhau. Hiện tại, vẫn chưa rõ Celestial này có vai trò
                      gì trong <strong>Eternals</strong>. Đó có thể chỉ là 1
                      đoạn flashback nhằm giải thích rõ hơn về lệnh cấm mà các
                      Eternal phải tuân theo; nhưng không loại trừ khả năng
                      Arishem đang cân nhắc xem xét liệu Trái Đất có xứng đáng
                      tiếp tục tồn tại sau những gì đã trải qua hay không. Câu
                      trả lời chính xác nhất sẽ chỉ được hé lộ khi bom tấn này
                      ra mắt vào ngày 5/11 tới.
                    </p>

                    <p></p>
                    <p></p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-16297279484901831118499.jpg"
                      alt="4, ETERNALS,THANOS,AVENGERS: INFINITY WAR,AVENGERS: ENDGAME,DEVIANTS,MARVEL,"
                      note=""
                    />
                    <p>Theo ScreenRant, Looper</p>
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
