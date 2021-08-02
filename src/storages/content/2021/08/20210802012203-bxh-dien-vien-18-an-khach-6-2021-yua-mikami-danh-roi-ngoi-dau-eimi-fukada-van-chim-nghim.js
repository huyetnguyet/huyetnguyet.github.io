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
"timestamp": '02/08/2021 01:22 AM',
"title": 'BXH diễn viên 18+ ăn khách 6/2021: Yua Mikami "đánh rơi" ngôi đầu, Eimi Fukada vẫn chìm nghỉm?',
"description": 'Việc Yua Mikami bỏ lỡ vị trí top 1 trong tháng 7 vừa qua là điều khá bất ngờ với nhiều người.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-16278770679801776928089.png',
"alt": 'IDOL,YUA MIKAMI,BẢNG XẾP HẠNG,SAIKA KAWAKITA,EIMI FUKADA,',
"category": 'images',
"date": '02/08/2021',
"time": '01:22 AM',
"link": '/bxh-dien-vien-18-an-khach-6-2021-yua-mikami-danh-roi-ngoi-dau-eimi-fukada-van-chim-nghim',
"zcomponent": 'page_20210802012203',
"filepath": './20210802012203-bxh-dien-vien-18-an-khach-6-2021-yua-mikami-danh-roi-ngoi-dau-eimi-fukada-van-chim-nghim.js'
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
  'BXH diễn viên 18+ ăn khách 6/2021: Yua Mikami "đánh rơi" ngôi đầu, Eimi Fukada vẫn chìm nghỉm?';
const author = "DS";
const source = "";
const timestamp = "02/08/2021 01:22 AM";
const description =
  "Việc Yua Mikami bỏ lỡ vị trí top 1 trong tháng 7 vừa qua là điều khá bất ngờ với nhiều người.";
const link =
  "bxh-dien-vien-18-an-khach-6-2021-yua-mikami-danh-roi-ngoi-dau-eimi-fukada-van-chim-nghim";
const tagparam = [
  "IDOL",
  "YUA MIKAMI",
  "BẢNG XẾP HẠNG",
  "SAIKA KAWAKITA",
  "EIMI FUKADA",
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

export default function page_20210802012203() {
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
                    Xứ sở hoa anh đào từ lâu đã được biết đến với việc làm mọi
                    thứ rất chu đáo, cẩn thận và tỉ mỉ. Thậm chí cả ở lĩnh vực
                    thống kê, họ cũng liệt ra đầy đủ danh sách để người hâm mộ
                    có thể xem xét và đánh giá được, đâu là tác phẩm ăn khách
                    nhất trong từng tháng một. Và với lĩnh vực phim người lớn,
                    điều này cũng không hề có ngoại lệ.
                  </p>
                  <p>
                    Đến hẹn lại lên, hệ thống cửa hàng Bookmate tại Nhật Bản đã
                    công bố <strong>bảng xếp hạng</strong> 100 nữ diễn viên ăn
                    khách nhất trong tháng 4/2021. Được biết, cứ vào đầu tháng
                    sau, chuỗi cửa hàng này sẽ lại liệt kê danh sách top 100 lần
                    để người hâm mộ có thể biết được tên tuổi ăn khách nhất
                    trong tháng trước.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-16278770679801776928089.png"
                    alt="1, IDOL,YUA MIKAMI,BẢNG XẾP HẠNG,SAIKA KAWAKITA,EIMI FUKADA,"
                    note=""
                  />
                  <p>
                    Tháng 7 này ghi nhận sự trở lại của{" "}
                    <strong>Saika Kawakita</strong>, cô gái sinh năm 1999. Được
                    biết, Saika đã rời khỏi ngành công nghiệp 18+ được 3 năm và
                    chỉ mới trở lại vào giữa năm 2021 vừa qua. Tuy nhiên, sự trở
                    lại này đã đem đến hiệu ứng tích cực không ngờ. Chỉ trong
                    tuần đầu tiên, Saika đã vượt mặt hàng loạt các tân binh và
                    đàn chị đình đám khác để có được vị trí nhất bảng. Đây là
                    điều đã được nhiều người kỳ vọng từ trước.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/8/2/-16278759757372062698957.jpg"
                    alt="2, IDOL,YUA MIKAMI,BẢNG XẾP HẠNG,SAIKA KAWAKITA,EIMI FUKADA,"
                    note=""
                  />
                  <p>
                    Vị trí thứ 2 thuộc về <strong>Yua Mikami</strong> - người
                    được mệnh danh "<strong>idol</strong> quốc dân". Sau một
                    tuần rời khỏi top 10, Yua đã leo lên trở lại vị trí á quân
                    và chỉ thua <strong>Saika Kawakita</strong> mà thôi. Top 3
                    thuộc về Mei Satsuki, một cái tên mới chỉ nổi lên trong
                    khoảng vài tháng gần đây.
                  </p>
                  <p>
                    Các vị trí tiếp theo lần lượt thuộc những cái tên đã ít
                    nhiều quen mặt với người hâm mộ như Yu Shinoda (5), Tsukasa
                    Aoi (7), Saeko Matsushita (9) và Airi Suzumura (10). Tuy
                    nhiên, vẫn có những tân binh mới được gọi tên trong top 10
                    này Jun Kasui (4), Hana Shirato (6) và Karen Yuzuriha (8).{" "}
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Top 25 cũng lần lượt ghi dấu sự xuất hiện của các cô gái
                    quen thuộc và có được nhiều sự chú ý trong thời gian gần
                    đây. Đây đa phần đều là những cái tên có "thâm niên" nhiều
                    năm và có được lượng người hâm mộ rất lớn, thế nên việc họ
                    có mặt ở top đầu là điều dĩ nhiên. Một số cái tên có thể kể
                    ra như là Rara Anzai (12), Kana Momonogi (16), Riri
                    Nanatsumori (18), Akari Tsumugi (19), Aika Yumeno (21),
                    Mayuki Ito (22), Sakura Momo (23), Minami Hatsukawa (24) và
                    Minami Aizawa (25).
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/8/2/-1627876938249902977535.jpg"
                    alt="3, IDOL,YUA MIKAMI,BẢNG XẾP HẠNG,SAIKA KAWAKITA,EIMI FUKADA,"
                    note=""
                  />
                  <p>
                    Điều khiến nhiều người bất ngờ hơn cả là sự mất tích của{" "}
                    <strong>Eimi Fukada</strong>. Hiện tại, cô nàng chỉ đứng thứ
                    33 trên BXH, một số khá thấp so với thành tích năm ngoái của
                    cô. Dù vậy, Eimi Fukada cũng sẽ sớm trở lại bởi cô đã có gần
                    2 tháng nghỉ không lên hình, dẫn đến việc không ra mắt sản
                    phẩm mới.
                  </p>
                  <p>
                    Được biết, những <strong>bảng xếp hạng</strong> như thế này
                    là thước đo và cũng một phần quan trọng của các giải thưởng
                    phim người lớn trong suốt 1 năm. Các cái tên có doanh số
                    đứng đầu bảng xếp hạng sẽ được đề cử vào các hạng mục quan
                    trọng, qua đó có thể nâng cao danh tiếng và địa vị của bản
                    thân trong lĩnh vực đặc biệt này.
                  </p>
                  <p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
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
