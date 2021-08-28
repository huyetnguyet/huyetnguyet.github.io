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
"timestamp": '28/08/2021 08:51 AM',
"title": 'Hôm trước bị soi lộ "bé mỡ" khi mặc corset, nay Địch Lệ Nhiệt Ba có màn phục thù ngầu đét, kín đáo mà xịn mịn hơn nhiều',
"description": 'Style lần này của Địch Lệ Nhiệt Ba trông xịn xò hơn hẳn.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/28/23374400812384769432478543129952877572888388n-1630153654584493135419.jpg',
"alt": 'Địch Lệ Nhiệt Ba,sao Trung,sao Hoa ngữ,star style,corset,',
"category": 'stars',
"date": '28/08/2021',
"time": '08:51 AM',
"link": '/hom-truoc-bi-soi-lo-be-mo-khi-mac-corset-nay-dich-le-nhiet-ba-co-man-phuc-thu-ngau-det-kin-dao-ma-xin-min-hon-nhieu',
"zcomponent": 'page_20210828085124',
"filepath": './20210828085124-hom-truoc-bi-soi-lo-be-mo-khi-mac-corset-nay-dich-le-nhiet-ba-co-man-phuc-thu-ngau-det-kin-dao-ma-xin-min-hon-nhieu.js'
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
  'Hôm trước bị soi lộ "bé mỡ" khi mặc corset, nay Địch Lệ Nhiệt Ba có màn phục thù ngầu đét, kín đáo mà xịn mịn hơn nhiều';
const author = "ENCHANTIX WINX,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "28/08/2021 08:51 AM";
const description = "Style lần này của Địch Lệ Nhiệt Ba trông xịn xò hơn hẳn.";
const link =
  "hom-truoc-bi-soi-lo-be-mo-khi-mac-corset-nay-dich-le-nhiet-ba-co-man-phuc-thu-ngau-det-kin-dao-ma-xin-min-hon-nhieu";
const tagparam = [
  "Địch Lệ Nhiệt Ba",
  "sao Trung",
  "sao Hoa ngữ",
  "star style",
  "corset",
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

export default function page_20210828085124() {
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
                      Trong những sự kiện gần đây,{" "}
                      <strong>Địch Lệ Nhiệt Ba</strong> liên tục chiêu đãi khán
                      giả với loạt outfit đủ phong cách, lộng lẫy như công chúa
                      có, mà cá tính, sành điệu cũng có luôn. Một trong những
                      set đồ gây ấn tượng tốt với fan đó là khi cô mix{" "}
                      <strong>corset</strong> với quần baggy và giày mule, điểm
                      xuyết thêm phụ kiện như dây chuyền, khuyên tai, đồng hồ,
                      nhẫn, tất cả đều theo tông màu chủ đạo là camel và vàng
                      đồng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/28/23374400812384769432478543129952877572888388n-1630153654584493135419.jpg"
                      alt="1, Địch Lệ Nhiệt Ba,sao Trung,sao Hoa ngữ,star style,corset,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/28/23502906912384773665811456347917052340841061n-16301536229261121442754.jpg"
                      alt="2, Địch Lệ Nhiệt Ba,sao Trung,sao Hoa ngữ,star style,corset,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/28/22494426112385137165775105701589336221437652n-1630153622864741815127.jpg"
                      alt="3, Địch Lệ Nhiệt Ba,sao Trung,sao Hoa ngữ,star style,corset,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/28/2216447429374744201677224376913663538148261n-1627894665230831668922-1-1627954757547948777311-16301535083001404628356.png"
                      alt="4, Địch Lệ Nhiệt Ba,sao Trung,sao Hoa ngữ,star style,corset,"
                      note=""
                    />

                    <p>
                      Trong giai đoạn đó, Nhiệt Ba để lộ dấu hiệu sụt cân rõ
                      rệt, đơn cử là cánh tay khẳng khiu, vòng một quyến rũ ngày
                      xưa cũng tạm đi vắng. Vì thế, nhiều fan chắc mẩm sẽ soi ra
                      được khoảnh khắc cô nàng ốm nhom, lộ xương, nhưng qua các
                      video chưa chỉnh sửa, người ta lại thấy Nhiệt Ba lộ "bé
                      mỡ" xinh xinh ở sau lưng, nguyên nhân có lẽ stylist đã
                      siết <strong>corset</strong> hơi chật. Vậy là một diện mạo
                      tưởng chừng đã hoàn hảo lại bị chi tiết này phá vỡ, thật
                      là tiếc mà.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Nhưng không sao, Nhiệt Ba đã trở lại và lợi hại hơn xưa.
                      Trong sự kiện livestream mới diễn ra, Nhiệt Ba tiếp tục
                      chọn <strong>corset</strong>, có lẽ đã rút kinh nghiệm nên
                      lần này thay vì mặc không corset, Nhiệt Ba cao tay phối
                      với sơ mi trắng vai bồng, sơ vin cùng quần short bermuda,
                      chân đi giày loafer, kết lại bằng cà vạt đen. Nữ diễn viên
                      còn khéo tạo điểm nhấn màu sắc với lọn tóc highlight xanh
                      coban nổi bật và phụ kiện trái tim bản dày.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/28/24072232512521851552103664084507194385569785n-16301536949762074368827.jpg"
                      alt="5, Địch Lệ Nhiệt Ba,sao Trung,sao Hoa ngữ,star style,corset,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/28/240752791125218524521035722756619204637551n-1630153695073613918857.jpg"
                      alt="6, Địch Lệ Nhiệt Ba,sao Trung,sao Hoa ngữ,star style,corset,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/28/23961497612521853685436785395643525431687689n-16301536945761623305384.jpg"
                      alt="7, Địch Lệ Nhiệt Ba,sao Trung,sao Hoa ngữ,star style,corset,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/28/23988757412521856352103182703591899793719835n-1630153694777442688410.jpg"
                      alt="8, Địch Lệ Nhiệt Ba,sao Trung,sao Hoa ngữ,star style,corset,"
                      note=""
                    />

                    <p>
                      Cuối cùng chúng ta có một{" "}
                      <strong>Địch Lệ Nhiệt Ba</strong> sành điệu, chất chơi thế
                      này đây. Outfit của cô gợi nhớ đến trang phục đi học của
                      những cậu bé con nhà quý tộc châu Âu thời xưa, xem ra Địch
                      Lệ Nhiệt Ba lại chinh phục thành công một phong cách mới
                      nữa rồi. Dù <strong>corset</strong> là món đồ gắn liền với
                      sự quyến rũ, mời gọi của phụ nữ nhưng đâu nhất thiết phải
                      mặc hở mới đẹp đúng không nào? Quan trọng vẫn là hợp với
                      bản thân thôi.
                    </p>
                    <p></p>
                    <p>Ảnh: Sưu tầm</p>
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
