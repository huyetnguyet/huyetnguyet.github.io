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
"timestamp": '29/06/2021 10:00 PM',
"title": 'Kiếm đủ tiền bạc, cô đào 18+ làm đơn yêu cầu xóa hết phim cũ, sống đời thanh thản',
"description": 'Rika Hoshimi mới đây đã làm đơn yêu cầu xóa hết các bộ phim cũ cô từng tham gia, qua đó gạt bỏ đi quá khứ diễn viên 18+ của mình.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/https://gamek.mediacdn.vn/133514250583805952/2021/6/29/photo-1-1624952515011703862072.jpeg',
"alt": 'IDOL,RIKA HOSHIMI,',
"category": 'images',
"date": '29/06/2021',
"time": '10:00 PM',
"link": '/kiem-du-tien-bac-co-dao-18-lam-don-yeu-cau-xoa-het-phim-cu-song-doi-thanh-than',
"zcomponent": 'page_20210629220029',
"filepath": './20210629220029-kiem-du-tien-bac-co-dao-18-lam-don-yeu-cau-xoa-het-phim-cu-song-doi-thanh-than.js'
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
  "Kiếm đủ tiền bạc, cô đào 18+ làm đơn yêu cầu xóa hết phim cũ, sống đời thanh thản";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 10:00 PM";
const description =
  "Rika Hoshimi mới đây đã làm đơn yêu cầu xóa hết các bộ phim cũ cô từng tham gia, qua đó gạt bỏ đi quá khứ diễn viên 18+ của mình.";
const link =
  "kiem-du-tien-bac-co-dao-18-lam-don-yeu-cau-xoa-het-phim-cu-song-doi-thanh-than";
const tagparam = ["IDOL", "RIKA HOSHIMI"];
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

export default function page_20210629220029() {
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
                    <strong>Rika Hoshimi</strong> sinh năm 1990, là 1 trong
                    những cái tên kỳ cựu tham gia vào ngành giải trí từ năm 2005
                    vơi tư cách 1 người mẫu thần tượng. Sau 6 năm hoạt động, cô
                    bất ngờ chuyển sang làm diễn viên phim người lớn từ 2011 khi
                    gia nhập studio Muteki. Về sau, cô chuyển qua hoạt động với
                    IdeaPocket và Million trước khi tuyên bố giải nghệ vào cuối
                    năm 2016.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/29/photo-1-1624952515011703862072.jpeg"
                    alt="1, IDOL,RIKA HOSHIMI,"
                    note=""
                  />
                  <p>
                    Vào giữa năm 2019, <strong>Rika Hoshimi</strong> trở lại
                    hoạt động trong ngành giải trí, nhưng cô không còn đóng phim
                    18+ nữa. Hiện tại, Rika chủ yếu hoạt động như 1 người mẫu,
                    cũng như thường xuyên xuất hiện trên Youtube và rất thường
                    xuyên giao lưu với người hâm mộ.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-1624953658246399843412.jpeg"
                    alt="2, IDOL,RIKA HOSHIMI,"
                    note=""
                  />
                  <p>
                    Trước đây, cô nàng đã kể rất nhiều về việc bản thân từ bỏ
                    rất nhiều thứ để theo nghề diễn viên 18+. Ban đầu, cô theo
                    nghề người mẫu, thế nhưng quá chán ngán và mệt mỏi, do đó
                    đưa ra quyết định dừng hoạt động trong ngành người mẫu. Tới
                    lúc này, Rika chọn theo đuổi sự nghiệp học vấn và theo học
                    ngành quan hệ công chúng. Cô chuyển về làm việc tại khách
                    sạn và tại đây cô đã nhận được lời mới chuyển sang đóng AV
                    sau đó.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    <strong>Rika Hoshimi</strong> còn "chơi tận" đến mức quyết
                    định cắt luôn quan hệ với gia đình, xóa hết số điện thoại
                    của bạn bè và họ hàng của cô. Thậm chí, đến người bạn trai
                    sau khi biết tin này cũng gọi quyết định của cô là điên rồ,
                    và 2 người chia tay chỉ sau 3 tháng sau đó. Phải đến mãi sau
                    này, cô mới giảng hòa với gia đình trở lại.
                  </p>
                  <p>
                    Mới đây, <strong>Rika Hoshimi</strong> đã đăng tải hình đang
                    làm đơn yêu cầu các công ty phim người lớn trước đó từng làm
                    việc xóa đi các bộ phim 18+ mà cô từng tham gia. Bình
                    thường, các bộ phim này sẽ bị gỡ xuống khỏi hệ thống hoặc
                    dọn khỏi các cửa hàng bán lẻ sau 5 năm kể từ ngày diễn viên
                    giải nghệ. Tuy nhiên, nếu cô gái nào có nhu cầu thì có thể
                    đưa đơn để phim có thể rời khỏi hệ thống sớm hơn so với dự
                    kiến.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-16249536745331681659213.jpeg"
                    alt="3, IDOL,RIKA HOSHIMI,"
                    note=""
                  />
                  <p>
                    {" "}
                    Việc <strong>Rika Hoshimi</strong> chọn xóa kho phim của
                    mình chứng tỏ rằng, cô đã sẵn sàng để đoạn tuyện với nghề
                    diễn viên 18+. Bản thân Rika Hoshimi cũng từng tâm sự rằng
                    cô cũng đã kiếm đủ thu nhập. Thế nên ở thời điểm hiện tại,
                    cô không còn phải lo nghĩ về cuộc sống, và làm việc trong
                    ngành công nghiệp giải trí theo những gì mình thích.
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
