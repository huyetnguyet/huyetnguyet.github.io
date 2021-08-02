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
"timestamp": '29/07/2021 04:26 PM',
"title": 'Căn villa 400m2 có khoảng sân vườn ngập nắng gió, thiết kế đẹp tinh tế, giản đơn đề cao sự "không hoàn hảo"',
"description": 'Căn villa được thiết kế theo phong cách Wabi Sabi, trên tinh thần tôn trọng tự nhiên và hướng tới sự đơn giản, bình yên.',
"src": 'https://kenh14cdn.com/zoom/90_60/203336854389633024/2021/7/27/photo1627382400143-1627382400338253477531.jpg',
"alt": 'khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,',
"category": 'life',
"date": '29/07/2021',
"time": '04:26 PM',
"link": '/can-villa-400m2-co-khoang-san-vuon-ngap-nang-gio-thiet-ke-dep-tinh-te-gian-don-de-cao-su-khong-hoan-hao',
"zcomponent": 'page_20210729162639',
"filepath": './20210729162639-can-villa-400m2-co-khoang-san-vuon-ngap-nang-gio-thiet-ke-dep-tinh-te-gian-don-de-cao-su-khong-hoan-hao.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title =
  'Căn villa 400m2 có khoảng sân vườn ngập nắng gió, thiết kế đẹp tinh tế, giản đơn đề cao sự "không hoàn hảo"';
const author = "HÀ BÍCH NGỌC,";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:26 PM";
const description =
  "Căn villa được thiết kế theo phong cách Wabi Sabi, trên tinh thần tôn trọng tự nhiên và hướng tới sự đơn giản, bình yên.";
const link =
  "can-villa-400m2-co-khoang-san-vuon-ngap-nang-gio-thiet-ke-dep-tinh-te-gian-don-de-cao-su-khong-hoan-hao";
