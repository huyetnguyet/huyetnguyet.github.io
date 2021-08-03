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
"timestamp": 07/06/2021 10:39 AM",
"title": Diện váy xẻ ngực sâu táo bạo, Dương Mịch khiến 'người tình' Hứa Khải bối rối, không dám nhìn ngay trên sân khấu",
"description": Rõ ràng rất thân thiết với nhau trên phim trường nhưng Hứa Khải tỏ ra xa cách với Dương Mịch tại sự kiện hôm nay.",
"src": ",
"alt": Duong Mich, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, ",
"category": news",
"date": 07/06/2021",
"time": 10:39 AM",
"link": "/dien-vay-xe-nguc-sau-tao-bao-duong-mich-khien-nguoi-tinh-hua-khai-boi-roi-khong-dam-nhin-ngay-tren-san-khau",
"zcomponent": page_20210607103935",
"filepath": ./20210607103935-dien-vay-xe-nguc-sau-tao-bao-duong-mich-khien-nguoi-tinh-hua-khai-boi-roi-khong-dam-nhin-ngay-tren-san-khau.js"
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
  "Diện váy xẻ ngực sâu táo bạo, Dương Mịch khiến 'người tình' Hứa Khải bối rối, không dám nhìn ngay trên sân khấu";
const author = "NHÃ AN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "07/06/2021 10:39 AM";
const description =
  "Rõ ràng rất thân thiết với nhau trên phim trường nhưng Hứa Khải tỏ ra xa cách với Dương Mịch tại sự kiện hôm nay.";
const link =
  "dien-vay-xe-nguc-sau-tao-bao-duong-mich-khien-nguoi-tinh-hua-khai-boi-roi-khong-dam-nhin-ngay-tren-san-khau";
const tagparam = [
  "duong-mich",
  "sao-hoa-ngu",
  "my-nhan-hoa-ngu",
  "nhan-sac-my-nhan-hoa-ngu",
  "voc-dang-my-nhan-hoa-ngu",
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

export default function page_20210607103935() {
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
                      Ngày hôm nay (7/6), sự kiện Thập Quang Đại Thưởng đã chính
                      thức được tổ chức, chứng kiến màn đổ bộ cực hot của dàn
                      sao đình đám xứ Trung. Netizen xứ Trung có dịp xuýt xoa
                      với tạo hình cực kỳ sexy và không kém phần táo bạo của
                      Dương Mịch khi cô nàng diện chiếc váy cắt cúp xẻ ngực sâu,
                      khoe visual và vóc dáng nổi bật.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230571645471638897342.jpg"
                      alt="Duong Mich, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, "
                      note="Cô nàng 'đốt mắt' dân tình với màn thả dáng ấn tượng"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230572341301297509824.jpg"
                      alt="Duong Mich, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230571848921274439613.jpg"
                      alt="Duong Mich, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, "
                      note=""
                    />
                    <p>
                      Có vẻ như tạo hình này của mỹ nhân Tam Sinh Tam Thế đã
                      khiến cho Hứa Khải có phần ngượng ngùng và bối rối. Xuất
                      hiện chung tại sân khấu để tuyên truyền cho Định Luật Tình
                      Yêu 80/20, Hứa Khải giữ khoảng cách, thậm chí không dám
                      nhìn thẳng vào Dương Mịch. Anh chàng lảng tránh ánh mắt
                      một cách nhanh chóng.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/006mrh1mgy1gr9sfz4e5dj31880p6wl7-16230576272891804916351.jpg"
                      alt="Duong Mich, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, "
                      note="Anh chàng quả thật khá bối rối khi đứng cạnh đàn chị"
                    />
                    <p>
                      Những giây phút có phần gượng gạo của "cặp đôi màn ảnh"
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/7/0023hfkbgy1gr9roktdc4j60u0190jxc02-16230575075621302658755.jpg"
                      alt="Duong Mich, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, "
                      note="Mãi tới lúc phải xuống sân khấu, cả hai mới có hành động tương tác thân mật 1 chút"
                    />
                    <p>
                      Đáng chú ý, trên phim trường, cả Dương Mịch và Hứa Khải
                      đều rất thân thiết, thường xuyên trêu đùa và không thiếu
                      những hành động quan tâm tới nhau. Thậm chí, thời gian gần
                      đây, còn có tin đồn cho hay Dương Mịch và đàn em kém 6
                      tuổi đang hẹn hò.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/008bv6lhly1gr9sv93rzsj30hs0ohmys-16230576027101839340487.jpg"
                      alt="Duong Mich, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, "
                      note="Những bức ảnh trên phim trường của cặp đôi"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/008bv6lhly1gr9sv9cjkyj30hs0ppwfq-1623057602837752161622.jpg"
                      alt="Duong Mich, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/006mrh1mgy1gr9snbcoplj30u00u0woh-1623057602963976254185.jpg"
                      alt="Duong Mich, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, "
                      note=""
                    />
                    <p>Nguồn: Weibo</p>
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
