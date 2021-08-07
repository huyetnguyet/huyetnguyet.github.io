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
"timestamp": '07/08/2021 03:45 PM',
"title": 'Xếp hạng các bộ phim thuộc Fast and Furious saga, vẫn chưa cái tên nào vượt qua được phần 7 huyền thoại',
"description": '"Fast and Furious" - Quá nhanh quá nguy hiểm là 1 trong những thương hiệu phim đắt khách nhất trên màn ảnh thế giới.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-16283042338841885128623.jpg',
"alt": 'FAST AND FURIOUS,HOBBS AND SHAW,THE FAST SAGA,FAST & FURIOUS,THE FAST AND THE FURIOUS,QUÁ NHANH QUÁ NGUY HIỂM,',
"category": 'news',
"date": '07/08/2021',
"time": '03:45 PM',
"link": '/xep-hang-cac-bo-phim-thuoc-fast-and-furious-saga-van-chua-cai-ten-nao-vuot-qua-duoc-phan-7-huyen-thoai',
"zcomponent": 'page_20210807154540',
"filepath": './20210807154540-xep-hang-cac-bo-phim-thuoc-fast-and-furious-saga-van-chua-cai-ten-nao-vuot-qua-duoc-phan-7-huyen-thoai.js'
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
  "Xếp hạng các bộ phim thuộc Fast and Furious saga, vẫn chưa cái tên nào vượt qua được phần 7 huyền thoại";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "07/08/2021 03:45 PM";
const description =
  '"Fast and Furious" - Quá nhanh quá nguy hiểm là 1 trong những thương hiệu phim đắt khách nhất trên màn ảnh thế giới.';
const link =
  "xep-hang-cac-bo-phim-thuoc-fast-and-furious-saga-van-chua-cai-ten-nao-vuot-qua-duoc-phan-7-huyen-thoai";
