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
"timestamp": '29/06/2021 10:04 PM',
"title": 'Ngọc Trinh diện đồ Prada tạo dáng điệu đà, ai dè lộ ngay chỗ "ứ ừ" khiến ai nấy ái ngại',
"description": 'Số trời đã định, dù có kín cổng cao tường đến mấy mà không "dính đạn" thì không phải Ngọc Trinh?',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629220429--10-642707.jpg',
"alt": 'fashion,thời trang,sao lộ hàng,tai tiếng,nữ hoàng nội y,yêu nữ hàng hiệu,Ngọc Trinh,Prada,star style,sao đỏ thời trang,',
"category": 'images',
"date": '29/06/2021',
"time": '10:04 PM',
"link": '/ngoc-trinh-dien-do-prada-tao-dang-dieu-da-ai-de-lo-ngay-cho-u-u-khien-ai-nay-ai-ngai',
"zcomponent": 'page_20210629220429',
"filepath": './20210629220429-ngoc-trinh-dien-do-prada-tao-dang-dieu-da-ai-de-lo-ngay-cho-u-u-khien-ai-nay-ai-ngai.js'
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
  'Ngọc Trinh diện đồ Prada tạo dáng điệu đà, ai dè lộ ngay chỗ "ứ ừ" khiến ai nấy ái ngại';
const author = "HÀ TRẦN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/06/2021 10:04 PM";
const description =
  'Số trời đã định, dù có kín cổng cao tường đến mấy mà không "dính đạn" thì không phải Ngọc Trinh?';
const link =
  "ngoc-trinh-dien-do-prada-tao-dang-dieu-da-ai-de-lo-ngay-cho-u-u-khien-ai-nay-ai-ngai";
const tagparam = [
  "fashion",
  "thời trang",
  "sao lộ hàng",
  "tai tiếng",
  "nữ hoàng nội y",
  "yêu nữ hàng hiệu",
  "Ngọc Trinh",
  "Prada",
  "star style",
  "sao đỏ thời trang",
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

export default function page_20210629220429() {
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
                    Sau hàng loạt pha khoe da thịt khiến người ta "bỏng mắt",{" "}
                    <strong>Ngọc Trinh</strong> bất ngờ xuất hiện với 1 diện mạo
                    "kín cổng cao tường" hệt như nữ sinh thượng lưu. Diện nguyên
                    set <strong>Prada</strong> từ trang phục cho đến phụ kiện,
                    Trinh ngầm khẳng định danh xưng "
                    <strong>yêu nữ hàng hiệu</strong>" là chính cô chứ nào ai có
                    cửa.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629220429--10-642707.jpg")
                        .default
                    }
                    alt="1, fashion,thời trang,sao lộ hàng,tai tiếng,nữ hoàng nội y,yêu nữ hàng hiệu,Ngọc Trinh,Prada,star style,sao đỏ thời trang,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629220429--11-217115.jpg")
                        .default
                    }
                    alt="2, fashion,thời trang,sao lộ hàng,tai tiếng,nữ hoàng nội y,yêu nữ hàng hiệu,Ngọc Trinh,Prada,star style,sao đỏ thời trang,"
                    note=""
                  />

                  <p>
                    Xét về riêng outfit thì có thể nói đây là 1 bộ đồ sang
                    trọng, lịch thiệp đúng chất <strong>Prada</strong>, còn khí
                    chất của <strong>Ngọc Trinh</strong> thì không phù hợp với
                    set đồ lắm...
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629220429--12-967754.jpg")
                        .default
                    }
                    alt="3, fashion,thời trang,sao lộ hàng,tai tiếng,nữ hoàng nội y,yêu nữ hàng hiệu,Ngọc Trinh,Prada,star style,sao đỏ thời trang,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629220429--13-127356.jpg")
                        .default
                    }
                    alt="4, fashion,thời trang,sao lộ hàng,tai tiếng,nữ hoàng nội y,yêu nữ hàng hiệu,Ngọc Trinh,Prada,star style,sao đỏ thời trang,"
                    note=""
                  />
                  <p>
                    Tuy nhiên, số trời đã định, chỗ nào có Trinh, nơi đó hẳn
                    không tai thì cũng có tiếng. Tạo dáng bên thảm cỏ xanh như
                    bao người, <strong>Ngọc Trinh</strong> "sơ ý" lộ luôn cả
                    phần nhạy cảm khiến ai nhìn vào cũng phải "đỏ mặt". Tấm hình
                    này còn được trưng dụng làm ảnh bìa cho cả bộ ảnh này nữa...
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629220429--14-546708.jpg")
                        .default
                    }
                    alt="5, fashion,thời trang,sao lộ hàng,tai tiếng,nữ hoàng nội y,yêu nữ hàng hiệu,Ngọc Trinh,Prada,star style,sao đỏ thời trang,"
                    note=""
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Sang đến 1 góc chụp khác, nơi hiểm hóc này được "
                    <strong>Nữ hoàng nội y</strong>" khéo léo che đi bằng chiếc
                    túi cả chục triệu đồng.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629220429--15-620692.jpg")
                        .default
                    }
                    alt="6, fashion,thời trang,sao lộ hàng,tai tiếng,nữ hoàng nội y,yêu nữ hàng hiệu,Ngọc Trinh,Prada,star style,sao đỏ thời trang,"
                    note=""
                  />
                  <p>
                    Không biết vô tình hay cố ý nhưng{" "}
                    <strong>Ngọc Trinh</strong> đã để lộ phút hớ hênh này trên
                    MXH, khiến set đồ trở nên kém sang trọng đi vài phần. Có lẽ
                    Ngọc Trinh cùng ekip nên cầu toàn hơn trong thao tác chuẩn
                    bị áo quần đi chụp giúp trang phục giữ được tinh thần vốn có
                    của nó, trừ khi nàng không màng tới điều đó...
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629220429--16-350450.jpg")
                        .default
                    }
                    alt="7, fashion,thời trang,sao lộ hàng,tai tiếng,nữ hoàng nội y,yêu nữ hàng hiệu,Ngọc Trinh,Prada,star style,sao đỏ thời trang,"
                    note=""
                  />
                  <p>Ảnh: Sưu tầm</p>
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
