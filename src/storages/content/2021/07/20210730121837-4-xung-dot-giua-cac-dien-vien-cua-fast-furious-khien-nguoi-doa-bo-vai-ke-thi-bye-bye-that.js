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
"timestamp": '30/07/2021 12:18 PM',
"title": '4 xung đột giữa các diễn viên của Fast & Furious khiến người dọa bỏ vai kẻ thì bye bye thật',
"description": 'Mặc dù chủ đề chính của Fast & Furious là gia đình, nhưng điều đó không có nghĩa mọi người trong tập thể này lúc nào cũng gắn bó với nhau, dù là trong phim hay ngoài đời.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-1-16275643825141972207601.jpg',
"alt": 'FAST & FURIOUS,SERIES FAST,THE FAST AND THE FURIOUS,THE FAST SAGA,VIN DIESEL,THE ROCK,TYRESE GIBSON,',
"category": 'news',
"date": '30/07/2021',
"time": '12:18 PM',
"link": '/4-xung-dot-giua-cac-dien-vien-cua-fast-furious-khien-nguoi-doa-bo-vai-ke-thi-bye-bye-that',
"zcomponent": 'page_20210730121837',
"filepath": './20210730121837-4-xung-dot-giua-cac-dien-vien-cua-fast-furious-khien-nguoi-doa-bo-vai-ke-thi-bye-bye-that.js'
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
  "4 xung đột giữa các diễn viên của Fast & Furious khiến người dọa bỏ vai kẻ thì bye bye thật";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "30/07/2021 12:18 PM";
const description =
  "Mặc dù chủ đề chính của Fast & Furious là gia đình, nhưng điều đó không có nghĩa mọi người trong tập thể này lúc nào cũng gắn bó với nhau, dù là trong phim hay ngoài đời.";
const link =
  "4-xung-dot-giua-cac-dien-vien-cua-fast-furious-khien-nguoi-doa-bo-vai-ke-thi-bye-bye-that";
