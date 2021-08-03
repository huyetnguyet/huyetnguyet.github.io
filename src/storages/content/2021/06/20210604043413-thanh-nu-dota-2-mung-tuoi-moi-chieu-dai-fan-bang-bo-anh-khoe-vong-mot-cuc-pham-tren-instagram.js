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

 <ContentItem title="'Thánh nữ' Dota 2 mừng tuổi mới, chiêu đãi fan bằng bộ ảnh khoe vòng một cực phẩm trên Instagram"
content="Người mẫu Jun Vũ - game thủ Dota 2 - một lần nữa khiến người hâm mộ phải trầm trồ trước vẻ đẹp và thần thái đỉnh cao." 
src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/4/junvu7-16228229722301879983909.png" 
alt="Nguoi Ham Mo, Cong Dong Game Thu, Cong Dong Mang, Than Hinh Dong Ho Cat, Streamer, Game Thu, Cao Thu, Dota 2, Jun Vu, " 
category="images" 
time="04/06/2021 04:34 PM" 
link="/thanh-nu-dota-2-mung-tuoi-moi-chieu-dai-fan-bang-bo-anh-khoe-vong-mot-cuc-pham-tren-instagram"/>

{title="'Thánh nữ' Dota 2 mừng tuổi mới, chiêu đãi fan bằng bộ ảnh khoe vòng một cực phẩm trên Instagram",
content="Người mẫu Jun Vũ - game thủ Dota 2 - một lần nữa khiến người hâm mộ phải trầm trồ trước vẻ đẹp và thần thái đỉnh cao." ,
src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/4/junvu7-16228229722301879983909.png" ,
alt="Nguoi Ham Mo, Cong Dong Game Thu, Cong Dong Mang, Than Hinh Dong Ho Cat, Streamer, Game Thu, Cao Thu, Dota 2, Jun Vu, " ,
category="images" ,
time="04/06/2021 04:34 PM" ,
link="/thanh-nu-dota-2-mung-tuoi-moi-chieu-dai-fan-bang-bo-anh-khoe-vong-mot-cuc-pham-tren-instagram",component="page_20210604043413",
filepath="../storages/content/20210604043413-thanh-nu-dota-2-mung-tuoi-moi-chieu-dai-fan-bang-bo-anh-khoe-vong-mot-cuc-pham-tren-instagram.js"},

'Thánh nữ' Dota 2 mừng tuổi mới, chiêu đãi fan bằng bộ ảnh khoe vòng một cực phẩm trên Instagram
Người mẫu Jun Vũ - game thủ Dota 2 - một lần nữa khiến người hâm mộ phải trầm trồ trước vẻ đẹp và thần thái đỉnh cao.
https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/4/junvu7-16228229722301879983909.png
Nguoi Ham Mo, Cong Dong Game Thu, Cong Dong Mang, Than Hinh Dong Ho Cat, Streamer, Game Thu, Cao Thu, Dota 2, Jun Vu, 
images
04/06/2021
04:34 PM
/thanh-nu-dota-2-mung-tuoi-moi-chieu-dai-fan-bang-bo-anh-khoe-vong-mot-cuc-pham-tren-instagram
page_20210604043413
../storages/content/20210604043413-thanh-nu-dota-2-mung-tuoi-moi-chieu-dai-fan-bang-bo-anh-khoe-vong-mot-cuc-pham-tren-instagram.js




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
  "'Thánh nữ' Dota 2 mừng tuổi mới, chiêu đãi fan bằng bộ ảnh khoe vòng một cực phẩm trên Instagram";
const author = "GIA MINH,";
const source = "Trí Thức Trẻ";
const date = "04/06/2021";
const time = "04:34 PM";
const description =
  "Người mẫu Jun Vũ - game thủ Dota 2 - một lần nữa khiến người hâm mộ phải trầm trồ trước vẻ đẹp và thần thái đỉnh cao.";
const link =
  "thanh-nu-dota-2-mung-tuoi-moi-chieu-dai-fan-bang-bo-anh-khoe-vong-mot-cuc-pham-tren-instagram";
