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
"timestamp": '19/08/2021 12:55 PM',
"title": 'Top 5 "anh hói" mạnh nhất thế giới anime, chưa ai vượt qua được "thánh phồng" Saitama',
"description": 'Dù không may mắn khi có quả đầu trọc lốc, thế nhưng bù lại 5 nhân vật này lại sở hữu sức mạnh kinh khủng.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/anh-1-1629096867117208652779.jpeg',
"alt": 'ONE PUNCH MAN,SAITAMA,DRAGON BALL,NHÂN VẬT ANIME,NHÂN VẬT HÓI,ANIME NHẬT BẢN,',
"category": 'games',
"date": '19/08/2021',
"time": '12:55 PM',
"link": '/top-5-anh-hoi-manh-nhat-the-gioi-anime-chua-ai-vuot-qua-duoc-thanh-phong-saitama',
"zcomponent": 'page_20210819125535',
"filepath": './20210819125535-top-5-anh-hoi-manh-nhat-the-gioi-anime-chua-ai-vuot-qua-duoc-thanh-phong-saitama.js'
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
  'Top 5 "anh hói" mạnh nhất thế giới anime, chưa ai vượt qua được "thánh phồng" Saitama';
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 12:55 PM";
const description =
  "Dù không may mắn khi có quả đầu trọc lốc, thế nhưng bù lại 5 nhân vật này lại sở hữu sức mạnh kinh khủng.";
const link =
  "top-5-anh-hoi-manh-nhat-the-gioi-anime-chua-ai-vuot-qua-duoc-thanh-phong-saitama";
const tagparam = [
  "ONE PUNCH MAN",
  "SAITAMA",
  "DRAGON BALL",
  "NHÂN VẬT ANIME",
  "NHÂN VẬT HÓI",
  "ANIME NHẬT BẢN",
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

export default function page_20210819125535() {
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
                    <h5>
                      <strong>Saitama</strong> (One Punch Man)
                    </h5>
                    <p>
                      <strong>Saitama</strong> là nhân vật chính trong{" "}
                      <strong>One Punch Man</strong>, anh nổi tiếng với cú đấm
                      "một phát chết luôn" hạ gục tất cả các quái vật dù có mạnh
                      mẽ và nguy hiểm đến đâu. Không những thế "anh hói" còn có
                      sức chịu đựng và độ bền bỉ tuyệt vời, tốc độ ngang ngửa
                      ánh sáng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/anh-1-1629096867117208652779.jpeg"
                      alt="1, ONE PUNCH MAN,SAITAMA,DRAGON BALL,NHÂN VẬT ANIME,NHÂN VẬT HÓI,ANIME NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Có thể thấy <strong>Saitama</strong> sở hữu mạnh kinh
                      khủng một cách vô lý, chưa một ai có thể vượt qua anh
                      trọc. Tuy nhiên cho đến nay nguồn gốc sức mạnh của Saitama
                      là một điều bí ẩn không thể lý giải.
                    </p>
                    <h5>
                      Quy lão tiên sinh (<strong>Dragon Ball</strong>)
                    </h5>
                    <p>
                      Quy lão tiên sinh (Master Roshi hay Quy lão Kame) là vị sư
                      phụ đầu tiên của Goku, dạy võ anh hồi nhỏ. Ông là một
                      người nhỏ nhắn, đầu trọc lóc, bộ râu bạc phơ và thường đeo
                      kính râm. Đặc điểm nhận dạng của Master Roshi là cực kỳ
                      "dê già", sẵn sàng phụt máu mũi nếu lỡ nhìn thấy ảnh nóng
                      của các cô gái trẻ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/anh-2-1629096867137957685081.jpg"
                      alt="2, ONE PUNCH MAN,SAITAMA,DRAGON BALL,NHÂN VẬT ANIME,NHÂN VẬT HÓI,ANIME NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Nếu không tính thói xấu mê gái thì ông chính là thầy giáo
                      vĩ đại nhất trong <strong>Dragon ball</strong>. Quy lão
                      tiên sinh chính là người đã đào tạo ra người học trò xuất
                      chúng Songoku. Ông không chỉ truyền dạy võ thuật cho Goku
                      và Krillin mà còn thắp lên trong họ tinh thần võ sĩ đạo và
                      cách làm người chính nghĩa. Tuyệt chiêu Kamehameha nổi
                      tiếng Dragon ball cũng là do lão Rùa truyền lại cho đám đệ
                      tử của mình.
                    </p>
                    <h5>Genryusai Yamamoto (Bleach)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/anh-3-1629096867166110581295.jpg"
                      alt="3, ONE PUNCH MAN,SAITAMA,DRAGON BALL,NHÂN VẬT ANIME,NHÂN VẬT HÓI,ANIME NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Genryusai Yamamoto là cựu tổng chỉ huy của Gotei 13 và
                      cũng đồng thời từng là chỉ huy của phân khu 1 trong anime
                      Bleach nổi tiếng. Với thân hình cao to, cơ bắp cuồn cuộn,
                      Yamamoto-Genryuusai luôn tỏ ra rằng mình là một ông lão
                      hói cực kỳ "bá đạo" khi có thể một mình xông vào giữa cuộc
                      chiến như đi vào chốn không người.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Sức mạnh của Yamamoto cũng vô cùng ghê gớm khi ông thành
                      thạo mọi kỹ năng của tử thần: kiếm thuật, thể thuật, kido,
                      shunpo... và rất nhiều kỹ thuật chiến đấu chuyên nghiệp
                      khác.
                    </p>
                    <h5>Onimaru Takeshi (Yaiba)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/anh-5-16290968671931330301070.jpg"
                      alt="4, ONE PUNCH MAN,SAITAMA,DRAGON BALL,NHÂN VẬT ANIME,NHÂN VẬT HÓI,ANIME NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Onimaru là đối thủ "truyền kiếp" của nhân vật chính Yaiba.
                      Sau khi sử dụng thanh Phong Quỷ Kiếm, cậu bị ám và mọc lên
                      2 cái sừng trên "quả đầu trọc" của mình, trở thành hiện
                      thân của Phong Quỷ. Onimaru Takeshi từ đó đã dùng sức mạnh
                      hắc ám của mình chiếm lấy thành phố, tuy đến cuối truyện
                      đã bị Yaiba đánh bại thế nhưng Onimaru vẫn luôn là đối thủ
                      khiến Yaiba phải nể phục.
                    </p>
                    <h5>Ikkaku Madarame (Bleach)</h5>
                    <p>
                      Madarame đến từ bộ truyện Bleach, thuộc Đội 11, anh là một
                      người yêu thích chiến đấu và có một "quả đầu trọc" ấn
                      tượng. Khi Zaraki trở thành đội trưởng của Đội 11, Ikkaku
                      và người bạn Ayasegawa Yumichika gia nhập Shinigami để có
                      thể chiến đấu dưới sự chỉ huy của Kenpachi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/anh-4-16290968671721278229610.jpg"
                      alt="5, ONE PUNCH MAN,SAITAMA,DRAGON BALL,NHÂN VẬT ANIME,NHÂN VẬT HÓI,ANIME NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Anh được báo cáo là người mạnh thứ 2 trong đội và đủ khả
                      năng để trở thành đội trưởng, thế nhưng Ikkaku khẳng định
                      một trong những nhiệm vụ của anh trong cuộc sống là phải
                      chết dưới sự chỉ huy của Zaraki.
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
