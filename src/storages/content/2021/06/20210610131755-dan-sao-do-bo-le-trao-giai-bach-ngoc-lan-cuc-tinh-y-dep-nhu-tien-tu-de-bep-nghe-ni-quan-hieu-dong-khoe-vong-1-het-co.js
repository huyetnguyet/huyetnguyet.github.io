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
"timestamp": '10/06/2021 01:17 PM',
"title": 'Dàn sao đổ bộ lễ trao giải Bạch Ngọc Lan: Cúc Tịnh Y đẹp như tiên tử, đè bẹp Nghê Ni - Quan Hiểu Đồng khoe vòng 1 hết cỡ',
"description": 'Sự kiện Bạch Ngọc Lan tổ chức ngày 10/6 quy tụ dàn sao cực hot như Nghê Ni, Cúc Tịnh Y, Quan Hiểu Đồng, Nhậm Mẫn,...',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-1623318837570830234296.jpg',
"alt": 'Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, ',
"category": 'photos',
"date": '10/06/2021',
"time": '01:17 PM',
"link": '/dan-sao-do-bo-le-trao-giai-bach-ngoc-lan-cuc-tinh-y-dep-nhu-tien-tu-de-bep-nghe-ni-quan-hieu-dong-khoe-vong-1-het-co',
"zcomponent": 'page_20210610131755',
"filepath": './20210610131755-dan-sao-do-bo-le-trao-giai-bach-ngoc-lan-cuc-tinh-y-dep-nhu-tien-tu-de-bep-nghe-ni-quan-hieu-dong-khoe-vong-1-het-co.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "photos";
const categoryLink = "/photos";
const title =
  "Dàn sao đổ bộ lễ trao giải Bạch Ngọc Lan: Cúc Tịnh Y đẹp như tiên tử, đè bẹp Nghê Ni - Quan Hiểu Đồng khoe vòng 1 hết cỡ";
const author = "NHÃ AN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "10/06/2021 01:17 PM";
const description =
  "Sự kiện Bạch Ngọc Lan tổ chức ngày 10/6 quy tụ dàn sao cực hot như Nghê Ni, Cúc Tịnh Y, Quan Hiểu Đồng, Nhậm Mẫn,...";
const link =
  "dan-sao-do-bo-le-trao-giai-bach-ngoc-lan-cuc-tinh-y-dep-nhu-tien-tu-de-bep-nghe-ni-quan-hieu-dong-khoe-vong-1-het-co";
const tagparam = [
  "cuc-tinh-y",
  "nghe-ni",
  "nham-man",
  "quan-hieu-dong",
  "tran-triet-vien",
  "sao-hoa-ngu",
  "my-nhan-hoa-ngu",
  "ton-thien",
  "dam-tung-van",
  "tran-ngoc-ky",
  "dong-tu-kien",
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

export default function page_20210610131755() {
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
                      Chiều tối ngày 10/6, sự kiện lễ trao giải Bạch Ngọc Lan
                      lần thứ 27 chính thức được diễn ra tại thành phố Thượng
                      Hải. Trước giờ G, ekip của dàn mỹ nhân Hoa ngữ đã tung
                      loạt ảnh studio chia sẻ tạo hình, đồng thời khiến dân tình
                      "ngộp thở" bởi hình ảnh cực kỳ lung linh và mãn nhãn.
                    </p>
                    <p>
                      Nghê Ni chắc chắn là một trong những mỹ nhân nổi bật nhất
                      tại sự kiện khi cô nàng diện đầm xanh khoe bờ vai thon
                      cùng vòng 1 gợi cảm. Quan Hiểu Đồng thậm chí "chơi trội"
                      với 2 tạo hình khoe body hết cỡ, tuy nhiên dường như người
                      chiếm spotlight nhất bởi hình ảnh tựa tiên tử lại là Cúc
                      Tịnh Y.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233189051562057953627.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-1623318837570830234296.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233254357351970438369.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-1623319091122442369962.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233264809971384359511.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-1623319107920516356836.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233191976681609344265.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233191237781402843463.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233288715471946746108.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-1623329201283336087710.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233195349551243173065.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-1623319134037696239551.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233263945092049550280.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233264035431804448032.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233286406181077388609.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-1623328686433951564056.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233286810702030875421.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-1623325719739585696064.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-162332573593226949207.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233189655021725154572.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-1623318985326665972261.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-1623318976059680269185.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233288258871608123048.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233261957651556344989.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233254729671115318887.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233257917561210299125.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-162332582622652242697.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233258624141223856104.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233287758071542938840.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233287857502005601045.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/10/photo-1-16233287857502005601045.jpg"
                      alt="Cuc Tinh Y, Nghe Ni, Nham Man, Quan Hieu Dong, Tran Triet Vien, Sao Hoa Ngu, My Nhan Hoa Ngu, Ton Thien, Dam Tung Van, Tran Ngoc Ky, Dong Tu Kien, "
                      note=""
                    />
                    <p>Nguồn: Weibo</p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
