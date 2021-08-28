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
"timestamp": '28/08/2021 08:40 AM',
"title": 'Cứ ngọt ngào mọi lúc thế này, có gọi Joy (Red Velvet) là "crush quốc dân" cũng chẳng sai!',
"description": 'Style của Joy ngày càng biến hoá ngọt ngào, tươi mới. Phải chăng đây là điểm then chốt khiến Crush sa vào lưới tình?',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/photo-1-16297923373071739335887.gif',
"alt": 'Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,',
"category": 'stars',
"date": '28/08/2021',
"time": '08:40 AM',
"link": '/cu-ngot-ngao-moi-luc-the-nay-co-goi-joy-red-velvet-la-crush-quoc-dan-cung-chang-sai',
"zcomponent": 'page_20210828084034',
"filepath": './20210828084034-cu-ngot-ngao-moi-luc-the-nay-co-goi-joy-red-velvet-la-crush-quoc-dan-cung-chang-sai.js'
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
  'Cứ ngọt ngào mọi lúc thế này, có gọi Joy (Red Velvet) là "crush quốc dân" cũng chẳng sai!';
const author = "CHÚ CÁ TRÊ X CHIM VÀNH KHEN,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "28/08/2021 08:40 AM";
const description =
  "Style của Joy ngày càng biến hoá ngọt ngào, tươi mới. Phải chăng đây là điểm then chốt khiến Crush sa vào lưới tình?";
const link =
  "cu-ngot-ngao-moi-luc-the-nay-co-goi-joy-red-velvet-la-crush-quoc-dan-cung-chang-sai";
const tagparam = [
  "Joy (Red Velvet)",
  "joy hẹn hò crush",
  "sao Hàn",
  "star style",
  "sao mặc đẹp",
  "tips mặc đẹp",
  "mặc đẹp như sao Hàn",
  "red velvet",
  "váy hoa",
  "váy caro",
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

export default function page_20210828084034() {
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
                      Không hổ danh là "nữ thần", Joy lúc nào cũng xuất hiện với
                      vẻ ngoài tươi mới và tràn đầy năng lượng từ sân khấu cho
                      tới đời thường. Với lợi thế áp đảo khi sở hữu làn da trắng
                      sáng và nụ cười toả nắng làm nên thương hiệu, cô nàng rất
                      biết cách mix&match tủ đồ để tạo nên visual ngọt ngào gây
                      thương nhớ. Không tin, bạn cứ thử vào Instagram của cô
                      nàng mà xem, lịm tim chứ chẳng đùa!
                    </p>
                    <p></p>

                    <p></p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/photo-1-16297923373071739335887.gif"
                      alt="1, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/photo-1-16297898831201077871719.jpg"
                      alt="2, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/-16297902616401122283421.jpg"
                      alt="3, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/photo-1-16297900783842105719095.jpg"
                      alt="4, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/-1629790976834334045280.jpg"
                      alt="5, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/photo-1-16297901935281920178463.jpg"
                      alt="6, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/photo-1-16297923637511497417163.gif"
                      alt="7, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/-1629790037975117111978.jpg"
                      alt="8, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/photo-1-16297896989621960187932.jpg"
                      alt="9, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/base64-1629791652315549959765.png"
                      alt="10, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/-1629790894809864403680.jpg"
                      alt="11, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/-16297902287862097276393.jpg"
                      alt="12, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/photo-1-16297926667302011676635.gif"
                      alt="13, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/photo-1-1629789682094608318466.jpg"
                      alt="14, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/-16297904654821342210177.jpg"
                      alt="15, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/photo-1-16297898227511264689974.png"
                      alt="16, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/photo-1-16297899921461196889095.jpg"
                      alt="17, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/photo-3-16297903801811036636829.jpg"
                      alt="18, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/24/photo-3-16297903801811036636829.jpg"
                      alt="19, Joy (Red Velvet),joy hẹn hò crush,sao Hàn,star style,sao mặc đẹp,tips mặc đẹp,mặc đẹp như sao Hàn,red velvet,váy hoa,váy caro,"
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
