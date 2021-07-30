import React from "react";
import "components/page.css";
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
"timestamp": '29/07/2021 04:09 PM',
"title": 'Monopod – Truyền thuyết về người lùn chỉ có một chân giữa đầy bí ẩn trong sách cổ',
"description": 'Giống người chỉ có một chân giữa Monopod được nhắc đến nhiều trong sách cổ, vậy giống người này có thật hay không?',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/2/sciapode-16252243335561791656975.jpg',
"alt": 'KHÁM PHÁ,THẦN THOẠI,CUỘC SỐNG,LỊCH SỬ,SINH VẬT THẦN THOẠI,',
"category": 'news',
"date": '29/07/2021',
"time": '04:09 PM',
"link": '/monopod-truyen-thuyet-ve-nguoi-lun-chi-co-mot-chan-giua-day-bi-an-trong-sach-co',
"zcomponent": 'page_20210729160956',
"filepath": './20210729160956-monopod-truyen-thuyet-ve-nguoi-lun-chi-co-mot-chan-giua-day-bi-an-trong-sach-co.js'
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
  "Monopod – Truyền thuyết về người lùn chỉ có một chân giữa đầy bí ẩn trong sách cổ";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:09 PM";
const description =
  "Giống người chỉ có một chân giữa Monopod được nhắc đến nhiều trong sách cổ, vậy giống người này có thật hay không?";
const link =
  "monopod-truyen-thuyet-ve-nguoi-lun-chi-co-mot-chan-giua-day-bi-an-trong-sach-co";
