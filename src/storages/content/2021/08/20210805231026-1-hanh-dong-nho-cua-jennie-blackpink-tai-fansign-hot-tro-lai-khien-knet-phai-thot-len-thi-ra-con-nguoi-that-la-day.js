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
"timestamp": '05/08/2021 11:10 PM',
"title": '1 hành động nhỏ của Jennie (BLACKPINK) tại fansign hot trở lại, khiến Knet phải thốt lên: "Thì ra con người thật là đây?"',
"description": 'Hành động này khiến fan càng thêm "u mê" Jennie (BLACKPINK) không lối thoát.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/5/91ccd292-c32a-4c07-ae06-03b557043b8c-1628158240140106028803.gif',
"alt": 'jennie,Jennie (BlackPink),Blackpink,sao Hàn,idol Kpop,fansign,',
"category": 'stars',
"date": '05/08/2021',
"time": '11:10 PM',
"link": '/1-hanh-dong-nho-cua-jennie-blackpink-tai-fansign-hot-tro-lai-khien-knet-phai-thot-len-thi-ra-con-nguoi-that-la-day',
"zcomponent": 'page_20210805231026',
"filepath": './20210805231026-1-hanh-dong-nho-cua-jennie-blackpink-tai-fansign-hot-tro-lai-khien-knet-phai-thot-len-thi-ra-con-nguoi-that-la-day.js'
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
  '1 hành động nhỏ của Jennie (BLACKPINK) tại fansign hot trở lại, khiến Knet phải thốt lên: "Thì ra con người thật là đây?"';
const author = "HỒNG HẢI,";
const source = "Trí Thức Trẻ";
const timestamp = "05/08/2021 11:10 PM";
const description =
  'Hành động này khiến fan càng thêm "u mê" Jennie (BLACKPINK) không lối thoát.';
const link =
  "1-hanh-dong-nho-cua-jennie-blackpink-tai-fansign-hot-tro-lai-khien-knet-phai-thot-len-thi-ra-con-nguoi-that-la-day";
const tagparam = [
  "jennie",
  "Jennie (BlackPink)",
  "Blackpink",
  "sao Hàn",
  "idol Kpop",
  "fansign",
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

export default function page_20210805231026() {
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
                      Lý do khiến fan "đổ" <strong>Jennie</strong> (
                      <strong>BLACKPINK</strong>) rần rần không chỉ có xinh đẹp,
                      tài năng, mà còn vì nữ idol luôn trân trọng và đối xử tốt
                      với fan. Mới đây nhất, netizen đã "đào" lại 1 khoảnh khắc
                      cực đáng yêu của Jennie tại <strong>fansign</strong>. Khi
                      người hâm mộ trước mặt có vẻ nóng, "công chúa YG" đã quay
                      chiếc quạt của mình về phía fan để giúp bạn fan được mát
                      hơn. Đáng nói, cô nàng làm hành động này rất nhanh như
                      phản xạ tự nhiên hay cử chỉ quen thuộc thường ngày.
                    </p>
                    <p>
                      Hành động của <strong>Jennie</strong> dù nhỏ nhưng đã
                      nhanh chóng trở nên viral trên các mạng xã hội. Cử chỉ ân
                      cần, ngọt ngào của nữ idol sinh năm 1996 khiến fan đều
                      "rụng tim" vì độ đáng yêu và tính cách tốt bụng của
                      Jennie. Không chỉ có vậy, hóa ra Jennie còn có loạt khoảnh
                      khắc cực đáng yêu khác tại <strong>fansign</strong>. Cô
                      luôn tạo dáng đáng yêu trước mặt fan, và nhiều lần ngăn
                      quản lý lấy lại quà của fan quá sớm. Vì dịch bệnh COVID-19
                      diễn biến phức tạp nên giờ đây, hình thức fansign đã được
                      chuyển thành online, dân tình đều tiếc hùi hụi, không biết
                      bao giờ mới trực tiếp được xem Jennie đối xử với fan ngọt
                      ngào như thế.
                    </p>
                    <p>
                      Thấy fan có vẻ nóng, <strong>Jennie</strong> liền vừa ký
                      vừa quay quạt của mình về phía fan. Hành động này dù nhỏ
                      nhưng đã cho thấy Jennie luôn quan tâm và đối xử với fan
                      ngọt ngào đến thế nào. Knet khó tính cũng không khỏi bất
                      ngờ: "Thì ra con người thật của cô ấy là đây?", "Ngoài đời
                      tốt bụng, đáng yêu quá", "Ôi sao vừa xinh vừa tốt thế được
                      nhỉ huhu".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/5/do-guc-truoc-hanh-dong-dep-cua-jennie-trong-fansign-gan-day-fd5046260x260-1628158239828305087432.gif"
                      alt="1, jennie,Jennie (BlackPink),Blackpink,sao Hàn,idol Kpop,fansign,"
                      note="Đúng là vừa đẹp người vừa đẹp nết!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/5/91ccd292-c32a-4c07-ae06-03b557043b8c-1628158240140106028803.gif"
                      alt="2, jennie,Jennie (BlackPink),Blackpink,sao Hàn,idol Kpop,fansign,"
                      note=""
                    />
                    <RelationNewsInPage />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/5/6d23509d3d7c418c30d985960ce5d625-16281582399991208742378.gif"
                      alt="3, jennie,Jennie (BlackPink),Blackpink,sao Hàn,idol Kpop,fansign,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/5/jennie-4-1628158240055386276131.gif"
                      alt="4, jennie,Jennie (BlackPink),Blackpink,sao Hàn,idol Kpop,fansign,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/5/9859b23d39be2eff277658dd4cc74814-1628158239972759672475.gif"
                      alt="5, jennie,Jennie (BlackPink),Blackpink,sao Hàn,idol Kpop,fansign,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/5/483a63823c546349435e1aa980f1b2b7-16281582399391152376384.gif"
                      alt="6, jennie,Jennie (BlackPink),Blackpink,sao Hàn,idol Kpop,fansign,"
                      note=""
                    />
                    <p>Nguồn: Knetizen</p>{" "}
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
