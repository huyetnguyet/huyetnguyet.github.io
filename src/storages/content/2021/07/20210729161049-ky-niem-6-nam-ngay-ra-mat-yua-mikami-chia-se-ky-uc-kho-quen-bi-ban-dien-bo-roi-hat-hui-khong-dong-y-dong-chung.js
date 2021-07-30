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
"timestamp": '29/07/2021 04:10 PM',
"title": 'Kỷ niệm 6 năm ngày ra mắt, Yua Mikami chia sẻ ký ức khó quên "Bị bạn diễn bỏ rơi, hắt hủi không đồng ý đóng chung"',
"description": 'Những chia sẻ thú vị của Yua Mikami đang thu hút được rất nhiều sự chú ý.',
"src": '',
"alt": 'GÁI XINH,PHIM 18+,CỘNG ĐỒNG MẠNG,AV,PHIM AV,YUA MIKAMI,',
"category": 'images',
"date": '29/07/2021',
"time": '04:10 PM',
"link": '/ky-niem-6-nam-ngay-ra-mat-yua-mikami-chia-se-ky-uc-kho-quen-bi-ban-dien-bo-roi-hat-hui-khong-dong-y-dong-chung',
"zcomponent": 'page_20210729161049',
"filepath": './20210729161049-ky-niem-6-nam-ngay-ra-mat-yua-mikami-chia-se-ky-uc-kho-quen-bi-ban-dien-bo-roi-hat-hui-khong-dong-y-dong-chung.js'
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
  'Kỷ niệm 6 năm ngày ra mắt, Yua Mikami chia sẻ ký ức khó quên "Bị bạn diễn bỏ rơi, hắt hủi không đồng ý đóng chung"';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:10 PM";
const description =
  "Những chia sẻ thú vị của Yua Mikami đang thu hút được rất nhiều sự chú ý.";
const link =
  "ky-niem-6-nam-ngay-ra-mat-yua-mikami-chia-se-ky-uc-kho-quen-bi-ban-dien-bo-roi-hat-hui-khong-dong-y-dong-chung";