const tagparam = [
  "khoe nhà đẹp",
  "khu đô thị",
  "kiến trúc sư",
  "không gian sinh hoạt",
  "Đồ nội thất",
  "nội thất gỗ",
  "Đồ trang trí",
  "không gian làm việc",
  "phòng chiếu phim",
  "bồn tắm",
  "house n home",
  "villa",
  "biệt thự",
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

export default function page_20210729162639() {
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
                    Căn <strong>villa</strong> này thuộc dự án Park City - Hà
                    Nội với tổng diện tích sử dụng lên đến 400m2, bao gồm cả
                    khoảng sân vườn mang đến nét nhẹ nhàng của thiên nhiên gần
                    gũi. Với thiết kế tổng thể dự án khá tốt, cộng với ưu điểm
                    là khoảng sân phía trước và xung quanh nhà, chủ nhà đã quyết
                    định mua căn villa này ngay lập tức mà không suy nghĩ nhiều.
                  </p>
                  <p>
                    Ngoài ra, dự án <strong>khu đô thị</strong> Park City còn có
                    cơ sở hạ tầng đồng bộ và đầy đủ tiện ích nên rất phù hợp với
                    các gia đình có con nhỏ. Vị trí thuận lợi không quá xa trung
                    tâm cũng tạo điều kiện cho việc di chuyển nhanh chóng, dễ
                    dàng.
                  </p>
                  <p>
                    <strong>Kiến trúc sư</strong> đã chọn phong cách Wabi Sabi
                    để giúp cho căn <strong>villa</strong> có 1 tấm áo giản đơn,
                    không khoa trương nhưng đầy tinh tế. Sản sinh từ Nhật Bản,
                    phong cách này hướng con người tới sự tối giản, bình yên và
                    trân trọng vẻ đẹp không hoàn hảo. Vì vậy, tông màu chính của
                    ngôi nhà là màu gỗ tự nhiên, màu trắng ghi của tường và sự
                    mộc mạc của gạch, đá - tất cả đều hướng tới tinh thần thô
                    mộc và giản đơn của Wabi Sabi.
                  </p>
                  <p>
                    Điểm đắt giá nhất trong ngôi nhà là khoảng thông tầng trong
                    không gian phòng khách - bếp, được điểm xuyến bằng những
                    chiếc mái vòm cong cao và những mảng kính lớn. Thiết kế này
                    giúp lấy sáng cho cả không gian chính, ngồi trong nhà còn có
                    thể nhìn ra khoảng sân đầy nắng và cây xanh để tận hưởng cảm
                    giác thư thả, yên bình. Sofa lớn trong phòng khách có kiểu
                    dáng thấp nên có thể ngả lưng hay lăn lộn một cách thoải
                    mái.
                  </p>
                  <p>
                    Khu vực bếp nổi bật với tone màu xanh cốm. Màu sắc này vừa
                    mang đến cảm giác mát mẻ cho không gian, đồng thời cũng tạo
                    điểm nhấn đẹp cho khu bếp. Vì vậy, phòng khách - bếp là khu
                    vực được đầu tư và tâm đắc nhất trong nhà. Nó hội tụ đủ yếu
                    tố để trở thành <strong>không gian sinh hoạt</strong> chung
                    lý tưởng: vừa chan hoà ánh sáng và nắng gió, lại có trần cao
                    rất rộng và thoải mái.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Không gian phòng ngủ master liên thông với khu vực phòng xem
                    phim để tiện cho việc sinh hoạt và nghỉ ngơi, thư giãn của
                    gia đình. Ở phòng WC master, <strong>bồn tắm</strong> lớn
                    được đặt bên khung cửa sổ bằng kính với những chậu cây xanh
                    để tạo cảm giác thư giãn, thoải mái.
                  </p>
                  <p>
                    Vì Wabi Sabi tôn vinh vẻ đẹp tự nhiên, thô mộc không mài
                    giũa nên hầu như <strong>đồ nội thất</strong> trong nhà đều
                    được làm từ những vật liệu như gỗ mộc, mây tre và đá. Vì
                    vậy, không gian toát lên sự hài hoà, giản đơn nhưng vẫn có
                    sức hấp dẫn riêng có.
                  </p>
                  <p>
                    Với tổng mức đầu tư khoảng 3 tỷ đồng, căn{" "}
                    <strong>villa</strong> được hoàn thành trong vòng 7 tháng,
                    từ khâu thiết kế, thi công cho đến khi đưa vào sử dụng.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/29/z264293487439581008b9ea4efd4c362626e4fa39f2b47-16274918878301518181423.jpg"
                    alt="6, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/500/203336854389633024/2021/7/29/z2642910505455b307c68fc62b7b9cfac65febb3a8a272-1627491886639704237905.jpg"
                    alt="7, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/29/z264291070846697e349a067dfcdcc92aabc4a06620b77-16274918868911400420372.jpg"
                    alt="8, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z2642925164464c9e06606b13e4a95d8dedfeb14abb84c-16274918869591417961107.jpg"
                    alt="9, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z264292516445592f27c78a426e95336efc96db208fca2-16274918869481315839823.jpg"
                    alt="10, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/29/z26429104700546883f21ee0995970549ef8ba2aa35969-1627491886196839594509.jpg"
                    alt="11, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z26429103694570ffcd9cc9eb538bf974ca266c8055291-1627491925136128792829.jpg"
                    alt="12, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z264291053570479b3f695be38dbdaf478783bf407cc68-16274918867111452431331.jpg"
                    alt="13, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z26429103611871cdc1c1a0885b0ecb930916b4bf71b81-16274919251141573711113.jpg"
                    alt="14, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z26429102648583125f4f1e0a41d7eb7830208c900ac59-1627491882946331521655.jpg"
                    alt="15, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z26429105620499c95a18a4f6371ad4f19ae36d371f9cb-16274918867841684585901.jpg"
                    alt="16, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z264291039732411c37345638d0ab2a6e0f35b651c0b82-16274918861041432141469.jpg"
                    alt="17, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z2642910379419e8aa4e570ea32996c7bfdaa092f5c78d-16274918858642117163660.jpg"
                    alt="18, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z2642910379420fcca19707891f958ba62b2fb1d96adc9-1627491886061535632833.jpg"
                    alt="19, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z2642910747509e7a64d1b4cef4a3efc5cbfa732706757-16274918869021555556805.jpg"
                    alt="20, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z26429107777235b6b641e1cce944054e44eec8d7a6c99-1627491886916238805165.jpg"
                    alt="21, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z264291048926924f70e37365bae6e1f47b3ca443203fd-1627491886329333921199.jpg"
                    alt="22, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z2642910545665b2f377c971f5b07568d9f0954c5b605c-16274918867311968763494.jpg"
                    alt="23, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z2642910526298148a51e15992aa36cd3b35f9ec71ba4e-1627491886698787146241.jpg"
                    alt="24, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z2642910845095d7a45b0ab54dfb488a292f9b920c3f2a-1627491886937517519797.jpg"
                    alt="25, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/500/203336854389633024/2021/7/29/z2642910233616b6f6b78c7dc8c8625db75c34bc9348ef-16274918826971436811519.jpg"
                    alt="26, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z26429105541190674681efb940371cf62acd2cf1868c0-16274918867651121847574.jpg"
                    alt="27, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z2642910426683dff01201956084ae253ebcebb1708a10-16274918861241432025735.jpg"
                    alt="28, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z2642910585531c45cb2eee9947dcba72aac37f2a94bb3-1627491886811749444818.jpg"
                    alt="29, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z2642910592970ae57548b8f82a10ac08052f4d84e67d0-1627491886817492581202.jpg"
                    alt="30, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z264291066780467da9a33e92fa141bd8566fa90783c08-16274918868401330572636.jpg"
                    alt="31, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/29/z264291069750329b5830d7858977165e8505a13ec39f2-1627491886860217613037.jpg"
                    alt="32, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/22/khoenhadepcover-16239242083931171524946-16269555950411684659790.jpeg"
                    alt="33, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/22/khoenhadepcover-16239242083931171524946-16269555950411684659790.jpeg"
                    alt="34, khoe nhà đẹp,khu đô thị,kiến trúc sư,không gian sinh hoạt,Đồ nội thất,nội thất gỗ,Đồ trang trí,không gian làm việc,phòng chiếu phim,bồn tắm,house n home,villa,biệt thự,"
                    note=""
                  />
                  <p>Nguồn: LukLak Design VN (ĐVTK) Meta Architecture (ĐVTC)</p>
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
