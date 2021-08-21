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
"timestamp": '21/08/2021 11:06 AM',
"title": 'Dragon Ball Super: Vượt qua Ultra Instinct, Ultra Ego của Vegeta được "ví von" giống với một loại sức mạnh "nghìn năm có một"',
"description": 'Trong Dragon Ball Super chap 75, Vegeta đã tiết lộ tên hình dạng mới của mình và nó có tên là Ultra Ego – Bản ngã Tối thượng.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/20/anh-1-16294391739021717332258.jpg',
"alt": 'DRAGON BALL SUPER,VEGETA,ULTRA EGO,ULTRA INSTINCT,BẢN NĂNG VÔ CỰC,BẢN NGÃ TỐI THƯỢNG,SIÊU SAIYAN HUYỀN THOẠI,',
"category": 'games',
"date": '21/08/2021',
"time": '11:06 AM',
"link": '/dragon-ball-super-vuot-qua-ultra-instinct-ultra-ego-cua-vegeta-duoc-vi-von-giong-voi-mot-loai-suc-manh-nghin-nam-co-mot',
"zcomponent": 'page_20210821110625',
"filepath": './20210821110625-dragon-ball-super-vuot-qua-ultra-instinct-ultra-ego-cua-vegeta-duoc-vi-von-giong-voi-mot-loai-suc-manh-nghin-nam-co-mot.js'
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
  'Dragon Ball Super: Vượt qua Ultra Instinct, Ultra Ego của Vegeta được "ví von" giống với một loại sức mạnh "nghìn năm có một"';
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "21/08/2021 11:06 AM";
const description =
  "Trong Dragon Ball Super chap 75, Vegeta đã tiết lộ tên hình dạng mới của mình và nó có tên là Ultra Ego – Bản ngã Tối thượng.";
const link =
  "dragon-ball-super-vuot-qua-ultra-instinct-ultra-ego-cua-vegeta-duoc-vi-von-giong-voi-mot-loai-suc-manh-nghin-nam-co-mot";
