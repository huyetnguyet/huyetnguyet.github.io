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
"timestamp": '05/08/2021 08:48 AM',
"title": 'Giật mình khi thấy dàn gái xinh Ghibli đều béo ú sau thời gian dài ở nhà chống dịch, rồi ai cũng sẽ bị "ngải heo" quật thôi',
"description": 'Các fan hâm mộ truyện tranh luôn là những người cực kỳ sáng tạo và đôi khi các nhân vật hoạt hình nổi tiếng được họ "chế" lại thành bộ dạng cực "dị" mà bạn khó có thể tưởng tượng được.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-1-162813241659122418386.jpg',
"alt": 'OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,',
"category": 'games',
"date": '05/08/2021',
"time": '08:48 AM',
"link": '/giat-minh-khi-thay-dan-gai-xinh-ghibli-deu-beo-u-sau-thoi-gian-dai-o-nha-chong-dich-roi-ai-cung-se-bi-ngai-heo-quat-thoi',
"zcomponent": 'page_20210805084816',
"filepath": './20210805084816-giat-minh-khi-thay-dan-gai-xinh-ghibli-deu-beo-u-sau-thoi-gian-dai-o-nha-chong-dich-roi-ai-cung-se-bi-ngai-heo-quat-thoi.js'
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
  'Giật mình khi thấy dàn gái xinh Ghibli đều béo ú sau thời gian dài ở nhà chống dịch, rồi ai cũng sẽ bị "ngải heo" quật thôi';
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "05/08/2021 08:48 AM";
const description =
  'Các fan hâm mộ truyện tranh luôn là những người cực kỳ sáng tạo và đôi khi các nhân vật hoạt hình nổi tiếng được họ "chế" lại thành bộ dạng cực "dị" mà bạn khó có thể tưởng tượng được.';
const link =
  "giat-minh-khi-thay-dan-gai-xinh-ghibli-deu-beo-u-sau-thoi-gian-dai-o-nha-chong-dich-roi-ai-cung-se-bi-ngai-heo-quat-thoi";
const tagparam = [
  "OẠT HÌNH GHIBLI",
  "NHÂN VẬT GHIBLI",
  "NHÂN VẬT GHIBLI BÉO Ú",
  "CHIHIRO",
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

export default function page_20210805084816() {
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
                      Thời kỳ nghỉ ở nhà giãn cách xã hội khiến ai cũng... lười
                      vận động, ăn nhiều hơn để rồi cân nặng tăng chóng mặt. Cơ
                      mà điều này không chỉ xảy ra ở thế giới thực, ngay cả các
                      nhân vật h<strong>oạt hình Ghibli</strong> cũng đã "dính
                      ngải heo" sau nhiều tháng trời ăn nằm ở nhà rồi đấy!
                    </p>
                    <p>
                      Dưới đây mời các bạn cùng ngắm các nhân vật trong đại gia
                      đình Ghibli sau chuỗi ngày nghỉ dài ở nhà chống dịch
                      COVID-19 nhé! Các cô bé xinh xắn, đáng yêu ngày nào giờ
                      đều đã bị "trúng ngải heo" và mũm mĩm lên trông thấy. Và
                      những hình ảnh này do nghệ sĩ © MOMOMOMOMONGA59 "chế ra"
                      từ các nhân vật và thước phim trong vũ trụ h
                      <strong>oạt hình Ghibli</strong> đấy nhé!
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628132331115694042110.jpg"
                      alt="1, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note="Đây có phải là gương mặt của anh em lúc này không?"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628132338832876801556.jpg"
                      alt="2, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note="Cô bé bướng bỉnh Chihiro trong Spirited Away - Vùng Đất Linh Hồn"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281323464711308728232.jpg"
                      alt="3, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note="Vô Diện phiên bản mập ú với một cái bụng luôn đói của Spirited Away"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281323524391279131800.jpg"
                      alt="4, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note="Công chúa sói San trong Princess Mononoke"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628132358358904687124.jpg"
                      alt="5, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note="Thần rừng Totoro trong My Neighbor Totoro"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281323646021376014389.jpg"
                      alt="6, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note="Lại là Vô Diện mũm mĩm đây"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281323702382070953417.jpg"
                      alt="7, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note="Ponyo mập quá rồi làm nứt cả cái chai luôn"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281323762571865300300.jpg"
                      alt="8, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note="Lại là Ponyo đấy, anh em có nhận ra không?"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281323820952113529435.jpg"
                      alt="9, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note="Nữ chính béo ra nên rất hợp với Porco Rosso – cựu phi công máy bay chiến đấu đã bị biến thành một kẻ mình người mặt lợn rồi."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-162813238748896892439.jpg"
                      alt="10, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note="Gái xinh Nausicaä trong Nausicaä Of The Valley Of The Wind thay đổi đến không nhận ra."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281323925951952448482.jpg"
                      alt="11, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note="Ai nhận ra cô bé giao hàng xinh xắn Kiki trong Kikis Delivery Service không nhỉ?"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281323982621132182457.jpg"
                      alt="12, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note="Béo đến trầm cảm luôn"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628132403763103546802.jpg"
                      alt="13, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note="San và Moro – thần sói 300 tuổi đều mập ú cả rồi"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281324098391130485144.jpg"
                      alt="14, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note="Mặc dù béo rồi những vẫn được nhiều người mê này!"
                    />
                    <p>
                      Sophie - nhân vật chính của Howl's Moving Castle cũng
                      không thể thoát lời nguyền "ngải heo"
                    </p>
                    <p>
                      Sau khi xem loạt ảnh này anh em có thấy bóng dáng của mình
                      chút nào giống trên đây không, ăn nằm nhiều đến nỗi béo
                      lên lúc nào chẳng hay.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-1-162813241659122418386.jpg"
                      alt="15, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281324228172068941722.jpg"
                      alt="16, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281324276851495636638.jpg"
                      alt="17, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628132432803211830447.jpg"
                      alt="18, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628132439299875322987.jpg"
                      alt="19, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628132445612897639585.jpg"
                      alt="20, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628132452177595488566.jpg"
                      alt="21, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-162813245804895160489.jpg"
                      alt="22, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281324640501063820183.jpg"
                      alt="23, OẠT HÌNH GHIBLI,NHÂN VẬT GHIBLI,NHÂN VẬT GHIBLI BÉO Ú,CHIHIRO,"
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