const tagparam = [
  "GÁI XINH",
  "PHIM 18+",
  "CỘNG ĐỒNG MẠNG",
  "AV",
  "PHIM AV",
  "YUA MIKAMI",
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

export default function page_20210729161049() {
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
                    Nhắc tới ngành công nghiệp phim <strong>AV</strong> Nhật
                    Bản, chắc chắn đa phần các fan hâm mộ đều sẽ nghĩ ngay tới{" "}
                    <strong>Yua Mikami</strong> - cái tên có lẽ cũng đang là nổi
                    bật nhất trong lĩnh vực này. Thời nào vẫn còn là một tân
                    binh đầy triển vọng nhưng giờ đây nàng hot girl này đã xây
                    chắc ngôi vị top 1 trong ngành của mình và thậm chí còn vừa
                    ra mắt tác phẩm kinh điển kỷ niệm tròn 6 năm ngày ra mắt
                    nữa. Nhân sự kiện này, Yua Mikami cũng vừa thực hiện một bài
                    phỏng vấn và có những phút giây chia sẻ khá thẳng thắn với
                    các fan hâm mộ về một số bí mật thầm kín.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/1/photo-1-16251316325511961405685.jpg"
                    alt="1, GÁI XINH,PHIM 18+,CỘNG ĐỒNG MẠNG,AV,PHIM AV,YUA MIKAMI,"
                    note="Yua Mikami - gương mặt top đầu của ngành công nghiệp AV Nhật Bản"
                  />
                  <p>
                    6 năm, tham gia hơn 70 tác phẩm - con số không phải là quá
                    nhiều khi tính ra mỗi tháng nàng hot girl chỉ cho ra mắt
                    trung bình một bộ phim mới. Tuy nhiên, điều này kể ra cũng
                    khá tích cực khi mà lịch trình của{" "}
                    <strong>Yua Mikami</strong> vốn rất bận rộn và gần như ở
                    thời điểm hiện tại, đóng <strong>phim 18+</strong> đang chỉ
                    đóng vai trò thứ yếu trong sự nghiệp của cô nàng. Được đánh
                    giá cao cả về tài sắc, nhưng ít ai ngờ được, Yua Mikami còn
                    từng bị bạn diễn bỏ rơi, chửi bới thậm tệ đồng thời bỏ luôn
                    vai diễn và tuyên bố không muốn hợp tác với cô nàng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/1/-16251318254321693389308.jpg"
                    alt="2, GÁI XINH,PHIM 18+,CỘNG ĐỒNG MẠNG,AV,PHIM AV,YUA MIKAMI,"
                    note="Xinh đẹp như Yua Mikami"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/1/photo-1-1625131869822717204654.jpg"
                    alt="3, GÁI XINH,PHIM 18+,CỘNG ĐỒNG MẠNG,AV,PHIM AV,YUA MIKAMI,"
                    note="Nhưng cũng từng có lúc gặp phải trường hợp bị bạn diễn hắt hủi"
                  />
                  <p>
                    Cũng trong buổi chia sẻ này, nàng hot girl đồng thời tiết lộ
                    thêm một sự thật khá ngược đời. Đó là đóng càng lâu, thù lao
                    cho mỗi tập phim của <strong>Yua Mikami</strong> càng giảm
                    xuống, tỷ lệ nghịch với độ nổi tiếng của cô nàng. Nghe qua
                    thì có vẻ vô lý phải không nào, nhưng như Yua chia sẻ, đa số
                    các diễn viên đều sẽ nhận mức thù lao cao nhất cho bộ phim
                    debut của họ, và sau đó số tiền sẽ giảm dần mà chỉ có lương
                    cứng tăng lên thôi. Tất nhiên đây là với các diễn viên
                    chuyên nghiệp như Yua, chứ không phải các cô nàng hoạt động
                    bán thời gian và coi đóng phim <strong>AV</strong> chỉ là
                    công việc phụ, không có công ty quản lý.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/1/photo-1-16251320014151927532139.jpg"
                    alt="4, GÁI XINH,PHIM 18+,CỘNG ĐỒNG MẠNG,AV,PHIM AV,YUA MIKAMI,"
                    note="Yua Mikami chia sẻ tiền lương cho bộ phim đầu đủ giúp cô nàng mua hai căn nhà ở trung tâm Tokyo"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/1/photo-1-16251320087951309671479.jpg"
                    alt="5, GÁI XINH,PHIM 18+,CỘNG ĐỒNG MẠNG,AV,PHIM AV,YUA MIKAMI,"
                    note="Nhưng những bộ phim sau thì thù lao luôn giảm dần"
                  />
                  <p>
                    Được đặt câu hỏi về tổng thu nhập ở thời điểm hiện tại,{" "}
                    <strong>Yua Mikami</strong> chứng minh mình không hề "ngây
                    thơ" khi chỉ cười và từ chối trả lời. Tuy nhiên, với việc
                    đang sở hữu kênh TikTok gần 2 triệu follow, lượng subs trên
                    YouTube cũng đã quá 550.000 trong khi Instagram thậm chí còn
                    có tới gần 3 triệu người theo dõi, cộng thêm thương hiệu
                    quần áo và bao cao su của riêng mình, chỉ tính riêng số tiền
                    mà Yua Mikami kiếm được từ đây mỗi tháng, chưa cần phải đóng
                    phim cũng đủ nâng cô nàng lên hàng ngũ những triệu phú rồi.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/1/photo-1-1625132172983123709338.jpg"
                    alt="6, GÁI XINH,PHIM 18+,CỘNG ĐỒNG MẠNG,AV,PHIM AV,YUA MIKAMI,"
                    note="Yua Mikami sở hữu một khối tài sản khổng lồ"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/1/photo-1-1625132181031641110079.jpg"
                    alt="7, GÁI XINH,PHIM 18+,CỘNG ĐỒNG MẠNG,AV,PHIM AV,YUA MIKAMI,"
                    note="Cô nàng có nguồn thu từ rất nhiều hoạt động"
                  />
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
