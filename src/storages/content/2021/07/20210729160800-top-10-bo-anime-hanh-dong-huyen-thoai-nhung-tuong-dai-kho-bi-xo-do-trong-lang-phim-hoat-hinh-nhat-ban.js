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
"timestamp": '29/07/2021 04:08 PM',
"title": 'Top 10 bộ anime hành động huyền thoại, những tượng đài khó bị xô đổ trong làng phim hoạt hình Nhật Bản',
"description": 'Bạn đã xem hết những bộ anime huyền thoại này chưa?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-16249608398691027219202.jpg',
"alt": 'ANIME,ANIME SHONEN,ANIME HÀNH ĐỘNG,DRAGON BALL Z,NARUTO,ANIME HUYỀN THOẠI,ANIME HAY,ONE PIECE,',
"category": 'games',
"date": '29/07/2021',
"time": '04:08 PM',
"link": '/top-10-bo-anime-hanh-dong-huyen-thoai-nhung-tuong-dai-kho-bi-xo-do-trong-lang-phim-hoat-hinh-nhat-ban',
"zcomponent": 'page_20210729160800',
"filepath": './20210729160800-top-10-bo-anime-hanh-dong-huyen-thoai-nhung-tuong-dai-kho-bi-xo-do-trong-lang-phim-hoat-hinh-nhat-ban.js'
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
  "Top 10 bộ anime hành động huyền thoại, những tượng đài khó bị xô đổ trong làng phim hoạt hình Nhật Bản";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:08 PM";
const description = "Bạn đã xem hết những bộ anime huyền thoại này chưa?";
const link =
  "top-10-bo-anime-hanh-dong-huyen-thoai-nhung-tuong-dai-kho-bi-xo-do-trong-lang-phim-hoat-hinh-nhat-ban";