const tagparam = [
  "FAST & FURIOUS",
  "SERIES FAST",
  "THE FAST AND THE FURIOUS",
  "THE FAST SAGA",
  "VIN DIESEL",
  "THE ROCK",
  "TYRESE GIBSON",
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

export default function page_20210730121837() {
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
                      <strong>Fast & Furious</strong> (ban đầu là{" "}
                      <strong>The Fast and the Furious</strong>) là một thương
                      hiệu truyền hình tập trung vào một loạt các bộ phim hành
                      động chủ yếu liên quan đến đua xe đường phố bất hợp pháp,
                      trộm cắp và gián điệp. Bộ phim đầu tiên được phát hành vào
                      năm 2001 và cho đến nay <strong>The Fast Saga</strong> đã
                      có tới 9 phim được sản xuất. Tất nhiên, loạt "Fast &
                      Furious" cũng chứng kiến nhiều sự ra đi - trở lại của các
                      nhân vật và cũng không thể thiếu sự xung đột giữa các diễn
                      viên.
                    </p>
                    <p>
                      Dưới đây là 4 xung đột giữa các diễn viên của{" "}
                      <strong>The Fast Saga</strong> từng được biết đến:
                    </p>
                    <h5>
                      1. Xung đột giữa <strong>Vin Diesel</strong> và biên kịch
                      của Fast 2
                    </h5>
                    <p>
                      Sau thành công của <strong>Fast & Furious</strong> 1, năm
                      2003 đạo diễn John Singleton ra mắt phần tiếp theo và cũng
                      là phần thứ hai trong chuỗi phim Fast & Furious với tên
                      gọi Fast And Furious 2: 2 Fast 2 Furious, ngoài Paul
                      Walker thì toàn bộ diễn viên đều được thay mới.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-1-16275643825141972207601.jpg"
                      alt="1, FAST & FURIOUS,SERIES FAST,THE FAST AND THE FURIOUS,THE FAST SAGA,VIN DIESEL,THE ROCK,TYRESE GIBSON,"
                      note=""
                    />
                    <p>
                      Sở dĩ có sự thay đổi đó là vì <strong>Vin Diesel</strong>,
                      người thủ vai Dominic Toretto ở phần một đã không thể tham
                      gia vào phần phim mới này. Điều đó bắt buộc các nhà biên
                      kịch phải viết lại kịch bản cũng như tạm hoãn lại thời
                      gian bấm máy.
                    </p>
                    <p>
                      Việc <strong>Vin Diesel</strong> không xuất hiện trong
                      phần 2 cũng có lý do của nó. Đó là do anh ấy gặp vấn đề
                      với kịch bản của bộ phim này, nên kiên quyết không muốn
                      đóng vai của mình trong bộ phim thứ hai mặc dù được đề
                      nghị trả mức thù lao cao.
                    </p>
                    <p>
                      May mắn là <strong>Vin Diesel</strong> đã xuất hiện ở phần
                      cuối của phần phim thứ ba - Tokyo Drift và đã hoạt động
                      trở lại kể từ phần phim thứ tư.
                    </p>
                    <h5>
                      2. <strong>Vin Diesel</strong> và The Rock
                    </h5>
                    <p>
                      Không thể khẳng định chính xác mối bất hòa giữa Diesel và{" "}
                      <strong>The Rock</strong> bắt đầu từ khi nào, nhưng lần
                      đầu tiên cả 2 lên tiếng bóng gió về đối phương là vào
                      tháng 8/2016, thời điểm Fast 8 đang trong giai đoạn cuối
                      của quá trình bấm máy.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-1-1627564385414676105710.jpeg"
                      alt="2, FAST & FURIOUS,SERIES FAST,THE FAST AND THE FURIOUS,THE FAST SAGA,VIN DIESEL,THE ROCK,TYRESE GIBSON,"
                      note=""
                    />
                    <p>
                      Khi đó, <strong>The Rock</strong> đã đăng tải trên
                      Instagram (hiện đã xóa bỏ) bài viết với nội dung có cụm từ
                      "hèn nhát" (Candy-asses) gây chú ý trong cộng đồng người
                      hâm mộ. Và ai cũng ngầm hiểu anh đang hướng mũi giáo đến{" "}
                      <strong>Vin Diesel</strong> vì những hành vi kém chuyên
                      nghiệp trong quá trình quay phim, thường xuyên trễ giờ và
                      chỉ trích kỹ năng của các bạn diễn. Đây có lẽ là xung đột
                      phổ biến nhất trong quá trình quay phim Fast and Furious.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Vào năm 2018, trong buổi phỏng vấn với Rolling Stone,{" "}
                      <strong>The Rock</strong> đã xoa dịu dư luận khi thừa nhận
                      mối bất hòa giữa anh với <strong>Vin Diesel</strong> đơn
                      giản chỉ là bất đồng quan điểm cá nhân, vì mỗi người có
                      một lý tưởng riêng mà thôi. Tuy nhiên, mọi chuyện không
                      kết thúc êm đẹp như vậy, bởi nam diễn viên còn tiết lộ anh
                      và Diesel không hề ghi hình chung trong F8.
                    </p>
                    <h5>
                      3. <strong>The Rock</strong> và Tyrese Gibson
                    </h5>
                    <p>
                      <strong>Tyrese Gibson</strong> đã từng thể biểu lộ tức
                      giận với Dwayne “<strong>The Rock</strong>” Johnson vì
                      tách riêng thực hiện Hobbs And Shaw, phần ngoại truyện của
                      Fast and Furious mà The Rock đóng chính cùng Jason
                      Statham, đặc biệt là kể từ khi phần ngoại truyện này dẫn
                      tới việc Fast and Furious 9 bị hoãn công chiếu một năm.
                      Thậm chí Gibson còn nói rằng anh sẽ không tham gia Fast
                      and Furious 9 trừ khi Johnson bị loại khỏi bộ phim.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-2-1627564386442717672877.jpg"
                      alt="3, FAST & FURIOUS,SERIES FAST,THE FAST AND THE FURIOUS,THE FAST SAGA,VIN DIESEL,THE ROCK,TYRESE GIBSON,"
                      note=""
                    />
                    <p>
                      Dwayne Johnson thản nhiên đáp lại bình luận của{" "}
                      <strong>Tyrese Gibson</strong> và tiếp tục nhận lời đóng
                      phim này dù cả hai đã mất liên lạc. Tuy nhiên mới đây
                      Tyrese Gibson cho biết cả hai đã làm hòa và quay lại nói
                      chuyện bình thường như chưa có chuyện gì xảy ra.
                    </p>
                    <h5>
                      4. Michelle Rodriguez và vai trò của các nhân vật nữ trong
                      The Fast Saga
                    </h5>
                    <p>
                      Michelle Rodriguez là diễn viên thủ vai nữ chính Letty
                      Ortiz trong <strong>The Fast Saga</strong>. Tuy nhiên, cô
                      đã từng phàn nàn và dọa sẽ bỏ vai nếu các nhân vật nữ
                      trong phim này không được giao một vai hay hơn và nổi bật
                      hơn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-3-1627564386176371349174.png"
                      alt="4, FAST & FURIOUS,SERIES FAST,THE FAST AND THE FURIOUS,THE FAST SAGA,VIN DIESEL,THE ROCK,TYRESE GIBSON,"
                      note=""
                    />
                    <p>
                      Tất nhiên nữ diễn viên cũng muốn hình ảnh các nhân vật nữ
                      trong <strong>series Fast</strong> mạnh mẽ và quan trọng
                      không kém các nhân vật nam. Có tin đồn rằng Michelle
                      Rodriguez có mâu thuẫn với <strong>Vin Diesel</strong>,
                      nhưng dường như không phải vì Diesel thực sự ủng hộ
                      Rodriguez.
                    </p>
                    <p>
                      Vì thế, Fast and Furious saga sẽ có một phần phim spin-off
                      với nhân vật chính là một nhân vật nữ, tuy nhiên vẫn chưa
                      rõ đó là ai, có thể là Letty Ortiz thì sao.
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
