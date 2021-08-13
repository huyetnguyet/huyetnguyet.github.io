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
"timestamp": '09/08/2021 10:55 AM',
"title": 'Dragon Ball Super: Dù Bản năng Vô cực mạnh thế nào thì vẫn không thể thay thế tuyệt chiêu này của Goku',
"description": 'Mặc dù Dragon Ball liên tục có các chiêu thức mới, nhưng chiêu thức đặc trưng của Goku vẫn là Kamehameha.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/anh-1-1628492049545263907366.jpg',
"alt": 'DRAGON BALL SUPER,BẢN NĂNG VÔ CỰC,SON GOKU,KAMEHAMEHA,',
"category": 'games',
"date": '09/08/2021',
"time": '10:55 AM',
"link": '/dragon-ball-super-du-ban-nang-vo-cuc-manh-the-nao-thi-van-khong-the-thay-the-tuyet-chieu-nay-cua-goku',
"zcomponent": 'page_20210809105544',
"filepath": './20210809105544-dragon-ball-super-du-ban-nang-vo-cuc-manh-the-nao-thi-van-khong-the-thay-the-tuyet-chieu-nay-cua-goku.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  "Dragon Ball Super: Dù Bản năng Vô cực mạnh thế nào thì vẫn không thể thay thế tuyệt chiêu này của Goku";
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "09/08/2021 10:55 AM";
const description =
  "Mặc dù Dragon Ball liên tục có các chiêu thức mới, nhưng chiêu thức đặc trưng của Goku vẫn là Kamehameha.";
const link =
  "dragon-ball-super-du-ban-nang-vo-cuc-manh-the-nao-thi-van-khong-the-thay-the-tuyet-chieu-nay-cua-goku";