const tagparam = [
  "nguoi-ham-mo",
  "cong-dong-game-thu",
  "cong-dong-mang",
  "than-hinh-dong-ho-cat",
  "streamer",
  "game-thu",
  "cao-thu",
  "dota-2",
  "jun-vu",
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

export default function page_20210604043413() {
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
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
                      Vào ngày 4/6 là sinh nhật lần thứ 26 của Jun Vũ (Vũ Phương
                      Anh) - cô nàng được mệnh danh là "thánh nữ" trong cộng
                      đồng Dota 2 Việt Nam. Không chỉ là diễn viên tài năng, Jun
                      Vũ còn khiến người hâm mộ hết lòng yêu quý bởi tính cách
                      thân thiện, đáng yêu. Đặc biệt, cô nàng từng xuất hiện
                      trên báo Trung Quốc và còn được so sánh nhan sắc với
                      Angelababy.
                    </p>
                    <p>
                      <ContentImage
                        src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/4/junvu7-16228229722301879983909.png"
                        alt="Nguoi Ham Mo, Cong Dong Game Thu, Cong Dong Mang, Than Hinh Dong Ho Cat, Streamer, Game Thu, Cao Thu, Dota 2, Jun Vu, "
                        note="
                    Jun Vũ - 'thánh nữ' của cộng đồng Dota 2 vừa bước chân sang
                    tuổi mới"
                      />
                    </p>
                    <p>
                      Theo đó, Jun Vũ cũng đăng tải bộ ảnh nóng bỏng để khoe
                      thân hình đồng hồ cát đáng mơ ước lên Instagram nhằm chúc
                      mừng sinh nhật. Kết hợp thêm với bộ bikini 2 mảnh và chiếc
                      áo choàng hờ hững, cô nàng đã khiến nhiều anh em game thủ
                      phải xuýt xoa trước độ gợi cảm khó cưỡng.
                    </p>
                    <RelationNewsInPage />
                    <p>
                      Với những game thủ Dota 2 đời đầu, Jun Vũ chắc chắn là cái
                      tên vô cùng quen thuộc. Dù rằng bây giờ đã không còn gắn
                      bó với tựa game này nhưng cô nàng vẫn luôn nhận được sự
                      quan tâm rất lớn từ phía cộng đồng game thủ nói riêng và
                      cộng đồng mạng nói chung.
                    </p>
                    <p>
                      Cùng ngắm thêm những bức ảnh bikini quyến rũ của Jun Vũ
                      nhé!
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/4/junvu8-16228229722651900432710.png"
                      alt="Nguoi Ham Mo, Cong Dong Game Thu, Cong Dong Mang, Than Hinh Dong Ho Cat, Streamer, Game Thu, Cao Thu, Dota 2, Jun Vu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/4/junvu9-16228229722961190631084.png"
                      alt="Nguoi Ham Mo, Cong Dong Game Thu, Cong Dong Mang, Than Hinh Dong Ho Cat, Streamer, Game Thu, Cao Thu, Dota 2, Jun Vu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/4/junvu10-1622822972342672702396.png"
                      alt="Nguoi Ham Mo, Cong Dong Game Thu, Cong Dong Mang, Than Hinh Dong Ho Cat, Streamer, Game Thu, Cao Thu, Dota 2, Jun Vu, "
                      note=""
                    />
                    <ContentImage
                      src="https://gcdn.2mdn.net/videoplayback/id/9122dbe1c947f4e7/itag/309/source/doubleclick_dmm/ctier/L/acao/yes/ip/0.0.0.0/ipbits/0/expire/3765367353/sparams/id,itag,source,ctier,acao,ip,ipbits,expire/signature/BAB1AA17272C3F1BFC0FEA5E6804BD80234BEB8A.948A89FEF50AED90E01DC19BA6D579146A9CC7EA/key/ck2/file/file.mp4"
                      alt="Nguoi Ham Mo, Cong Dong Game Thu, Cong Dong Mang, Than Hinh Dong Ho Cat, Streamer, Game Thu, Cao Thu, Dota 2, Jun Vu, "
                      note=""
                    />
                    <ContentImage
                      src="https://nv.vi-serve.com/vis-media/136/2267/136_a1a9ac1aba6f4e239f931128c140b15b_720p.mp4"
                      alt="Nguoi Ham Mo, Cong Dong Game Thu, Cong Dong Mang, Than Hinh Dong Ho Cat, Streamer, Game Thu, Cao Thu, Dota 2, Jun Vu, "
                      note=""
                    />
                    <p>Ảnh: FBNV</p>
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
