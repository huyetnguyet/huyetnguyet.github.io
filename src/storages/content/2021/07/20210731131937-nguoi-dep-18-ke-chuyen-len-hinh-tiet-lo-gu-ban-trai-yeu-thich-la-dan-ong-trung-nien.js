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
"timestamp": '31/07/2021 01:19 PM',
"title": 'Người đẹp 18+ kể chuyện lên hình, tiết lộ gu bạn trai yêu thích là đàn ông trung niên',
"description": 'Rio Kuriyama đã chia sẻ về thú vui và gu bạn trai yêu thích của cô nàng.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/30/photo-1-1627660637278307115892.jpg',
"alt": 'IDOL,RIO KURIYAMA,',
"category": 'images',
"date": '31/07/2021',
"time": '01:19 PM',
"link": '/nguoi-dep-18-ke-chuyen-len-hinh-tiet-lo-gu-ban-trai-yeu-thich-la-dan-ong-trung-nien',
"zcomponent": 'page_20210731131937',
"filepath": './20210731131937-nguoi-dep-18-ke-chuyen-len-hinh-tiet-lo-gu-ban-trai-yeu-thich-la-dan-ong-trung-nien.js'
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
  "Người đẹp 18+ kể chuyện lên hình, tiết lộ gu bạn trai yêu thích là đàn ông trung niên";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "31/07/2021 01:19 PM";
const description =
  "Rio Kuriyama đã chia sẻ về thú vui và gu bạn trai yêu thích của cô nàng.";
const link =
  "nguoi-dep-18-ke-chuyen-len-hinh-tiet-lo-gu-ban-trai-yeu-thich-la-dan-ong-trung-nien";
const tagparam = ["IDOL", "RIO KURIYAMA"];
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

export default function page_20210731131937() {
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
                      <strong>Rio Kuriyama</strong> sinh năm 2000, là một trong
                      những thiên thần mới nổi của lĩnh vực phim người lớn trong
                      năm 2020 vừa qua. Cô nàng gia nhập vào công ty Idea Pocket
                      vào cuối tháng 10/2020 và nhanh chóng trở thành một trong
                      những cái tên chú ý nhất bởi thân hình nhỏ nhắn, nụ cười
                      tỏa nắng với chiều cao 148 cm và số đo 3 vòng là 85 - 54 -
                      83cm.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/photo-1-1627660637278307115892.jpg"
                      alt="1, IDOL,RIO KURIYAMA,"
                      note=""
                    />
                    <p>
                      Ở ngoài đời, cô nàng nấm lùn này là 1 người khá hòa đồng,
                      dễ thương và rất thân thiện với fan hâm mộ. Tuy nhiên, vì
                      hiện tại nước Nhật đang có lệnh phong tỏa nên cô nàng chưa
                      thể gặp gỡ các fan ở ngoài đời khá nhiều. Hiện tại, cô
                      nàng chỉ ở nhà dành phần lớn thời gian của mình để xem
                      Netflix. Bộ phim yêu thích của cô nàng ở thời điểm "Thư ký
                      Kim sao thế?" và "Vườn Sao Băng".
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/photo-1-16276606354771535912026.jpg"
                      alt="2, IDOL,RIO KURIYAMA,"
                      note=""
                    />
                    <p>
                      Trong thời gian rảnh, cô nàng còn dành thời gian để tập
                      thể hình. Ước mơ của Rio là có một cặp mông đầy đặn, thế
                      nên cô nàng rất chăm chỉ để tập gym. Ngoài ra, cô nàng còn
                      muốn sở hữu một thân hình bùng nổ như các đàn chị trong
                      studio Idea Pocket, nhưng hiện tại đang... gầy quá, thế
                      nên đang cố gắng để tập tành ăn ngủ đều đặn để có thể có
                      được thân hình bùng nổ hơn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/-1627672182712584319571.jpg"
                      alt="3, IDOL,RIO KURIYAMA,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Không giống như nhiều cô gái khác, Rio khá thoải mái trong
                      lần đầu lên hình. Cô nàng ngủ ngon và thậm chí còn dậy sớm
                      và không cảm nhận được nhiều áp lực của việc tham gia vào
                      sản phẩm 18+ đầu tiên. Thậm chí, những người tại trường
                      quay ngày hôm đó còn phải hỏi lại xem cô nàng có thật sự
                      thoải mái không hay là đang cố gắng giấu đi cảm xúc của
                      bản thân.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/-1627672199745306774094.jpg"
                      alt="4, IDOL,RIO KURIYAMA,"
                      note=""
                    />
                    <p>
                      Bên cạnh đó, cô gái sinh năm 2000 này còn bật mí về gu đàn
                      ông của bản thân. Khi còn đi làm việc bán thời gian, cô
                      nàng khá có cảm tình với những người đàn ông trung niên.
                      Theo cô nàng, họ mới là kiểu người trưởng thành, chững
                      chạc và thu hút sự chú ý của cô nàng. Dù vậy, Rio cũng
                      không chê bai những chàng trai kém tuổi và cho rằng họ
                      cũng có sự thú vị riêng. Thế nên, cô nàng vẫn bỏ ngỏ lựa
                      chọn của bản thân ở thời điểm hiện tại.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/-16276721693242038697126.jpg"
                      alt="5, IDOL,RIO KURIYAMA,"
                      note=""
                    />
                    <p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
