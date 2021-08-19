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
"timestamp": '19/08/2021 12:59 PM',
"title": '5 cảnh Ecchi trong anime "nóng bỏng" nhất nửa đầu 2021, số 2 khiến các fan "thót tim" vì quá táo bạo',
"description": 'Mở đầu năm 2021 với sự xuất hiện của rất nhiều bộ anime Ecchi mới, cùng những cảnh vô cùng nóng bỏng.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/anh-1-16291836454901848390812.jpg',
"alt": 'ANIME ECCHI,ANIME NHẬT BẢN,CẢNH NÓNG,NHÂN VẬT ANIME,',
"category": 'games',
"date": '19/08/2021',
"time": '12:59 PM',
"link": '/5-canh-ecchi-trong-anime-nong-bong-nhat-nua-dau-2021-so-2-khien-cac-fan-thot-tim-vi-qua-tao-bao',
"zcomponent": 'page_20210819125920',
"filepath": './20210819125920-5-canh-ecchi-trong-anime-nong-bong-nhat-nua-dau-2021-so-2-khien-cac-fan-thot-tim-vi-qua-tao-bao.js'
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
  '5 cảnh Ecchi trong anime "nóng bỏng" nhất nửa đầu 2021, số 2 khiến các fan "thót tim" vì quá táo bạo';
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 12:59 PM";
const description =
  "Mở đầu năm 2021 với sự xuất hiện của rất nhiều bộ anime Ecchi mới, cùng những cảnh vô cùng nóng bỏng.";
const link =
  "5-canh-ecchi-trong-anime-nong-bong-nhat-nua-dau-2021-so-2-khien-cac-fan-thot-tim-vi-qua-tao-bao";
const tagparam = [
  "ANIME ECCHI",
  "ANIME NHẬT BẢN",
  "CẢNH NÓNG",
  "NHÂN VẬT ANIME",
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

export default function page_20210819125920() {
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
                      Dưới đây là 5 phân cảnh được các fan bình chọn là hot nhất
                      nửa đầu năm nay:
                    </p>
                    <h5>
                      Tập 1 của Kyuukyoku Shinka shita Full Dive RPG ga Genjitsu
                      yori mo Kusoge Dattara (Full Dive: This Ultimate Next-Gen
                      Full Dive RPG Is Even Shittier than Real Life!)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/anh-1-16291836454901848390812.jpg"
                      alt="1, ANIME ECCHI,ANIME NHẬT BẢN,CẢNH NÓNG,NHÂN VẬT ANIME,"
                      note=""
                    />
                    <p>
                      Mặc dù Full Dive không phải là một loạt{" "}
                      <strong>anime Ecchi</strong> hạng nặng, nhưng nó có một số
                      khoảnh khắc đáng chú ý xung quanh Reona và một số phân
                      cảnh khá hot có thể được nhìn thấy trong tập 1. Nhất là
                      cảnh Reona Kisaragi, một cô gái cực kỳ nóng bỏng khoe bưởi
                      trước mặt Hiroshi Yuuki khiến nhiều người phải đỏ mặt.
                    </p>
                    <h5>
                      Tập 3 của Hige wo Soru. Soshite Joshikousei wo Hirou (Cạo
                      Râu Xong, Tôi Nhặt Gái Về Nhà)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/anh-2-1629183645500560214327.jpg"
                      alt="2, ANIME ECCHI,ANIME NHẬT BẢN,CẢNH NÓNG,NHÂN VẬT ANIME,"
                      note=""
                    />
                    <p>
                      Đây là một trong những bộ anime rất hot với những cô nàng
                      waifu dễ thương và quyến rũ. Và trong tập 3 của anime đã
                      có một đoạn khiến nhiều người phải sốc vì quá táo bạo, đó
                      chính là <strong>cảnh nóng</strong> giữa Saya cùng bạn
                      trai trước đó của cô. Và cảnh Sayu sử dụng cơ thể để hấp
                      dẫn Yoshida.
                    </p>
                    <h5>Tập 6 của Edens Zero</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/anh-3-16291836455171982848499.jpg"
                      alt="3, ANIME ECCHI,ANIME NHẬT BẢN,CẢNH NÓNG,NHÂN VẬT ANIME,"
                      note=""
                    />
                    <p>
                      Rebecca Bluegarden - nữ chính gợi cảm của Edens Zero đã
                      kết tập 6 bằng một cảnh vô cùng bắt mắt. Lúc này cô đang
                      bị một con quái vật xúc tu không gian quấn quanh cơ thể.
                      Điều này làm bộ ngực khủng của Rebecca như muốn nổ tung ra
                      ngoài khiến các fan vô cùng phấn khích.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>
                      Tập 2 của Ijiranaide, Nagatoro-san (Don't Toy with Me,
                      Miss Nagatoro)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/anh-4-162918364553326417475.jpg"
                      alt="4, ANIME ECCHI,ANIME NHẬT BẢN,CẢNH NÓNG,NHÂN VẬT ANIME,"
                      note=""
                    />
                    <p>
                      Chính tính cách ma mãnh của Hayase Nagatoro đã khiến cho
                      tập 2 của Don't Toy with Me, Miss Nagatoro được nằm trong
                      danh sách này. Trong tập này, Nagatoro như thường lệ gây
                      rối với Senpai và chúng ta có một số cảnh cậu nhìn quần và
                      áo trong của cô.
                    </p>
                    <h5>
                      Tập 2 của Isekai Maou to Shoukan Shoujo no Dorei Majutsu
                      (How NoT to Summon a Demon Lord)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/anh-5-16291836455381536620184.jpg"
                      alt="5, ANIME ECCHI,ANIME NHẬT BẢN,CẢNH NÓNG,NHÂN VẬT ANIME,"
                      note=""
                    />
                    <p>
                      Cuối cùng là một cảnh hot không kém xuất hiện trong tập 2
                      của How NoT to Summon a Demon Lord. Lúc này chúa quỷ chính
                      của chúng ta là Diablo, bị cô gái yêu tinh Shera L.
                      Greenwood "chà xát" khiến nhiều fan phải chảy máu mũi.
                    </p>
                    <p>
                      Trên đây là 5 phân cảnh vô cùng nóng bỏng trong anime. Các
                      bạn ấn tượng nhất với cảnh nào, hãy cho chúng tôi biết
                      thêm suy nghĩ để chúng ta cùng thảo luận nhé!
                    </p>
                    <p>Cre: Cbr.com</p>
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