const tagparam = [
  "ANIME",
  "ANIME SHONEN",
  "ANIME HÀNH ĐỘNG",
  "DRAGON BALL Z",
  "NARUTO",
  "ANIME HUYỀN THOẠI",
  "ANIME HAY",
  "ONE PIECE",
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

export default function page_20210729160800() {
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
                      Đã có vô số <strong>anime</strong> hành động hấp dẫn trong
                      lịch sử phim hoạt hình Nhật Bản. Trong bài viết này, chúng
                      ta hãy cùng điểm qua 10 bộ huyền thoại được nhiều khán giả
                      Việt Nam quen tên nhất nhé!
                    </p>
                    <h5>1. Naruto</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-16249608398691027219202.jpg"
                      alt="1, ANIME,ANIME SHONEN,ANIME HÀNH ĐỘNG,DRAGON BALL Z,NARUTO,ANIME HUYỀN THOẠI,ANIME HAY,ONE PIECE,"
                      note=""
                    />
                    <p>
                      Câu chuyện về con đường ninja của Uzumaki{" "}
                      <strong>Naruto</strong> từ lúc là 1 Genin đến khi trở
                      thành Hokage xứng đáng được coi là một bộ{" "}
                      <strong>anime</strong> kinh điển có tầm ảnh hưởng trên
                      toàn thế giới. Series Naruto có nhiều khoảnh khắc hài
                      hước, những pha hành động hấp dẫn và cũng có những cảnh
                      buồn đến chảy nước mắt.
                    </p>
                    <h5>2. Dragon Ball Z </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-16249610430991601840247.jpg"
                      alt="2, ANIME,ANIME SHONEN,ANIME HÀNH ĐỘNG,DRAGON BALL Z,NARUTO,ANIME HUYỀN THOẠI,ANIME HAY,ONE PIECE,"
                      note=""
                    />
                    <p>
                      <strong>Dragon Ball Z</strong> được coi là một{" "}
                      <strong>anime</strong> shonen kinh điển ảnh hưởng tới
                      nhiều tác phẩm khác. Không chỉ nhóm chiến binh Z được khán
                      giả yêu mến mà ngay cả dàn phản diện như Frieza hay Buu
                      cũng đều khiến các fan say mê.
                    </p>
                    <h5>3. Bleach</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-162496108462719108629.jpeg"
                      alt="3, ANIME,ANIME SHONEN,ANIME HÀNH ĐỘNG,DRAGON BALL Z,NARUTO,ANIME HUYỀN THOẠI,ANIME HAY,ONE PIECE,"
                      note=""
                    />
                    <p>
                      Bleach cũng là một <strong>anime</strong> cùng thời với{" "}
                      <strong>Naruto</strong> và xứng đáng được coi là một trong
                      những anime kinh điển, với những nhân vật mang tính biểu
                      tượng như chính nhân vật chính Kurosaki Ichigo. Thật tiếc
                      là bộ anime này đã không thể kết thúc với phần còn lại của
                      câu chuyện trong manga.{" "}
                    </p>
                    <h5>4. Yu Yu Hakusho</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-16249612459451110793898.png"
                      alt="4, ANIME,ANIME SHONEN,ANIME HÀNH ĐỘNG,DRAGON BALL Z,NARUTO,ANIME HUYỀN THOẠI,ANIME HAY,ONE PIECE,"
                      note=""
                    />
                    <p>
                      Không giống như Hunter x Hunter, manga này của Togashi
                      Yoshihiro đã đưa nhân vật côn đồ lạnh lùng Yusuke Urameshi
                      ghi dấu ấn sâu đậm trong lòng khán giả. Yu Yu Hakusho thể
                      hiện những pha hành động hấp dẫn với những bước di chuyển
                      tuyệt vời, thường được trình bày dưới dạng một giải đấu
                      giao tranh liên quan đến con người và ma quỷ.{" "}
                    </p>
                    <h5>5. Fist of the North Star</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-16249613089811519029826.png"
                      alt="5, ANIME,ANIME SHONEN,ANIME HÀNH ĐỘNG,DRAGON BALL Z,NARUTO,ANIME HUYỀN THOẠI,ANIME HAY,ONE PIECE,"
                      note=""
                    />
                    <p>
                      Lấy bối cảnh ở Trái Đất thời hậu chiến tranh hạt nhân, câu
                      chuyện xoay quanh một chiến binh tên là Kenshiro, người
                      được kế thừa một môn phái võ thuật chết người được gọi là
                      Hokuto Shinken. Môn phái cho phép anh có khả năng giết
                      chết đối thủ bằng cách công kích vào các yếu huyệt của
                      chúng. Phong cách chiến đấu này thường khiến cho kẻ thù
                      chết một cách dã man và máu me. Kenshiro dành cả cuộc đời
                      của mình để chiến đấu chống lại nhiều băng đảng, kẻ cướp
                      và lãnh chúa để bảo vệ cuộc sống của những người vô tội
                      không có khả năng tự vệ, cũng như những người anh em và
                      bạn bè chí cốt.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>6. JoJo's Bizarre Adventure </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-1624961457892678112027.jpg"
                      alt="6, ANIME,ANIME SHONEN,ANIME HÀNH ĐỘNG,DRAGON BALL Z,NARUTO,ANIME HUYỀN THOẠI,ANIME HAY,ONE PIECE,"
                      note=""
                    />
                    <p>
                      Cho đến nay <strong>anime</strong> hành động này vẫn khiến
                      khán giả vô cùng ấn tượng không ngừng. Trên thực tế, câu
                      chuyện về gia đình Joestar vẫn đang tiếp tục cho đến ngày
                      nay. JoJo là một anime đặc sắc hội tụ đủ các thể loại từ
                      kinh dị, hành động đến lãng mạn.
                    </p>
                    <h5>7. One Piece</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-1624961564619457545953.jpg"
                      alt="7, ANIME,ANIME SHONEN,ANIME HÀNH ĐỘNG,DRAGON BALL Z,NARUTO,ANIME HUYỀN THOẠI,ANIME HAY,ONE PIECE,"
                      note=""
                    />
                    <p>
                      Trong những năm qua, <strong>One Piece</strong> đã trở
                      thành tựa manga bán chạy số một tại Nhật Bản và{" "}
                      <strong>anime</strong> của nó cũng rất thành công. Ngay từ
                      đầu, Luffy và những người bạn của cậu ấy đã mang đến cho
                      chúng ta những pha hành động thú vị cùng những pha hài
                      hước khiến chúng ta bật cười. Bên cạnh đó cũng có những
                      khoảnh khắc có thể khiến người đàn ông nam tính nhất cũng
                      phải bật khóc.{" "}
                    </p>
                    <h5>8. Saint Seiya </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/29/photo-1-1624961751192585915849.jpg"
                      alt="8, ANIME,ANIME SHONEN,ANIME HÀNH ĐỘNG,DRAGON BALL Z,NARUTO,ANIME HUYỀN THOẠI,ANIME HAY,ONE PIECE,"
                      note=""
                    />
                    <p>
                      Ra đời từ năm 1986, Saint Seiya luôn sánh vai cùng những
                      bộ manga nổi tiếng khác cùng thời như Doraemon, Dragon
                      Ball,… tại vị trí top những bộ truyện tranh bán chạy nhất.
                      Câu chuyện về nhóm Thánh đấu sĩ bảo vệ nữ thần Athena
                      chống lại các thế lực hắc ám cũng gặt hái thành công lớn ở
                      nhiều nước trên thế giới.
                    </p>
                    <h5>9. Hellsing</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-16249618900191065138953.jpg"
                      alt="9, ANIME,ANIME SHONEN,ANIME HÀNH ĐỘNG,DRAGON BALL Z,NARUTO,ANIME HUYỀN THOẠI,ANIME HAY,ONE PIECE,"
                      note=""
                    />
                    <p>
                      Hellsing là biên niên sử những nỗ lực của Hellsing
                      Organization bí ẩn và bí mật, như là nó chống lại ma cà
                      rồng, ghoul và các kẻ thù siêu nhiên đe dọa nước Anh. Tác
                      phẩm này thu hút bởi cốt truyện độc đáo với dàn nhân vật
                      thú vị.
                    </p>
                    <h5>10. Berserk </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/-16249619704201002187772.jpg"
                      alt="10, ANIME,ANIME SHONEN,ANIME HÀNH ĐỘNG,DRAGON BALL Z,NARUTO,ANIME HUYỀN THOẠI,ANIME HAY,ONE PIECE,"
                      note=""
                    />
                    <p>
                      Ảnh hưởng của Berserk có thể thấy rõ ở khắp mọi nơi, kể cả
                      trong những bộ <strong>anime</strong> ngày nay. Nhân vật
                      trong Berserk thậm chí còn trở thành nguồn cảm hứng cho
                      trò chơi Dark Souls.
                    </p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
