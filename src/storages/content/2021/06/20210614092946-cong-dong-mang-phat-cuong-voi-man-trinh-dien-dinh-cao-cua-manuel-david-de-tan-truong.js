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
"timestamp": '14/06/2021 09:29 AM',
"title": 'Cộng đồng mạng phát cuồng với màn trình diễn đỉnh cao của "Manuel David de Tấn Trường"',
"description": 'Ngay sau đó, trên mạng xã hội, các CĐV Việt Nam đã so sánh Tấn Trường với những thủ môn nổi tiếng thế giới như David De Gea hay Manuel Neuer bằng cách ghép tên khá hài hước. Sau đó, dù phải nhận bàn thua trên chấm 11m, Tấn Trường vẫn vững vàng. ĐT Việt Nam có những sự thay đổi người kịp thời và có được bàn vươn lên dẫn trước 2-1 nhờ công của Quế Ngọc Hải.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/12/photo-1-1623437890849206762956.png',
"alt": 'Viet Nam, Viet Nam Vs Malaysia, Viet Nam Dau Malaysia, Bui Tan Truong, Tan Truong, Thu Mon Tan Truong, Vong Loai World Cup 2022, World Cup 2022, Tan Truong Cuu Thua, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, ',
"category": 'news',
"date": '14/06/2021',
"time": '09:29 AM',
"link": '/cong-dong-mang-phat-cuong-voi-man-trinh-dien-dinh-cao-cua-manuel-david-de-tan-truong',
"zcomponent": 'page_20210614092946',
"filepath": './20210614092946-cong-dong-mang-phat-cuong-voi-man-trinh-dien-dinh-cao-cua-manuel-david-de-tan-truong.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  'Cộng đồng mạng phát cuồng với màn trình diễn đỉnh cao của "Manuel David de Tấn Trường"';
const author = "HIẾU LƯƠNG (TỪ DUBAI, UAE),";
const source = "NHỊP SỐNG VIỆT";
const timestamp = "14/06/2021 09:29 AM";
const description =
  "Ngay sau đó, trên mạng xã hội, các CĐV Việt Nam đã so sánh Tấn Trường với những thủ môn nổi tiếng thế giới như David De Gea hay Manuel Neuer bằng cách ghép tên khá hài hước. Sau đó, dù phải nhận bàn thua trên chấm 11m, Tấn Trường vẫn vững vàng. ĐT Việt Nam có những sự thay đổi người kịp thời và có được bàn vươn lên dẫn trước 2-1 nhờ công của Quế Ngọc Hải.";
const link =
  "cong-dong-mang-phat-cuong-voi-man-trinh-dien-dinh-cao-cua-manuel-david-de-tan-truong";
const tagparam = [
  "viet-nam",
  "viet-nam-vs-malaysia",
  "viet-nam-dau-malaysia",
  "bui-tan-truong",
  "tan-truong",
  "thu-mon-tan-truong",
  "vong-loai-world-cup-2022",
  "world-cup-2022",
  "tan-truong-cuu-thua",
  "tuyen-viet-nam-tham-du-vong-loai-world-cup-2022",
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

export default function page_20210614092946() {
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
                      2 pha cứu thua ấn tượng của Tấn Trường trước ĐT Malaysia
                    </p>
                    <p>
                      Trong lần thứ 2 được HLV Park Hang-seo lựa chọn bắt chính,
                      Tấn Trường đã không khiến vị chiến lược gia người Hàn Quốc
                      thất vọng. Trong hiệp một, Tấn Trường liên tiếp có những
                      pha bay người đẹp mắt. Đặc biệt là tình huống đẩy bóng sau
                      pha đánh đầu cận thành của Muhammad Ahmad ở phút 38.
                    </p>
                    <p>
                      Ngay sau đó, trên mạng xã hội, các CĐV Việt Nam đã so sánh
                      Tấn Trường với những thủ môn nổi tiếng thế giới như David
                      De Gea hay Manuel Neuer bằng cách ghép tên khá hài hước.
                      Sau đó, dù phải nhận bàn thua trên chấm 11m, Tấn Trường
                      vẫn vững vàng. ĐT Việt Nam có những sự thay đổi người kịp
                      thời và có được bàn vươn lên dẫn trước 2-1 nhờ công của
                      Quế Ngọc Hải.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/12/photo-1-1623437890849206762956.png"
                      alt="Viet Nam, Viet Nam Vs Malaysia, Viet Nam Dau Malaysia, Bui Tan Truong, Tan Truong, Thu Mon Tan Truong, Vong Loai World Cup 2022, World Cup 2022, Tan Truong Cuu Thua, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/12/photo-1-1623437891814894335729.png"
                      alt="Viet Nam, Viet Nam Vs Malaysia, Viet Nam Dau Malaysia, Bui Tan Truong, Tan Truong, Thu Mon Tan Truong, Vong Loai World Cup 2022, World Cup 2022, Tan Truong Cuu Thua, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/12/photo-2-16234378923321923498185-16234380233301870923911.png"
                      alt="Viet Nam, Viet Nam Vs Malaysia, Viet Nam Dau Malaysia, Bui Tan Truong, Tan Truong, Thu Mon Tan Truong, Vong Loai World Cup 2022, World Cup 2022, Tan Truong Cuu Thua, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/12/photo-3-16234378918402130335590.png"
                      alt="Viet Nam, Viet Nam Vs Malaysia, Viet Nam Dau Malaysia, Bui Tan Truong, Tan Truong, Thu Mon Tan Truong, Vong Loai World Cup 2022, World Cup 2022, Tan Truong Cuu Thua, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/12/photo-4-1623437892873511100096.png"
                      alt="Viet Nam, Viet Nam Vs Malaysia, Viet Nam Dau Malaysia, Bui Tan Truong, Tan Truong, Thu Mon Tan Truong, Vong Loai World Cup 2022, World Cup 2022, Tan Truong Cuu Thua, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, "
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
