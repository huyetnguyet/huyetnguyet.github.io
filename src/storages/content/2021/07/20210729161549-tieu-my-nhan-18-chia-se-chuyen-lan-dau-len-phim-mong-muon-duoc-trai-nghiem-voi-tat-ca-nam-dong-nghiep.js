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
"timestamp": '29/07/2021 04:15 PM',
"title": 'Tiểu mỹ nhân 18+ chia sẻ chuyện lần đầu, gây sốc với tuyên bố muốn được "trải nghiệm" với tất cả nam đồng nghiệp',
"description": 'Cô nàng Karen Kaede đã có những bật mí khiến cho tất cả các fan hâm mộ phải bất ngờ.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-1625728032365655486688.jpg',
"alt": 'IDOL,KAREN KAEDE,',
"category": 'images',
"date": '29/07/2021',
"time": '04:15 PM',
"link": '/tieu-my-nhan-18-chia-se-chuyen-lan-dau-len-phim-mong-muon-duoc-trai-nghiem-voi-tat-ca-nam-dong-nghiep',
"zcomponent": 'page_20210729161549',
"filepath": './20210729161549-tieu-my-nhan-18-chia-se-chuyen-lan-dau-len-phim-mong-muon-duoc-trai-nghiem-voi-tat-ca-nam-dong-nghiep.js'
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
  'Tiểu mỹ nhân 18+ chia sẻ chuyện lần đầu, gây sốc với tuyên bố muốn được "trải nghiệm" với tất cả nam đồng nghiệp';
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:15 PM";
const description =
  "Cô nàng Karen Kaede đã có những bật mí khiến cho tất cả các fan hâm mộ phải bất ngờ.";
const link =
  "tieu-my-nhan-18-chia-se-chuyen-lan-dau-len-phim-mong-muon-duoc-trai-nghiem-voi-tat-ca-nam-dong-nghiep";
const tagparam = ["IDOL", "KAREN KAEDE"];
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

export default function page_20210729161549() {
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
                    Karen sinh năm 1997, gia nhập ngành giải trí vào tháng
                    9/2018 với tư cách 1 người mẫu gravure. Tới cuối năm 2018,
                    cô nàng quyết định chuyển sang gia nhập ngành phim người lớn
                    khi đầu quân cho công ty IdeaPocket nhân dịp kỷ niệm 20 năm
                    thành lập hãng này.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-1625728032365655486688.jpg"
                    alt="1, IDOL,KAREN KAEDE,"
                    note=""
                  />
                  <p>
                    Ngay từ khi vừa mới gia nhập, cô nàng đã gây ấn tượng không
                    kém các đàn chị bởi nhan sắc cực kỳ ấn tượng. Nhiều người
                    không ngại ví von rằng nhan sắc của cô nàng ở 1 góc nhìn nào
                    đó khá giống với Triệu Vy, hoàn châu cách cách năm nào. Sở
                    hữu hình thể mảnh mai và xinh đẹp như 1 người mẫu, thế nên
                    Karen nhanh chóng được nhiều fan hâm mộ liệt vào hàng ngũ mỹ
                    nhân thế hệ mới của ngành công nghiệp phim 18+.
                  </p>
                  <p>
                    Tuy nhiên, điều làm nên sự đặc sắc của{" "}
                    <strong>Karen Kaede</strong> không chỉ là nhan sắc, mà còn ở
                    biểu cảm của cô nàng. Có rất ít khi chúng ta được thấy các
                    cô nàng thể hiện nhiều biểu cảm nhí nhố, "dìm hàng" bản thân
                    trên mạng xã hội, còn Karen thì lại không ngần ngại thể hiện
                    điều đó cho người khác thấy.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/8/-16257292005951287188486.jpg"
                    alt="2, IDOL,KAREN KAEDE,"
                    note=""
                  />
                  <p>
                    {" "}
                    Trong một lần trả lời phỏng vấn,{" "}
                    <strong>Karen Kaede</strong> đã tiết lộ một vài điều liên
                    quan tới công việc hiện tại của cô nàng. Theo đó, cô gái
                    sinh năm 1999 được studio chủ quản là Idea Pocket dọn đường
                    để trình làng vào dịp 20 năm thành lập hãng. Đây là điều
                    khiến Karen được công chúng chú ý hơn so với các đàn chị đi
                    trước, bản thân cô nàng cũng nhận thấy việc này là một vinh
                    dự và cô nàng rất vui với điều này.{" "}
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Về kỷ niệm, sau vài bộ phim đầu tiên, Karen mới hết căng
                    thẳng và có thể ngủ ngon mỗi khi đi quay về. Cô nàng thực sự
                    cảm thấy run và không tự tin khi xuất hiện trước ống kính
                    vào thời gian đầu, nhưng lâu dần rồi thì cũng quen, dù công
                    việc khá vất vả do kéo dài từ sáng sớm đến tối mịt.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-1625729211820345961919.jpeg"
                    alt="3, IDOL,KAREN KAEDE,"
                    note=""
                  />
                  <p>
                    Việc khiến cô nàng cảm thấy thú vị nhất là chuyện được "trải
                    nghiệm" với từng nam đồng nghiệp khác nhau. Chuyện ấy với
                    mỗi người một khác, thế nên cô nàng muốn thử hết tất cả rồi
                    mới ra đưa ra kết luận. Dù vậy, ở thời điểm hiện tại, cô
                    nàng vẫn thích những nam đồng nghiệp "to khỏe, đầy đặn" hơn
                    so với phần còn lại.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/8/-16257292351091525604371.jpg"
                    alt="4, IDOL,KAREN KAEDE,"
                    note=""
                  />
                  <p>
                    {" "}
                    Cô nàng cũng bật mí rằng dù bản thân là một diễn viên 18+ và
                    có xem qua rất nhiều sản phẩm của người khác, thế nhưng
                    Karen không thích xem sản phẩm do chính mình làm nên. Cô
                    nàng cảm thấy khá ngượng khi làm điều này, đã có lần mở lên
                    xong rồi phải tự tắt đi. Hiện tại, thứ làm cô nàng cảm thấy
                    thích thú là các bộ truyện về những anh chàng đẹp trai có
                    tình cảm với nhau. Điều này khiến cho Karen cảm thấy tò mò
                    và bị nghiện lúc nào không hay.
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
