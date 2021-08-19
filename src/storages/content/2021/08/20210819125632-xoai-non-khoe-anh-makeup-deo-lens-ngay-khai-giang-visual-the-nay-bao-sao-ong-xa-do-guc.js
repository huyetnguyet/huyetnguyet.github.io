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
"timestamp": '19/08/2021 12:56 PM',
"title": 'Xoài Non khoe ảnh makeup đeo lens ngày khai giảng, visual thế này bảo sao ông xã đổ gục!',
"description": 'Hóa ra lối makeup "ngựa ngựa" này là vũ khí khiến visual Xoài Non thăng hạng!',
"src": 'https://kenh14cdn.com/2020/9/21/cute-16006642926101699460513.png',
"alt": 'Xoài non,Makeup,Trang điểm,sao makeup,showbiz Việt,sao Việt,streamer,',
"category": 'stars',
"date": '19/08/2021',
"time": '12:56 PM',
"link": '/xoai-non-khoe-anh-makeup-deo-lens-ngay-khai-giang-visual-the-nay-bao-sao-ong-xa-do-guc',
"zcomponent": 'page_20210819125632',
"filepath": './20210819125632-xoai-non-khoe-anh-makeup-deo-lens-ngay-khai-giang-visual-the-nay-bao-sao-ong-xa-do-guc.js'
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
  "Xoài Non khoe ảnh makeup đeo lens ngày khai giảng, visual thế này bảo sao ông xã đổ gục!";
const author = "TUYẾT NGÂY THER,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "19/08/2021 12:56 PM";
const description =
  'Hóa ra lối makeup "ngựa ngựa" này là vũ khí khiến visual Xoài Non thăng hạng!';
const link =
  "xoai-non-khoe-anh-makeup-deo-lens-ngay-khai-giang-visual-the-nay-bao-sao-ong-xa-do-guc";
const tagparam = [
  "Xoài non",
  "Makeup",
  "Trang điểm",
  "sao makeup",
  "showbiz Việt",
  "sao Việt",
  "streamer",
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

export default function page_20210819125632() {
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
                      Hóa ra lối <strong>makeup</strong> "ngựa ngựa" này là vũ
                      khí khiến visual <strong>Xoài Non</strong> thăng hạng!
                    </p>
                    <p>
                      Không chỉ được biết tới bởi chiếc váy cưới 28 tỷ VNĐ từng
                      gây sốt năm nào, <strong>Xoài Non</strong> còn được yêu
                      thích bởi nhan sắc có thứ hạng trong làng hot girl xứ
                      Việt. Chẳng cần 1 pha dậy thì thành công, nhan sắc ấy đã
                      nổi bật ngay từ khi nàng còn ngồi trên ghế nhà trường.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/tram-tro-truoc-nhan-sac-chi-dau-17-tuoi-cua-diep-lam-anh-hinh-4-1629124433699553367109.jpeg"
                      alt="7, Xoài non,Makeup,Trang điểm,sao makeup,showbiz Việt,sao Việt,streamer,"
                      note=""
                    />
                    <p>
                      Và như để chứng minh nhận định trên đúng không trượt chút
                      nào, <strong>Xoài Non</strong> đã khoe lại tấm ảnh
                      "throwback" thời nữ sinh trong sáng. Kẻ lông mày ngang,
                      chuốt mascara vừa phải và đeo lens không viền, Xoài Non
                      nhấn vào tất cả những chi tiết "ăn tiền" trên gương mặt
                      bằng cách <strong>trang điểm</strong> đơn giản. Gọi đây là
                      kiểu <strong>makeup</strong> "less is more" (ít mà ăn
                      điểm) quả không sai!
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/base64-16291238059951604267418.png"
                      alt="1, Xoài non,Makeup,Trang điểm,sao makeup,showbiz Việt,sao Việt,streamer,"
                      note="Xoài Non ở thời điểm hiện tại dẫu trưởng thành hơn nhưng vẫn trung thành với phong cách hiện đại, gợi cảm và nữ tính, không mạo hiểm phá cách"
                    />
                    <p>
                      Sở hữu nét châu Âu nhưng cô nàng không hướng tới phong
                      cách <strong>makeup</strong> grunge theo tông trầm, ngược
                      lại <strong>Xoài Non</strong> ưa chuộng cách{" "}
                      <strong>trang điểm</strong> tươi sáng với phấn má và son
                      đỏ tươi
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Bước ra từ ảnh cưới hay ảnh đời thường, nàng hot girl này
                      vẫn trung thành với phong cách làm đẹp nữ tính rất được
                      lòng cộng đồng mạng
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/tram-tro-truoc-nhan-sac-chi-dau-17-tuoi-cua-diep-lam-anh-hinh-8-16291244337051378837021.jpeg"
                      alt="2, Xoài non,Makeup,Trang điểm,sao makeup,showbiz Việt,sao Việt,streamer,"
                      note="Khéo tay trang điểm thế nên mới có lúc nàng khiến người ta ngạc nhiên những lúc không makeup. Đúng là không đùa được với kỹ nghệ hoạ mặt của con gái!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/tram-tro-truoc-nhan-sac-chi-dau-17-tuoi-cua-diep-lam-anh-hinh-6-16291242929181600059655.jpeg"
                      alt="4, Xoài non,Makeup,Trang điểm,sao makeup,showbiz Việt,sao Việt,streamer,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/tram-tro-truoc-nhan-sac-chi-dau-17-tuoi-cua-diep-lam-anh-hinh-5-16291242928941609864975.jpeg"
                      alt="5, Xoài non,Makeup,Trang điểm,sao makeup,showbiz Việt,sao Việt,streamer,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/tram-tro-truoc-nhan-sac-chi-dau-17-tuoi-cua-diep-lam-anh-hinh-7-1629124433685388130248.jpeg"
                      alt="6, Xoài non,Makeup,Trang điểm,sao makeup,showbiz Việt,sao Việt,streamer,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/untitled-1-16053206954361325576409-16291242929341464163171.jpeg"
                      alt="12, Xoài non,Makeup,Trang điểm,sao makeup,showbiz Việt,sao Việt,streamer,"
                      note=""
                    />
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