const tagparam = [
  "FAST AND FURIOUS",
  "HOBBS AND SHAW",
  "THE FAST SAGA",
  "FAST & FURIOUS",
  "THE FAST AND THE FURIOUS",
  "QUÁ NHANH QUÁ NGUY HIỂM",
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

export default function page_20210807154540() {
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
                      Nếu tính cả <strong>Hobbs and Shaw</strong>,{" "}
                      <strong>Fast and Furious</strong> saga hiện có tới 10
                      phim. Vậy đâu là bộ phim thành công nhất của thương hiệu
                      này? Theo số liệu từ Box Office Mojo, đây là xếp hạng các
                      bộ phim Fast and Furious dựa trên số liệu doanh thu toàn
                      cầu.
                    </p>
                    <h5>
                      10. <strong>The Fast and The Furious</strong>: Tokyo Drift
                      ($ 158,964,610){" "}
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-16283042338841885128623.jpg"
                      alt="1, FAST AND FURIOUS,HOBBS AND SHAW,THE FAST SAGA,FAST & FURIOUS,THE FAST AND THE FURIOUS,QUÁ NHANH QUÁ NGUY HIỂM,"
                      note=""
                    />
                    <p>
                      Tokyo Drift cho đến nay là bộ phim{" "}
                      <strong>Fast and Furious</strong> có doanh thu thấp nhất,
                      bao gồm cả thị trường nội địa và tổng thu nhập toàn cầu.
                      Có thể đây là lý do khiến loạt phim này bắt đầu thay đổi
                      từ một bộ phim hành động gay cấn sang lấy trọng tâm là đua
                      xe.{" "}
                    </p>
                    <h5>9. The Fast and The Furious ($ 207,283,925)</h5>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-16283042985091387347392.jpg"
                      alt="2, FAST AND FURIOUS,HOBBS AND SHAW,THE FAST SAGA,FAST & FURIOUS,THE FAST AND THE FURIOUS,QUÁ NHANH QUÁ NGUY HIỂM,"
                      note=""
                    />
                    <p>
                      Đối với một bộ phim phát hành năm 2001, tổng doanh thu
                      toàn cầu hơn 200 triệu đô la với 100 triệu đến từ thị
                      trường nội địa Hoa Kỳ là một con số rất tốt.{" "}
                    </p>
                    <h5>8. 2 Fast 2 Furious ($ 236,350,661) </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-1628304625973799272449.jpg"
                      alt="3, FAST AND FURIOUS,HOBBS AND SHAW,THE FAST SAGA,FAST & FURIOUS,THE FAST AND THE FURIOUS,QUÁ NHANH QUÁ NGUY HIỂM,"
                      note=""
                    />
                    <p>
                      2 Fast 2 Furious là 1 trường hợp rất thú vị. Bộ phim này
                      không có sự tham gia của nam diễn viên Vin Diesel, nó cũng
                      có điểm toàn cầu cao hơn{" "}
                      <strong>The Fast and The Furious</strong>. Doanh thu quốc
                      tế của 2 Fast là $ 109,195,760; trong khi của The Fast and
                      The Furious là $ 62,750,000. Tuy nhiên, doanh thu nội địa
                      Mỹ của 2 Fast 2 Furious là 127,154,901 USD lại thấp hơn so
                      với 144,533,925 USD của The Fast and The Furious.
                    </p>
                    <p>
                      Tức là doanh thu quốc tế của 2 Fast and 2 Furious đã nâng
                      tổng doanh thu toàn cầu của nó vượt xa bộ phim đầu tiên.{" "}
                    </p>
                    <h5>
                      7. <strong>Fast & Furious</strong> ($ 360,364,265){" "}
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-16283048947581441292021.jpg"
                      alt="4, FAST AND FURIOUS,HOBBS AND SHAW,THE FAST SAGA,FAST & FURIOUS,THE FAST AND THE FURIOUS,QUÁ NHANH QUÁ NGUY HIỂM,"
                      note=""
                    />
                    <p>
                      Bộ phim này một lần nữa cho thấy sự hợp tác giữa Brian
                      O'Conner và Dom Toretto. Sau khi trước đó trong phần hai
                      Toretto không xuất hiện, và trong phần ba Toretto chỉ làm
                      khách mời, còn Brian thậm chí không xuất hiện.
                    </p>
                    <p>
                      Doanh thu của <strong>Fast & Furious</strong> có thể không
                      quá đặc biệt như top 5, nhưng ở thời điểm mới ra mắt, con
                      số này khá ổn, vượt qua cả ba bộ phim trước đó.{" "}
                    </p>
                    <h5>6. Fast Five ($ 626,137,675) </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-16283050201181871860469.jpg"
                      alt="5, FAST AND FURIOUS,HOBBS AND SHAW,THE FAST SAGA,FAST & FURIOUS,THE FAST AND THE FURIOUS,QUÁ NHANH QUÁ NGUY HIỂM,"
                      note=""
                    />
                    <p>
                      Doanh thu của Fast Five vượt trội hơn so với doanh thu của{" "}
                      <strong>Fast & Furious</strong> và các phim trước đó. Một
                      trong những điểm nổi bật là bộ phim này đã rất bùng nổ khi
                      phát hành ở Mỹ. Doanh thu nội địa của nó là $ 209,837,675;
                      khoảng 33,5% tổng thu nhập toàn cầu. Nếu chỉ tính thu nhập
                      tại Mỹ, kỷ lục của Fast Five thậm chí còn chưa bị{" "}
                      <strong>Hobbs and Shaw</strong> hay{" "}
                      <strong>Fast and Furious</strong> 9 vượt qua.{" "}
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>
                      5. <strong>Fast and Furious</strong> 9 ($ 643,047,480)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-16283051667751243279496.jpg"
                      alt="6, FAST AND FURIOUS,HOBBS AND SHAW,THE FAST SAGA,FAST & FURIOUS,THE FAST AND THE FURIOUS,QUÁ NHANH QUÁ NGUY HIỂM,"
                      note=""
                    />
                    <p>
                      Phần phim mới nhất này ế ẩm hơn một chút so với phần phim
                      thứ tám hoặc thứ bảy. Doanh thu nội địa ở thị trường Mỹ
                      thậm chí còn khá yếu, ở mức $ 169,277,480; thấp hơn cả
                      Hobbs và Shaw.
                    </p>
                    <p>
                      Một trong những nguyên nhân chính có lẽ là do ảnh hưởng
                      của đại dịch COVID-19. Trận đại dịch trước đó đã khiến bộ
                      phim này bị hoãn chiếu đến năm 2021, rồi đến cả khi công
                      chiếu, doanh thu phòng vé Mỹ vẫn ế ẩm. Tuy nhiên, con số
                      này có thể còn tăng thêm trong tương lai.
                    </p>
                    <h5>
                      4. <strong>Hobbs and Shaw</strong> ($ 759,056,935){" "}
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-16283052734321862047898.jpg"
                      alt="7, FAST AND FURIOUS,HOBBS AND SHAW,THE FAST SAGA,FAST & FURIOUS,THE FAST AND THE FURIOUS,QUÁ NHANH QUÁ NGUY HIỂM,"
                      note=""
                    />
                    <p>
                      Đối với một bộ phim spinoff, nơi mà ngay cả gia đình của
                      Dom Toretto cũng không xuất hiện, thì Hobbs và Shaw được
                      cho là khá thành công. Thu nhập nội địa Mỹ của bộ phim là
                      $ 173,956,935. Nhưng điều thú vị là lợi nhuận quốc tế của
                      bộ phim lên tới 585,100,000 đô la. Tức là 77% doanh thu
                      toàn cầu của Hobbs và Shaw đến từ các thị trường quốc tế.{" "}
                    </p>
                    <h5>
                      3. <strong>Fast and Furious</strong> 6 ($ 788,679,850){" "}
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-16283053496711485333750.jpeg"
                      alt="8, FAST AND FURIOUS,HOBBS AND SHAW,THE FAST SAGA,FAST & FURIOUS,THE FAST AND THE FURIOUS,QUÁ NHANH QUÁ NGUY HIỂM,"
                      note=""
                    />
                    <p>
                      <strong>Fast and Furious</strong> 6 là bộ phim thuộc Fast
                      saga có tổng doanh thu nội địa Mỹ lớn thứ hai. Tổng doanh
                      thu nội địa của nó là $ 238,679,850; vượt qua cả doanh thu
                      nội địa của bộ phim thứ tám.
                    </p>
                    <h5>2. The Fate of the Furious ($ 1,236,005,118) </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-16283054888002012318810.jpg"
                      alt="9, FAST AND FURIOUS,HOBBS AND SHAW,THE FAST SAGA,FAST & FURIOUS,THE FAST AND THE FURIOUS,QUÁ NHANH QUÁ NGUY HIỂM,"
                      note=""
                    />
                    <p>
                      The Fate of the Furious có doanh thu nội địa là $
                      226,008,385; suýt thua bộ phim thứ sáu. Nhưng doanh thu
                      quốc tế của tác phẩm này rất ngoạn mục, lên tới
                      1,009,996,733 đô la. Tức là 81,7% tổng doanh thu toàn cầu
                      của bộ phim đến từ các thị trường quốc tế. Con số đó vượt
                      xa tổng doanh thu quốc tế 550 triệu USD của{" "}
                      <strong>Fast and Furious</strong> 6.{" "}
                    </p>
                    <h5>1. Furious 7 ($ 1,515,047,671) </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-1628305616829529785177.jpg"
                      alt="10, FAST AND FURIOUS,HOBBS AND SHAW,THE FAST SAGA,FAST & FURIOUS,THE FAST AND THE FURIOUS,QUÁ NHANH QUÁ NGUY HIỂM,"
                      note=""
                    />
                    <p>
                      Bộ phim thành công nhất của thương hiệu{" "}
                      <strong>Fast and Furious</strong> chính là Furious 7. Cho
                      đến năm 2021, vẫn chưa có cái tên nào đánh bại được nó. Bộ
                      phim cuối cùng của nhân vật Brian O'Conner đã đạt được
                      doanh thu cao ngất ngưởng cả trong nước và quốc tế.{" "}
                    </p>
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
