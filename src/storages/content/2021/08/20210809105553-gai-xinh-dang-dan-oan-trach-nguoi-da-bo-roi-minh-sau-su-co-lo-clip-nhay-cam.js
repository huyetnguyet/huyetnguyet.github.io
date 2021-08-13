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
"timestamp": '09/08/2021 10:55 AM',
"title": 'Gái xinh đăng đàn oán trách người đã bỏ rơi mình sau sự cố lộ clip nhạy cảm',
"description": 'Hot girl từng livestream quảng cáo game cấm đã có những động thái đầu sau tin đồn lộ clip nóng.',
"src": 'https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/9/photo-2-162771035403325926843-16285012988902110324162.jpeg',
"alt": 'LÊ PHƯƠNG ANH,LỘ CLIP,HOT GIRL,PR GAME,',
"category": 'images',
"date": '09/08/2021',
"time": '10:55 AM',
"link": '/gai-xinh-dang-dan-oan-trach-nguoi-da-bo-roi-minh-sau-su-co-lo-clip-nhay-cam',
"zcomponent": 'page_20210809105553',
"filepath": './20210809105553-gai-xinh-dang-dan-oan-trach-nguoi-da-bo-roi-minh-sau-su-co-lo-clip-nhay-cam.js'
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
  "Gái xinh đăng đàn oán trách người đã bỏ rơi mình sau sự cố lộ clip nhạy cảm";
const author = "Kayle";
const source = "Trí Thức Trẻ";
const timestamp = "09/08/2021 10:55 AM";
const description =
  "Hot girl từng livestream quảng cáo game cấm đã có những động thái đầu sau tin đồn lộ clip nóng.";
const link =
  "gai-xinh-dang-dan-oan-trach-nguoi-da-bo-roi-minh-sau-su-co-lo-clip-nhay-cam";
const tagparam = ["LÊ PHƯƠNG ANH", "LỘ CLIP", "HOT GIRL", "PR GAME"];
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

export default function page_20210809105553() {
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
                      Vẻ ngoài ưa nhìn với gương mặt dễ thương, làn da trắng
                      trẻo không chút tì vết, theo đuổi style gợi cảm, không
                      ngại khoe vòng 1 đầy đặn hay show dáng nuột nà trong những
                      bộ ảnh bikini... đây là những lý do khiến cái tên{" "}
                      <strong>Lê Phương Anh</strong> không còn xa lạ với cư dân
                      mạng. Nhan sắc của cô nàng còn “vượt biên giới" khi xuất
                      hiện trên báo Trung vì quá đỗi xinh xắn hồi đầu năm 2020.
                    </p>

                    <p>
                      Dẫu vậy thì tuần qua quả là chuỗi thời gian không dễ dàng
                      gì với cô nàng khi bị vướng vào nghi vấn là nhân vật nữ
                      trong đoạn clip nhạy cảm kéo dài 2 phút. Dù đã lên tiếng
                      phủ nhận và cho rằng đây là clip cắt ghép thế nhưng cô
                      nàng không tránh khỏi sự phiền phức từ mạng xã hội.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-1-1628501325788799455008-16285013666731310995891.jpg"
                      alt="3, LÊ PHƯƠNG ANH,LỘ CLIP,HOT GIRL,PR GAME,"
                      note=""
                    />
                    <p>
                      Đăng tải bức hình phải nhập viện truyền nước, hồi sức, gái
                      xinh 1997 khiến fan hoang mang, lo lắng. Dường như cô nàng
                      đuối sức trước những tin đồn không hay suốt thời gian qua.
                      Đặc biệt, chia sẻ hình ảnh, <strong>hot girl</strong>{" "}
                      tranh thủ dằn mặt một bộ phận cư dân mạng cũng như lên
                      tiếng hờn giận, oán trách bóng gió vài người:{" "}
                    </p>
                    <p>
                      “Nhất định có 3 kiểu người không được quên: Người giúp bạn
                      lúc khó khăn, người đẩy bạn vào khó khăn và người bỏ bạn
                      lúc khó khăn...".
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Không phải là lần đầu tiên dính vào lùm xùm thất thiệt thế
                      nhưng có vẻ như lùm xùm <strong>lộ clip</strong> lần này
                      là đợt khiến cô nàng tổn thương nhiều nhất.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/9/photo-1-1627710354003336435392-16285012988681533555777.jpeg"
                      alt="1, LÊ PHƯƠNG ANH,LỘ CLIP,HOT GIRL,PR GAME,"
                      note="Cô cũng từng bị chỉ trích khi ngang nhiên livestream quảng cáo cho một tựa game trái phép ngay trên trang cá nhân."
                    />
                    <p>
                      Trước khi dính biến căng, cô nàng sở hữu số đo ba vòng
                      79-64-90 này đang là mẫu ảnh, nhận PR cho các nhãn hàng.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/9/photo-2-162771035403325926843-16285012988902110324162.jpeg"
                      alt="2, LÊ PHƯƠNG ANH,LỘ CLIP,HOT GIRL,PR GAME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/anh-chup-man-hinh-2021-08-09-luc-163140-1628501552490274720757-16285029038481480211009.png"
                      alt="4, LÊ PHƯƠNG ANH,LỘ CLIP,HOT GIRL,PR GAME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-1-16285016867991857766376.jpg"
                      alt="5, LÊ PHƯƠNG ANH,LỘ CLIP,HOT GIRL,PR GAME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/9/photo-1-16285016241751946915364.jpg"
                      alt="6, LÊ PHƯƠNG ANH,LỘ CLIP,HOT GIRL,PR GAME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-1-1628501640578865822650.jpg"
                      alt="7, LÊ PHƯƠNG ANH,LỘ CLIP,HOT GIRL,PR GAME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/9/photo-1-1628501707876719985942.jpg"
                      alt="8, LÊ PHƯƠNG ANH,LỘ CLIP,HOT GIRL,PR GAME,"
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
