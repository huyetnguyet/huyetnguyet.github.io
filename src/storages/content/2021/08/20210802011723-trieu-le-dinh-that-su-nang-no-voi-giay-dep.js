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
"timestamp": '02/08/2021 01:17 AM',
"title": 'Triệu Lệ Dĩnh thật sự "nặng nợ" với giày dép!',
"description": 'Vốn có tạng người nhỏ bé, đặc biệt là đôi chân nhỏ nên Triệu Lệ Dĩnh cũng gặp nhiều khó khăn khi chọn giày dép.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/photo-1-16272214927271347365146-1627272206890982067480-16278016114931281461667.jpeg',
"alt": 'triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,',
"category": 'stars',
"date": '02/08/2021',
"time": '01:17 AM',
"link": '/trieu-le-dinh-that-su-nang-no-voi-giay-dep',
"zcomponent": 'page_20210802011723',
"filepath": './20210802011723-trieu-le-dinh-that-su-nang-no-voi-giay-dep.js'
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
const title = 'Triệu Lệ Dĩnh thật sự "nặng nợ" với giày dép!';
const author = "ENCHANTIX WINX,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "02/08/2021 01:17 AM";
const description =
  "Vốn có tạng người nhỏ bé, đặc biệt là đôi chân nhỏ nên Triệu Lệ Dĩnh cũng gặp nhiều khó khăn khi chọn giày dép.";