const tagparam = [
  "DRAGON BALL SUPER",
  "BẢN NĂNG VÔ CỰC",
  "SON GOKU",
  "KAMEHAMEHA",
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

export default function page_20210809105544() {
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
                      Như chúng ta đã biết Ultra Instinct -{" "}
                      <strong>Bản năng Vô cực</strong> là một dạng rất khó đạt
                      được trong <strong>Dragon Ball Super</strong>. Đây là thứ
                      mà ngay cả các vị Thần Hủy Diệt cũng không thể dễ dàng đạt
                      được. Thậm chí, Beerus dù đã học được kỹ thuật này nhưng
                      ngài vẫn chưa thể nhuần nhuyễn được nó.
                    </p>
                    <p>
                      Điều này nghĩa là với 1 người bình thường, đạt được và
                      kiểm soát hoàn toàn đã khó, chứ chưa nói đến việc có thể
                      hoàn thiện nhiều tầng của nó. Và Goku hiện đang là phàm
                      nhân duy nhất trong toàn bộ đa vũ trụ lĩnh hội được Ultra
                      Instinct và nó đang là quân bài mạnh nhất của anh trong
                      việc đối đầu với nhiều đối thủ sừng sỏ.
                    </p>
                    <p>
                      Tuy nhiên cho dù Ultra Instinct mạnh cỡ nào thì nhiều
                      người cho rằng nó vẫn không thể nào thay thế cho tuyệt
                      chiêu <strong>Kamehameha</strong> của Goku. Có thể nói
                      chiêu thức này đã phát triển cùng với Goku trong suốt
                      chiều dài của series Dragon Ball.
                    </p>
                    <h5>Sự phát triển của Kamehameha</h5>
                    <p>
                      <strong>Kamehameha</strong> ban đầu được Master Roshi làm
                      chủ, nhưng ngay sau đó Goku và hầu hết các chiến binh khác
                      đã học cách sử dụng kỹ thuật này thông qua quan sát và
                      huấn luyện ngắn hạn. Tuy nhiên, điều làm cho Kamehameha
                      trở nên đặc biệt khác với những kỹ thuật khác là ngay từ
                      khi xuất hiện cho đến nay thì nó vẫn rất nổi tiếng và hữu
                      ích. Đặc biệt là với Goku, cho dù đã học được rất nhiều
                      các kỹ thuật mới để chiến đấu thế nhưng anh cũng luôn tìm
                      ra những cách mới để kết hợp Kamehameha vào phong cách
                      chiến đấu của mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/anh-1-1628492049545263907366.jpg"
                      alt="1, DRAGON BALL SUPER,BẢN NĂNG VÔ CỰC,SON GOKU,KAMEHAMEHA,"
                      note=""
                    />
                    <p>
                      Như trong cuộc chiến với Piccolo, Goku thậm chí còn nhận
                      ra cách bắn <strong>Kamehameha</strong> qua chân của mình.
                      Trước đó, Goku đã tìm ra cách sử dụng kỹ thuật này để
                      phóng mình qua không trung để bay trước khi biết cách bay.
                      Hay như trong kỹ thuật Spirit Ball – đòn tấn công mạnh
                      nhất đã tiêu diệt Maijn Buu thì một yếu tố khiến
                      Kamehameha trở nên đáng kinh ngạc là Goku kết hợp sức mạnh
                      của Kamehameha với Kaio-Ken.
                    </p>
                    <p>
                      Những điều này chứng minh rằng sức mạnh của đòn tấn công
                      của chiêu thức này có thể cải thiện không chỉ với sức mạnh
                      của người dùng mà còn với các kỹ thuật khác. Từ sức mạnh
                      thô sơ của <strong>Kamehameha</strong>, cùng với cách kết
                      hợp đơn giản sẽ khiến nó dễ dàng trở thành một trong những
                      chiêu thức mang tính biểu tượng nhất của Goku.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>
                      Dù mạch truyện chính đã kết thúc thì{" "}
                      <strong>Kamehameha</strong> vẫn còn rất nguy hiểm
                    </h5>
                    <p>
                      Có rất nhiều kỹ thuật dùng một chiêu duy nhất xuất hiện
                      trong suốt bộ truyện nhưng dường như nó thiếu tính chính
                      xác. Ví dụ như Ma thiểm quang của Gohan và Đĩa hủy diệt
                      của Krillin không có độ trúng cao cho dù nó rất mạnh mẽ.
                      Hay như Pháo chùm tia đặc biệt của Piccolo và Vòng năng
                      lượng của Vegeta đã kết liễu rất nhiều kẻ phản diện, nhưng
                      chúng không bao giờ trúng đúng mục tiêu sau lần sử dụng
                      đầu tiên. Còn <strong>Kamehameha</strong> thường dễ sử
                      dụng và độ chính xác cao hơn rất nhiều so với những chiêu
                      thức khác.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/anh-2-1628492049568785099656.jpg"
                      alt="2, DRAGON BALL SUPER,BẢN NĂNG VÔ CỰC,SON GOKU,KAMEHAMEHA,"
                      note=""
                    />
                    <p>
                      Có rất nhiều kẻ phản diện bị <strong>Kamehameha</strong>{" "}
                      đánh bại như Broly, Baby, Cooler và Kefla…Và một trong số
                      những lần mang tính biểu tượng nhất là khi Gohan đánh bại
                      Cell tại Cell Saga. Lúc này cha con Goku đã dùng nó để lật
                      ngược tình thế chống lại Cell chỉ trong một khoảnh khắc
                      đột ngột. Nó cũng đại diện cho di sản của Goku, cũng như
                      sự khởi đầu của Gohan.
                    </p>
                    <p>
                      Có thể thấy qua mỗi lần biến đổi hình dạng mới thì{" "}
                      <strong>Kamehameha</strong> vẫn đặc biệt như khi Master
                      Roshi sử dụng nó khi xóa sổ các ngọn núi và mặt trăng tại
                      đầu bộ truyện. Dù nó không phải là vũ khí duy nhất của
                      Goku để chống lại kẻ thù của mình, nhưng nó là chiêu thức
                      được người hâm mộ yêu thích nhất và cũng là chiêu thức
                      mang tính biểu tượng của anh.
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
