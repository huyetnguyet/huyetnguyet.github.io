import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*
 <ContentItem
 title="Đại gia Đức Huy lộ hint du lịch với tình trẻ kém 27 tuổi, chính là địa điểm tuyên bố "không có em, anh có em khác""
content="Dù đã đăng ảnh cách nhau cả 4 - 5 ngày nhưng hint hẹn hò của đại gia Đức Huy và tình tin đồn kém 27 tuổi vẫn rõ mồn một." 
src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/3/0-1622697731272517784711.jpg" 
alt="Cam Dan" 
category="images" 
time="03/06/2021 06:53 PM" 
link="/dai-gia-duc-huy-lo-hint-du-lich-voi-tinh-tre-kem-27-tuoi-chinh-la-dia-diem-tuyen-bo-khong-co-em-anh-co-em-khac"/>

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
  "Đại gia Đức Huy lộ hint du lịch với tình trẻ kém 27 tuổi, chính là địa điểm tuyên bố 'không có em, anh có em khác'";
const author = "SA,";
const source = "Pháp luật & Bạn đọc";
const date = "03/06/2021";
const time = "06:53 PM";
const description =
  "Dù đã đăng ảnh cách nhau cả 4 - 5 ngày nhưng hint hẹn hò của đại gia Đức Huy và tình tin đồn kém 27 tuổi vẫn rõ mồn một.";
const link =
  "dai-gia-duc-huy-lo-hint-du-lich-voi-tinh-tre-kem-27-tuoi-chinh-la-dia-diem-tuyen-bo-khong-co-em-anh-co-em-khac";
const tagparam = [
  "dai-gia-duc-huy",
  "chong-cu-le-quyen-hen-ho-tinh-tre-kem-27-tuoi",
  "cam-dan",
  "gai-dep",
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

export default function page_20210603065324() {
  return (
    <>
      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              >
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>
                    Kể từ khi vướng tin đồn hẹn hò đến nay, đại gia Đức Huy và
                    người đẹp Cẩm Đan dù không đăng ảnh chụp chung lên mạng
                    nhưng vẫn thường xuyên xuất hiện cùng nhau tại các sự kiện.
                    Không những thế cặp đôi còn liên tục bị dân tình soi ra các
                    chi tiết chứng minh chuyện hẹn hò.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/3/0-1622697731272517784711.jpg"
                    alt="Cam Dan"
                    note="Đại gia Đức Huy và bồ tin đồn trong 1 lần hẹn hò"
                  />
                  <p></p>
                  <p>
                    Mới đây, cả hai lại bị soi đi du lịch cùng nhau. Dân mạng đã
                    tìm ra điểm chung trong hình ảnh được người đẹp và đại gia
                    Sài thành chia sẻ lên mạng xã hội. Cả hai cùng đăng ảnh
                    check-in tại một resort sang chảnh.
                  </p>
                  <p>
                    Dù cặp đôi tin đồn đăng cách nhau cả dăm ba ngày nhưng
                    background và view y hệt nhau, nếu không muốn nói là một. Vì
                    vậy mà nhiều người mau chóng cho rằng họ đã ở cùng 1 địa
                    điểm.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/3/ncamdan1951048611827480104313206424331537295241921n-16226967170341942339010.png"
                    alt="Cam Dan"
                    note=""
                  />
                  <p>
                    Điểm trùng hợp trong bức ảnh đại gia Đức Huy và Cẩm Đan đăng
                    tải
                  </p>
                  <p>
                    Ngoài ra, trong những bức hình mà Cẩm Đan chia sẻ dân tình
                    lại được phen trầm trồ vì body chuẩn Hoa hậu của gái đẹp 2k2
                    với đôi chân dài miên man, vòng nào ra vòng nấy.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/3/ncamdan19632165029222121346967026527099399104554790n-16226969068352002108157.jpg"
                    alt="Cam Dan"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/3/ncamdan1958799987585743014557056169615325228011738n-16226969068231312630129.jpg"
                    alt="Cam Dan"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/3/ncamdan1949059145101971533511148332749146070707960n-1622696906812709810279.jpg"
                    alt="Cam Dan"
                    note="Vóc dáng xịn xò của Cẩm Đan"
                  />
                  <p></p>
                  <p>
                    Về phần mình, đại gia Đức Huy nhanh tay thả tim sau khi Cẩm
                    Đan đăng ảnh. Hôm 31/5 vừa qua, đại gia Sài thành cũng đăng
                    ảnh ở chiếc bể bơi này và chia sẻ dòng trạng thái ai thấy
                    cũng tò mò: "Không gió thổi, biển làm gì có sóng... Không có
                    em, anh có em khác thôi mà".
                  </p>
                  <p>Bức ảnh từ 3 ngày trước của đại gia Đức Huy</p>

                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/3/duchuy751941261881871827499564973697804630282041717n-1622696906797234544570.jpg"
                    alt="Cam Dan"
                    note=""
                  />
                  <p>Ảnh: Tổng hợp</p>
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
