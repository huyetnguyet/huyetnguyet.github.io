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
"timestamp": '07/08/2021 03:46 PM',
"title": 'Thánh nữ trượt băng Nhật Bản cosplay Điệp Trụ trong Kimetsu no Yaiba',
"description": 'Bức ảnh của nữ vận động viên trượt băng Marin Honda đã nhận được hàng chục nghìn lượt like của fan hâm mộ.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-16283400307351407860644.jpg',
"alt": 'KIMETSU NO YAIBA,COSPLAY,TRƯỢT BĂNG,MARIN HONDA,',
"category": 'news',
"date": '07/08/2021',
"time": '03:46 PM',
"link": '/thanh-nu-truot-bang-nhat-ban-cosplay-diep-tru-trong-kimetsu-no-yaiba',
"zcomponent": 'page_20210807154638',
"filepath": './20210807154638-thanh-nu-truot-bang-nhat-ban-cosplay-diep-tru-trong-kimetsu-no-yaiba.js'
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
  "Thánh nữ trượt băng Nhật Bản cosplay Điệp Trụ trong Kimetsu no Yaiba";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "07/08/2021 03:46 PM";
const description =
  "Bức ảnh của nữ vận động viên trượt băng Marin Honda đã nhận được hàng chục nghìn lượt like của fan hâm mộ.";
const link =
  "thanh-nu-truot-bang-nhat-ban-cosplay-diep-tru-trong-kimetsu-no-yaiba";
const tagparam = ["KIMETSU NO YAIBA", "COSPLAY", "TRƯỢT BĂNG", "MARIN HONDA"];
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

export default function page_20210807154638() {
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
                      Từ lâu nay, Nhật Bản luôn sở hữu rất nhiều mỹ nhân tham
                      gia vào các bộ môn thể thao nghệ thuật như thể dục dụng
                      cụ, khiêu vũ hay là cả <strong>trượt băng</strong>. Một
                      trong những cái tên nổi tiếng hiện nay ở xứ sở hoa anh đào
                      là <strong>Marin Honda</strong> - tiểu mỹ nhân sinh năm
                      2001 được mệnh danh "thiên thần trượt băng".
                    </p>
                    <p>
                      Sở hữu cả tài năng và ngoại hình xinh đẹp, cô gái sinh năm
                      2001 sở hữu loạt giải thưởng danh giá như vô địch giải{" "}
                      <strong>trượt băng</strong> nghệ thuật trẻ thế giới năm
                      2016 và giành huy chương bạc 1 năm sau đó, huy chương đồng
                      giải vô địch quốc gia năm 2016-2017... Không chỉ được báo
                      giới Nhật Bản săn đón, Marin còn là cái tên gây chú ý
                      trong cộng đồng mạng nhiều nước châu Á.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-16283400307351407860644.jpg"
                      alt="1, KIMETSU NO YAIBA,COSPLAY,TRƯỢT BĂNG,MARIN HONDA,"
                      note=""
                    />
                    <p>
                      Marin được truyền niềm đam mê <strong>trượt băng</strong>{" "}
                      từ anh trai, Taichi Honda (sinh năm 1998). Đến năm 11
                      tuổi, nữ VĐV đã được truyền thông xứ sở hoa anh đào tôn
                      vinh là người kế vị xứng đáng cho Asada Mao - cựu ngôi sao
                      trượt băng sinh năm 1990. Kể từ đó, những lời khen có cánh
                      liên tục được người hâm mộ dành cho "thiên thần nhí".
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-16283400483282069341578.jpg"
                      alt="2, KIMETSU NO YAIBA,COSPLAY,TRƯỢT BĂNG,MARIN HONDA,"
                      note=""
                    />
                    <p>
                      Trước khi bén duyên với sự nghiệp thể thao, Honda từng là
                      một diễn viên nhí khá nổi tiếng tại Nhật Bản nhờ có ngoại
                      hình xinh xắn và đáng yêu. Những lợi thế này cũng giúp cô
                      ghi điểm trong mắt các fan và được phong là "thánh nữ" của
                      làng <strong>trượt băng</strong> nghệ thuật.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Cũng như nhiều cô gái tuổi teen khác, Honda rất nhí nhảnh
                      và trẻ trung ở ngoài đời. Cô gái 18 tuổi thường xuyên đăng
                      tải các hình ảnh cùng bạn bè lên trang Instagram cá nhân.
                      Mới đây, cô nàng đã đăng tải hình ảnh bản thân hóa trang
                      thành Điệp Trụ Kochou Shinobu trong bộ anime đình đám{" "}
                      <strong>Kimetsu no Yaiba</strong>.
                    </p>
                    <p>
                      Sau đó, bức hình đã nhận được rất nhiều lời khen ngợi của
                      các fan hâm mộ cùng hàng chục nghìn lượt thả tim trên
                      Instagram. Hiện tại, trang cá nhân của Marin có gần 1
                      triệu người theo dõi và con số không ngừng tăng lên. Marin
                      thường xuyên chia sẻ những khoảnh khắc thi đấu, tập luyện
                      hoặc sinh hoạt cùng gia đình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-16283400623421420694386.jpg"
                      alt="3, KIMETSU NO YAIBA,COSPLAY,TRƯỢT BĂNG,MARIN HONDA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-16283400722261344197629.jpg"
                      alt="4, KIMETSU NO YAIBA,COSPLAY,TRƯỢT BĂNG,MARIN HONDA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-1628340083700721744055.jpg"
                      alt="5, KIMETSU NO YAIBA,COSPLAY,TRƯỢT BĂNG,MARIN HONDA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-16283400893792057551219.jpg"
                      alt="6, KIMETSU NO YAIBA,COSPLAY,TRƯỢT BĂNG,MARIN HONDA,"
                      note=""
                    />
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
