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
"timestamp": '29/06/2021 09:43 PM',
"title": 'Thất vọng vì thua Đức tan nát, Ronaldo bèn cởi trần khiến dân tình náo loạn: 6 múi sầu riêng đều tăm tắp nhờ nói không với Coca',
"description": 'Ronaldo show body cơ bắp cho dân tình chiêm ngưỡng.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-1-1624146308081764237574.jpeg',
"alt": 'ronaldo,Bồ Đào Nha,đức,Euro 2020,tiêu điểm euro,Đồng hành cùng Euro,tin nóng Euro,',
"category": 'news',
"date": '29/06/2021',
"time": '09:43 PM',
"link": '/that-vong-vi-thua-duc-tan-nat-ronaldo-ben-coi-tran-khien-dan-tinh-nao-loan-6-mui-sau-rieng-deu-tam-tap',
"zcomponent": 'page_20210629214330',
"filepath": './20210629214330-that-vong-vi-thua-duc-tan-nat-ronaldo-ben-coi-tran-khien-dan-tinh-nao-loan-6-mui-sau-rieng-deu-tam-tap.js'
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
  "Thất vọng vì thua Đức tan nát, Ronaldo bèn cởi trần khiến dân tình náo loạn: 6 múi sầu riêng đều tăm tắp nhờ nói không với Coca";
const author = "HOÀNG ANH,";
const source = "Trí thức trẻ";
const timestamp = "29/06/2021 09:43 PM";
const description = "Ronaldo show body cơ bắp cho dân tình chiêm ngưỡng.";
const link =
  "that-vong-vi-thua-duc-tan-nat-ronaldo-ben-coi-tran-khien-dan-tinh-nao-loan-6-mui-sau-rieng-deu-tam-tap";
const tagparam = [
  "ronaldo",
  "Bồ Đào Nha",
  "đức",
  "Euro 2020",
  "tiêu điểm euro",
  "Đồng hành cùng Euro",
  "tin nóng Euro",
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

export default function page_20210629214330() {
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
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-1-1624146306902634929638.jpeg"
                    alt="6, ronaldo,Bồ Đào Nha,đức,Euro 2020,tiêu điểm euro,Đồng hành cùng Euro,tin nóng Euro,"
                    note="Mặt nghiêng chứng minh điều đó, cơ lưng xô hiện lên rõ nét"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/21/2-16242679673902085424873.jpeg"
                    alt="7, ronaldo,Bồ Đào Nha,đức,Euro 2020,tiêu điểm euro,Đồng hành cùng Euro,tin nóng Euro,"
                    note="Thứ tự ưu tiên của Ronaldo: ĐT Bồ Đào Nha. Nước lọc. Coca"
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    <strong>Ronaldo</strong> ghi bàn mở tỷ số, những tưởng{" "}
                    <strong>Bồ Đào Nha</strong> sẽ giành chiến thắng trước{" "}
                    <strong>Đức</strong>. Nhưng không, đó chỉ là khởi đầu cho ác
                    mộng. Hai cầu thủ Bồ Đào Nha liên tiếp phản lưới nhà giúp
                    Đức dẫn 2-1, sau đó "Cỗ xe tăng" ghi tiếp 2 bàn nữa để dẫn
                    4-1. Về cuối trận, BĐN chỉ gỡ thêm được 1 bàn. Chung cuộc,
                    Bồ Đào Nha thua 2-4
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-2-16241463085541705053764.jpeg"
                    alt="8, ronaldo,Bồ Đào Nha,đức,Euro 2020,tiêu điểm euro,Đồng hành cùng Euro,tin nóng Euro,"
                    note="Ngoài pha lập công, Ronaldo còn kiến tạo đáp lễ cho Jota ghi bàn"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-3-162414630905721651254.jpeg"
                    alt="9, ronaldo,Bồ Đào Nha,đức,Euro 2020,tiêu điểm euro,Đồng hành cùng Euro,tin nóng Euro,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-4-16241463081211300134862.jpeg"
                    alt="10, ronaldo,Bồ Đào Nha,đức,Euro 2020,tiêu điểm euro,Đồng hành cùng Euro,tin nóng Euro,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/3-1624147653935959978905.jpeg"
                    alt="11, ronaldo,Bồ Đào Nha,đức,Euro 2020,tiêu điểm euro,Đồng hành cùng Euro,tin nóng Euro,"
                    note=""
                  />

                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-1-1624146308081764237574.jpeg"
                    alt="12, ronaldo,Bồ Đào Nha,đức,Euro 2020,tiêu điểm euro,Đồng hành cùng Euro,tin nóng Euro,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-5-1624146308609844623651.jpeg"
                    alt="13, ronaldo,Bồ Đào Nha,đức,Euro 2020,tiêu điểm euro,Đồng hành cùng Euro,tin nóng Euro,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/21/1-1624267915518197825633.jpeg"
                    alt="14, ronaldo,Bồ Đào Nha,đức,Euro 2020,tiêu điểm euro,Đồng hành cùng Euro,tin nóng Euro,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-6-16241463081401918094675.jpeg"
                    alt="15, ronaldo,Bồ Đào Nha,đức,Euro 2020,tiêu điểm euro,Đồng hành cùng Euro,tin nóng Euro,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-7-1624146308638166543337.jpeg"
                    alt="16, ronaldo,Bồ Đào Nha,đức,Euro 2020,tiêu điểm euro,Đồng hành cùng Euro,tin nóng Euro,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-8-16241463086721190372158.png"
                    alt="17, ronaldo,Bồ Đào Nha,đức,Euro 2020,tiêu điểm euro,Đồng hành cùng Euro,tin nóng Euro,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/21/1-16242138510402121902113.jpeg"
                    alt="18, ronaldo,Bồ Đào Nha,đức,Euro 2020,tiêu điểm euro,Đồng hành cùng Euro,tin nóng Euro,"
                    note=""
                  />
                  <p>Ảnh: Getty</p>
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
