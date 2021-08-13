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
"timestamp": '11/08/2021 10:51 AM',
"title": 'Luôn ăn vận thanh lịch nhưng Emma Watson vẫn có 2 pha "lộ hàng" mà cô không bao giờ muốn nhớ lại nữa',
"description": 'Và thật may mắn, đây chỉ là 2 sự cố hiếm hoi trong lịch sử ăn mặc của Emma Watson.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/image-16286035390171932430383.jpeg',
"alt": 'emma watson,lộ hàng,sự cố trang phục,harry potter,sao us uk,star style,sao hớ hênh,',
"category": 'stars',
"date": '11/08/2021',
"time": '10:51 AM',
"link": '/luon-an-van-thanh-lich-nhung-emma-watson-van-co-2-pha-lo-hang-ma-co-khong-bao-gio-muon-nho-lai-nua',
"zcomponent": 'page_20210811105118',
"filepath": './20210811105118-luon-an-van-thanh-lich-nhung-emma-watson-van-co-2-pha-lo-hang-ma-co-khong-bao-gio-muon-nho-lai-nua.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  'Luôn ăn vận thanh lịch nhưng Emma Watson vẫn có 2 pha "lộ hàng" mà cô không bao giờ muốn nhớ lại nữa';
const author = "TỬ ĐAN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "11/08/2021 10:51 AM";
const description =
  "Và thật may mắn, đây chỉ là 2 sự cố hiếm hoi trong lịch sử ăn mặc của Emma Watson.";
const link =
  "luon-an-van-thanh-lich-nhung-emma-watson-van-co-2-pha-lo-hang-ma-co-khong-bao-gio-muon-nho-lai-nua";
const tagparam = [
  "emma watson",
  "lộ hàng",
  "sự cố trang phục",
  "harry potter",
  "sao us uk",
  "star style",
  "sao hớ hênh",
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

export default function page_20210811105118() {
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
                      <strong>Emma Watson</strong> "đóng đinh" bản thân với mẫu
                      hình người con gái chính chuyên, lịch thiệp với những
                      trang phục kín đáo, đề cao sự trưởng thành và có trách
                      nhiệm trong hành vi của mình.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/image-16286035390171932430383.jpeg"
                      alt="1, emma watson,lộ hàng,sự cố trang phục,harry potter,sao us uk,star style,sao hớ hênh,"
                      note=""
                    />
                    <p>
                      Dẫu cho cách ăn mặc của Emma không quá thức thời nhưng đây
                      được xem là lối phục sức của 1 cô gái giản dị, chín chắn
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/emma-watson1-1628603538981589409368.jpeg"
                      alt="2, emma watson,lộ hàng,sự cố trang phục,harry potter,sao us uk,star style,sao hớ hênh,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/83e1010d5e171c1121c4e3a1e3afd3ca-16286035389701738422928.jpeg"
                      alt="3, emma watson,lộ hàng,sự cố trang phục,harry potter,sao us uk,star style,sao hớ hênh,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, thật khó để tránh được những sự vụ "
                      <strong>lộ hàng</strong>" khi bạn sống trong showbiz và{" "}
                      <strong>Emma Watson</strong> cũng không nằm ngoài vòng
                      luẩn quẩn đó. Năm 2009, Emma Watson khi ấy là trung tâm
                      của truyền thông khi dự sự kiện ra mắt phim{" "}
                      <strong>Harry Potter</strong> Và Hoàng Tử Lai. Giữa lúc
                      ngập tràn xung quanh là paparazzi, cô nàng đã gặp ngay
                      "tai nạn" ngượng đỏ mặt.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/emma-watson-umbrellaswwwwallpaperhicom71-16286044051551817040087.jpg"
                      alt="4, emma watson,lộ hàng,sự cố trang phục,harry potter,sao us uk,star style,sao hớ hênh,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/kz65wzrxhlaf5uj9vcvy0hrmihyfbkjrl31q2idin3q-1628604398082745033437.jpeg"
                      alt="5, emma watson,lộ hàng,sự cố trang phục,harry potter,sao us uk,star style,sao hớ hênh,"
                      note=""
                    />
                    <p>
                      Dự sự kiện hôm ấy, Emma Roberts diện đầm hoa tay lỡ và
                      khoét khá sâu ở ngực. Thật xui xẻo khi giữa sự kiện thì
                      trời đổ mưa và nàng ướt như chuột
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/base64-16286046898612089367244.png"
                      alt="6, emma watson,lộ hàng,sự cố trang phục,harry potter,sao us uk,star style,sao hớ hênh,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/emma-watson-red-carpet-2009-photo-gc-1628604581113469510906.jpeg"
                      alt="7, emma watson,lộ hàng,sự cố trang phục,harry potter,sao us uk,star style,sao hớ hênh,"
                      note=""
                    />
                    <p>
                      Không hiểu quờ quạng thế nào mà tà váy tốc lên khiến "nàng
                      Hermione" lộ cả underwear. Khoảnh khắc hớ hênh này khiến{" "}
                      <strong>Emma Watson</strong> ngại ngùng suốt 1 thời gian
                      dài bởi từ trước tới nay cô luôn là ngôi sao nói không với
                      scandal
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Bẵng đi 1 thời gian, "hớ hênh" lại tiếp tục ghé thăm Emma
                      trong năm 2012. Khi tham gia buổi ra mắt phim The Perks of
                      Being a Wallflower, chiếc váy cổ yếm không biết "vâng lời"
                      và khiến nữ diễn viên tiếp tục gặp{" "}
                      <strong>sự cố trang phục</strong> khác cũng ê chề không
                      kém.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/base64-1628605147115644140934.png"
                      alt="8, emma watson,lộ hàng,sự cố trang phục,harry potter,sao us uk,star style,sao hớ hênh,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/em1-1628605082520136163193.jpeg"
                      alt="9, emma watson,lộ hàng,sự cố trang phục,harry potter,sao us uk,star style,sao hớ hênh,"
                      note=""
                    />
                    <p>
                      Đầm cổ yếm quá mong manh để bao bọc khuôn ngực Emma nên nó
                      đã quyết định tự do xô lệch, khiến người đẹp để lộ miếng
                      dán nhũ hoa ra ngoài. Dẫu "bó cẩn" sử dụng miếng dán nhưng
                      sự vụ lộ liễu này cũng là khoảnh khắc mà Emma sẽ không bao
                      giờ muốn nhắc lại
                    </p>
                    <p>Ảnh: Sưu tầm</p>
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
