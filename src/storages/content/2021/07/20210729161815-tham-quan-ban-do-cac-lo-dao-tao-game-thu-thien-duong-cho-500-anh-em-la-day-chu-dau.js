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
"timestamp": '29/07/2021 04:18 PM',
"title": 'Tham quan bản đồ các “lò” đào tạo game thủ, “thiên đường” cho 500 anh em là đây chứ đâu!',
"description": 'Nhiều quốc gia châu Á đặt niềm tin rằng, Esports sẽ phát triển trong thời gian tới và game thủ là ngành nghề cần được đào tạo kỹ lưỡng.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/16/-1626452062656620490724.jpg',
"alt": 'GAME THỦ,TRƯỜNG HỌC,ESPORTS,',
"category": 'games',
"date": '29/07/2021',
"time": '04:18 PM',
"link": '/tham-quan-ban-do-cac-lo-dao-tao-game-thu-thien-duong-cho-500-anh-em-la-day-chu-dau',
"zcomponent": 'page_20210729161815',
"filepath": './20210729161815-tham-quan-ban-do-cac-lo-dao-tao-game-thu-thien-duong-cho-500-anh-em-la-day-chu-dau.js'
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
  "Tham quan bản đồ các “lò” đào tạo game thủ, “thiên đường” cho 500 anh em là đây chứ đâu!";
const author = "Kayle";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:18 PM";
const description =
  "Nhiều quốc gia châu Á đặt niềm tin rằng, Esports sẽ phát triển trong thời gian tới và game thủ là ngành nghề cần được đào tạo kỹ lưỡng.";
const link =
  "tham-quan-ban-do-cac-lo-dao-tao-game-thu-thien-duong-cho-500-anh-em-la-day-chu-dau";
const tagparam = ["GAME THỦ", "TRƯỜNG HỌC", "ESPORTS"];
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

