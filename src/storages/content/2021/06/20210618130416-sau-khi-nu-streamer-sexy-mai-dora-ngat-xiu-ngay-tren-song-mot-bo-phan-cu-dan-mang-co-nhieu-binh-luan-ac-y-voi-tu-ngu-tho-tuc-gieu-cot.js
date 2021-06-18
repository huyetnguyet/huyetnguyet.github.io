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
"timestamp": '18/06/2021 01:04 PM',
"title": 'Sau khi nữ streamer sexy Mai Dora ngất xỉu ngay trên sóng, một bộ phận cư dân mạng có nhiều bình luận ác ý với từ ngữ thô tục, giễu cợt',
"description": 'Một bộ phận cư dân mạng đang hành xử rất kém văn minh trước sự cố của Mai Dora. Đây là hành vi kém văn hóa rất đáng lên án.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210618130416--11-473397.jpg',
"alt": '',
"category": 'images',
"date": '18/06/2021',
"time": '01:04 PM',
"link": '/sau-khi-nu-streamer-sexy-mai-dora-ngat-xiu-ngay-tren-song-mot-bo-phan-cu-dan-mang-co-nhieu-binh-luan-ac-y-voi-tu-ngu-tho-tuc-gieu-cot',
"zcomponent": 'page_20210618130416',
"filepath": './20210618130416-sau-khi-nu-streamer-sexy-mai-dora-ngat-xiu-ngay-tren-song-mot-bo-phan-cu-dan-mang-co-nhieu-binh-luan-ac-y-voi-tu-ngu-tho-tuc-gieu-cot.js'
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
  "Sau khi nữ streamer sexy Mai Dora ngất xỉu ngay trên sóng, một bộ phận cư dân mạng có nhiều bình luận ác ý với từ ngữ thô tục, giễu cợt";
const author = "GIA MINH,";
const source = "Trí Thức Trẻ";
const timestamp = "18/06/2021 01:04 PM";
const description =
  "Một bộ phận cư dân mạng đang hành xử rất kém văn minh trước sự cố của Mai Dora. Đây là hành vi kém văn hóa rất đáng lên án.";
const link =
  "sau-khi-nu-streamer-sexy-mai-dora-ngat-xiu-ngay-tren-song-mot-bo-phan-cu-dan-mang-co-nhieu-binh-luan-ac-y-voi-tu-ngu-tho-tuc-gieu-cot";
const tagparam = [];
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

export default function page_20210618130416() {
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
                    Thông tin nữ streamer Mai Dora ngất xỉu ngay giữa lúc đang
                    livestream nhận được sự quan tâm lớn của cộng đồng mạng. Hầu
                    hết mọi người đều đang bày tỏ sự lo lắng đến tình hình sức
                    khỏe của cô nàng, cũng như cầu chúc cho Mai Dora sớm bình
                    phục sau sự cố đáng tiếc này.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130416--10-653020.jpg")
                        .default
                    }
                    alt="1, "
                    note="Nữ streamer Mai Dora đang nhận được sự quan tâm lớn của cộng đồng mạng"
                  />{" "}
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130416--11-473397.jpg")
                        .default
                    }
                    alt="2, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130416--12-531303.jpg")
                        .default
                    }
                    alt="3, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130416--13-565503.jpg")
                        .default
                    }
                    alt="4, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130416--14-203729.jpg")
                        .default
                    }
                    alt="5, "
                    note=""
                  />
                  <p>
                    Tuy nhiên, một bộ phận cư dân mạng lại không nhận ra được độ
                    nghiêm trọng của vấn đề này. Họ vẫn vô tư đùa giỡn, cười cợt
                    trước một tình huống chẳng mấy vui vẻ:
                  </p>
                  <p>"Ngực nặng thế kia ngã là đúng rồi,"</p>
                  <p>"Không sao, ngực to là được."</p>
                  <p>"Chắc bộ bánh bao nặng quá nên mới ngã."</p>
                  <p>"Giả nai thế nhở, chắc trốn live thôi."</p>
                  <RelationNewsInPage category={category} />
                  <p></p>
                  <p>Mai Dora bất ngờ xỉu trong lúc livestream</p>
                  <p>
                    Việc Mai Dora ngất xỉu trên sóng stream là điều có thật.
                    Theo thông tin xác nhận, hiện tại, nữ streamer đã tỉnh lại
                    và nhận được sự chăm sóc từ người thân và gia đình.
                  </p>
                  <p>
                    Tuy nhiên hành vi giễu cợt, bông đùa trước tình huống có thể
                    liên quan tới mạng sống của người khác là điều rất đáng lên
                    án. Đồng thời nó cũng cho chúng ta thấy một bộ phận cư dân
                    mạng có lối hành xử rất kém văn minh trên mạng xã hội.
                  </p>
                  <p>Ảnh: Tổng hợp</p>
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
