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
"timestamp": '29/07/2021 04:12 PM',
"title": 'Sau loạt ảnh hở bạo gây tranh cãi, "nữ tướng Natalya" nhiều lần bị đại gia giấu mặt gạ làm sugar baby',
"description": 'Được đại gia hứa chu cấp tiền mỗi tháng, cô nàng coser nữ tướng Natalya không ngại “cà khịa” đáp trả “người môi giới”.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-16254538383201763302749.jpg',
"alt": 'COSER,LIÊN QUÂN MOBILE,TƯỚNG NATALYA,SUGAR BABY,DADDY,',
"category": 'images',
"date": '29/07/2021',
"time": '04:12 PM',
"link": '/sau-loat-anh-ho-bao-gay-tranh-cai-nu-tuong-natalya-nhieu-lan-bi-dai-gia-giau-mat-ga-lam-sugar-baby',
"zcomponent": 'page_20210729161209',
"filepath": './20210729161209-sau-loat-anh-ho-bao-gay-tranh-cai-nu-tuong-natalya-nhieu-lan-bi-dai-gia-giau-mat-ga-lam-sugar-baby.js'
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
  'Sau loạt ảnh hở bạo gây tranh cãi, "nữ tướng Natalya" nhiều lần bị đại gia giấu mặt gạ làm sugar baby';
const author = "Kayle";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:12 PM";
const description =
  "Được đại gia hứa chu cấp tiền mỗi tháng, cô nàng coser nữ tướng Natalya không ngại “cà khịa” đáp trả “người môi giới”.";
const link =
  "sau-loat-anh-ho-bao-gay-tranh-cai-nu-tuong-natalya-nhieu-lan-bi-dai-gia-giau-mat-ga-lam-sugar-baby";
const tagparam = [
  "COSER",
  "LIÊN QUÂN MOBILE",
  "TƯỚNG NATALYA",
  "SUGAR BABY",
  "DADDY",
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

export default function page_20210729161209() {
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
                      Từng gây “bão" fan <strong>Liên Quân Mobile</strong> khi
                      cosplay nữ <strong>tướng Natalya</strong> siêu quyến rũ
                      với khuôn ngực “ngồn ngộn", Lê Ngọc Như khiến cho anh em
                      game thủ không thể không chú ý.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-16254538383201763302749.jpg"
                      alt="1, COSER,LIÊN QUÂN MOBILE,TƯỚNG NATALYA,SUGAR BABY,DADDY,"
                      note=""
                    />
                    <p>
                      Chưa hết, thời gian qua, Ngọc Như còn khiến fan của mình
                      đứng ngồi không yên với loạt ảnh hở bạo gây tranh cãi. Tuy
                      tạo dáng có phần nhạy cảm nhưng không thể phủ định rằng,
                      “nữ tướng” có ngoại hình khá “mlem”, vòng eo đáng mơ ước,
                      vóc dáng thon gọn, quyến rũ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-1625453840182181948812.jpg"
                      alt="2, COSER,LIÊN QUÂN MOBILE,TƯỚNG NATALYA,SUGAR BABY,DADDY,"
                      note=""
                    />
                    <p>
                      Có lẽ việc thay đổi phong cách 180 độ này khiến cô nàng vô
                      tình trở thành đích ngắm của những tay săn “
                      <strong>sugar baby</strong>”. Bằng chứng là mới đây, đăng
                      tải hình ảnh loạt tin nhắn từ “người môi giới”, nàng hot
                      girl này thể hiện sự bức xúc khi nhận được nhiều lời đề
                      nghị từ các đại gia giấu mặt.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-1625453930565938543993-1625453970545755493282.jpg"
                      alt="3, COSER,LIÊN QUÂN MOBILE,TƯỚNG NATALYA,SUGAR BABY,DADDY,"
                      note=""
                    />
                    <p>
                      Theo đó, Ngọc Như được đặt vấn đề: “Em muốn quen sếp chị
                      không, quen xa, sếp chị không đẹp trai”, cô nàng nhanh
                      chóng trả lời đậm tính “cà khịa” rằng: “Thế chị bảo sếp
                      chị dùng tiền đập mặt cho đẹp trai rồi tính tiếp ạ”, đồng
                      thời bơ đi những câu chat của người trợ lý mặc cho người
                      này kiên nhẫn “5 lần 7 lượt” tiếp tục đặt vấn đề, hứa chu
                      cấp cho nàng mẫu nóng bỏng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-1625454053267737357184.jpg"
                      alt="4, COSER,LIÊN QUÂN MOBILE,TƯỚNG NATALYA,SUGAR BABY,DADDY,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Không chịu được sự phiền phức, “nữ{" "}
                      <strong>tướng Natalya</strong>” quyết định chụp lại màn
                      hình, công khai danh tính người trợ lý và đoạn hội thoại
                      cùng dòng chú thích: “Ai có nhu cầu cần sugar{" "}
                      <strong>daddy</strong> thì liên hệ Facebook chị này nhé
                      ạ,. Chứ mình thì mình thừa sugar rồi, rất là mệt”.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-16254540642521977410660.jpg"
                      alt="5, COSER,LIÊN QUÂN MOBILE,TƯỚNG NATALYA,SUGAR BABY,DADDY,"
                      note=""
                    />
                    <p>
                      Là mẫu ảnh, <strong>coser</strong> có thể tự kiếm không ít
                      tiền từ công việc của mình, tự chủ về tài chính là điều mà
                      cô nàng xinh đẹp này có thể đảm bảo được. Với sự cá tính
                      của mình, Ngọc Như cứng rắn, quyết tâm theo đuổi quan điểm
                      và lối sống chủ động của bản thân.
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