const link = "trieu-le-dinh-that-su-nang-no-voi-giay-dep";
const tagparam = [
  "triệu lệ dĩnh",
  "sao Trung",
  "sao Hoa ngữ",
  "star style",
  "giày cao gót",
  "boot",
  "sao mặc gì",
  "giày rộng",
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

export default function page_20210802011723() {
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
                    Nhiều khi, một đôi giày không phù hợp ảnh hưởng rất nhiều
                    đến diện mạo. Nói có sách, mách có chứng, những lần "giày đi
                    đường giày, người đi đường người" dưới đây của{" "}
                    <strong>Triệu Lệ Dĩnh</strong> chính là ví dụ.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/photo-1-16272214927271347365146-1627272206890982067480-16278016114931281461667.jpeg"
                    alt="1, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <p>
                    Lần xuất hiện gần đây tại sự kiện triển lãm của Dior,{" "}
                    <strong>Triệu Lệ Dĩnh</strong> xuất hiện với bộ váy dài
                    trang nhã và đôi <strong>giày cao gót</strong> mũi nhọn màu
                    nude. Tuy vậy, khi zoom cận cảnh, fan lại phát hiện ra đôi
                    giày của nữ diễn viên còn dư một khoảng ở phía sau nên bông
                    đùa có khi Triệu Lệ Dĩnh mượn giày của mẹ mang tạm chăng?
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/base64-1627273000120443301854-162780161141754046964.png"
                    alt="2, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <p>
                    Lần khác, "Dĩnh bảo" gây sốt với tạo hình xinh đẹp tựa tiên
                    nữ, đôi giày dù cao đấy nhưng màu sắc vẫn rất hài hòa với
                    tổng thể. Nhìn chung, mọi thứ vẫn ổn cho đến khi cô nàng di
                    chuyển, đôi sandal cao chót vót rõ ràng là không vừa với đôi
                    chân nhỏ nhắn của cô một chút nào
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/photo-1-1618576808011252294212-1627801612332256851040.jpg"
                    alt="3, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <p>
                    Vốn có dáng người nhỏ nhắn nên{" "}
                    <strong>Triệu Lệ Dĩnh</strong> hay mượn những mẫu{" "}
                    <strong>giày cao gót</strong> để cải thiện nhược điểm, nhưng
                    cô lại hay sa vào những mẫu giày có kích thước quá khổ với
                    chân, thành ra vừa khiến di chuyển khó khăn, vừa khiến tổng
                    thể bị trừ mất mấy điểm
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/dinh-1618623079256-1627801612414833785484.gif"
                    alt="4, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <p>
                    Đó là còn chưa kể mang giày không đúng kích cỡ chân sẽ làm
                    tăng nguy cơ bị trẹo hay trật chân, dù nặng hay nhẹ cũng đều
                    ảnh hưởng đến sức khỏe của cô nàng
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/base64-16278036525631911541534.png"
                    alt="5, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <p>
                    Fan cũng không lạ gì với những đôi giày đế dày cộp thế này
                    của <strong>Triệu Lệ Dĩnh</strong>, nhìn cô bước đi lênh
                    khênh trên những đôi giày này mà ai nấy cũng thót tim, cứ sợ
                    cô trật chân rồi vấp ngã thôi
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/base64-16278036096201276220147.png"
                    alt="6, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <p>
                    Tuy nhiên, có vẻ bản thân <strong>Triệu Lệ Dĩnh</strong> rất
                    có chấp niệm với những kiểu giày to bự, hầm hố, chẳng hạn
                    như đôi combat <strong>boot</strong> màu đen này. Rõ ràng là
                    đang mặc váy, làm tóc công chúa nhưng cô lại diện đôi giày
                    không mấy liên quan, khiến tổng thể rời rạc hẳn
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Nữ diễn viên cũng nhiều lần diện những mẫu combat{" "}
                    <strong>boot</strong> với kiểu dáng tương tự trên sóng
                    truyền hình, tiếc là độ hầm hố, bụi phủi của những đôi giày
                    này lại không thể giúp <strong>Triệu Lệ Dĩnh</strong> trở
                    nên ngầu hơn mà còn khiến cơ thể cô mất cân đối
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/17d208328e01403ea307232dc57449-3138-6058-1592551958-16278016131251090453196.jpg"
                    alt="7, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <p>
                    Đôi chân "cò hương", quá mảnh khảnh lại càng lộ rõ mỗi khi
                    cô diện quần ngắn và mang combat boot
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/photo-3-15940080234111003170926-1627801613245459071488.jpeg"
                    alt="8, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <p>
                    Sneaker cũng vậy luôn, dù có đổi kiểu giày nào đi chăng nữa
                    thì <strong>Triệu Lệ Dĩnh</strong> vẫn rất mê những mẫu có
                    kích cỡ quá rộng so với vóc dáng của cô
                  </p>

                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/1448645612-trieuledinhlang-saoeva-6--1627801612959102277400.jpg"
                    alt="9, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/trieu-le-dinh-dep-khong-goc-chet-sau-tin-don-16278016124381084897234.jpeg"
                    alt="10, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/trieuledinh1521777883width600height914-d9ad9459-16278016121332091316501.jpg"
                    alt="11, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/07e1e29df23edc57865496f49cc98452-16278016133342029911718.jpg"
                    alt="12, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/c4a6e73621c49c5e4e9eb8695387e109-162780161332892874225.png"
                    alt="13, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/dinh-2-1600394419718-16278016129642100981157.jpg"
                    alt="14, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/1616372732127trieu-le-dinh-dep-khong-goc-chet-sau-tin-don-16278016124341115207287.jpeg"
                    alt="15, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/11687677110094993861794922775856055993809899n-15966134097971119436375-16278016130512060912959.jpg"
                    alt="16, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/bat-chap-camera-chup-len-doi-chan-cua-trieu-le-din-1-16278016124491730337455.jpg"
                    alt="17, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/ce0e6202-ae1f-4122-adaf-b7f54dbd3b8c-1627801611502618722724.jpg"
                    alt="18, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/trieu-le-dinh-mac-quan-jeans-ong-rong-zhaoliyingfanpage-16278016117091605807030.jpg"
                    alt="19, triệu lệ dĩnh,sao Trung,sao Hoa ngữ,star style,giày cao gót,boot,sao mặc gì,giày rộng,"
                    note=""
                  />

                  <p>Ảnh: Sưu tầm</p>
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
