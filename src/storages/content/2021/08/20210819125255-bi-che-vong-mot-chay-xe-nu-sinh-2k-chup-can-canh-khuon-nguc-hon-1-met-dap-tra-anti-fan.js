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
"timestamp": '19/08/2021 12:52 PM',
"title": 'Bị chê vòng một chảy xệ, nữ sinh 2K chụp cận cảnh khuôn ngực hơn 1 mét đáp trả anti fan',
"description": 'Nhận không ít bình luận chê bai kém duyên, nữ sinh Hải Dương đáp trả gay gắt, không còn lặng lẽ như hồi mới nổi.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629079336841758121466.jpg',
"alt": 'NỮ SINH,NGỰC KHỦNG,HẢI DƯƠNG,CỘNG ĐỒNG MẠNG,',
"category": 'images',
"date": '19/08/2021',
"time": '12:52 PM',
"link": '/bi-che-vong-mot-chay-xe-nu-sinh-2k-chup-can-canh-khuon-nguc-hon-1-met-dap-tra-anti-fan',
"zcomponent": 'page_20210819125255',
"filepath": './20210819125255-bi-che-vong-mot-chay-xe-nu-sinh-2k-chup-can-canh-khuon-nguc-hon-1-met-dap-tra-anti-fan.js'
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
  "Bị chê vòng một chảy xệ, nữ sinh 2K chụp cận cảnh khuôn ngực hơn 1 mét đáp trả anti fan";
const author = "Kayle";
const source = "Pháp luật và bạn đọc";
const timestamp = "19/08/2021 12:52 PM";
const description =
  "Nhận không ít bình luận chê bai kém duyên, nữ sinh Hải Dương đáp trả gay gắt, không còn lặng lẽ như hồi mới nổi.";
const link =
  "bi-che-vong-mot-chay-xe-nu-sinh-2k-chup-can-canh-khuon-nguc-hon-1-met-dap-tra-anti-fan";
const tagparam = ["NỮ SINH", "NGỰC KHỦNG", "HẢI DƯƠNG", "CỘNG ĐỒNG MẠNG"];
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

export default function page_20210819125255() {
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
                      Có số đo vòng một lên tới 110 cm, “
                      <strong>nữ sinh</strong> <strong>ngực khủng</strong>” Võ
                      Thị Thu Trang gây chú ý khi chia sẻ hình ảnh bản thân từ
                      bốn năm trước. Khi đó, cô nàng từng tiết lộ rằng, bộ ngực
                      quá lớn khiến cô bạn 17 tuổi khi ấy phải đối diện với biết
                      bao khó khăn cùng những ánh nhìn soi mói, chỉ trỏ của
                      người khác. Cô từng bị nói là có bệnh, bị hỏi sinh mấy
                      cháu rồi…
                    </p>
                    <p>
                      Đến nay, khi đã là cô nàng 21 tuổi,{" "}
                      <strong>nữ sinh</strong> <strong>Hải Dương</strong> không
                      còn khờ khạo, lẩn tránh những bình luận tiêu cực dành cho
                      mình nữa. Thu Trang tự tin và thường xuyên đăng ảnh vòng
                      một ngoại cỡ. Mới đây, cô bạn sinh năm 2000 này còn cố
                      tình chụp ảnh gợi cảm "cúng phây", tuy nhiên hot girl bị
                      cho là có pha hớ hênh, để lộ nhũ hoa đầy phản cảm.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Cùng ngắm thêm những hình ảnh của cô nàng "
                      <strong>ngực khủng</strong>" này nhé!
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629079336841758121466.jpg"
                      alt="1, NỮ SINH,NGỰC KHỦNG,HẢI DƯƠNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-1-16290794246931149163343-16290794894891584452281.jpg"
                      alt="2, NỮ SINH,NGỰC KHỦNG,HẢI DƯƠNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/148698681_1480638935471761_6916491624621791882_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=l4usTNeYSM0AX_B9KIE&_nc_ht=scontent.fhan2-1.fna&oh=4bb483daba20a0f497612f60ef86944b&oe=613E8CBC"
                      alt="6, NỮ SINH,NGỰC KHỦNG,HẢI DƯƠNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629079924550695055364.jpg"
                      alt="7, NỮ SINH,NGỰC KHỦNG,HẢI DƯƠNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16290799110181804663263.jpg"
                      alt="8, NỮ SINH,NGỰC KHỦNG,HẢI DƯƠNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16290798996141048883871.jpg"
                      alt="9, NỮ SINH,NGỰC KHỦNG,HẢI DƯƠNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629079892677963194319.jpg"
                      alt="10, NỮ SINH,NGỰC KHỦNG,HẢI DƯƠNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629079810160529235414.jpg"
                      alt="11, NỮ SINH,NGỰC KHỦNG,HẢI DƯƠNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
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
