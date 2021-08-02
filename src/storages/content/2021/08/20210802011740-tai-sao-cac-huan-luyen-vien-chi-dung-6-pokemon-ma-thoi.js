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
"timestamp": '02/08/2021 01:17 AM',
"title": 'Tại sao các huấn luyện viên chỉ dùng 6 Pokémon mà thôi?',
"description": 'Con số 6 được coi là chuẩn hóa với các huấn luyện viên Pokémon kể từ đầu khi mới khai sinh ra game cho tới thời điểm hiện tại.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/31/photo-1-16277492905702081276162.png',
"alt": 'POKÉMON,',
"category": 'games',
"date": '02/08/2021',
"time": '01:17 AM',
"link": '/tai-sao-cac-huan-luyen-vien-chi-dung-6-pokemon-ma-thoi',
"zcomponent": 'page_20210802011740',
"filepath": './20210802011740-tai-sao-cac-huan-luyen-vien-chi-dung-6-pokemon-ma-thoi.js'
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
const title = "Tại sao các huấn luyện viên chỉ dùng 6 Pokémon mà thôi?";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "02/08/2021 01:17 AM";
const description =
  "Con số 6 được coi là chuẩn hóa với các huấn luyện viên Pokémon kể từ đầu khi mới khai sinh ra game cho tới thời điểm hiện tại.";
const link = "tai-sao-cac-huan-luyen-vien-chi-dung-6-pokemon-ma-thoi";
const tagparam = ["POKÉMON"];
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

export default function page_20210802011740() {
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
                    Những ai chơi Pokemon đều biết rằng, trò chơi này thuộc thể
                    loại turn-based RPG - thể loại nhập vai đánh theo lượt. Nếu
                    như một game thủ có thể sử dụng tất cả các Pokemon mà người
                    đó muốn mà không có giới hạn, bỗng nhiên tính chiến thuật
                    trở nên... thừa và chiến thắng sẽ thuộc về kẻ có nhiều
                    Pokemon nhất. Do đó, việc sở hữu 6 Pokemon trong đội hình
                    dường như là 1 con số hợp lý.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/31/photo-1-16277492905702081276162.png"
                    alt="1, POKÉMON,"
                    note=""
                  />
                  <p>
                    Chuyện này đã từng xuất hiện trong cả game lẫn anime, nhưng
                    lại không quá phổ biến khiến nhiều game thủ thắc mắc. Tuy
                    nhiên, nó lại được nhắc tới chỉ 1 lần duy nhất bởi chính
                    giáo sư Oak trong manga.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/31/photo-1-16277482181421862559968.jpg"
                    alt="2, POKÉMON,"
                    note=""
                  />
                  <p>
                    Theo đó, chẳng ai cấm mỗi nhà huấn luyện mang theo nhiều{" "}
                    <strong>Pokémon</strong> bên mình, 20, 30 hay thậm chí 100
                    cũng hoàn toàn có thể. Thế nhưng, quá nhiều "đệ tử" sẽ dẫn
                    đến vấn đề là tình cảm cũng như sự quan tâm của họ dành cho
                    chúng bị… ít đi. Chỉ có những giáo sư, tiến sĩ với khao khát
                    tìm hiểu về từng loài Pokémon mới có hứng thú săn bắt nhiều
                    như vậy.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Còn ngược lại, đối với các nhà huấn luyện, con số 6 là...
                    vừa xinh, không quá nhiều cũng không quá ít. Nhờ vậy, họ có
                    thể chăm lo cho từng Pokemon một cách tận tâm nhất, rèn
                    luyện và nhìn chúng trưởng thành. Đó cũng phần nào là lý do
                    mà trong các giải đấu lớn, có một luật lệ được ban hành là
                    mỗi Huấn Luyện Viên chỉ được sử dụng chính thức 6{" "}
                    <strong>Pokémon</strong> theo mình mà thôi.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277494339111524439314.jpg"
                    alt="3, POKÉMON,"
                    note=""
                  />
                  <p>
                    Về cơ bản, <strong>Pokémon</strong> cũng là series game
                    thiên về chiến thuật, giới hạn con số 6 rất phù hợp để khiến
                    người chơi phải suy nghĩ kỹ lưỡng và sáng tạo ra các chiến
                    thuật. Tất nhiên, nếu chỉ tập trung vào 6 Pokémon chính,
                    việc phân bổ thời gian rèn luyện mà các nhà huấn luyện cần
                    đặt ra cũng được rõ ràng, dễ kiểm soát hơn. Cũng chính vì
                    giới hạn ở số 6 nên khi lựa chọn đội hình Pokémon chính cho
                    mình, người chơi cũng cần xem xét về nhiều yếu tố như hệ,
                    cấp tiến hóa, các tuyệt chiêu, tốc độ ra đòn… của từng "đại
                    tướng" của mình.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/31/photo-3-16277482182681661339308.jpg"
                    alt="4, POKÉMON,"
                    note=""
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