const tagparam = [
  "KHÁM PHÁ",
  "THẦN THOẠI",
  "CUỘC SỐNG",
  "LỊCH SỬ",
  "SINH VẬT THẦN THOẠI",
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

export default function page_20210729160956() {
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
                <div className="contentBody">
                  <p>
                    Monopod là giống người trong <strong>thần thoại</strong>,
                    được miêu tả chỉ có một chân duy nhất ở giữa cơ thể, thường
                    được miêu tả trong các cuốn sách cổ.
                  </p>
                  <p>
                    Monopod hay skiapod (σκιάποδες) có nghĩa là một chân. Tên
                    gọi này xuất hiện trong vở kịch The Birds của Aristophanes,
                    được trình diễn lần đầu vào năm 414 trước Công nguyên. Giống
                    người có hình dạng kỳ quái này cũng được miêu tả trong tác
                    phẩm Natural History của Pliny the Elder – một nhà tự nhiên
                    học kiêm triết gia người La Mã, khi ông ghi lại những câu
                    chuyện của các nhà lữ hành kể về những cuộc gặp gỡ hoặc nhìn
                    thấy người Monopod ở Ấn Độ. Pliny nhấn mạnh rằng họ được sử
                    gia kiêm nhà vật lý học người Hy Lạp cổ là Ctesias nhắc đến
                    lần đầu tiên qua cuốn sách Indika (India), một bản ghi chép
                    lại khung cảnh của những người Ba Tư ở Ấn Độ không còn hoàn
                    chỉnh. Pliny miêu tả người Monopod như sau:
                  </p>
                  <p>
                    "Ctesias cũng nói đến một giống người khác nữa, họ còn có
                    tên gọi là Monocoli, những người chỉ có một chân, nhưng có
                    thể nhảy nhót nhanh nhẹn một cách đáng ngạc nhiên. Họ cũng
                    được gọi là Skiapodae, vì có thói quen nằm ngửa, vào những
                    lúc trời quá nắng nóng, và trú dưới bóng chân của mình để
                    tránh nắng."
                  </p>{" "}
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/2/sciapode-16252243335561791656975.jpg"
                    alt="2, KHÁM PHÁ,THẦN THOẠI,CUỘC SỐNG,LỊCH SỬ,SINH VẬT THẦN THOẠI,"
                    note=""
                  />
                  <p>
                    Ngoài ra, còn rất nhiều văn bản hoặc tác phẩm cổ của La Mã
                    và Hy Lạp có đề cập đến người Skiapodae (hay Monopod). Tuy
                    nhiên, không phải lúc nào người ta cũng tin vào việc giống
                    người này thực sự tồn tại trên đời. Thánh Augustine
                    (354-430) đã đề cập đến Skiapode trong tác phẩm The City of
                    God, cuốn 16, chương 8 với tiêu đề mang tính nghi vấn khi
                    một giống người kỳ quái như vậy lại có thể là con cháu của
                    Adam hay các con trai của Noah.
                  </p>
                  <p>
                    Truyền thuyết về Monopod được tiếp tục lưu truyền vào thời
                    Trung Cổ. Tiêu biểu có thể kể đến là những dòng miêu tả của
                    linh mục kiêm học giả Isidore xứ Seville trong tác phẩm
                    Etymologiae:
                  </p>
                  <p>
                    "Người ta nói rằng giống người Sciopod sống ở Ethiopia; họ
                    chỉ có một chân và di chuyển với tốc độ rất nhanh. Người Hy
                    Lạp gọi họ là σκιαπόδες (những người trú trong bóng chân) vì
                    khi trời nóng, họ sẽ nằm ngửa dưới đất và dùng bàn chân
                    ngoại cỡ của mình làm bóng râm."
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/2/nurembergchronicles-strangepeople-umbrellafootxiir-1625224307946307267115.jpg"
                    alt="1, KHÁM PHÁ,THẦN THOẠI,CUỘC SỐNG,LỊCH SỬ,SINH VẬT THẦN THOẠI,"
                    note="Osma Burgo de Beatus, bản đồ của Beatus xứ Liebana"
                  />
                  <p>
                    Thậm chí, trong hình vẽ bản đồ Hereford Mappa Mundi cũng như
                    bản đồ của nhà thần học kiêm địa lý Beatus xứ Liébana thực
                    hiện, còn thể hiện rõ hình vẽ người Sciopod ở bên lề thế
                    giới.
                  </p>
                  <h5>Giải mã bí ẩn về người Monopod</h5>
                  <p>
                    Có nhiều giả thuyết phủ nhận sự tồn tại của người Monopod và
                    đề cập đến một sự nhầm lẫn trong ghi chép của người xưa.
                    Tiêu biểu có thể kể đến những ý kiến sau:
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/2/beatodeliebanaburgodeosma1086-16252246883451114666467.jpg"
                    alt="3, KHÁM PHÁ,THẦN THOẠI,CUỘC SỐNG,LỊCH SỬ,SINH VẬT THẦN THOẠI,"
                    note=""
                  />
                  <p>
                    Theo giáo sư Carl A. P. Ruck (đại học Boston), ý tưởng về
                    người Monopod tại Ấn Độ có thể liên quan đến vị thần Veda
                    Aja Ekapad (vị thần này cũng có liên quan đến hình dạng một
                    chân của thần Shiva).
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Còn nhà lữ hành John xứ Marignolli (1338 – 1353) lại giải
                    thích cặn kẽ hơn, sau khi ông du hành đến Ấn Độ. John phủ
                    nhận việc người Monopod có thật, cũng không có chuyện họ
                    phải trú nắng trong bóng râm của bàn chân. Vì ông miêu tả
                    rằng người Ấn Độ thường ở trần, họ thường mang theo một vật
                    dụng gần giống cái lều nhỏ trên một cái gậy chống, khi gặp
                    trời nắng hoặc mưa sẽ mở ra trú. Thậm chí, ông còn mang được
                    vận dụng đó về Florence.
                  </p>
                  <p>
                    Một ý kiến khác cũng có vẻ hợp lý để giải thích cho Monopod
                    là việc những người chứng kiến hoặc kể lại đã miêu tả phóng
                    đại hình ảnh của các thiền sinh ở Ấn Độ, khi các thiền sinh
                    này thiền trên một chân.
                  </p>
                  <h5>Monopod và dấu ấn trong văn hóa đại chúng</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/2/800px-ekapadashiva-1625224855188952821038.jpg"
                    alt="4, KHÁM PHÁ,THẦN THOẠI,CUỘC SỐNG,LỊCH SỬ,SINH VẬT THẦN THOẠI,"
                    note=""
                  />
                  <p>
                    Dù Monopod chưa được xác định có thực sự tồn tại hay không,
                    thì qua thời gian, truyền thuyết về giống người kỳ lạ này
                    cũng đã trở thành nguồn cảm hứng cho nhiều sáng tác văn học.
                    Người ta có thể bắt gặp Monopod trong tiểu thuyết Chronicles
                    of Narnia của C.S. Lewis, trong Saga Erik The Red của người
                    Iceland, trong tác phẩm Baudolino của nhà văn người Ý
                    Umberto Eco. Gần gũi hơn nữa, Monopod đã trở thành tên gọi
                    cho chân máy ảnh – thiết bị cũng chỉ có một chân đỡ.
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