export default function page_20210729161815() {
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
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Khi Thể thao Điện tử đang dần trở thành xu thế mới của xã
                    hội và <strong>game thủ</strong> đang dần được xã hội công
                    nhận như những vận động viên thể thao thực thụ của bộ môn
                    mang tên <strong>Esports</strong>. Vì thế, cũng như đá bóng,
                    điền kinh hay bơi lội… Esports được “đối xử" công bằng như
                    một môn học chính quy và được đào tạo bài bản, để lớp game
                    thủ sau khi tốt nghiệp sẽ có được kỹ năng nhất định. Nhiều
                    ngôi trường đã được mở ra dành riêng cho các game thủ như
                    vậy.
                  </p>
                  <h5>Trường Cao đẳng nghề tỉnh Sơn Tây (Trung Quốc)</h5>
                  <p>
                    Năm 2016 khi <strong>Esports</strong> mới bùng nổ, trường
                    Cao đẳng Sơn Tây đã mở một khóa bồi dưỡng vận động viên thể
                    thao điện tử nhằm đào tạo những tuyển thủ game chuyên
                    nghiệp. Đây cũng là ngôi trường có định hướng giảng dạy game
                    rất sớm.
                  </p>
                  <p>
                    3 tựa game được đào tạo chính ở đây là Liên Minh Huyền
                    Thoại, Overwatch và Hearthstone trong đó số học viên học lớp
                    LMHT là đông nhất. Song song với việc giảng dạy lý thuyết là
                    những giờ thực hành được tổ chức như những cuộc thi đấu
                    chuyên nghiệp thực sự giữa các học viên giúp họ có trải
                    nghiệm tốt nhất trong đấu trường chuyên nghiệp.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264522146681777415935.jpg"
                    alt="1, GAME THỦ,TRƯỜNG HỌC,ESPORTS,"
                    note="Cơ sở vật chất được đầu tư kỹ càng với nhà thi đấu Esports trang bị các trang thiết bị tiên tiến, phòng thực hành với gần 100 máy tính cấu hình mạnh phục vụ việc luyện tập của học viên."
                  />
                  <h5>Trường Kỹ thuật Lanxiang (Trung Quốc)</h5>
                  <p>
                    Được biết đến với điểm mạnh đào tạo chính quy{" "}
                    <strong>game thủ</strong>, một ngôi trường khác tại Trung
                    Quốc là Trường Kỹ thuật Lanxiang đã dành 50% thực hành và
                    50% là giảng dạy lý thuyết, phân tích các tựa game như LOL,
                    Overwatch, PUBG.
                  </p>
                  <p>
                    Không đơn thuần chỉ tập trung đào tạo kỹ năng chơi game, sau
                    năm học đầu tiên những người có tiềm năng sẽ tiếp tục được
                    đào tạo thành <strong>game thủ</strong> chuyên nghiệp, các
                    đối tượng khác sẽ được dạy những kĩ năng khác: tổ chức các
                    sự kiện game, quảng cáo…
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/16/-162645206089374129428.jpg"
                    alt="2, GAME THỦ,TRƯỜNG HỌC,ESPORTS,"
                    note="Game thủ ngoài chơi game vẫn phải học văn hóa như các ngôi trường bình thường."
                  />
                  <h5>
                    Học viện <strong>Esports</strong> (Singapore)
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/16/-1626452063691415270388.jpg"
                    alt="5, GAME THỦ,TRƯỜNG HỌC,ESPORTS,"
                    note=""
                  />
                  <p>
                    Những học viên theo học tại đây đều mong muốn có được công
                    việc ổn định trong tương lai. Họ có thể làm những công việc
                    liên quan đến game như phát triển trò chơi điện tử, thành
                    lập và tổ chức các sự kiện game, sáng tạo game, bình luận
                    viên, chuyên gia đào tạo… và tất nhiên là không thể thiếu
                    công việc là một tuyển thủ chuyên nghiệp.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Dù cho đây là một ngành cạnh tranh gay gắt và không phải ai
                    cũng có được vinh quang nhưng vẫn có không ít người quyết
                    tâm theo đuổi niềm mơ ước của mình
                  </p>
                  <h5>Trường đại học Chung Ang (Hàn Quốc)</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/16/-1626452062656620490724.jpg"
                    alt="4, GAME THỦ,TRƯỜNG HỌC,ESPORTS,"
                    note=""
                  />
                  <p>
                    Đại học Chung Ang từng làm chấn động ngành giáo dục khi xác
                    nhận tuyển những sinh viên muốn theo đuổi con đường thi đấu
                    game chuyên nghiệp. Những người đã là{" "}
                    <strong>game thủ</strong> thi đấu ở những giải đấu lớn sẽ
                    được tuyển thẳng.
                  </p>
                  <h5>
                    The Academy of <strong>Esports</strong> (Malaysia)
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/16/-16264520631541028257254.jpg"
                    alt="6, GAME THỦ,TRƯỜNG HỌC,ESPORTS,"
                    note=""
                  />
                  <p>
                    Không quá nổi trội nhưng Malaysia cũng là một quốc gia có sự
                    quan tâm lớn cho nền công nghiệp game và Học viện{" "}
                    <strong>Esports</strong> chính là nơi Malaysia ươm mầm cho
                    những ước mơ của <strong>game thủ</strong>.
                  </p>
                  <p>
                    Tại học viện, các khóa học dài khoảng 8 tháng với 2 mức học
                    phí khác nhau dành cho sinh viên trong nước và quốc tế. Theo
                    học ở học viện, những sinh viên tốt nghiệp có cơ hội việc
                    làm cao nhờ việc học viện sẽ giới thiệu sinh viên cho những
                    đối tác của họ.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/16/-16264520631371846853698.jpg"
                    alt="3, GAME THỦ,TRƯỜNG HỌC,ESPORTS,"
                    note="The Academy of Esports (Malaysia) là ngôi trường dạy về Esports với cơ sở vật chất hiện đại hàng đầu Đông Nam Á."
                  />
                  <p>
                    Dù ở các quốc gia khác nhau, mô hình và phương thức học tập
                    có thể mang tính đặc thù riêng thế nhưng đều giúp những
                    người yêu thích game có thể áp dụng những kiến thức và nuôi
                    lớn đam mê của mình.
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
