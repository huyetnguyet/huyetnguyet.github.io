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
"timestamp": '29/06/2021 09:54 PM',
"title": 'Hồ bơi nhà Vũ Khắc Tiệp hoá sàn diễn của Ngọc Trinh và “MC 3000 chữ”: Body hừng hực, nữ hoàng nội y có lép vế vì MC của VTV?',
"description": 'Những khoảnh khắc khoe thân của Ngọc Trinh và MC Thanh Thanh Huyền mau chóng nhận được nhiều lượt "thả tim" từ người hâm mộ.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629215412--10-48187.jpeg',
"alt": 'sao Việt,showbiz Việt,Ngọc Trinh,Vũ Khắc Tiệp,nữ hoàng nội y,body sao,venus,MC Thanh Thanh Huyền,',
"category": 'images',
"date": '29/06/2021',
"time": '09:54 PM',
"link": '/ho-boi-nha-vu-khac-tiep-hoa-san-dien-cua-ngoc-trinh-va-mc-3000-chu-body-hung-huc-nu-hoang-noi-y-co-lep-ve-vi-mc-cua-vtv',
"zcomponent": 'page_20210629215412',
"filepath": './20210629215412-ho-boi-nha-vu-khac-tiep-hoa-san-dien-cua-ngoc-trinh-va-mc-3000-chu-body-hung-huc-nu-hoang-noi-y-co-lep-ve-vi-mc-cua-vtv.js'
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
  "Hồ bơi nhà Vũ Khắc Tiệp hoá sàn diễn của Ngọc Trinh và “MC 3000 chữ”: Body hừng hực, nữ hoàng nội y có lép vế vì MC của VTV?";
const author = "MYA,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/06/2021 09:54 PM";
const description =
  'Những khoảnh khắc khoe thân của Ngọc Trinh và MC Thanh Thanh Huyền mau chóng nhận được nhiều lượt "thả tim" từ người hâm mộ.';
const link =
  "ho-boi-nha-vu-khac-tiep-hoa-san-dien-cua-ngoc-trinh-va-mc-3000-chu-body-hung-huc-nu-hoang-noi-y-co-lep-ve-vi-mc-cua-vtv";
const tagparam = [
  "sao Việt",
  "showbiz Việt",
  "Ngọc Trinh",
  "Vũ Khắc Tiệp",
  "nữ hoàng nội y",
  "body sao",
  "venus",
  "MC Thanh Thanh Huyền",
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

export default function page_20210629215412() {
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
                    Chẳng phải vô duyên vô cớ mà khán giả lại đặt cho{" "}
                    <strong>Ngọc Trinh</strong> biệt danh "
                    <strong>nữ hoàng nội y</strong>". Bởi lẽ, mỗi lần cô nàng
                    diện nội y trình diễn, nơi đó sẽ trở nên "nóng" hơn bao giờ
                    hết. Mới đây, Ngọc Trinh còn biến luôn thành hồ bơi ở căn
                    biệt thự bề thế của <strong>Vũ Khắc Tiệp</strong> thành sàn
                    diễn nội y thu nhỏ. Tuy nhiên, màn đọ sắc của "nữ hoàng nội
                    y" bên cạnh <strong>MC Thanh Thanh Huyền</strong> mới là tâm
                    điểm chú ý.
                  </p>
                  <p>
                    Thông qua đoạn clip, có thể thấy <strong>Ngọc Trinh</strong>{" "}
                    và <strong>MC Thanh Thanh Huyền</strong> - nữ MC dẫn song
                    ngữ 3.000 chữ cùng 75 tên riêng không cần kịch bản đã có màn
                    đọ sắc "một chín một mười". Cả hai đã khiến cho căn biệt thư
                    đắt đỏ của <strong>Vũ Khắc Tiệp</strong> trở nên nóng hơn
                    bao giờ hết. Dưới phần bình luận, khán giả cũng liên tục gửi
                    lời khen tới body ấn tượng của Thanh Thanh Huyền và Ngọc
                    Trinh, đặc biệt dù đọ sắc với "
                    <strong>nữ hoàng nội y</strong>" nhưng trông nữ MC cũng
                    chẳng kém cạnh là bao.
                  </p>
                  <p>
                    Đọ sắc bên "<strong>nữ hoàng nội y</strong>"{" "}
                    <strong>Ngọc Trinh</strong> nhưng Thanh Thanh Huyền trông
                    chẳng hề lép vế
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215412--11-47814.jpeg")
                        .default
                    }
                    alt="1, sao Việt,showbiz Việt,Ngọc Trinh,Vũ Khắc Tiệp,nữ hoàng nội y,body sao,venus,MC Thanh Thanh Huyền,"
                    note="MC Thanh Thanh Huyền là người dẫn song ngữ 3.000 chữ và 75 tên riêng, không cần kịch bản vẫn chẳng vấp một từ!"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215412--12-43114.jpeg")
                        .default
                    }
                    alt="2, sao Việt,showbiz Việt,Ngọc Trinh,Vũ Khắc Tiệp,nữ hoàng nội y,body sao,venus,MC Thanh Thanh Huyền,"
                    note="Trước đó, Ngọc Trinh cũng từng tung loạt ảnh sống ảo trước căn biệt thự này, phô diễn trọn vẹn đường cong"
                  />
                  <p>
                    Căn biệt thự của <strong>Vũ Khắc Tiệp</strong> là địa điểm
                    "sống ảo" mới của Ngọc Trinh
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215412--10-48187.jpeg")
                        .default
                    }
                    alt="3, sao Việt,showbiz Việt,Ngọc Trinh,Vũ Khắc Tiệp,nữ hoàng nội y,body sao,venus,MC Thanh Thanh Huyền,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215412--13-710096.png")
                        .default
                    }
                    alt="4, sao Việt,showbiz Việt,Ngọc Trinh,Vũ Khắc Tiệp,nữ hoàng nội y,body sao,venus,MC Thanh Thanh Huyền,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215412--14-219239.png")
                        .default
                    }
                    alt="5, sao Việt,showbiz Việt,Ngọc Trinh,Vũ Khắc Tiệp,nữ hoàng nội y,body sao,venus,MC Thanh Thanh Huyền,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215412--15-239107.png")
                        .default
                    }
                    alt="6, sao Việt,showbiz Việt,Ngọc Trinh,Vũ Khắc Tiệp,nữ hoàng nội y,body sao,venus,MC Thanh Thanh Huyền,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215412--16-589199.jpg")
                        .default
                    }
                    alt="7, sao Việt,showbiz Việt,Ngọc Trinh,Vũ Khắc Tiệp,nữ hoàng nội y,body sao,venus,MC Thanh Thanh Huyền,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215412--17-947788.jpg")
                        .default
                    }
                    alt="8, sao Việt,showbiz Việt,Ngọc Trinh,Vũ Khắc Tiệp,nữ hoàng nội y,body sao,venus,MC Thanh Thanh Huyền,"
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
