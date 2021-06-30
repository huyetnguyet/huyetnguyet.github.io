import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '29/06/2021 09:48 PM',
"title": 'Ngọc Trinh "mở hàng" biệt thự của Vũ Khắc Tiệp bằng clip khoe thân cực nóng, phô diễn vòng 3 "nhức mắt" với bikini nhỏ xíu',
"description": 'Thân hình của Ngọc Trinh đúng là chưa bao giờ khiến khán giả phải thất vọng.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629214847--10-775540.png',
"alt": 'sao Việt,showbiz Việt,Ngọc Trinh,Vũ Khắc Tiệp,nữ hoàng nội y,biệt thự,',
"category": 'images',
"date": '29/06/2021',
"time": '09:48 PM',
"link": '/ngoc-trinh-mo-hang-biet-thu-cua-vu-khac-tiep-bang-clip-khoe-than-cuc-nong-pho-dien-vong-3-nhuc-mat-voi-bikini-nho-xiu',
"zcomponent": 'page_20210629214847',
"filepath": './20210629214847-ngoc-trinh-mo-hang-biet-thu-cua-vu-khac-tiep-bang-clip-khoe-than-cuc-nong-pho-dien-vong-3-nhuc-mat-voi-bikini-nho-xiu.js'
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
  'Ngọc Trinh "mở hàng" biệt thự của Vũ Khắc Tiệp bằng clip khoe thân cực nóng, phô diễn vòng 3 "nhức mắt" với bikini nhỏ xíu';
const author = "MYA,";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 09:48 PM";
const description =
  "Thân hình của Ngọc Trinh đúng là chưa bao giờ khiến khán giả phải thất vọng.";
const link =
  "ngoc-trinh-mo-hang-biet-thu-cua-vu-khac-tiep-bang-clip-khoe-than-cuc-nong-pho-dien-vong-3-nhuc-mat-voi-bikini-nho-xiu";
const tagparam = [
  "sao Việt",
  "showbiz Việt",
  "Ngọc Trinh",
  "Vũ Khắc Tiệp",
  "nữ hoàng nội y",
  "biệt thự",
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

export default function page_20210629214847() {
  return (
    <>
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
                    Suốt vài tháng qua, <strong>Vũ Khắc Tiệp</strong> đã thu hút
                    nhiều sự chú ý khi hé lộ về căn <strong>biệt thự</strong> bề
                    thế ở quận 2. Không chỉ vậy, "ông trùm Venus" còn liên tục
                    rủ rê bạn thân <strong>Ngọc Trinh</strong> về ở chung. Đáp
                    lại lời mời gọi của Vũ Khắc Tiệp, Ngọc Trinh đã đăng tải
                    đoạn clip diện bikini cực nóng bỏng để "mở hàng" hồ bơi và
                    căn biệt thự mới hoàn thành này. Trên trang cá nhân, cô
                    viết: "Chết rồi đẹp muốn xỉu luôn. Mai em dọn qua liền nha
                    anh".
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Căn <strong>biệt thự</strong> vốn đã xa hoa và hào nhoáng,
                    nhờ <strong>Ngọc Trinh</strong> mà mọi thứ càng trở nên
                    "nóng" hơn bao giờ hết. Chỉ với vài giây ngắn ngủi, "
                    <strong>nữ hoàng nội y</strong>" đã chứng minh phong độ đỉnh
                    cao nhờ màn khoe thân táo bạo trong bikini nhỏ xíu. Dưới
                    phần bình luận, khán giả cũng liên tục xuýt xoa vì body
                    chuẩn chỉnh, vòng 3 căng đầy và làn da trắng sứ của người
                    đẹp.
                  </p>
                  <p>
                    <strong>Ngọc Trinh</strong> khoe body và vòng 3 "nhức mắt"
                    trước <strong>biệt thự</strong> xa hoa của Vũ Khắc Tiệp
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214847--11-824285.png")
                        .default
                    }
                    alt="1, sao Việt,showbiz Việt,Ngọc Trinh,Vũ Khắc Tiệp,nữ hoàng nội y,biệt thự,"
                    note="Khu hồ bơi được đặt ngoài trời, nơi Ngọc Trinh khoe dáng cực gắt và cũng là nơi để ngắm hoàng hôn"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214847--12-146998.png")
                        .default
                    }
                    alt="2, sao Việt,showbiz Việt,Ngọc Trinh,Vũ Khắc Tiệp,nữ hoàng nội y,biệt thự,"
                    note="Căn biệt thự sang trọng của Vũ Khắc Tiệp ở quận 2. Anh từng nhiều lần rủ rê Ngọc Trinh bỏ căn biệt thự 50 tỷ ở quận 9 để qua đây ở"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214847--10-775540.png")
                        .default
                    }
                    alt="4, sao Việt,showbiz Việt,Ngọc Trinh,Vũ Khắc Tiệp,nữ hoàng nội y,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214847--13-837766.jpg")
                        .default
                    }
                    alt="3, sao Việt,showbiz Việt,Ngọc Trinh,Vũ Khắc Tiệp,nữ hoàng nội y,biệt thự,"
                    note="Netizen đang rất mong chờ những bộ ảnh lung linh của Ngọc Trinh và Vũ Khắc Tiệp được chụp tại biệt thự Venus này"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214847--14-392051.jpg")
                        .default
                    }
                    alt="5, sao Việt,showbiz Việt,Ngọc Trinh,Vũ Khắc Tiệp,nữ hoàng nội y,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214847--15-295875.jpg")
                        .default
                    }
                    alt="6, sao Việt,showbiz Việt,Ngọc Trinh,Vũ Khắc Tiệp,nữ hoàng nội y,biệt thự,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214847--16-30565.jpeg")
                        .default
                    }
                    alt="7, sao Việt,showbiz Việt,Ngọc Trinh,Vũ Khắc Tiệp,nữ hoàng nội y,biệt thự,"
                    note=""
                  />
                  <p>Ảnh, clip: Instagram nhân vật</p>
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
