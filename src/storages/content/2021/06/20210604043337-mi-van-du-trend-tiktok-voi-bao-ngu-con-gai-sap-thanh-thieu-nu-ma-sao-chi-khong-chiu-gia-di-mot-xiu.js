import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 <ContentItem title="Mi Vân 'đu' trend TikTok với Bào Ngư: Con gái sắp thành thiếu nữ mà sao chị không chịu già đi một xíu?"
content="Xem clip thì trông rõ chuẩn 2 chị em chứ 2 mẹ con gì đâu!" 
src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/15/12974030113181736618716562919128715140970729n-1615789595911379304573.jpg" 
alt="Mi Van, Hot Girl, Hot Girl Doi Dau, Con Gai Mi Van, Chi Dep, " 
category="images" 
time="04/06/2021 04:33 PM" 
link="/mi-van-du-trend-tiktok-voi-bao-ngu-con-gai-sap-thanh-thieu-nu-ma-sao-chi-khong-chiu-gia-di-mot-xiu"/>

{title="Mi Vân 'đu' trend TikTok với Bào Ngư: Con gái sắp thành thiếu nữ mà sao chị không chịu già đi một xíu?",
content="Xem clip thì trông rõ chuẩn 2 chị em chứ 2 mẹ con gì đâu!" ,
src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/15/12974030113181736618716562919128715140970729n-1615789595911379304573.jpg" ,
alt="Mi Van, Hot Girl, Hot Girl Doi Dau, Con Gai Mi Van, Chi Dep, " ,
category="images" ,
time="04/06/2021 04:33 PM" ,
link="/mi-van-du-trend-tiktok-voi-bao-ngu-con-gai-sap-thanh-thieu-nu-ma-sao-chi-khong-chiu-gia-di-mot-xiu",component="page_20210604043337",
filepath="../storages/content/20210604043337-mi-van-du-trend-tiktok-voi-bao-ngu-con-gai-sap-thanh-thieu-nu-ma-sao-chi-khong-chiu-gia-di-mot-xiu.js"},

Mi Vân 'đu' trend TikTok với Bào Ngư: Con gái sắp thành thiếu nữ mà sao chị không chịu già đi một xíu?
Xem clip thì trông rõ chuẩn 2 chị em chứ 2 mẹ con gì đâu!
https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/15/12974030113181736618716562919128715140970729n-1615789595911379304573.jpg
Mi Van, Hot Girl, Hot Girl Doi Dau, Con Gai Mi Van, Chi Dep, 
images
04/06/2021
04:33 PM
/mi-van-du-trend-tiktok-voi-bao-ngu-con-gai-sap-thanh-thieu-nu-ma-sao-chi-khong-chiu-gia-di-mot-xiu
page_20210604043337
../storages/content/20210604043337-mi-van-du-trend-tiktok-voi-bao-ngu-con-gai-sap-thanh-thieu-nu-ma-sao-chi-khong-chiu-gia-di-mot-xiu.js




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
  "Mi Vân 'đu' trend TikTok với Bào Ngư: Con gái sắp thành thiếu nữ mà sao chị không chịu già đi một xíu?";
const author = "M416,";
const source = "Pháp luật & Bạn đọc";
const date = "04/06/2021";
const time = "04:33 PM";
const description = "Xem clip thì trông rõ chuẩn 2 chị em chứ 2 mẹ con gì đâu!";
const link =
  "mi-van-du-trend-tiktok-voi-bao-ngu-con-gai-sap-thanh-thieu-nu-ma-sao-chi-khong-chiu-gia-di-mot-xiu";
const tagparam = [
  "mi-van",
  "hot-girl",
  "hot-girl-doi-dau",
  "con-gai-mi-van",
  "chi-dep",
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

export default function page_20210604043337() {
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
              >
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>
                    Mi Vân là tượng đài nhan sắc của giới hot girl Hà thành thì
                    ai cũng rõ rồi. Đến hiện tại, ngay cả khi đã 33 tuổi và trở
                    thành mẹ 2 con, vẻ đẹp không tuổi của cô vẫn khiến dân tình
                    điêu đứng. Thậm chí nếu nói Mi Vân chẳng khác gì hồi mới
                    ngoài đôi mươi cũng chẳng mấy người phản đối.
                  </p>

                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/15/12974030113181736618716562919128715140970729n-1615789595911379304573.jpg"
                    alt="Mi Van, Hot Girl, Hot Girl Doi Dau, Con Gai Mi Van, Chi Dep, "
                    note=""
                  />

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
