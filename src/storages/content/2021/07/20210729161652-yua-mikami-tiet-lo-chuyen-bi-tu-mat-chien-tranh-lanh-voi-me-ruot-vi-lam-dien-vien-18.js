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
"timestamp": '29/07/2021 04:16 PM',
"title": 'Yua Mikami tiết lộ chuyện bị từ mặt, "chiến tranh lạnh" với mẹ ruột vì làm diễn viên 18+',
"description": 'Câu chuyện gia đình của Yua Mikami mới đây đã được chính cô tiết lộ.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/10/photo-1-16258967126351031921583.jpeg',
"alt": 'YUA MIKAMI,IDOL,',
"category": 'images',
"date": '29/07/2021',
"time": '04:16 PM',
"link": '/yua-mikami-tiet-lo-chuyen-bi-tu-mat-chien-tranh-lanh-voi-me-ruot-vi-lam-dien-vien-18',
"zcomponent": 'page_20210729161652',
"filepath": './20210729161652-yua-mikami-tiet-lo-chuyen-bi-tu-mat-chien-tranh-lanh-voi-me-ruot-vi-lam-dien-vien-18.js'
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
  'Yua Mikami tiết lộ chuyện bị từ mặt, "chiến tranh lạnh" với mẹ ruột vì làm diễn viên 18+';
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:16 PM";
const description =
  "Câu chuyện gia đình của Yua Mikami mới đây đã được chính cô tiết lộ.";
const link =
  "yua-mikami-tiet-lo-chuyen-bi-tu-mat-chien-tranh-lanh-voi-me-ruot-vi-lam-dien-vien-18";
const tagparam = ["YUA MIKAMI", "IDOL"];
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

export default function page_20210729161652() {
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
                    Trong làng phim người lớn tại xứ sở hoa anh đào hiện nay,
                    thật khó để tìm được một cái tên nào nổi danh hơn{" "}
                    <strong>Yua Mikami</strong>. Xuất thân từ một ca sĩ thần
                    tượng không có được nhiều thành công, cô nàng chuyển sang
                    lĩnh vực 18+ và nhanh chóng trở thành một trong những ngôi
                    sao nổi tiếng nhất, không chỉ tại Nhật Bản mà còn ở trên
                    toàn châu Á ở thời điểm hiện tại.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/10/photo-1-16258967126351031921583.jpeg"
                    alt="1, YUA MIKAMI,IDOL,"
                    note=""
                  />
                  <p>
                    {" "}
                    Hiện tại, <strong>Yua Mikami</strong> đang vô cùng thành
                    công ở tất cả mọi lĩnh vực mà cô tham gia. Không chỉ đứng
                    đầu các bảng xếp hạng phim người lớn hiện nay, cô nàng còn
                    gặt hái được thành công đáng kể ở cả lĩnh vực ca hát khi
                    tham gia cả 2 nhóm nhạc Ebisu Muscats và Honey Popcorn.
                    Không chỉ vậy, cô nàng còn rất bận rộn với những dự án riêng
                    như làm người mẫu, tham gia các show truyền hình hay là phát
                    triển thương hiệu thời trang cá nhân mang tên Miyour's.
                  </p>
                  <p>
                    Vào 1/6 vừa qua, <strong>Yua Mikami</strong> đã khoe với fan
                    về ngày kỷ niệm 6 năm bước chân vào ngành công nghiệp 18+
                    của cô nàng. Ở tuổi 15, cô nàng vẫn còn là{" "}
                    <strong>idol</strong> trẻ tuổi khi là thành viên của nhóm
                    nhạc SKE48 và chẳng thể tưởng tượng được rằng, cô sẽ trở
                    thành ngôi sao số 1 trong nghề diễn viên phim người lớn như
                    ở thời điểm hiện tại.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/10/-16258967505971585111033.jpg"
                    alt="2, YUA MIKAMI,IDOL,"
                    note=""
                  />
                  <p>
                    Giữa năm 2021 vừa qua, cô nàng vừa kỷ niệm năm thứ 6 trong
                    sự nghiệp đóng phim 18+. Đây là một quãng thời gian khá dài
                    đối với nhiều cô gái tham gia vào ngành AV, bởi không nhiều
                    cô gái có thể kéo dài được sự nghiệp được quá 3 năm. Dù vậy,
                    Yua không chỉ có quãng thời gian dài gấp đôi con số đó, mà
                    cô vẫn còn đang đứng trên đỉnh của ngành công nghiệp 18+ khi
                    liên tiếp đoạt nhiều giải thưởng cũng như giành vị trí top
                    đầu trên các bảng xếp hạng.
                  </p>
                  <p>
                    Mới đây, cô nàng cũng đã có những chia sẻ, tâm sự về công
                    việc và chuyện gia đình khi tham gia vào nghề nghiệp đặc thù
                    này. Theo Yua cho biết, hồi còn là một <strong>idol</strong>{" "}
                    trong lĩnh vực ca hát, cô nàng đã có nói chuyện qua với mẹ
                    về việc này. Về cơ bản, mẹ của cô cũng biết cô nàng rất mê
                    việc làm idol và thích ca hát, nên bà không có ý định phản
                    đối, dù bà cũng không thích thú cho lắm.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Tuy nhiên, việc chuyển sang đóng phim 18+ lại là một câu
                    chuyện khác. Hồi đó, <strong>Yua Mikami</strong> lẳng lặng
                    đăng ký đi đóng phim mà không nói một lời nào với gia đình
                    hay bạn bè cả. Vào khoảng 2 tiếng sau khi phim ra mắt, cô
                    gái sinh năm 1993 này mới gọi về cho mẹ và thông báo về sự
                    việc. Là một người có tính cách truyền thống, không đời nào
                    mẹ của Yua chịu chấp nhận cho cô nàng cả. Cả hai mẹ con đã
                    có những tranh cãi dữ dội, nhưng mọi chuyện đã là quá muộn.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/10/-16258967673761995281385.jpg"
                    alt="3, YUA MIKAMI,IDOL,"
                    note=""
                  />
                  <p>
                    Sau khi sự việc xảy ra, mẹ của Yua đã yêu cầu cô nàng ngay
                    lập tức rời bỏ công việc này, nhưng Yua không chịu. Kết quả
                    là 2 mẹ con đã xảy ra chiến tranh lạnh, và Yua cũng nói rằng
                    cô cũng đã tưởng rằng chuyện quan hệ mẹ - con đã cắt đứt
                    hoàn toàn. Khá may mắn là, sau 3 tháng trời, mẹ của Yua gọi
                    cho cô và cả 2 đã trò chuyện lại một lần nữa. Bà cũng nói
                    rằng, dù bà không ủng hộ Yua nhưng cũng hy vọng rằng cô sẽ
                    được hạnh phúc.
                  </p>
                  <p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
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
