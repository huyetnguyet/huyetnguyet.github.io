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
"timestamp": '28/08/2021 08:35 AM',
"title": 'Giữa nghi vấn "toang" với đại gia Đức Huy, gái đẹp 2k2 đăng ảnh sexy tột bậc nhưng netizen chỉ chú ý một điểm lạ',
"description": 'Phải chăng đây chính là điểm khiến Cẩm Đan phải đăng đi đăng lại đến 2 lần dù chỉ có một bức ảnh?',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/22/ncamdan1932881402576444861371641449628682681795234n-16296462880161937188610.jpg',
"alt": 'đại gia Đức Huy,cẩm đan,hẹn hò,tình tin đồn,gái đẹp,chỉnh ảnh,Photoshop,',
"category": 'images',
"date": '28/08/2021',
"time": '08:35 AM',
"link": '/giua-nghi-van-toang-voi-dai-gia-duc-huy-gai-dep-2k2-dang-anh-sexy-tot-bac-nhung-netizen-chi-chu-y-mot-diem-la',
"zcomponent": 'page_20210828083519',
"filepath": './20210828083519-giua-nghi-van-toang-voi-dai-gia-duc-huy-gai-dep-2k2-dang-anh-sexy-tot-bac-nhung-netizen-chi-chu-y-mot-diem-la.js'
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
  'Giữa nghi vấn "toang" với đại gia Đức Huy, gái đẹp 2k2 đăng ảnh sexy tột bậc nhưng netizen chỉ chú ý một điểm lạ';
const author = "SA,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "28/08/2021 08:35 AM";
const description =
  "Phải chăng đây chính là điểm khiến Cẩm Đan phải đăng đi đăng lại đến 2 lần dù chỉ có một bức ảnh?";
const link =
  "giua-nghi-van-toang-voi-dai-gia-duc-huy-gai-dep-2k2-dang-anh-sexy-tot-bac-nhung-netizen-chi-chu-y-mot-diem-la";
const tagparam = [
  "đại gia Đức Huy",
  "cẩm đan",
  "hẹn hò",
  "tình tin đồn",
  "gái đẹp",
  "chỉnh ảnh",
  "Photoshop",
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

export default function page_20210828083519() {
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
                      Phải chăng đây chính là điểm khiến{" "}
                      <strong>Cẩm Đan</strong> phải đăng đi đăng lại đến 2 lần
                      dù chỉ có một bức ảnh?
                    </p>
                    <p>
                      Để nói về khoản bóp tí eo, kéo tí chân của hội gái xinh
                      thì chắc chắn phải nhắc đến <strong>Cẩm Đan</strong> -
                      người đẹp Hoa hậu Việt Nam 2020 kiêm bồ tin đồn của{" "}
                      <strong>đại gia Đức Huy</strong>. Cô nàng nhiều lần bị
                      netizen soi chuyện bóp méo chỗ này chỗ kia trong những bức
                      hình sống ảo.
                    </p>
                    <p>
                      Mới nhất, giữa nghi vấn đã toang với đại gia Sài thành,{" "}
                      <strong>gái đẹp</strong> lại đăng một bức ảnh sexy "hết
                      nước chấm". Chỉ với hình ảnh này, <strong>Cẩm Đan</strong>{" "}
                      khoe một mạch từ vòng 1 đầy đặn đến vòng eo con kiến và
                      đôi chân dài miên man.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/img6006-16296433857201223548345.png"
                      alt="1, đại gia Đức Huy,cẩm đan,hẹn hò,tình tin đồn,gái đẹp,chỉnh ảnh,Photoshop,"
                      note="Bức ảnh sexy ngút ngàn của Cẩm Đan"
                    />
                    <p>
                      Tuy nhiên, netizen nhanh chóng đã phát hiện ra một động
                      thái lạ. Đó chính là <strong>Cẩm Đan</strong> vừa đăng ảnh
                      xong đã vội xoá đăng lại. Điều gì đã khiến cô nàng có hành
                      động này nhỉ?
                    </p>
                    <p>
                      Hoá ra trong lần đăng đầu tiên, đường viền ở cánh cửa ở
                      phần eo của <strong>Cẩm Đan</strong> bị cong quá đà, ai
                      nhìn vào cũng biết đã bị tác động nhẹ. Có lẽ vì vậy mà cô
                      nàng đã nhanh tay xoá đi và đăng bức ảnh lần thứ 2 với
                      đường viền đỡ cong hơn.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/3-1629645612922234633482.png"
                      alt="2, đại gia Đức Huy,cẩm đan,hẹn hò,tình tin đồn,gái đẹp,chỉnh ảnh,Photoshop,"
                      note="Một bức ảnh nhưng Cẩm Đan đăng đến 2 lần"
                    />
                    <p>
                      Thật ra ai mà chẳng muốn trông mình đẹp hơn nên chuyện{" "}
                      <strong>Cẩm Đan</strong> có can thiệp một xíu qua các ứng
                      dụng <strong>chỉnh ảnh</strong> cũng là bình thường. Tuy
                      nhiên với netizen thì Cẩm Đan không cần chỉnh hay bóp gì
                      cả bởi lẽ trong những bức ảnh khác, trông cô nàng đã xinh
                      và nuột lắm rồi nhé!
                    </p>
                    <p>Vóc dáng nuột nà của Cẩm Đan</p>
                    <p>Ảnh: IG nhân vật</p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/22/ncamdan1932881402576444861371641449628682681795234n-16296462880161937188610.jpg"
                      alt="3, đại gia Đức Huy,cẩm đan,hẹn hò,tình tin đồn,gái đẹp,chỉnh ảnh,Photoshop,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/22/ncamdan1958799987585743014557056169615325228011738n-1629646288148691582150.jpg"
                      alt="4, đại gia Đức Huy,cẩm đan,hẹn hò,tình tin đồn,gái đẹp,chỉnh ảnh,Photoshop,"
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
