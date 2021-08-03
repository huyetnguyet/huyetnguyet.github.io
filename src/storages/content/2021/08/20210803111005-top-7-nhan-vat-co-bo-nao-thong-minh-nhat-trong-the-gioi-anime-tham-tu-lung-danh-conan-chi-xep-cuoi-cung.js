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
"timestamp": '03/08/2021 11:10 AM',
"title": 'Top 7 nhân vật có bộ não thông minh nhất trong thế giới anime, Thám Tử Lừng Danh Conan chỉ xếp cuối cùng',
"description": 'Bảy nhân vật sau đây được cho là sở hữu những bộ não thông minh nhất trong thế giới anime.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/cu1-16278104439231846267790.jpg',
"alt": 'SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,',
"category": 'games',
"date": '03/08/2021',
"time": '11:10 AM',
"link": '/top-7-nhan-vat-co-bo-nao-thong-minh-nhat-trong-the-gioi-anime-tham-tu-lung-danh-conan-chi-xep-cuoi-cung',
"zcomponent": 'page_20210803111005',
"filepath": './20210803111005-top-7-nhan-vat-co-bo-nao-thong-minh-nhat-trong-the-gioi-anime-tham-tu-lung-danh-conan-chi-xep-cuoi-cung.js'
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
  "Top 7 nhân vật có bộ não thông minh nhất trong thế giới anime, Thám Tử Lừng Danh Conan chỉ xếp cuối cùng";
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "03/08/2021 11:10 AM";
const description =
  "Bảy nhân vật sau đây được cho là sở hữu những bộ não thông minh nhất trong thế giới anime.";
const link =
  "top-7-nhan-vat-co-bo-nao-thong-minh-nhat-trong-the-gioi-anime-tham-tu-lung-danh-conan-chi-xep-cuoi-cung";
const tagparam = [
  "SHOP ANIME - MANGA",
  "PHONG CÁCH ANIME",
  "TRAILER ANIME",
  "MOVIE ANIME",
  "REVIEW ANIME",
  "ĐÁNH GIÁ ANIME",
  "TV ANIME",
  "MANGA ANIME",
  "TOP ANIME",
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

export default function page_20210803111005() {
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
                    <h5>7. Conan Edogawa/ Shinichi Kudo (Detective Conan)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/cu1-16278104439231846267790.jpg"
                      alt="1, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Trước khi biến thành cậu bé Conan, Shinichi Kudo là thám
                      tử học đường lừng danh với óc suy luận nhạy bén đã nhiều
                      lần giúp cảnh sát giải quyết các vụ án hóc búa chưa ai
                      giải quyết được. So với các nhân vật còn lại trong top đều
                      có trí tuệ hơn người và suy đoán như thần, Conan gây ấn
                      tượng như một cuốn bách khoa toàn thư với kho tàng kiến
                      thức siêu đẳng, vô cùng uyên bác, am hiểu mọi lĩnh vực,
                      khía cạnh sâu xa trong cuộc sống. Chính vì điều này mà
                      Conan luôn là nhân vật được yêu thích nhất trong anime
                      Thám Tử Lừng Danh Conan.
                    </p>
                    <h5>6. Lelouch Lamperouge (Code Geass)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/cu2-1627810447677910334161.jpg"
                      alt="2, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Nếu không sở hữu năng lực Geass có thể điều khiển người
                      khác, Lelouch vẫn là một đối thủ không hề tầm thường với
                      trí tuệ của mình. Lelouch gây ấn tượng so với các nhân vật
                      khác ở tài thao lược, xây dựng chiến thuật đã không ít lần
                      qua mặt được cả những chiến lược gia dạn dày kinh nghiệm
                      nhất của Britannia.
                    </p>
                    <h5>5. Shinichi Akiyama (Liar Game)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/cu3-16278104533051724412105.jpg"
                      alt="3, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Biểu tượng của trí tuệ trong anime Liar Game không ai khác
                      chính là Shinichi Akiyama, một sinh viên xuất sắc về tâm
                      lí học với khả năng bậc thầy về nắm bắt và điều khiển tâm
                      lí con người. Anh cũng lập ra một khía cạnh riêng so với
                      các nhân vật khác trong top này, đó là tài lừa đảo.
                      Akiyama là một thiên tài lừa đảo khét tiếng từng làm sụp
                      đổ công ty lớn nhất Nhật Bản MLM.
                    </p>
                    <h5>4. L (Death Note)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/cu4-16278104579691021855123.png"
                      alt="4, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Nếu như đối thủ Light có lợi thế ở khoản táo bạo, thủ
                      đoạn, thì L lại bí ẩn, khó đoán hơn. Anh có khả năng phân
                      tích rất thấu đáo, chính xác và đầy bất ngờ khiến Light
                      luôn phải dè chừng. Anh là thám tử lừng danh nhất thế giới
                      chưa từng bó tay trong một vụ án nào. L có thể dễ dàng
                      chứng minh sự tồn tại của Death Note, truy ra nơi ở của
                      Kira chỉ bằng một mẹo nhỏ và nghi ngờ đúng thủ phạm mặc dù
                      phạm vi điều tra ban đầu là toàn thế giới.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>3. Light Yagami/ Kira (Death note)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/cu5-16278104623592110192967.jpg"
                      alt="5, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />

                    <p>
                      Đằng sau vẻ ngoài lạnh lùng, Light sở hữu khả năng phân
                      tích, phán đoán cực kì sắc sảo khiến bất cứ ai cũng phải
                      kinh ngạc. Mỗi lần anh này suy luận phải căng mắt đọc từng
                      câu chữ mới hiểu anh nói gì. Trong các nhân vật có mặt
                      trong top này, có thể nói khó một ai có thể vượt qua Light
                      ở khả năng lập mưu kế một cách tỉ mỉ, khéo léo, chính xác
                      đến từng giây.
                    </p>
                    <h5>2. Johan Liebert (Moster)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/cu6-1627810466806335317495.jpg"
                      alt="6, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Một con quái vật rất đáng sợ, nhưng một con quái vật thông
                      minh thì càng đáng sợ gấp nhiều lần. Bất cứ ai theo dõi
                      anime Monster cũng sẽ khẳng định Johan Liebert là nhân vật
                      duy nhất trong manga có trí tuệ đến mức thần thánh. Biệt
                      tài của Johan là thấu hiểu một cách khó tin tâm lí con
                      người, có thể biến một người hiền lành trở thành sát thủ
                      và điều khiển tội phạm như những con rối.
                    </p>
                    <h5>1. Yang Wen-li (Legend Of The Galactic Heroes)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/cu7-1627810474930573836664.jpg"
                      alt="7, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Legend Of The Galactic Heroes là một anime có rất nhiều
                      nhân vật với trí tuệ hơn người như Reinhard, Oberstein,
                      Reuenthal, Mittermeyer. Tuy nhiên nổi bật nhất trong số đó
                      không ai khác chính là Yang Wen-li. Anh ban đầu chỉ mong
                      muốn trở thành một nhà sử học và không hề có tham vọng
                      lớn. Tuy nhiên tài năng sáng chói đã đưa anh trở thành
                      người nắm giữ vai trò chủ chốt nhất trong các cuộc chiến
                      tranh với đế quốc. Yang Wen-li đã ghi dấu ấn sâu đậm trong
                      tâm trí người xem là một thiên tài quân sự, một chiến lược
                      gia siêu việt.
                    </p>
                    <p>
                      Trên đây là top 7 nhân vật có bộ não thông minh nhất trong
                      thế giới anime. Các bạn yêu thích cái tên nào nhất, hãy để
                      lại ý kiến của mình nhé!
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
