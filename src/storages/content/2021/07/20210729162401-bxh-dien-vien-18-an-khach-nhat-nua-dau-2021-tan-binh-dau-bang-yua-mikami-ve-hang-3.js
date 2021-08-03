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
"timestamp": '29/07/2021 04:24 PM',
"title": 'BXH diễn viên 18+ ăn khách nhất nửa đầu 2021: Tân binh đầu bảng, Yua Mikami về hạng 3',
"description": 'Vị trí hạng 3 là một thành tích không hề tệ của người đẹp sở hữu biệt danh "idol quốc dân" trong năm thứ 6 của sự nghiệp.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/25/photo-1-1627176756650960298581.png',
"alt": 'BẢNG XẾP HẠNG,YUA MIKAMI,ICHIKA MATSUMOTO,IDOL,HANA HIMESAKI,',
"category": 'images',
"date": '29/07/2021',
"time": '04:24 PM',
"link": '/bxh-dien-vien-18-an-khach-nhat-nua-dau-2021-tan-binh-dau-bang-yua-mikami-ve-hang-3',
"zcomponent": 'page_20210729162401',
"filepath": './20210729162401-bxh-dien-vien-18-an-khach-nhat-nua-dau-2021-tan-binh-dau-bang-yua-mikami-ve-hang-3.js'
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
  "BXH diễn viên 18+ ăn khách nhất nửa đầu 2021: Tân binh đầu bảng, Yua Mikami về hạng 3";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:24 PM";
const description =
  'Vị trí hạng 3 là một thành tích không hề tệ của người đẹp sở hữu biệt danh "idol quốc dân" trong năm thứ 6 của sự nghiệp.';
const link =
  "bxh-dien-vien-18-an-khach-nhat-nua-dau-2021-tan-binh-dau-bang-yua-mikami-ve-hang-3";
const tagparam = [
  "BẢNG XẾP HẠNG",
  "YUA MIKAMI",
  "ICHIKA MATSUMOTO",
  "IDOL",
  "HANA HIMESAKI",
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

export default function page_20210729162401() {
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
                      Xứ sở hoa anh đào từ lâu đã được biết đến với việc làm mọi
                      thứ rất chu đáo, cẩn thận và tỉ mỉ. Thậm chí cả ở lĩnh vực
                      thống kê, họ cũng liệt ra đầy đủ danh sách để người hâm mộ
                      có thể xem xét và đánh giá được, đâu là tác phẩm ăn khách
                      nhất trong từng tháng một. Và với lĩnh vực phim người lớn,
                      điều này cũng không hề có ngoại lệ.
                    </p>
                    <p>
                      Năm 2021 đã có nhiều sự thay đổi khá bất ngờ, khi hàng
                      loạt cái tên mới leo lên vị trí dẫn đầu{" "}
                      <strong>bảng xếp hạng</strong>. Tuy nhiên, những cái tên
                      quen thuộc vẫn giữ được sức hút của mình khi cũng có những
                      vị trí trong top đầu bảng xếp hạng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/25/photo-1-1627176756650960298581.png"
                      alt="1, BẢNG XẾP HẠNG,YUA MIKAMI,ICHIKA MATSUMOTO,IDOL,HANA HIMESAKI,"
                      note=""
                    />
                    <p>
                      Vị trí đầu tiên thuộc về <strong>Ichika Matsumoto</strong>
                      , người đẹp trẻ tuổi sinh năm 1999. Được biết, cô nàng đã
                      có lần thứ 2 Ichika leo lên được vị trí số 1{" "}
                      <strong>bảng xếp hạng</strong>, vượt qua các đàn chị đình
                      đám khác. Với việc có mặt trong hàng loạt các sản phẩm 18+
                      khác nhau, không khó hiểu vì sao mà Ichika Matsumoto lại
                      ăn khách và được nhiều người biết tới đến thế.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/25/photo-1-1627171088344414945669.png"
                      alt="2, BẢNG XẾP HẠNG,YUA MIKAMI,ICHIKA MATSUMOTO,IDOL,HANA HIMESAKI,"
                      note=""
                    />
                    <p>
                      Cái tên thứ 2 trên <strong>bảng xếp hạng</strong> cũng là
                      một tân binh mới chỉ gia nhập ngành công nghiệp 18+ trong
                      năm 2020 - <strong>Hana Himesaki</strong>. Cô gái trẻ sinh
                      năm 1999 cũng đã có màn bứt phá ngoạn mục để vượt qua hàng
                      loạt đàn chị, nhưng vẫn còn thiếu một chút may mắn để cạnh
                      tranh vị trí quán quân với{" "}
                      <strong>Ichika Matsumoto</strong>.
                    </p>
                    <p>
                      <strong>Yua Mikami</strong> trong năm thứ 3 của sự nghiệp
                      đã có được vị trí thứ 3, một thành tích không hề tệ của
                      người đẹp sở hữu biệt danh "<strong>idol</strong> quốc
                      dân". Hiện tại, Yua không quá tập trung và sự nghiệp AV
                      nữa, nhưng thành tích của cô cho thấy rằng người hâm mộ
                      chưa thể loại cô ra khỏi cuộc đua những cái tên 18+ ăn
                      khách nhất trong năm 2021.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Các vị trí tiếp theo trong <strong>bảng xếp hạng</strong>{" "}
                      là sự pha trộn giữa cả những tân binh và các cựu binh.
                      Đáng chú ý nhât là Kaoru Yasui, dù mới chỉ trình làng đầu
                      năm nay nhưng đã ngay lập tức có vị trí trong top đầu.
                      Himari Kinoshita, Yume Nikaidou và Nene Tanaka lần lượt là
                      những cái tên mới mẻ nhưng ít nhiều cũng đã tạo kịch tính
                      khi cạnh tranh ngang ngửa với các đàn chị.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/25/-1627177050779617645003.jpg"
                      alt="3, BẢNG XẾP HẠNG,YUA MIKAMI,ICHIKA MATSUMOTO,IDOL,HANA HIMESAKI,"
                      note=""
                    />
                    <p>
                      Bên cạnh đó, những cái tên cũ như Yu Shinoda, Riho
                      Fujimori hay Shoko Takahashi vẫn giữ được sức hút, dù đã
                      có nhiều năm hoạt động trong ngành công nghiệp 18+. Các cô
                      gái này đều có lượng fan lớn, nên không quá khó hiểu vì
                      sao sản phẩm của họ vẫn bán rất chạy.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/25/-16271770697151468719056.jpg"
                      alt="4, BẢNG XẾP HẠNG,YUA MIKAMI,ICHIKA MATSUMOTO,IDOL,HANA HIMESAKI,"
                      note=""
                    />
                    <p>
                      Được biết, những <strong>bảng xếp hạng</strong> như thế
                      này là thước đo và cũng một phần quan trọng của các giải
                      thưởng phim người lớn trong dịp cuối năm và đầu năm 2020.
                      Các nữ diễn viên có doanh số đứng đầu bảng xếp hạng sẽ
                      được đề cử vào các hạng mục quan trọng, qua đó có thể nâng
                      cao danh tiếng và địa vị của bản thân trong lĩnh vực phim
                      người lớn.
                    </p>
                    <p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
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
