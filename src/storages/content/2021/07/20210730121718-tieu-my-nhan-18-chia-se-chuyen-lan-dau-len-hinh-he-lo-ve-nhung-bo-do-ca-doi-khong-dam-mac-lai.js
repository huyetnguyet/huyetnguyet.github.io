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
"timestamp": '30/07/2021 12:17 PM',
"title": 'Tiểu mỹ nhân 18+ chia sẻ chuyện lần đầu lên hình, hé lộ về những bộ đồ "cả đời không dám mặc lại"',
"description": 'Miu Shiromine quyết định chọn ngành công nghiệp 18+, bởi nó thỏa mãn điều kiện là "nổi tiếng" và "ít thị phi".',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/https://gamek.mediacdn.vn/133514250583805952/2021/7/30/photo-1-1627645123243931552153.jpg',
"alt": 'MIU SHIROMINE,IDOL,',
"category": 'images',
"date": '30/07/2021',
"time": '12:17 PM',
"link": '/tieu-my-nhan-18-chia-se-chuyen-lan-dau-len-hinh-he-lo-ve-nhung-bo-do-ca-doi-khong-dam-mac-lai',
"zcomponent": 'page_20210730121718',
"filepath": './20210730121718-tieu-my-nhan-18-chia-se-chuyen-lan-dau-len-hinh-he-lo-ve-nhung-bo-do-ca-doi-khong-dam-mac-lai.js'
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
  'Tiểu mỹ nhân 18+ chia sẻ chuyện lần đầu lên hình, hé lộ về những bộ đồ "cả đời không dám mặc lại"';
const author = "DS";
const source = "Pháp luật và bạn đọc";
const timestamp = "30/07/2021 12:17 PM";
const description =
  'Miu Shiromine quyết định chọn ngành công nghiệp 18+, bởi nó thỏa mãn điều kiện là "nổi tiếng" và "ít thị phi".';
const link =
  "tieu-my-nhan-18-chia-se-chuyen-lan-dau-len-hinh-he-lo-ve-nhung-bo-do-ca-doi-khong-dam-mac-lai";
const tagparam = ["MIU SHIROMINE", "IDOL"];
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

export default function page_20210730121718() {
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
                    <strong>Miu Shiromine</strong> sinh năm 1997, hiện tại đang
                    là một trong những nữ diễn viên thuộc quản lý của công ty
                    One's Double, hiện đang đầu quân cho studio Idea Pocket.
                    Giống với đàn chị Yua Mikami, cô nàng chính thức bước chân
                    vào ngành công nghiệp 18+ vào cuối năm 2020 và đã ngay lập
                    tức gây được sức hút lớn trong khoảng thời gian cuối năm
                    2020, đầu năm 2021.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/photo-1-1627645123243931552153.jpg"
                    alt="1, MIU SHIROMINE,IDOL,"
                    note=""
                  />
                  <p>
                    Với chiều cao 170 cm với các số đo 90 - 60 - 94 cm chuẩn
                    chỉ, cô gái sinh năm 1997 đã bước đầu tiến vào ngành giải
                    trí với vị trí gravure <strong>idol</strong> và thời gian
                    gần đây quyết định chuyển sang ngành công nghiệp phim người
                    lớn. Ngay trong tháng 1/2020 vừa qua, cô nàng đã leo lên
                    được vị trí thứ 4 trên bảng xếp hạng, ngay sau đàn chị sinh
                    năm 1993.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/photo-1-1627645125835843346414.jpg"
                    alt="2, MIU SHIROMINE,IDOL,"
                    note=""
                  />
                  <p>
                    Sở hữu thân hình như vậy, thế nên không lạ gì ngay từ khi
                    còn nhỏ, Miu đã luôn muốn trở thành người mẫu, được xuất
                    hiện trong những tạp chí thời trang. Tuy nhiên, bố mẹ của cô
                    nàng luôn ngăn cản con mình vì cho rằng giới showbiz là một
                    nơi đầy cạm bẫy. Nhưng điều đó không thể chùn bước ước mơ
                    được nổi tiếng, Miu quyết định chọn ngành công nghiệp 18+,
                    bởi nó thỏa mãn điều kiện là "nổi tiếng" và "ít thị phi".
                  </p>
                  <p>
                    Miu đã từng rất muốn trở thành 1 người tham gia vào giới
                    giải trí như Kyoko Fukada, nữ diễn viên kiêm ca sĩ. Hiện
                    tại, nếu để chọn 1 cái tên cùng ngành thì cô nàng sẽ chọn
                    thần tượng để học tập là Asuka Kirara và Yua Mikami. Trong
                    lần đầu đóng phim, cô nàng nhận ra công việc này vui hơn
                    mình từng nghĩ và cũng rất thú vị. Ngoài ra còn có thể làm
                    nhiều biểu cảm khác nhau hơn, không giống như chụp ảnh áo
                    tắm.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/2180129821214403168495334847411153811296114n-16276487301111220497059.jpg"
                    alt="3, MIU SHIROMINE,IDOL,"
                    note=""
                  />
                  <p>
                    Theo như Shiromine chia sẻ, cô nàng vốn định ngủ một giấc
                    thật sâu rồi để chuẩn bị tinh thần cho ngày đầu tiên đi quay
                    thật thoải mái. Tuy nhiên, cô nàng cuối cùng lại quá căng
                    thẳng và cuối cùng trằn trọc suôt đêm. Đến lúc quay hình, cô
                    nàng còn không thể nào nhớ nổi mình đã nói những gì trước
                    ống kính.{" "}
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Ngoài ra, cô nàng cũng chia sẻ về những bộ trang phục xuất
                    hiện trong các bộ phim 18+. Về cơ bản, những bộ trang phục
                    này được thiết kế gợi cảm tối đa và khoe hết những đường
                    cong trên cơ thể các cô gái ra. Điều này khiến cho{" "}
                    <strong>Miu Shiromine</strong> cảm thấy ngượng ngùng và rất
                    không thoải mái. Bản thân cô cho rằng, nếu không phải nghề
                    nghiệp yêu cầu, bản thân cô sẽ không bao giờ đụng tới những
                    bộ bikini kiểu này.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/2178448067949218312139243405549906080096719n-1627648730075891879712.jpg"
                    alt="4, MIU SHIROMINE,IDOL,"
                    note=""
                  />
                  <p>
                    Những trải nghiệm 18+ quả thực rất thú vị với{" "}
                    <strong>Miu Shiromine</strong>, đó là những gì cô nàng nghĩ
                    sau khi đóng xong sản phẩm đầu tiên. Bên cạnh đó, cô nàng
                    cũng muốn thử tất cả mọi thứ, bởi cảm xúc lần đầu bao giờ
                    cũng là cảm xúc tuyệt vời nhất.
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
