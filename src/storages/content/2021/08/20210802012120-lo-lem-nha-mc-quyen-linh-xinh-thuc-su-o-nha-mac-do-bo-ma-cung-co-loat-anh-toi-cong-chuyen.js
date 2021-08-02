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
"timestamp": '02/08/2021 01:21 AM',
"title": 'Lọ Lem nhà MC Quyền Linh xinh thực sự, ở nhà mặc đồ bộ mà cũng có loạt ảnh "tới công chuyện"',
"description": 'Không xuất hiện trong những bộ váy nền nã, nữ tính thường thấy nhưng Lọ Lem vẫn khiến mọi người khen nức nở.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/anh-chup-man-hinh-2021-08-02-luc-73949-sa-16278650239571095112497.png',
"alt": 'Lọ Lem,Con gái MC Quyền Linh,MC Quyền Linh,mai thảo linh,gái xinh,Hello GenZ,Nhà Lên Đèn, Em Lên Đồ,gái xinh gen Z,',
"category": 'stars',
"date": '02/08/2021',
"time": '01:21 AM',
"link": '/lo-lem-nha-mc-quyen-linh-xinh-thuc-su-o-nha-mac-do-bo-ma-cung-co-loat-anh-toi-cong-chuyen',
"zcomponent": 'page_20210802012120',
"filepath": './20210802012120-lo-lem-nha-mc-quyen-linh-xinh-thuc-su-o-nha-mac-do-bo-ma-cung-co-loat-anh-toi-cong-chuyen.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  'Lọ Lem nhà MC Quyền Linh xinh thực sự, ở nhà mặc đồ bộ mà cũng có loạt ảnh "tới công chuyện"';
const author = "SA,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "02/08/2021 01:21 AM";
const description =
  "Không xuất hiện trong những bộ váy nền nã, nữ tính thường thấy nhưng Lọ Lem vẫn khiến mọi người khen nức nở.";
const link =
  "lo-lem-nha-mc-quyen-linh-xinh-thuc-su-o-nha-mac-do-bo-ma-cung-co-loat-anh-toi-cong-chuyen";