const tagparam = [
  "DRAGON BALL SUPER",
  "VEGETA",
  "ULTRA EGO",
  "ULTRA INSTINCT",
  "BẢN NĂNG VÔ CỰC",
  "BẢN NGÃ TỐI THƯỢNG",
  "SIÊU SAIYAN HUYỀN THOẠI",
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

export default function page_20210821110625() {
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
                      Một trong những điều tuyệt vời nhất mà series{" "}
                      <strong>Dragon Ball Super</strong> đã làm cho nhân vật{" "}
                      <strong>Vegeta</strong> là nâng tầm sức mạnh của anh ngang
                      hàng với Goku. Giải đấu Sức mạnh là dấu hiệu đầu tiên cho
                      thấy hoàng tử Saiyan cuối cùng đã bắt đầu cuộc hành trình
                      của riêng mình, khi tuyên bố rằng Goku có thể giữ{" "}
                      <strong>Ultra Instinct</strong> (
                      <strong>Bản năng Vô cực</strong>) và anh sẽ tìm thấy sức
                      mạnh của riêng mình.
                    </p>
                    <p>
                      Sau đó, anh đã đạt được một cấp độ Super Saiyan Blue mới,
                      mạnh mẽ hơn mà Goku vẫn chưa bao giờ đạt tới. Và mới đây
                      anh lại tiếp tục làm được điều đó khi chứng minh bản thân
                      đang dần đạt được sức mạnh của Thần khi đạt được một trạng
                      thái mới có tên <strong>Ultra Ego</strong> (tạm dịch{" "}
                      <strong>Bản ngã Tối thượng</strong>).
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/anh-1-16294391739021717332258.jpg"
                      alt="1, DRAGON BALL SUPER,VEGETA,ULTRA EGO,ULTRA INSTINCT,BẢN NĂNG VÔ CỰC,BẢN NGÃ TỐI THƯỢNG,SIÊU SAIYAN HUYỀN THOẠI,"
                      note=""
                    />

                    <p>
                      Trạng thái này được bộc phát vào cuối chap 74 khi{" "}
                      <strong>Vegeta</strong> đối đầu với Granolah. Cho dù ban
                      đầu có phần lép vế, nhưng sau đó Vegeta đã vận Ki và hóa
                      thành <strong>Ultra Ego</strong>. Theo lời Vegeta, dạng
                      biến hóa mới này là sự kết hợp giữa sức mạnh hủy diệt và
                      khả năng của người Saiyan, đến Granola cũng phải hoảng sợ
                      khi nhìn thấy nó.
                    </p>
                    <p>
                      Và sang chap 75, <strong>Vegeta</strong> chính thức "bón
                      hành" Granolah, ở dạng này hoàng tử Saiyan sở hữu những
                      khả năng đáng kinh ngạc cùng sức mạnh vượt trội. Anh mạnh
                      đến mức có thể nhận trực diện đòn tấn công từ Granolah, và
                      có thể phản công lại hắn một cách mạnh mẽ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/anh-2-1629439173911913830158.png"
                      alt="2, DRAGON BALL SUPER,VEGETA,ULTRA EGO,ULTRA INSTINCT,BẢN NĂNG VÔ CỰC,BẢN NGÃ TỐI THƯỢNG,SIÊU SAIYAN HUYỀN THOẠI,"
                      note=""
                    />

                    <p>
                      Ngoài việc nâng cao sức mạnh thì{" "}
                      <strong>Ultra Ego</strong> của <strong>Vegeta</strong> còn
                      có một khả năng đáng sợ khác là sẽ ngày càng mạnh hơn nếu
                      trận chiến kéo dài. Nếu so với{" "}
                      <strong>Ultra Instinct</strong> của Goku là có thể né
                      tránh và tấn công chỉ dựa trên bản năng thì Ultra Ego lại
                      không né tránh các đòn tấn công từ đối thủ mà tiếp nhận nó
                      1 cách trực diện.
                    </p>
                    <p>
                      Như đã thấy, <strong>Vegeta</strong> đã lĩnh trọn đòn tấn
                      công của Granolah, khiến hắn bối rối không hiểu tại sao
                      anh không né tránh. Và theo lời nhận xét của Granolah,
                      Vegeta thậm chí còn trở nên mạnh hơn khi chịu sát thương
                      trong trận chiến. Đây chính là một điểm đặc biệt của trạng
                      thái này.
                    </p>
                    <p>
                      Và nếu ai là fan của Dragon Ball thì chắc cũng nhớ khả
                      năng này cũng đã từng được thể hiện trước đó. Đây chính là
                      sức mạnh của Broly, người được mệnh danh là "Siêu Saiyan
                      nghìn năm có một".
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Nhắc lại một chút về Broly, đây là nhân vật chính xuất
                      hiện trong movie <strong>Dragon Ball Super</strong>:
                      Broly. Theo như nhiều thông tin ghi lại thì Broly sở hữu
                      một nguồn sức mạnh cực kỳ khủng khiếp, với nguồn sức mạnh
                      đó anh có thể dễ dàng xóa sổ một hành tinh một cách nhanh
                      chóng. Ngay từ mới sinh ra, chỉ số sức mạnh của anh đã lên
                      đến 10000, gấp 5000 lần chỉ số sức mạnh của Goku và gần
                      bằng sức mạnh của King <strong>Vegeta</strong>.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/anh-33-1629439173955289009118.jpg"
                      alt="3, DRAGON BALL SUPER,VEGETA,ULTRA EGO,ULTRA INSTINCT,BẢN NĂNG VÔ CỰC,BẢN NGÃ TỐI THƯỢNG,SIÊU SAIYAN HUYỀN THOẠI,"
                      note=""
                    />

                    <p>
                      Một điều đáng sợ nhất của nhân vật này là khi biến đổi
                      thành trạng thái Legendary Super Saiyan, sức mạnh của anh
                      dường như là không có giới hạn, mà càng đánh nguồn sức
                      mạnh đó càng trở nên dồi dào hơn. Chính vì điều này Broly
                      được mệnh danh là một{" "}
                      <strong>siêu Saiyan huyền thoại</strong>.
                    </p>
                    <p>
                      Và nếu xét về điểm này thì <strong>Ultra Ego</strong> của{" "}
                      <strong>Vegeta</strong> có điểm tương đồng với sức mạnh
                      của Broly khi cả 2 càng đánh càng mạnh, chỉ tấn công chứ
                      không phòng thủ. Thế nhưng điểm khác biệt ở đây là sức
                      mạnh của Broly là không giới hạn, còn Vegeta thì có.
                    </p>
                    <p>
                      Như chúng ta đã thấy tại cuối chap 75 thì{" "}
                      <strong>Vegeta</strong> đã bị Granolah "bón hành" ngược
                      lại. Có vẻ như là <strong>Ultra Ego</strong> của Vegeta
                      không cho khả năng miễn nhiễm với sát thương và nó có giới
                      hạn về sức mạnh. Vì thế sau khi nhận nhiều đòn tấn công
                      khác nhau, Vegeta bắt đầu gặp vấn đề về thị lực và bắt đầu
                      xuống sức. Vì thế khả năng cao anh không thể đánh bại
                      Granolah chỉ bằng trạng thái này được.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/anh-4-1629439173939955801925.png"
                      alt="4, DRAGON BALL SUPER,VEGETA,ULTRA EGO,ULTRA INSTINCT,BẢN NĂNG VÔ CỰC,BẢN NGÃ TỐI THƯỢNG,SIÊU SAIYAN HUYỀN THOẠI,"
                      note=""
                    />

                    <p>
                      Đọc đến đây mọi người nghĩ sao về điều này. Liệu trạng
                      thái <strong>Ultra Ego</strong> của{" "}
                      <strong>Vegeta</strong> thật sự mạnh đến thế nào? Hãy cho
                      chúng tôi biết thêm ý kiến của các để chúng ta cùng thảo
                      luận nhé!
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
