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
"title": 'Record Of Ragnarok: Quên cả thở với loạt cosplay nữ thần sắc đẹp Aphrodite với tâm hồn nặng trĩu',
"description": 'Nữ thần sắc đẹp Aphrodite trong anime Shuumatsu No Valkyrie - Record Of Ragnarok đang là nguồn cảm hứng cosplay của rất nhiều coser.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277409776591743438730.jpg',
"alt": 'NỮ THẦN APHRODITE,SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,ĐẠI CHIẾN NHÂN THẦN,APHRODITE,COSER,COSPLAY APHRODITE,COSPLAY,',
"category": 'images',
"date": '03/08/2021',
"time": '11:10 AM',
"link": '/record-of-ragnarok-quen-ca-tho-voi-loat-cosplay-nu-than-sac-dep-aphrodite-voi-tam-hon-nang-triu',
"zcomponent": 'page_20210803111040',
"filepath": './20210803111040-record-of-ragnarok-quen-ca-tho-voi-loat-cosplay-nu-than-sac-dep-aphrodite-voi-tam-hon-nang-triu.js'
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
  "Record Of Ragnarok: Quên cả thở với loạt cosplay nữ thần sắc đẹp Aphrodite với tâm hồn nặng trĩu";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "03/08/2021 11:10 AM";
const description =
  "Nữ thần sắc đẹp Aphrodite trong anime Shuumatsu No Valkyrie - Record Of Ragnarok đang là nguồn cảm hứng cosplay của rất nhiều coser.";
const link =
  "record-of-ragnarok-quen-ca-tho-voi-loat-cosplay-nu-than-sac-dep-aphrodite-voi-tam-hon-nang-triu";
const tagparam = [
  "NỮ THẦN APHRODITE",
  "SHUUMATSU NO VALKYRIE",
  "RECORD OF RAGNAROK",
  "ĐẠI CHIẾN NHÂN THẦN",
  "APHRODITE",
  "COSER",
  "COSPLAY APHRODITE",
  "COSPLAY",
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

export default function page_20210803111040() {
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
                      <strong>Shuumatsu No Valkyrie</strong> -{" "}
                      <strong>Record Of Ragnarok</strong> -{" "}
                      <strong>Đại Chiến Nhân Thần</strong> là tựa manga/anime vô
                      cùng đình đám thời gian gần đây. Sau khi lên sóng, anime
                      này ngày càng được đón nhận hết sức nồng nhiệt.
                    </p>
                    <p>
                      <strong>Shuumatsu No Valkyrie</strong> lấy nội dung về
                      cuộc chiến giữa 13 nhân loại mạnh nhất và 13 vị thần mạnh
                      nhất nhằm quyết định số phận của con người trong 1000 năm.
                      Là một tác phẩm chiến đấu võ đài, Shuumatsu No Valkyrie đã
                      khiến khán giả bằng những trận đối đầu vô cùng đẫm máu và
                      hấp dẫn, đồng thời truyền tải không ít bài học nhân văn
                      sâu sắc.
                    </p>
                    <p>
                      Ngoài phần nội dung hấp dẫn thì{" "}
                      <strong>Shuumatsu No Valkyrie</strong> cũng có khá nhiều
                      yếu tố khác khiến khán giả yêu thích. Đặc biệt trong số đó
                      có hình ảnh "vòng một" to đến mức phải có người đỡ của nữ
                      thần sắc đẹp <strong>Aphrodite</strong>. Hình ảnh quyến rũ
                      của vị nữ thần này không chỉ khiến nhiều người mê mệt mà
                      còn trở thành meme tấu hài được cộng đồng mạng vô cùng yêu
                      thích.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Bên cạnh đó,{" "}
                      <strong>
                        nữ thần <strong>Aphrodite</strong>
                      </strong>{" "}
                      còn là cảm hứng cho các nữ <strong>coser</strong> sở hữu
                      body nóng bỏng thử sức <strong>cosplay</strong>. Liệu các
                      coser có thể hiện được "tâm hồn" bao la của nữ thần
                      Aphrodite không? Xem ngay loạt ảnh{" "}
                      <strong>cosplay Aphrodite</strong> của nữ coser Chihiro
                      千尋 dưới đây để tìm đáp án nhé!
                    </p>
                    <p>
                      <strong>
                        Nữ thần <strong>Aphrodite</strong>
                      </strong>{" "}
                      phiên bản đời thực như thế này liệu có khiến bạn hài lòng
                      hay không? Hãy chia sẻ nhé!
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277409776591743438730.jpg"
                      alt="1, NỮ THẦN APHRODITE,SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,ĐẠI CHIẾN NHÂN THẦN,APHRODITE,COSER,COSPLAY APHRODITE,COSPLAY,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-1627741048200334762610.jpg"
                      alt="2, NỮ THẦN APHRODITE,SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,ĐẠI CHIẾN NHÂN THẦN,APHRODITE,COSER,COSPLAY APHRODITE,COSPLAY,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277410556331828746498.jpg"
                      alt="3, NỮ THẦN APHRODITE,SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,ĐẠI CHIẾN NHÂN THẦN,APHRODITE,COSER,COSPLAY APHRODITE,COSPLAY,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277410089941519440305.jpg"
                      alt="4, NỮ THẦN APHRODITE,SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,ĐẠI CHIẾN NHÂN THẦN,APHRODITE,COSER,COSPLAY APHRODITE,COSPLAY,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-1627740984629544409253-1627740998005691222679.jpg"
                      alt="5, NỮ THẦN APHRODITE,SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,ĐẠI CHIẾN NHÂN THẦN,APHRODITE,COSER,COSPLAY APHRODITE,COSPLAY,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-1627741036174870664944.jpg"
                      alt="6, NỮ THẦN APHRODITE,SHUUMATSU NO VALKYRIE,RECORD OF RAGNAROK,ĐẠI CHIẾN NHÂN THẦN,APHRODITE,COSER,COSPLAY APHRODITE,COSPLAY,"
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