const tagparam = [
  "Lọ Lem",
  "Con gái MC Quyền Linh",
  "MC Quyền Linh",
  "mai thảo linh",
  "gái xinh",
  "Hello GenZ",
  "Nhà Lên Đèn, Em Lên Đồ",
  "gái xinh gen Z",
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

export default function page_20210802012120() {
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
                    Để mà nói về một <strong>gái xinh</strong> Gen Z luôn khiến
                    dân tình cảm thấy trầm trồ mỗi lần xuất hiện trên cõi mạng
                    thì chắc chắn không thể bỏ qua cái tên{" "}
                    <strong>Lọ Lem</strong> - con gái đầu{" "}
                    <strong>MC Quyền Linh</strong>. Dù mới 15 tuổi thôi nhưng
                    Thảo Linh (tên thật của Lọ Lem) đã sở hữu gương mặt xinh đẹp
                    không tì vết cùng khí chất nổi trội, hứa hẹn sẽ trở thành mỹ
                    nhân tiềm năng trong tương lai.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/anh-chup-man-hinh-2021-08-02-luc-73949-sa-16278650239571095112497.png"
                    alt="1, Lọ Lem,Con gái MC Quyền Linh,MC Quyền Linh,mai thảo linh,gái xinh,Hello GenZ,Nhà Lên Đèn, Em Lên Đồ,gái xinh gen Z,"
                    note=""
                  />
                  <p>
                    Mới đây, <strong>Lọ Lem</strong> lại gây chú ý lần thứ n với
                    nhan sắc và thần thái khó ai theo kịp. Clip ngắn ngủi vỏn
                    vẹn 20 giây nhưng sự đáng yêu của cô bạn thì đủ sức gây
                    thương nhớ diện rộng.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/anh-chup-man-hinh-2021-08-02-luc-73909-sa-1627865023583278094751.png"
                    alt="2, Lọ Lem,Con gái MC Quyền Linh,MC Quyền Linh,mai thảo linh,gái xinh,Hello GenZ,Nhà Lên Đèn, Em Lên Đồ,gái xinh gen Z,"
                    note=""
                  />
                  <p>
                    Chỉ 20s nhưng <strong>Lọ Lem</strong> khiến dân mạng ngẩn
                    ngơ
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/base64-16278656481431939432746.png"
                    alt="3, Lọ Lem,Con gái MC Quyền Linh,MC Quyền Linh,mai thảo linh,gái xinh,Hello GenZ,Nhà Lên Đèn, Em Lên Đồ,gái xinh gen Z,"
                    note=""
                  />
                  <p>
                    Trong đoạn clip, <strong>Lọ Lem</strong> mặc bộ đồ ở nhà
                    caro màu cam cực đơn giản. Lúc buộc tóc 2 bên, khi buông thả
                    mái tóc dài bồng bềnh, cô bạn không quên kèm theo những
                    chiếc cặp tóc nhỏ xíu có màu sắc sặc sỡ.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/anh-chup-man-hinh-2021-08-02-luc-74129-sa-1627865024489115494586.png"
                    alt="4, Lọ Lem,Con gái MC Quyền Linh,MC Quyền Linh,mai thảo linh,gái xinh,Hello GenZ,Nhà Lên Đèn, Em Lên Đồ,gái xinh gen Z,"
                    note=""
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Chỉ vậy thôi nhưng với những đường nét không điểm để chê,
                    dân tình đều đồng loạt gật gù <strong>Lọ Lem</strong> sau
                    này mà không đi thi Hoa hậu thì sẽ phí lắm. Bên cạnh đó, Lọ
                    Lem còn "bonus" những tấm ảnh đá lông nheo lè lưỡi cực dễ
                    thương đi vào lòng người nữa chứ!
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/2/anh-chup-man-hinh-2021-08-02-luc-73843-sa-1627865023302839525164.png"
                    alt="5, Lọ Lem,Con gái MC Quyền Linh,MC Quyền Linh,mai thảo linh,gái xinh,Hello GenZ,Nhà Lên Đèn, Em Lên Đồ,gái xinh gen Z,"
                    note=""
                  />
                  <p>
                    Dù <strong>Lọ Lem</strong> buộc tóc...
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/0-1627864970608352169621.jpg"
                    alt="6, Lọ Lem,Con gái MC Quyền Linh,MC Quyền Linh,mai thảo linh,gái xinh,Hello GenZ,Nhà Lên Đèn, Em Lên Đồ,gái xinh gen Z,"
                    note=""
                  />
                  <p>... Hay thả tóc, netizen đều muốn ngắm mãi không thôi</p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/0-1627864970608352169621.jpg"
                    alt="7, Lọ Lem,Con gái MC Quyền Linh,MC Quyền Linh,mai thảo linh,gái xinh,Hello GenZ,Nhà Lên Đèn, Em Lên Đồ,gái xinh gen Z,"
                    note=""
                  />
                  <p>
                    Đương nhiên, phản ứng của cư dân mạng trước sự xinh đẹp chưa
                    bao giờ mất phong độ của <strong>Lọ Lem</strong> sẽ là 1001
                    lời khen:
                  </p>
                  <p>- Đáng yêu quá đáng nha Linh.</p>
                  <p>- Nay mặt tròn hơn nhưng vẫn xinh xuất sắc!</p>
                  <p>- Trời ơi cưng ghê!</p>
                  <p>- Đỡ em đi chị ơi! Xinh quá em xỉu luôn nè!</p>
                  <p>
                    Về phần mình, <strong>Lọ Lem</strong> cũng dành thời gian
                    rep comment của nhiều người, xác nhận đã tăng cân nhẹ trong
                    những ngày ở nhà không la cà vừa qua.
                  </p>
                  <p>Ảnh chụp màn hình</p>
                  <p>
                    "<strong>Nhà Lên Đèn, Em Lên Đồ</strong>" - một thử thách
                    khoe hình xinh rinh quà xịn kéo dài từ 01/08 - 08/08.
                  </p>
                  <p>Ngay bây giờ, để tham gia thử thách này, hãy:</p>
                  <p>
                    1. Khoe ảnh outfit thật đỉnh tại gia lên Instagram, TikTok
                    hay Facebook.
                  </p>
                  <p>
                    2. Hashtag #nhalendenemlendo và đừng quên tag
                    @kenh14official nhé!
                  </p>
                  <p>3. Huy động bạn bè, người thân tương tác cho ảnh.</p>
                  <p>
                    Sau 1 tuần, 10 bạn có lượt tim nhiều nhất sẽ nhận được phần
                    quà siêu to từ nhà Estee Lauder đó nha!
                  </p>
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
