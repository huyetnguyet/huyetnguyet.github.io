import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '09/06/2021 09:25 PM',
"title": 'Kể chuyện bị bạn diễn "bạo lực", nàng hot girl phim 18+ Nhật Bản khiến fan thương cảm, khen ngợi sự chuyên nghiệp',
"description": 'Câu chuyện của cô nàng hot girl đang thu hút được rất nhiều sự chú ý từ phía các fan hâm mộ.',
"src": '',
"alt": 'Hot Girl, Gai Xinh, Cong Dong Mang, Kana Momonogi, images, Phim Av, Phim 18, ',
"category": 'images',
"date": '09/06/2021',
"time": '09:25 PM',
"link": '/ke-chuyen-bi-ban-dien-bao-luc-nang-hot-girl-phim-18-nhat-ban-khien-fan-thuong-cam-khen-ngoi-su-chuyen-nghiep',
"zcomponent": 'page_20210609212513',
"filepath": './20210609212513-ke-chuyen-bi-ban-dien-bao-luc-nang-hot-girl-phim-18-nhat-ban-khien-fan-thuong-cam-khen-ngoi-su-chuyen-nghiep.js'
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
  'Kể chuyện bị bạn diễn "bạo lực", nàng hot girl phim 18+ Nhật Bản khiến fan thương cảm, khen ngợi sự chuyên nghiệp';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "09/06/2021 09:25 PM";
const description =
  "Câu chuyện của cô nàng hot girl đang thu hút được rất nhiều sự chú ý từ phía các fan hâm mộ.";
const link =
  "ke-chuyen-bi-ban-dien-bao-luc-nang-hot-girl-phim-18-nhat-ban-khien-fan-thuong-cam-khen-ngoi-su-chuyen-nghiep";
const tagparam = [
  "hot-girl",
  "gai-xinh",
  "cong-dong-mang",
  "kana-momonogi",
  "av",
  "phim-av",
  "phim-18",
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

export default function page_20210609212513() {
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
                <RelationNews category={category} />
                <div className="contentBody">
                  <p>
                    Nhiều người vẫn cho rằng việc hóa thân thành những cô nàng{" "}
                    <strong>hot girl</strong>, diễn viên của ngành công nghiệp{" "}
                    <strong>phim 18</strong>+ Nhật Bản sẽ mang tới danh vọng,
                    tiền bạc và cả những cơ hội để trở nên nổi tiếng, được nhiều
                    người biết tới. Tuy nhiên, song song với đó, cũng còn vô số
                    những mặt trái của vấn đề mà có lẽ chỉ những người trong
                    cuộc mới biết. Điển hình như câu chuyện mới đây mà{" "}
                    <strong>Kana Momonogi</strong> - một cái tên cũng đang cực
                    kỳ sáng giá trong ngành công nghiệp <strong>AV</strong> Nhật
                    Bản vừa chia sẻ.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/photo-1-16231238607222069861790.jpg"
                    alt="Hot Girl, Gai Xinh, Cong Dong Mang, Kana Momonogi, images, Phim Av, Phim 18, "
                    note="Kana Momonogi - cô nàng hot girl đang sở hữu lượng fan khổng lồ"
                  />
                  <p>
                    Cụ thể, trong quãng thời gian mà ngành công nghiệp{" "}
                    <strong>AV</strong> Nhật Bản đang khó khăn và bị ảnh hưởng
                    rất nhiều, nếu như nhiều đồng nghiệp lựa chọn phát triển sự
                    nghiệp qua trang cá nhân, kênh YouTube thì{" "}
                    <strong>Kana Momonogi</strong> vẫn rất miệt mài đóng phim,
                    cống hiến cho fan hâm mộ. Điều này ngay lập tức khiến cho cô
                    nàng nhận được rất nhiều thiện cảm. Để rồi mới đây thôi, các
                    fan của Kana, bên cạnh việc vui mừng khi cô nàng giới thiệu
                    tác phẩm mới cũng đồng thời cảm thấy vô cùng bức xúc với
                    những gì mà nữ thần của mình phải chịu.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-1623124066694828591545.jpg"
                    alt="Hot Girl, Gai Xinh, Cong Dong Mang, Kana Momonogi, images, Phim Av, Phim 18, "
                    note="Kana sở hữu một gương mặt cực kỳ ngây thơ"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-16231240755742021709254.jpg"
                    alt="Hot Girl, Gai Xinh, Cong Dong Mang, Kana Momonogi, images, Phim Av, Phim 18, "
                    note="Nhưng thân hình thì lại siêu nóng bỏng"
                  />
                  <p>
                    Theo đó, trong một bài viết trên trang cá nhân, Kana có "nhá
                    hàng" nhẹ một phân đoạn của bộ phim. Và hình ảnh cô nàng bị
                    bạn diễn đẩy sấp mặt vào tủ quần áo, nghe rõ ràng âm thanh
                    rất vang và to đã khiến cho không ít fan của Kana phải giật
                    mình, cảm thấy xót xa cho thần tượng của mình, đồng thời
                    khen ngợi sự chuyên nghiệp của cô nàng{" "}
                    <strong>hot girl</strong>, sẵn sàng chịu đau, thậm chí đổ cả
                    máu để mang tới những phút giây tuyệt vời cho người xem.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/photo-1-16231242207331701718748.jpg"
                    alt="Hot Girl, Gai Xinh, Cong Dong Mang, Kana Momonogi, images, Phim Av, Phim 18, "
                    note="Cô nàng Kana luôn hết mình trong mọi cảnh quay"
                  />
                  <p>
                    Có vẻ như đọc được những phản hồi từ phía cộng đồng mạng và
                    các fan, bản thân Kana sau đó cũng lên sóng trần tình, cho
                    rằng mọi chuyện không tới nỗi tệ như mọi người đã nghĩ. Cô
                    nàng cũng cảm thấy hơi đau trong quá trình thực hiện phân
                    cảnh, tuy nhiên, có vẻ như hiệu ứng âm thanh đã được chỉnh
                    sửa và làm quá tốt công việc của nó, khiến cho đa số đều cảm
                    thấy đây là một phân cảnh có phần hơi mang khuynh hướng "bạo
                    lực" thôi.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-162312443604849599871.jpg"
                    alt="Hot Girl, Gai Xinh, Cong Dong Mang, Kana Momonogi, images, Phim Av, Phim 18, "
                    note="Kana sau đó cũng đã lên tiếng trấn an các fan hâm mộ"
                  />
                  <p>
                    Xinh đẹp, gợi cảm, tài năng và lại cực kỳ yêu nghề, thế nên
                    không khó hiểu khi Kana đang là một trong những{" "}
                    <strong>hot girl</strong> top đầu của ngành công nghiệp{" "}
                    <strong>AV</strong> Nhật Bản và sở hữu lượng fan hâm mộ
                    khổng lồ.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/photo-1-16231245141981803195444.jpg"
                    alt="Hot Girl, Gai Xinh, Cong Dong Mang, Kana Momonogi, images, Phim Av, Phim 18, "
                    note="Cô nàng đang là gương mặt được ưa thích nhất nhì trong ngành công nghiệp phim AV Nhật Bản"
                  />
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
